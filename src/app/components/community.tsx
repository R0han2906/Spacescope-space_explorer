import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  Heart,
  Loader2,
  MessageCircle,
  SendHorizonal,
  UserRound,
  X,
} from "lucide-react";
import { GlassCard } from "./glass-card";
import { apiRequest } from "../lib/api";
import { useAuth } from "../context/AuthContext";

type CommentAuthor = {
  userId: string;
  name: string;
  avatarUrl: string | null;
  headline: string | null;
};

type CommunityComment = {
  _id: string;
  author: CommentAuthor;
  content: string;
  createdAt: string;
};

type CommunityPost = {
  _id: string;
  author: CommentAuthor;
  content: string;
  tags: string[];
  imageUrls?: string[];
  likes: number;
  likedBy?: string[];
  commentsCount: number;
  comments?: CommunityComment[];
  createdAt: string;
};

type CommunityUserProfile = {
  id: string;
  name: string;
  avatarUrl: string | null;
  headline: string | null;
  profile: {
    bio?: string;
    location?: string;
    website?: string;
  } | null;
  community: {
    interests: string[];
    expertiseLevel: string;
    badges: string[];
    stats: {
      postsCount: number;
      likesReceived: number;
      contributions: number;
    };
  };
  recentPosts: CommunityPost[];
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
  const [profileLoading, setProfileLoading] = useState(false);
  const [commentSubmittingFor, setCommentSubmittingFor] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [newContent, setNewContent] = useState("");
  const [newTags, setNewTags] = useState("");
  const [newImageUrls, setNewImageUrls] = useState("");
  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});
  const [commentDrafts, setCommentDrafts] = useState<Record<string, string>>({});
  const [selectedProfile, setSelectedProfile] = useState<CommunityUserProfile | null>(null);

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
      const imageUrls = newImageUrls
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      await apiRequest("/api/users/community-posts", {
        method: "POST",
        token: accessToken,
        body: {
          content: newContent.trim(),
          tags,
          imageUrls,
        },
      });

      setNewContent("");
      setNewTags("");
      setNewImageUrls("");
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

  const openProfile = async (userId: string) => {
    setProfileLoading(true);
    setError(null);
    try {
      const response = await apiRequest<{ success: boolean; data: CommunityUserProfile }>(
        `/api/community/users/${userId}`,
      );
      setSelectedProfile(response.data);
    } catch (profileError) {
      setError(
        profileError instanceof Error
          ? profileError.message
          : "Failed to load user profile",
      );
    } finally {
      setProfileLoading(false);
    }
  };

  const toggleLike = async (post: CommunityPost) => {
    if (!accessToken || !user) {
      setError("Please sign in to like posts.");
      return;
    }

    const likedBy = post.likedBy || [];
    const hasLiked = likedBy.includes(user.id);
    const nextLikedBy = hasLiked
      ? likedBy.filter((item) => item !== user.id)
      : [...likedBy, user.id];

    setPosts((prev) =>
      prev.map((item) =>
        item._id === post._id
          ? {
              ...item,
              likedBy: nextLikedBy,
              likes: nextLikedBy.length,
            }
          : item,
      ),
    );

    try {
      await apiRequest(`/api/users/community-posts/${post._id}/like`, {
        method: "POST",
        token: accessToken,
      });
    } catch (likeError) {
      await fetchPosts();
      setError(likeError instanceof Error ? likeError.message : "Failed to update like");
    }
  };

  const submitComment = async (postId: string) => {
    if (!accessToken) {
      setError("Please sign in to comment.");
      return;
    }

    const draft = (commentDrafts[postId] || "").trim();
    if (!draft) return;

    setCommentSubmittingFor(postId);
    setError(null);
    try {
      await apiRequest(`/api/users/community-posts/${postId}/comments`, {
        method: "POST",
        token: accessToken,
        body: { content: draft },
      });
      setCommentDrafts((prev) => ({ ...prev, [postId]: "" }));
      setExpandedComments((prev) => ({ ...prev, [postId]: true }));
      await fetchPosts();
    } catch (commentError) {
      setError(
        commentError instanceof Error ? commentError.message : "Failed to add comment",
      );
    } finally {
      setCommentSubmittingFor(null);
    }
  };

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
          <input
            value={newImageUrls}
            onChange={(event) => setNewImageUrls(event.target.value)}
            placeholder="image URLs (comma separated, max 4)"
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
                  <button
                    className="w-11 h-11 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm"
                    onClick={() => {
                      void openProfile(post.author.userId);
                    }}
                  >
                    {post.author.avatarUrl ? (
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      post.author.name.slice(0, 1).toUpperCase()
                    )}
                  </button>
                  <div className="flex-1">
                    <button
                      className="font-semibold hover:text-indigo-300 transition-colors"
                      onClick={() => {
                        void openProfile(post.author.userId);
                      }}
                    >
                      {post.author.name}
                    </button>
                    <p className="text-xs text-white/50">{formatPostTime(post.createdAt)}</p>
                    {post.author.headline && (
                      <p className="text-xs text-indigo-300 mt-1">{post.author.headline}</p>
                    )}
                  </div>
                </div>

                <p className="text-white/85 mb-3 whitespace-pre-wrap">{post.content}</p>

                {!!post.imageUrls?.length && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {post.imageUrls.map((imageUrl) => (
                      <div key={imageUrl} className="h-48 rounded-lg overflow-hidden bg-white/5">
                        <img
                          src={imageUrl}
                          alt="Post attachment"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

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
                  <button
                    className="flex items-center gap-1 hover:text-pink-300 transition-colors"
                    onClick={() => {
                      void toggleLike(post);
                    }}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        post.likedBy?.includes(user?.id || "") ? "text-pink-300 fill-pink-300" : ""
                      }`}
                    />
                    {post.likes} likes
                  </button>
                  <button
                    className="flex items-center gap-1 hover:text-indigo-300 transition-colors"
                    onClick={() =>
                      setExpandedComments((prev) => ({
                        ...prev,
                        [post._id]: !prev[post._id],
                      }))
                    }
                  >
                    <MessageCircle className="w-4 h-4" />
                    {post.commentsCount} comments
                  </button>
                </div>

                {expandedComments[post._id] && (
                  <div className="mt-4 space-y-3">
                    <div className="space-y-2">
                      {(post.comments || []).length > 0 ? (
                        (post.comments || []).map((comment) => (
                          <div key={comment._id} className="p-3 rounded-lg bg-white/5">
                            <div className="text-xs text-white/60 mb-1">
                              {comment.author.name} • {formatPostTime(comment.createdAt)}
                            </div>
                            <p className="text-sm text-white/85 whitespace-pre-wrap">
                              {comment.content}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-white/50">No comments yet. Start the discussion.</p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <input
                        value={commentDrafts[post._id] || ""}
                        onChange={(event) =>
                          setCommentDrafts((prev) => ({
                            ...prev,
                            [post._id]: event.target.value,
                          }))
                        }
                        placeholder="Write a comment..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        disabled={commentSubmittingFor === post._id || !(commentDrafts[post._id] || "").trim()}
                        onClick={() => {
                          void submitComment(post._id);
                        }}
                        className="px-4 py-2 rounded-lg bg-indigo-500/30 hover:bg-indigo-500/40 text-indigo-200 text-sm disabled:opacity-50"
                      >
                        {commentSubmittingFor === post._id ? "Posting..." : "Comment"}
                      </button>
                    </div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
          {emptyState}
        </div>
      )}

      <AnimateProfileModal
        profile={selectedProfile}
        loading={profileLoading}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  );
}

function AnimateProfileModal({
  profile,
  loading,
  onClose,
}: {
  profile: CommunityUserProfile | null;
  loading: boolean;
  onClose: () => void;
}) {
  if (!profile && !loading) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <GlassCard className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {loading ? (
            <div className="py-14 text-center text-white/60">
              <Loader2 className="w-6 h-6 animate-spin mx-auto mb-3" />
              Loading profile...
            </div>
          ) : profile ? (
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl">
                  {profile.avatarUrl ? (
                    <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
                  ) : (
                    <UserRound className="w-7 h-7" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{profile.name}</h3>
                  {profile.headline && <p className="text-white/70">{profile.headline}</p>}
                  {profile.profile?.location && (
                    <p className="text-sm text-white/50 mt-1">{profile.profile.location}</p>
                  )}
                </div>
              </div>

              {profile.profile?.bio && (
                <p className="text-white/80 leading-relaxed">{profile.profile.bio}</p>
              )}

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-white/5 text-center">
                  <div className="text-lg font-semibold text-indigo-300">
                    {profile.community.stats.postsCount}
                  </div>
                  <div className="text-xs text-white/60">Posts</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 text-center">
                  <div className="text-lg font-semibold text-pink-300">
                    {profile.community.stats.likesReceived}
                  </div>
                  <div className="text-xs text-white/60">Likes</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 text-center">
                  <div className="text-lg font-semibold text-cyan-300 capitalize">
                    {profile.community.expertiseLevel}
                  </div>
                  <div className="text-xs text-white/60">Level</div>
                </div>
              </div>

              {!!profile.community.interests.length && (
                <div className="flex flex-wrap gap-2">
                  {profile.community.interests.slice(0, 8).map((interest) => (
                    <span key={interest} className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/70">
                      {interest}
                    </span>
                  ))}
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-2">Recent Posts</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {profile.recentPosts.length > 0 ? (
                    profile.recentPosts.map((post) => (
                      <div key={post._id} className="p-3 rounded-lg bg-white/5">
                        <p className="text-sm text-white/85 line-clamp-3">{post.content}</p>
                        <p className="text-xs text-white/50 mt-1">{formatPostTime(post.createdAt)}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-white/60">No recent posts yet.</p>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </GlassCard>
      </motion.div>
    </div>
  );
}
