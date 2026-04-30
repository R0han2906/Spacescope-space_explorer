import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Loader2, MessageCircle, SendHorizonal } from "lucide-react";
import { GlassCard } from "./glass-card";
import { apiRequest } from "../lib/api";
import { useAuth } from "../context/AuthContext";

type CommunityPost = {
  _id: string;
  author: {
    userId: string;
    name: string;
    avatarUrl: string | null;
    headline: string | null;
  };
  content: string;
  tags: string[];
  likes: number;
  commentsCount: number;
  createdAt: string;
};

const formatPostTime = (value: string) =>
  new Date(value).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

export function Community() {
  const { accessToken, user } = useAuth();
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newContent, setNewContent] = useState("");
  const [newTags, setNewTags] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await apiRequest<{ success: boolean; data: CommunityPost[] }>(
        "/api/community/posts?limit=100",
      );
      setPosts(response.data);
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : "Failed to load community feed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(fetchPosts, 8000);
    return () => clearInterval(interval);
  }, []);

  const onCreatePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!accessToken) return;

    setSubmitting(true);
    setError(null);

    try {
      const tags = newTags
        .split(",")
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean);

      await apiRequest("/api/users/community-posts", {
        method: "POST",
        token: accessToken,
        body: {
          content: newContent.trim(),
          tags,
        },
      });

      setNewContent("");
      setNewTags("");
      await fetchPosts();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to publish post");
    } finally {
      setSubmitting(false);
    }
  };

  const emptyState = useMemo(
    () =>
      !loading && posts.length === 0 ? (
        <GlassCard className="p-8 text-center">
          <p className="text-white/60">No posts yet. Be the first one to share a discovery.</p>
        </GlassCard>
      ) : null,
    [loading, posts.length],
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Community</h1>
        <p className="text-white/60 text-lg">
          Shared global feed powered by backend MongoDB data
        </p>
      </div>

      <GlassCard className="p-5">
        <form className="space-y-3" onSubmit={onCreatePost}>
          <div className="text-sm text-white/60">
            Posting as <span className="text-indigo-300">{user?.name || "Explorer"}</span>
          </div>
          <textarea
            value={newContent}
            onChange={(event) => setNewContent(event.target.value)}
            placeholder="Share your latest observation..."
            className="w-full min-h-28 bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            required
            maxLength={3000}
          />
          <input
            value={newTags}
            onChange={(event) => setNewTags(event.target.value)}
            placeholder="tags (comma separated): nebula, telescope, missions"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitting || !newContent.trim()}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 disabled:opacity-60 flex items-center gap-2"
              type="submit"
            >
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <SendHorizonal className="w-4 h-4" />}
              Publish
            </motion.button>
          </div>
        </form>
      </GlassCard>

      {error && (
        <GlassCard className="p-3 border border-red-400/30">
          <p className="text-sm text-red-300">{error}</p>
        </GlassCard>
      )}

      {loading ? (
        <GlassCard className="p-8 text-center">
          <Loader2 className="w-6 h-6 animate-spin mx-auto mb-3 text-indigo-300" />
          <p className="text-white/60">Loading community feed...</p>
        </GlassCard>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <motion.div key={post._id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              <GlassCard className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm">
                    {post.author.avatarUrl ? (
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      post.author.name.slice(0, 1).toUpperCase()
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{post.author.name}</h3>
                    <p className="text-xs text-white/50">{formatPostTime(post.createdAt)}</p>
                    {post.author.headline && (
                      <p className="text-xs text-indigo-300 mt-1">{post.author.headline}</p>
                    )}
                  </div>
                </div>

                <p className="text-white/85 mb-3 whitespace-pre-wrap">{post.content}</p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-3 border-t border-white/10 text-sm text-white/50 flex items-center gap-4">
                  <span>{post.likes} likes</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.commentsCount} comments
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
          {emptyState}
        </div>
      )}
    </div>
  );
}
