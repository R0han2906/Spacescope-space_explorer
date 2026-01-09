import React from "react";
import { GlassCard } from "./glass-card";
import { XPRing } from "./xp-ring";
import { Award, Trophy, Target, Calendar, Zap, Star, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function Profile() {
  const stats = [
    { label: "Current Level", value: "12", icon: Star, color: "indigo" },
    { label: "Total XP", value: "12,847", icon: Zap, color: "yellow" },
    { label: "Day Streak", value: "23", icon: TrendingUp, color: "green" },
    { label: "Lessons Completed", value: "47", icon: Target, color: "purple" },
  ];

  const badges = [
    { name: "First Steps", description: "Complete your first lesson", earned: true, icon: "🚀" },
    { name: "Star Gazer", description: "Log 10 observations", earned: true, icon: "🔭" },
    { name: "Community Builder", description: "Help 5 fellow learners", earned: true, icon: "🤝" },
    { name: "Week Warrior", description: "7-day learning streak", earned: true, icon: "🔥" },
    { name: "Astrophotographer", description: "Share your first photo", earned: false, icon: "📸" },
    { name: "Cosmic Scholar", description: "Complete 100 lessons", earned: false, icon: "🎓" },
  ];

  const xpProgressData = [
    { day: "Mon", xp: 120 },
    { day: "Tue", xp: 180 },
    { day: "Wed", xp: 240 },
    { day: "Thu", xp: 150 },
    { day: "Fri", xp: 300 },
    { day: "Sat", xp: 220 },
    { day: "Sun", xp: 280 },
  ];

  const recentActivity = [
    { action: "Completed", subject: "Stellar Evolution", time: "2 hours ago", xp: 200 },
    { action: "Started", subject: "Black Holes", time: "1 day ago", xp: 0 },
    { action: "Earned", subject: "Week Warrior Badge", time: "3 days ago", xp: 100 },
    { action: "Completed", subject: "Galaxies & Nebulae", time: "5 days ago", xp: 300 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Profile Header */}
      <GlassCard glow className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar & XP Ring */}
          <div className="relative">
            <XPRing level={12} xp={2847} maxXp={3500} size="lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 -mt-1"></div>
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Space Explorer</h1>
            <p className="text-white/60 mb-4">Joined January 2026 • 23 day streak 🔥</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                Level 12 Astronomer
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                Top 5% this week
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">47</div>
              <div className="text-sm text-white/60">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">234</div>
              <div className="text-sm text-white/60">Likes</div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            indigo: { bg: "bg-indigo-500/20", text: "text-indigo-400" },
            yellow: { bg: "bg-yellow-500/20", text: "text-yellow-400" },
            green: { bg: "bg-green-500/20", text: "text-green-400" },
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
              <GlassCard className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${colors.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
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
            <h2 className="text-2xl font-semibold">Weekly Progress</h2>
          </div>
          <GlassCard className="p-6">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={xpProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="day" 
                  stroke="rgba(255,255,255,0.5)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.5)"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 15, 25, 0.95)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="xp"
                  stroke="url(#xpGradient)"
                  strokeWidth={3}
                  dot={{ fill: '#6366f1', r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <defs>
                  <linearGradient id="xpGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Recent Activity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-semibold">Recent Activity</h2>
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <GlassCard key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        {activity.action} <span className="text-indigo-400">{activity.subject}</span>
                      </p>
                      <p className="text-sm text-white/60 mt-1">{activity.time}</p>
                    </div>
                    {activity.xp > 0 && (
                      <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
                        +{activity.xp} XP
                      </div>
                    )}
                  </div>
                </GlassCard>
              ))}
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
                <GlassCard className={`p-4 ${!badge.earned ? "opacity-50" : ""}`}>
                  <div className="flex items-start gap-3">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-2xl
                      ${badge.earned 
                        ? "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30" 
                        : "bg-white/5"
                      }
                    `}>
                      {badge.earned ? badge.icon : "🔒"}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{badge.name}</h3>
                      <p className="text-sm text-white/60">{badge.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Preferences Panel */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Preferences</h2>
        <GlassCard className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Email Notifications</h3>
                <p className="text-sm text-white/60">Receive updates about your progress</p>
              </div>
              <button className="w-12 h-6 rounded-full bg-indigo-500 relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div>
                <h3 className="font-semibold mb-1">Daily Reminders</h3>
                <p className="text-sm text-white/60">Get reminded to continue learning</p>
              </div>
              <button className="w-12 h-6 rounded-full bg-white/20 relative">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}