import React, { useState } from "react";
import { GlassCard } from "./glass-card";
import { XPRing } from "./xp-ring";
import { Sparkles, Calendar, TrendingUp, Activity, MessageCircle, ArrowRight, Eye, Plus } from "lucide-react";
import { motion } from "motion/react";

export function Dashboard() {
  const [selectedNews, setSelectedNews] = useState<number | null>(null);
  const [showQuickActions, setShowQuickActions] = useState(false);

  const skyEvents = [
    { name: "Geminids Meteor Shower", date: "Dec 13-14, 2025", visibility: "Excellent", time: "9:00 PM - 4:00 AM" },
    { name: "Jupiter at Opposition", date: "Dec 7, 2025", visibility: "Best", time: "All Night" },
    { name: "Venus & Saturn Conjunction", date: "Jan 18, 2026", visibility: "Good", time: "Evening" },
  ];

  const newsItems = [
    {
      title: "Webb Telescope Discovers Water on Exoplanet",
      category: "Discovery",
      image: "https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMHB1cnBsZXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      summary: "NASA's James Webb Space Telescope has detected water vapor in the atmosphere of a distant rocky exoplanet.",
    },
    {
      title: "New Galaxy Cluster Reveals Dark Matter Structure",
      category: "Research",
      image: "https://images.unsplash.com/photo-1660244867765-f656096619af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMGFzdHJvbm9teXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      summary: "Astronomers mapped the distribution of dark matter in unprecedented detail using gravitational lensing.",
    },
    {
      title: "Comet Approaching Inner Solar System",
      category: "Event",
      image: "https://images.unsplash.com/photo-1730051316601-4c71c894e496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21ldCUyMHNwYWNlfGVufDF8fHx8MTc2Nzk3NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      summary: "A newly discovered comet will be visible to the naked eye in February, promising a spectacular show.",
    },
  ];

  const communitySpotlight = [
    { user: "Sarah Chen", activity: "Photographed the Orion Nebula", likes: 234 },
    { user: "Alex Rivera", activity: "Completed Solar System Challenge", likes: 189 },
    { user: "Jamie Park", activity: "Discovered variable star pattern", likes: 156 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Hero Welcome Panel */}
      <GlassCard glow className="p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <XPRing level={12} xp={2847} maxXp={3500} size="lg" />
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Explorer</span>
              </h1>
              <p className="text-white/60 text-lg">Continue your cosmic journey</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  Exploring Comets
                </div>
                <span className="text-white/40">•</span>
                <span className="text-white/60 text-sm">2,847 / 3,500 XP</span>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 flex items-center gap-2"
          >
            Continue Learning
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tonight in Your Sky */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-semibold">Tonight in Your Sky</h2>
          </div>
          <div className="space-y-3">
            {skyEvents.map((event, index) => (
              <GlassCard key={index} className="p-4 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{event.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className={`
                    px-3 py-1 rounded-full text-sm
                    ${event.visibility === "Excellent" ? "bg-green-500/20 text-green-300" : ""}
                    ${event.visibility === "Best" ? "bg-cyan-500/20 text-cyan-300" : ""}
                    ${event.visibility === "Good" ? "bg-blue-500/20 text-blue-300" : ""}
                  `}>
                    {event.visibility}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Space Weather */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-semibold">Space Weather</h2>
          </div>
          <GlassCard className="p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-green-500/40 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-semibold text-green-300">Calm</h3>
              <p className="text-sm text-white/60 mt-2">Solar activity is low. Excellent conditions for observation.</p>
            </div>
            <div className="space-y-2 pt-4 border-t border-white/10">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Solar Wind Speed</span>
                <span className="text-white">342 km/s</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Geomagnetic Field</span>
                <span className="text-green-300">Quiet</span>
              </div>
            </div>
          </GlassCard>

          {/* Ask Space Bot */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-indigo-400" />
              Ask Space Bot
            </h2>
            <GlassCard className="p-4">
              <input
                type="text"
                placeholder="What would you like to know?"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                <button className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs hover:bg-white/10 transition-colors">
                  How do stars form?
                </button>
                <button className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs hover:bg-white/10 transition-colors">
                  What is a black hole?
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Latest Astronomy News */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-400" />
          <h2 className="text-2xl font-semibold">Latest Astronomy News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <GlassCard 
              key={index} 
              className="overflow-hidden cursor-pointer group"
              onClick={() => setSelectedNews(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/80 backdrop-blur-sm text-white text-xs">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
                  {news.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {news.summary}
                </p>
                <button className="text-indigo-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Community Spotlight */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          Community Spotlight
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {communitySpotlight.map((item, index) => (
            <GlassCard key={index} className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                <div className="flex-1">
                  <h4 className="font-semibold">{item.user}</h4>
                  <p className="text-sm text-white/60 mt-1">{item.activity}</p>
                  <div className="flex items-center gap-1 mt-2 text-white/40 text-xs">
                    <span>❤️</span>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}