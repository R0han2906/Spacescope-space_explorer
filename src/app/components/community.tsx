// import React, { useState } from "react";
// import { GlassCard } from "./glass-card";
// import { Heart, MessageCircle, Share2, Telescope, Award, TrendingUp } from "lucide-react";
// import { motion } from "motion/react";

// interface Post {
//   id: number;
//   user: string;
//   avatar: string;
//   timestamp: string;
//   content: string;
//   image?: string;
//   likes: number;
//   comments: number;
//   tags: string[];
// }

// export function Community() {
//   const [activeFilter, setActiveFilter] = useState("trending");
  

//   const posts: Post[] = [
//     {
//       id: 1,
//       user: "Sarah Chen",
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
//       timestamp: "2 hours ago",
//       content: "Just captured the Orion Nebula with my new telescope! The colors are absolutely stunning. This is what got me into astrophotography.",
//       image: "https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMHB1cnBsZXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//       likes: 234,
//       comments: 42,
//       tags: ["astrophotography", "nebula", "telescope"],
//     },
//     {
//       id: 2,
//       user: "Alex Rivera",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
//       timestamp: "5 hours ago",
//       content: "Completed the Solar System Challenge! 🎉 Level 15 unlocked. The journey through planetary science has been incredible. Who else is on this path?",
//       likes: 189,
//       comments: 28,
//       tags: ["achievement", "learning", "solar-system"],
//     },
//     {
//       id: 3,
//       user: "Jamie Park",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
//       timestamp: "1 day ago",
//       content: "Discovered an interesting pattern in variable star observations. Has anyone else noticed similar cycles in Cepheid variables? Would love to discuss!",
//       image: "https://images.unsplash.com/photo-1660244867765-f656096619af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMGFzdHJvbm9teXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//       likes: 156,
//       comments: 34,
//       tags: ["research", "stars", "observation"],
//     },
//     {
//       id: 4,
//       user: "Morgan Lee",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
//       timestamp: "2 days ago",
//       content: "Tonight's meteor shower was spectacular! Caught 23 meteors in just one hour. Perfect conditions in the desert. Clear skies, everyone! 🌠",
//       likes: 298,
//       comments: 51,
//       tags: ["meteor-shower", "observation", "stargazing"],
//     },
//   ];

//   const filters = [
//     { id: "trending", label: "Trending", icon: TrendingUp },
//     { id: "achievements", label: "Achievements", icon: Award },
//     { id: "observations", label: "Observations", icon: Telescope },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold mb-2">Community</h1>
//         <p className="text-white/60 text-lg">Connect with fellow space enthusiasts</p>
//       </div>

//       {/* Filters */}
//       <div className="flex gap-2 mb-8 overflow-x-auto">
//         {filters.map((filter) => {
//           const Icon = filter.icon;
//           return (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`
//                 px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-all duration-300
//                 ${activeFilter === filter.id
//                   ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/50"
//                   : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
//                 }
//               `}
//             >
//               <Icon className="w-4 h-4" />
//               {filter.label}
//             </button>
//           );
//         })}
//       </div>

//       {/* Posts Feed */}
//       <div className="space-y-6">
//         {posts.map((post, index) => (
//           <motion.div
//             key={post.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <GlassCard className="p-6">
//               {/* Post Header */}
//               <div className="flex items-start gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden flex-shrink-0">
//                   <img 
//                     src={post.avatar} 
//                     alt={post.user}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-semibold">{post.user}</h3>
//                   <p className="text-sm text-white/60">{post.timestamp}</p>
//                 </div>
//               </div>

//               {/* Post Content */}
//               <p className="text-white/80 mb-4 leading-relaxed">{post.content}</p>

//               {/* Post Image */}
//               {post.image && (
//                 <div className="mb-4 rounded-lg overflow-hidden">
//                   <img
//                     src={post.image}
//                     alt="Post content"
//                     className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//               )}

//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {post.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs hover:bg-white/10 transition-colors cursor-pointer"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Post Actions */}
//               <div className="flex items-center gap-6 pt-4 border-t border-white/10">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center gap-2 text-white/60 hover:text-red-400 transition-colors"
//                 >
//                   <Heart className="w-5 h-5" />
//                   <span className="text-sm">{post.likes}</span>
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center gap-2 text-white/60 hover:text-indigo-400 transition-colors"
//                 >
//                   <MessageCircle className="w-5 h-5" />
//                   <span className="text-sm">{post.comments}</span>
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors ml-auto"
//                 >
//                   <Share2 className="w-5 h-5" />
//                 </motion.button>
//               </div>
//             </GlassCard>
//           </motion.div>
//         ))}
//       </div>

//       {/* Load More */}
//       <div className="mt-8 text-center">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="px-6 py-3 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
//         >
//           Load More Posts
//         </motion.button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { GlassCard } from "./glass-card";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { motion } from "motion/react";

interface Post {
  id: number;
  user: string;
  avatar: string;
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  tags: string[];
}

export function Community() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      timestamp: "2 hours ago",
      content: "Just captured the Orion Nebula with my new telescope! The colors are absolutely stunning. This is what got me into astrophotography.",
      image: "https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMHB1cnBsZXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 234,
      comments: 42,
      tags: ["astrophotography", "nebula", "telescope"],
    },
    {
      id: 2,
      user: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      timestamp: "5 hours ago",
      content: "Completed the Solar System Challenge! 🎉 Level 15 unlocked. The journey through planetary science has been incredible. Who else is on this path?",
      likes: 189,
      comments: 28,
      tags: ["achievement", "learning", "solar-system"],
    },
    {
      id: 3,
      user: "Jamie Park",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      timestamp: "1 day ago",
      content: "Discovered an interesting pattern in variable star observations. Has anyone else noticed similar cycles in Cepheid variables? Would love to discuss!",
      image: "https://images.unsplash.com/photo-1660244867765-f656096619af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMGFzdHJvbm9teXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 156,
      comments: 34,
      tags: ["research", "stars", "observation"],
    },
    {
      id: 4,
      user: "Morgan Lee",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      timestamp: "2 days ago",
      content: "Tonight's meteor shower was spectacular! Caught 23 meteors in just one hour. Perfect conditions in the desert. Clear skies, everyone! 🌠",
      likes: 298,
      comments: 51,
      tags: ["meteor-shower", "observation", "stargazing"],
    },
    {
      id: 5,
      user: "Dr. Emily Watson",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      timestamp: "3 days ago",
      content: "Excited to share that our team just published new findings on exoplanet atmospheres! The data from JWST is revolutionizing our understanding of distant worlds. Link in bio! 🔬🌍",
      image: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXBpdGVyJTIwcGxhbmV0fGVufDF8fHx8MTc2Nzk3NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 412,
      comments: 89,
      tags: ["exoplanets", "JWST", "research", "astronomy"],
    },
    {
      id: 6,
      user: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      timestamp: "3 days ago",
      content: "First successful deep sky imaging session with my DIY motorized mount! Saturn's rings are clearly visible. Months of work finally paying off! 🪐",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      likes: 267,
      comments: 45,
      tags: ["DIY", "saturn", "astrophotography", "telescope"],
    },
    {
      id: 7,
      user: "Luna Martinez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      timestamp: "4 days ago",
      content: "Attended the NASA JPL open house today! Got to see the Mars rover prototype up close and meet some incredible engineers. So inspired for my aerospace career path! 🚀",
      likes: 523,
      comments: 72,
      tags: ["NASA", "JPL", "Mars", "career", "inspiration"],
    },
    {
      id: 8,
      user: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      timestamp: "4 days ago",
      content: "Just finished building my backyard observatory dome! Two years of planning and construction. First light tonight with my 12-inch Dobsonian. Dreams do come true! ✨",
      image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      likes: 678,
      comments: 134,
      tags: ["observatory", "DIY", "telescope", "backyard-astronomy"],
    },
    {
      id: 9,
      user: "Aisha Patel",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      timestamp: "5 days ago",
      content: "Teaching my daughter to identify constellations tonight. Her excitement when she found Cassiopeia on her own was priceless! Passing on the love for the cosmos to the next generation. 💫",
      likes: 892,
      comments: 156,
      tags: ["family", "constellations", "stargazing", "education"],
    },
    {
      id: 10,
      user: "Prof. Robert Chen",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
      timestamp: "5 days ago",
      content: "New online course launching next month: 'Introduction to Radio Astronomy'. Free for all community members! DM me for early access. Let's explore the invisible universe together! 📡",
      likes: 345,
      comments: 67,
      tags: ["education", "radio-astronomy", "course", "learning"],
    },
    {
      id: 11,
      user: "Natalie Brooks",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
      timestamp: "6 days ago",
      content: "Captured the ISS passing over my city last night! 6-second exposure at f/2.8. The timing was perfect. Who else tracks ISS passes? 🛰️",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      likes: 445,
      comments: 78,
      tags: ["ISS", "astrophotography", "space-station", "tracking"],
    },
    {
      id: 12,
      user: "Thomas Wright",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      timestamp: "1 week ago",
      content: "Just joined a local astronomy club! First meeting was amazing - got to look through a 16-inch telescope and saw the Whirlpool Galaxy. The community here is so welcoming! 🌌",
      likes: 234,
      comments: 41,
      tags: ["astronomy-club", "community", "galaxies", "beginner"],
    },
  ]);

  // Handle like toggle
  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      // Unlike
      setLikedPosts(likedPosts.filter((id) => id !== postId));
      setPosts(
        posts.map((post) =>
          post.id === postId ? { ...post, likes: post.likes - 1 } : post
        )
      );
    } else {
      // Like
      setLikedPosts([...likedPosts, postId]);
      setPosts(
        posts.map((post) =>
          post.id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      );
    }
  };

  // Load more posts
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, posts.length));
  };

  // Get visible posts
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < posts.length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Community</h1>
        <p className="text-white/60 text-lg">
          Connect with fellow space enthusiasts
        </p>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {visiblePosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-6">
              {/* Post Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden flex-shrink-0">
                  <img
                    src={post.avatar}
                    alt={post.user}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{post.user}</h3>
                  <p className="text-sm text-white/60">{post.timestamp}</p>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-white/80 mb-4 leading-relaxed">
                {post.content}
              </p>

              {/* Post Image */}
              {post.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Post Actions */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    likedPosts.includes(post.id)
                      ? "text-red-500"
                      : "text-white/60 hover:text-red-400"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedPosts.includes(post.id) ? "fill-current" : ""
                    }`}
                  />
                  <span className="text-sm">{post.likes}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-white/60 hover:text-indigo-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors ml-auto"
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      {hasMorePosts && (
        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
            className="px-6 py-3 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Load More Posts 
          </motion.button>
        </div>
      )}

      {/* No More Posts Message */}
      {!hasMorePosts && (
        <div className="mt-8 text-center">
          <p className="text-white/40">You've reached the end! 🚀</p>
        </div>
      )}
    </div>
  );
}
