const SPACEFLIGHT_API_BASE = "https://api.spaceflightnewsapi.net/v4";
const CACHE_TTL_MS = 3 * 60 * 1000;

type SpaceflightReference = {
  id: number;
  name: string;
};

type SpaceflightContentItem = {
  id: number;
  title: string;
  url: string;
  image_url: string | null;
  news_site: string;
  summary: string;
  published_at: string;
  launches?: SpaceflightReference[];
  events?: SpaceflightReference[];
};

type SpaceflightListResponse = {
  results: SpaceflightContentItem[];
};

type CacheEntry = {
  expiresAt: number;
  value: unknown;
};

const responseCache = new Map<string, CacheEntry>();

const truncate = (value: string, maxLength: number) =>
  value.length <= maxLength ? value : `${value.slice(0, maxLength - 1)}...`;

const formatDate = (value: string) =>
  new Date(value).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

async function getWithCache<T>(cacheKey: string, url: string): Promise<T> {
  const now = Date.now();
  const cached = responseCache.get(cacheKey);
  if (cached && cached.expiresAt > now) {
    return cached.value as T;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data from Spaceflight News API");
  }

  const payload = (await response.json()) as T;
  responseCache.set(cacheKey, {
    expiresAt: now + CACHE_TTL_MS,
    value: payload,
  });
  return payload;
}

function buildListUrl(endpoint: "articles" | "blogs" | "reports", limit: number) {
  const params = new URLSearchParams({
    limit: String(limit),
    ordering: "-published_at",
  });
  return `${SPACEFLIGHT_API_BASE}/${endpoint}/?${params.toString()}`;
}

export type SpaceNewsItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  summary: string;
  link: string;
  dateLabel: string;
};

export type SpaceEventItem = {
  id: string;
  name: string;
  dateLabel: string;
  sourceTitle: string;
  sourceSite: string;
  summary: string;
  link: string;
  image: string;
  visibility: "Best" | "Good" | "Excellent";
};

export type MissionUpdateItem = {
  id: string;
  title: string;
  sourceSite: string;
  dateLabel: string;
  summary: string;
  link: string;
  image: string;
  relatedLaunches: number;
  relatedEvents: number;
};

const fallbackImage =
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";

export async function getLatestNews(limit = 6): Promise<SpaceNewsItem[]> {
  const url = buildListUrl("articles", limit);
  const payload = await getWithCache<SpaceflightListResponse>(
    `latest-news:${limit}`,
    url,
  );

  return payload.results.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.news_site || "Space News",
    image: item.image_url || fallbackImage,
    summary: truncate(item.summary || "No summary available.", 170),
    link: item.url,
    dateLabel: formatDate(item.published_at),
  }));
}

export async function getLatestSpaceEvents(limit = 5): Promise<SpaceEventItem[]> {
  // REST API does not expose a dedicated events list endpoint; derive event cards from
  // recent articles that reference an event relation.
  const url = buildListUrl("articles", 60);
  const payload = await getWithCache<SpaceflightListResponse>("latest-events:60", url);

  const visibilityByIndex: Array<SpaceEventItem["visibility"]> = [
    "Excellent",
    "Best",
    "Good",
  ];
  const eventMap = new Map<string, SpaceEventItem>();

  for (const article of payload.results) {
    for (const eventRef of article.events || []) {
      const key = String(eventRef.id);
      if (eventMap.has(key)) {
        continue;
      }

      const visibility = visibilityByIndex[eventMap.size % visibilityByIndex.length];
      eventMap.set(key, {
        id: key,
        name: eventRef.name,
        dateLabel: formatDate(article.published_at),
        sourceTitle: article.title,
        sourceSite: article.news_site,
        summary: truncate(article.summary || "No summary available.", 150),
        link: article.url,
        image: article.image_url || fallbackImage,
        visibility,
      });
      if (eventMap.size >= limit) {
        break;
      }
    }
    if (eventMap.size >= limit) {
      break;
    }
  }

  return [...eventMap.values()];
}

export async function getMissionUpdates(limit = 6): Promise<MissionUpdateItem[]> {
  const [articlesPayload, blogsPayload] = await Promise.all([
    getWithCache<SpaceflightListResponse>(
      "mission-articles:50",
      buildListUrl("articles", 50),
    ),
    getWithCache<SpaceflightListResponse>("mission-blogs:30", buildListUrl("blogs", 30)),
  ]);

  const combined = [...articlesPayload.results, ...blogsPayload.results]
    .filter((item) => (item.launches?.length || 0) > 0 || (item.events?.length || 0) > 0)
    .sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
    )
    .slice(0, limit);

  return combined.map((item, index) => ({
    id: `${item.id}-${index}`,
    title: item.title,
    sourceSite: item.news_site,
    dateLabel: formatDate(item.published_at),
    summary: truncate(item.summary || "No summary available.", 190),
    link: item.url,
    image: item.image_url || fallbackImage,
    relatedLaunches: item.launches?.length || 0,
    relatedEvents: item.events?.length || 0,
  }));
}
