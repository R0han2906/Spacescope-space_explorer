// import React from "react";
// import { GlassCard } from "./glass-card";
// import { XPRing } from "./xp-ring";
// import { Award, Trophy, Target, Calendar, Zap, Star, TrendingUp } from "lucide-react";
// import { motion } from "motion/react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// export function Profile() {
//   const stats = [
//     { label: "Current Level", value: "12", icon: Star, color: "indigo" },
//     { label: "Total XP", value: "12,847", icon: Zap, color: "yellow" },
//     { label: "Day Streak", value: "23", icon: TrendingUp, color: "green" },
//     { label: "Lessons Completed", value: "47", icon: Target, color: "purple" },
//   ];

//   const badges = [
//     { name: "First Steps", description: "Complete your first lesson", earned: true, icon: "🚀" },
//     { name: "Star Gazer", description: "Log 10 observations", earned: true, icon: "🔭" },
//     { name: "Community Builder", description: "Help 5 fellow learners", earned: true, icon: "🤝" },
//     { name: "Week Warrior", description: "7-day learning streak", earned: true, icon: "🔥" },
//     { name: "Astrophotographer", description: "Share your first photo", earned: false, icon: "📸" },
//     { name: "Cosmic Scholar", description: "Complete 100 lessons", earned: false, icon: "🎓" },
//   ];

//   const xpProgressData = [
//     { day: "Mon", xp: 120 },
//     { day: "Tue", xp: 180 },
//     { day: "Wed", xp: 240 },
//     { day: "Thu", xp: 150 },
//     { day: "Fri", xp: 300 },
//     { day: "Sat", xp: 220 },
//     { day: "Sun", xp: 280 },
//   ];

//   const recentActivity = [
//     { action: "Completed", subject: "Stellar Evolution", time: "2 hours ago", xp: 200 },
//     { action: "Started", subject: "Black Holes", time: "1 day ago", xp: 0 },
//     { action: "Earned", subject: "Week Warrior Badge", time: "3 days ago", xp: 100 },
//     { action: "Completed", subject: "Galaxies & Nebulae", time: "5 days ago", xp: 300 },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
//       {/* Profile Header */}
//       <GlassCard glow className="p-8">
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Avatar & XP Ring */}
//           <div className="relative">
//             <XPRing level={12} xp={2847} maxXp={3500} size="lg" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 -mt-1"></div>
//             </div>
//           </div>

//           {/* User Info */}
//           <div className="flex-1 text-center md:text-left">
//             <h1 className="text-3xl font-bold mb-7">Space Explorer</h1>
//             {/* <p className="text-white/60 mb-4">Joined January 2026 • 23 day streak 🔥</p> */}
//             <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//               <span className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
//                 Level 12 Astronomer
//               </span>
//               <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">
//                 Top 5% this week
//               </span>
//             </div>
//           </div>

//           {/* Quick Stats */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="text-center">
//               {/* <div className="text-3xl font-bold text-indigo-400">47</div> */}
//               {/* <div className="text-sm text-white/60">Lessons</div> */}
//             </div>
//             <div className="text-center">
//               {/* <div className="text-3xl font-bold text-purple-400">234</div> */}
//               {/* <div className="text-sm text-white/60">Likes</div> */}
//             </div>
//           </div>
//         </div>
//       </GlassCard>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;
//           const colorClasses = {
//             indigo: { bg: "bg-indigo-500/20", text: "text-indigo-400" },
//             yellow: { bg: "bg-yellow-500/20", text: "text-yellow-400" },
//             green: { bg: "bg-green-500/20", text: "text-green-400" },
//             purple: { bg: "bg-purple-500/20", text: "text-purple-400" },
//           };
//           const colors = colorClasses[stat.color as keyof typeof colorClasses];
          
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <GlassCard className="p-6 text-center">
//                 <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${colors.bg} flex items-center justify-center`}>
//                   <Icon className={`w-6 h-6 ${colors.text}`} />
//                 </div>
//                 <div className="text-2xl font-bold mb-1">{stat.value}</div>
//                 <div className="text-sm text-white/60">{stat.label}</div>
//               </GlassCard>
//             </motion.div>
//           );
//         })}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* XP Progress Chart */}
//         <div className="lg:col-span-2 space-y-4">
//           <div className="flex items-center gap-2">
//             <TrendingUp className="w-5 h-5 text-indigo-400" />
//             <h2 className="text-2xl font-semibold">Weekly Progress</h2>
//           </div>
//           <GlassCard className="p-6">
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={xpProgressData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
//                 <XAxis 
//                   dataKey="day" 
//                   stroke="rgba(255,255,255,0.5)"
//                   style={{ fontSize: '12px' }}
//                 />
//                 <YAxis 
//                   stroke="rgba(255,255,255,0.5)"
//                   style={{ fontSize: '12px' }}
//                 />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: 'rgba(15, 15, 25, 0.95)',
//                     border: '1px solid rgba(99, 102, 241, 0.3)',
//                     borderRadius: '8px',
//                     color: '#fff',
//                   }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="xp"
//                   stroke="url(#xpGradient)"
//                   strokeWidth={3}
//                   dot={{ fill: '#6366f1', r: 4 }}
//                   activeDot={{ r: 6 }}
//                 />
//                 <defs>
//                   <linearGradient id="xpGradient" x1="0" y1="0" x2="1" y2="0">
//                     <stop offset="0%" stopColor="#6366f1" />
//                     <stop offset="50%" stopColor="#8b5cf6" />
//                     <stop offset="100%" stopColor="#06b6d4" />
//                   </linearGradient>
//                 </defs>
//               </LineChart>
//             </ResponsiveContainer>
//           </GlassCard>

//           {/* Recent Activity */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-2">
//               <Calendar className="w-5 h-5 text-indigo-400" />
//               <h2 className="text-2xl font-semibold">Recent Activity</h2>
//             </div>
//             <div className="space-y-3">
//               {recentActivity.map((activity, index) => (
//                 <GlassCard key={index} className="p-4">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-semibold">
//                         {activity.action} <span className="text-indigo-400">{activity.subject}</span>
//                       </p>
//                       <p className="text-sm text-white/60 mt-1">{activity.time}</p>
//                     </div>
//                     {activity.xp > 0 && (
//                       <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
//                         +{activity.xp} XP
//                       </div>
//                     )}
//                   </div>
//                 </GlassCard>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Badges & Achievements */}
//         <div className="space-y-4">
//           <div className="flex items-center gap-2">
//             <Award className="w-5 h-5 text-indigo-400" />
//             <h2 className="text-2xl font-semibold">Badges</h2>
//           </div>
//           <div className="space-y-3">
//             {badges.map((badge, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <GlassCard className={`p-4 ${!badge.earned ? "opacity-50" : ""}`}>
//                   <div className="flex items-start gap-3">
//                     <div className={`
//                       w-12 h-12 rounded-full flex items-center justify-center text-2xl
//                       ${badge.earned 
//                         ? "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30" 
//                         : "bg-white/5"
//                       }
//                     `}>
//                       {badge.earned ? badge.icon : "🔒"}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-semibold mb-1">{badge.name}</h3>
//                       <p className="text-sm text-white/60">{badge.description}</p>
//                     </div>
//                   </div>
//                 </GlassCard>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Preferences Panel */}
//       <div className="space-y-4">
//         <h2 className="text-2xl font-semibold">Preferences</h2>
//         <GlassCard className="p-6">
//           <div className="space-y-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="font-semibold mb-1">Email Notifications</h3>
//                 <p className="text-sm text-white/60">Receive updates about your progress</p>
//               </div>
//               <button className="w-12 h-6 rounded-full bg-indigo-500 relative">
//                 <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
//               </button>
//             </div>
//             <div className="flex items-center justify-between pt-6 border-t border-white/10">
//               <div>
//                 <h3 className="font-semibold mb-1">Daily Reminders</h3>
//                 <p className="text-sm text-white/60">Get reminded to continue learning</p>
//               </div>
//               <button className="w-12 h-6 rounded-full bg-white/20 relative">
//                 <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
//               </button>
//             </div>
//           </div>
//         </GlassCard>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { GlassCard } from "./glass-card";
import { XPRing } from "./xp-ring";
import {
  Award,
  Target,
  Calendar,
  Zap,
  TrendingUp,
  CheckCircle,
  Bell,
  Mail,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getStoredProgress } from "./explore";

// Interface for lesson data
interface LessonData {
  id: number;
  title: string;
  xp: number;
}

// Interface for notification toast
interface ToastNotification {
  id: number;
  message: string;
  type: "success" | "info";
}

// All lessons data (same as explore)
const allLessons: LessonData[] = [
  { id: 1, title: "Introduction to Astronomy", xp: 100 },
  { id: 2, title: "The Solar System", xp: 150 },
  { id: 3, title: "Comets & Asteroids", xp: 200 },
  { id: 4, title: "Stellar Evolution", xp: 250 },
  { id: 5, title: "Galaxies & Nebulae", xp: 300 },
  { id: 6, title: "Black Holes", xp: 350 },
  { id: 7, title: "Cosmology", xp: 400 },
];

// Custom Toast Component
function Toast({
  notification,
  onClose,
}: {
  notification: ToastNotification;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, x: 20 }}
      className="fixed top-6 right-6 z-50"
    >
      <GlassCard className="p-4 pr-12 max-w-sm border border-green-500/30 shadow-lg shadow-green-500/10">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h4 className="font-semibold text-green-300 mb-1">
              Settings Updated
            </h4>
            <p className="text-sm text-white/70">{notification.message}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/40 hover:text-white/80 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </GlassCard>
    </motion.div>
  );
}

export function Profile() {
  // Get progress from localStorage (shared with Explore)
  const [progress, setProgress] = useState(() => getStoredProgress());
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(false);

  // Refresh progress when component mounts or when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setProgress(getStoredProgress());
    };

    // Listen for storage changes (from other tabs)
    window.addEventListener("storage", handleStorageChange);

    // Also refresh on focus (same tab updates)
    const handleFocus = () => {
      setProgress(getStoredProgress());
    };
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  // Show toast notification
  const showNotification = (message: string) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type: "success" }]);
  };

  // Remove notification
  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Handle toggle changes
  const handleEmailToggle = () => {
    const newValue = !emailNotifications;
    setEmailNotifications(newValue);
    if (newValue) {
      showNotification(
        "Email notifications have been enabled. You'll receive updates about your learning progress and achievements."
      );
    } else {
      showNotification(
        "Email notifications have been disabled. You can re-enable them anytime from your preferences."
      );
    }
  };

  const handleReminderToggle = () => {
    const newValue = !dailyReminders;
    setDailyReminders(newValue);
    if (newValue) {
      showNotification(
        "Daily reminders have been enabled. We'll send you gentle nudges to keep your learning streak alive."
      );
    } else {
      showNotification(
        "Daily reminders have been disabled. You can re-enable them anytime from your preferences."
      );
    }
  };

  // Stats based on actual progress
  const stats = [
    {
      label: "Total XP",
      value: progress.totalXP.toLocaleString(),
      icon: Zap,
      color: "yellow",
    },
    {
      label: "Lessons Completed",
      value: `${progress.completedLessons.length}`,
      icon: Target,
      color: "purple",
    },
  ];

  const badges = [
    {
      name: "First Steps",
      description: "Complete your first lesson",
      earned: progress.completedLessons.length >= 1,
      icon: "🚀",
    },
    {
      name: "Star Gazer",
      description: "Complete 3 lessons",
      earned: progress.completedLessons.length >= 3,
      icon: "🔭",
    },
    {
      name: "Knowledge Seeker",
      description: "Earn 500 XP",
      earned: progress.totalXP >= 500,
      icon: "📚",
    },
    {
      name: "Cosmic Explorer",
      description: "Complete 5 lessons",
      earned: progress.completedLessons.length >= 5,
      icon: "🌌",
    },
    {
      name: "XP Master",
      description: "Earn 1000 XP",
      earned: progress.totalXP >= 1000,
      icon: "⚡",
    },
    {
      name: "Cosmic Scholar",
      description: "Complete all 7 lessons",
      earned: progress.completedLessons.length === 7,
      icon: "🎓",
    },
  ];

  // Generate XP progress data based on completed lessons
  const generateXPData = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const completedCount = progress.completedLessons.length;

    // Distribute XP across days based on completed lessons
    return days.map((day, index) => {
      let xp = 0;
      if (index < completedCount) {
        const lessonIndex = progress.completedLessons[index];
        if (lessonIndex) {
          const lesson = allLessons.find((l) => l.id === lessonIndex);
          xp = lesson ? lesson.xp : 0;
        }
      }
      return { day, xp };
    });
  };

  const xpProgressData = generateXPData();

  // Generate recent activity based on completed lessons
  const generateRecentActivity = () => {
    const activities: {
      action: string;
      subject: string;
      time: string;
      xp: number;
    }[] = [];

    // Sort completed lessons in reverse order (most recent first)
    const sortedLessons = [...progress.completedLessons].reverse();

    sortedLessons.forEach((lessonId, index) => {
      const lesson = allLessons.find((l) => l.id === lessonId);
      if (lesson) {
        let time = "";
        if (index === 0) time = "Recently";
        else if (index === 1) time = "1 day ago";
        else if (index === 2) time = "2 days ago";
        else if (index === 3) time = "3 days ago";
        else time = `${index + 1} days ago`;

        activities.push({
          action: "Completed",
          subject: lesson.title,
          time,
          xp: lesson.xp,
        });
      }
    });

    // If current lesson is in progress, add it
    if (progress.currentLesson <= 7) {
      const currentLesson = allLessons.find(
        (l) => l.id === progress.currentLesson
      );
      if (currentLesson) {
        activities.unshift({
          action: "In Progress",
          subject: currentLesson.title,
          time: "Now",
          xp: 0,
        });
      }
    }

    return activities.slice(0, 5); // Return max 5 activities
  };

  const recentActivity = generateRecentActivity();

  // Custom tooltip for chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 border border-indigo-500/30 rounded-lg p-3 shadow-lg">
          <p className="text-white/60 text-sm">{label}</p>
          <p className="text-indigo-400 font-bold text-lg">
            {payload[0].value} XP
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Toast Notifications */}
      <AnimatePresence>
        {notifications.map((notification) => (
          <Toast
            key={notification.id}
            notification={notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </AnimatePresence>

      {/* Profile Header */}
      <GlassCard glow className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar & XP Ring */}
          <div className="relative">
            <XPRing
              level={Math.floor(progress.totalXP / 200) + 1}
              xp={progress.totalXP % 200}
              maxXp={200}
              size="lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 -mt-1 flex items-center justify-center text-3xl">
                🚀
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-4">Space Explorer</h1>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                {progress.totalXP.toLocaleString()} XP Earned
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                {progress.completedLessons.length} / 7 Lessons Complete
              </span>
              {progress.completedLessons.length === 7 && (
                <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Cosmic Scholar
                </span>
              )}
            </div>
          </div>

          {/* Progress Circle */}
          <div className="text-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="url(#progressGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${(progress.completedLessons.length / 7) * 251.2} 251.2`}
                />
                <defs>
                  <linearGradient
                    id="progressGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {Math.round((progress.completedLessons.length / 7) * 100)}%
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 mt-2">Course Progress</p>
          </div>
        </div>
      </GlassCard>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            yellow: { bg: "bg-yellow-500/20", text: "text-yellow-400" },
            purple: { bg: "bg-purple-500/20", text: "text-purple-400" },
          };
          const colors = colorClasses[stat.color as keyof typeof colorClasses];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* XP Progress Chart */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-semibold">Learning Journey</h2>
          </div>
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">XP Earned This Week</h3>
                <p className="text-white/60 text-sm">
                  Your cosmic progress visualized
                </p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                <span className="text-2xl font-bold">{progress.totalXP}</span>
                <span className="text-sm ml-1">Total XP</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
  <AreaChart data={xpProgressData}>
    <defs>
      <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
        <stop offset="50%" stopColor="#8b5cf6" stopOpacity={0.5} />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient
        id="xpStrokeGradient"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
      >
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <CartesianGrid
      strokeDasharray="3 3"
      stroke="rgba(255,255,255,0.05)"
      vertical={false}
    />
    <XAxis
      dataKey="day"
      stroke="rgba(255,255,255,0.5)"
      style={{ fontSize: "12px" }}
      axisLine={false}
      tickLine={false}
    />
    <YAxis
      stroke="rgba(255,255,255,0.5)"
      style={{ fontSize: "12px" }}
      axisLine={false}
      tickLine={false}
    />
    <Tooltip content={<CustomTooltip />} />
    <Area
      type="monotone"
      dataKey="xp"
      stroke="url(#xpStrokeGradient)"
      strokeWidth={3}
      fill="url(#xpGradient)"
      dot={{
        fill: "#6366f1",
        stroke: "#fff",
        strokeWidth: 2,
        r: 5,
      }}
      activeDot={{
        r: 8,
        fill: "#8b5cf6",
        stroke: "#fff",
        strokeWidth: 2,
      }}
      animationDuration={2000}  // ✅ Changed from default 1500ms to 2000ms
      animationEasing="ease-out"  // ✅ Smoother easing
    />
  </AreaChart>
</ResponsiveContainer>

            {/* XP Milestones */}
            {/* XP Milestones */}
<div className="mt-6 pt-6 border-t border-white/10">
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
      <span className="text-white/60">Next Milestone</span>
    </div>
    <span className="text-indigo-400 font-semibold">
      {Math.ceil(progress.totalXP / 500) * 500} XP
    </span>
  </div>
  <div className="mt-2 w-full h-2 bg-white/10 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: `${(progress.totalXP % 500) / 5}%`,
      }}
      transition={{ 
        duration: 2.5,  // ✅ Changed from 1 to 2.5 seconds
        ease: "easeOut" 
      }}
      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
    />
  </div>
  <p className="text-white/40 text-xs mt-2">
    {500 - (progress.totalXP % 500)} XP until next milestone
  </p>
</div>
          </GlassCard>

          {/* Recent Activity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-semibold">Recent Activity</h2>
            </div>
            <div className="space-y-3">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              activity.action === "Completed"
                                ? "bg-green-500/20"
                                : "bg-indigo-500/20"
                            }`}
                          >
                            {activity.action === "Completed" ? (
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            ) : (
                              <TrendingUp className="w-5 h-5 text-indigo-400" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold">
                              {activity.action}{" "}
                              <span className="text-indigo-400">
                                {activity.subject}
                              </span>
                            </p>
                            <p className="text-sm text-white/60 mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                        {activity.xp > 0 && (
                          <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm font-medium">
                            +{activity.xp} XP
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))
              ) : (
                <GlassCard className="p-8 text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">
                    Start Your Journey!
                  </h3>
                  <p className="text-white/60">
                    Complete lessons in the Explore section to see your activity
                    here.
                  </p>
                </GlassCard>
              )}
            </div>
          </div>
        </div>

        {/* Badges & Achievements */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-semibold">Badges</h2>
          </div>
          <div className="space-y-3">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard
                  className={`p-4 transition-all duration-300 ${
                    !badge.earned
                      ? "opacity-50"
                      : "hover:ring-2 hover:ring-indigo-500/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-2xl
                      ${
                        badge.earned
                          ? "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30"
                          : "bg-white/5"
                      }
                    `}
                    >
                      {badge.earned ? badge.icon : "🔒"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{badge.name}</h3>
                        {badge.earned && (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        )}
                      </div>
                      <p className="text-sm text-white/60">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Badge Progress */}
          <GlassCard className="p-4 mt-4">
            <div className="text-center">
              <p className="text-white/60 text-sm">Badges Earned</p>
              <p className="text-2xl font-bold text-indigo-400">
                {badges.filter((b) => b.earned).length} / {badges.length}
              </p>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Preferences Panel */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Preferences</h2>
        <GlassCard className="p-6">
          <div className="space-y-6">
            {/* Email Notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Notifications</h3>
                  <p className="text-sm text-white/60">
                    Receive updates about your progress and achievements
                  </p>
                </div>
              </div>
              <button
                onClick={handleEmailToggle}
                className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                  emailNotifications
                    ? "bg-indigo-500"
                    : "bg-white/20"
                }`}
              >
                <motion.div
                  animate={{ x: emailNotifications ? 28 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                />
              </button>
            </div>

            {/* Daily Reminders */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Daily Reminders</h3>
                  <p className="text-sm text-white/60">
                    Get reminded to continue your learning journey
                  </p>
                </div>
              </div>
              <button
                onClick={handleReminderToggle}
                className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                  dailyReminders
                    ? "bg-purple-500"
                    : "bg-white/20"
                }`}
              >
                <motion.div
                  animate={{ x: dailyReminders ? 28 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                />
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}