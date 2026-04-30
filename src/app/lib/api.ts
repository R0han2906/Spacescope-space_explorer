const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

type RequestOptions = {
  method?: string;
  body?: unknown;
  token?: string | null;
};

export async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
    },
    credentials: "include",
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const details = Array.isArray(payload?.details)
      ? payload.details
          .map((item: { message?: string }) => item?.message)
          .filter(Boolean)
          .join(" ")
      : "";
    const message = details || payload?.message || "Request failed";
    throw new Error(message);
  }

  return payload as T;
}

export { API_BASE_URL };
