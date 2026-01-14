// import React, { useState } from "react";
// import { GlassCard } from "./glass-card";
// import { XPRing } from "./xp-ring";
// import { Sparkles, Calendar, TrendingUp, Activity, MessageCircle, ArrowRight, Eye, Plus } from "lucide-react";
// import { motion } from "motion/react";

// export function Dashboard() {
//   const [selectedNews, setSelectedNews] = useState<number | null>(null);
//   const [showQuickActions, setShowQuickActions] = useState(false);

//   const skyEvents = [
//     { name: "Geminids Meteor Shower", date: "Dec 13-14, 2025", visibility: "Excellent", time: "9:00 PM - 4:00 AM" },
//     { name: "Jupiter at Opposition", date: "Dec 7, 2025", visibility: "Best", time: "All Night" },
//     { name: "Venus & Saturn Conjunction", date: "Jan 18, 2026", visibility: "Good", time: "Evening" },
//   ];

//   const newsItems = [
//     {
//       title: "Webb Telescope Discovers Water on Exoplanet",
//       category: "Discovery",
//       image: "https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMHB1cnBsZXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//       summary: "NASA's James Webb Space Telescope has detected water vapor in the atmosphere of a distant rocky exoplanet.",
//     },
//     {
//       title: "New Galaxy Cluster Reveals Dark Matter Structure",
//       category: "Research",
//       image: "https://images.unsplash.com/photo-1660244867765-f656096619af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMGFzdHJvbm9teXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//       summary: "Astronomers mapped the distribution of dark matter in unprecedented detail using gravitational lensing.",
//     },
//     {
//       title: "Comet Approaching Inner Solar System",
//       category: "Event",
//       image: "https://images.unsplash.com/photo-1730051316601-4c71c894e496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21ldCUyMHNwYWNlfGVufDF8fHx8MTc2Nzk3NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
//       summary: "A newly discovered comet will be visible to the naked eye in February, promising a spectacular show.",
//     },
//   ];

//   const communitySpotlight = [
//     { user: "Sarah Chen", activity: "Photographed the Orion Nebula", likes: 234 },
//     { user: "Alex Rivera", activity: "Completed Solar System Challenge", likes: 189 },
//     { user: "Jamie Park", activity: "Discovered variable star pattern", likes: 156 },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
//       {/* Hero Welcome Panel */}
//       <GlassCard glow className="p-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-6">
//             <XPRing level={12} xp={2847} maxXp={3500} size="lg" />
//             <div>
//               <h1 className="text-4xl font-bold mb-2">
//                 Welcome back, <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Explorer</span>
//               </h1>
//               <p className="text-white/60 text-lg">Continue your cosmic journey</p>
//               <div className="mt-3 flex items-center gap-2">
//                 <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
//                   <Sparkles className="w-3 h-3 inline mr-1" />
//                   Exploring Comets
//                 </div>
//                 <span className="text-white/40">•</span>
//                 <span className="text-white/60 text-sm">2,847 / 3,500 XP</span>
//               </div>
//             </div>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 flex items-center gap-2"
//           >
//             Continue Learning
//             <ArrowRight className="w-4 h-4" />
//           </motion.button>
//         </div>
//       </GlassCard>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Tonight in Your Sky */}
//         <div className="lg:col-span-2 space-y-4">
//           <div className="flex items-center gap-2 mb-4">
//             <Eye className="w-5 h-5 text-indigo-400" />
//             <h2 className="text-2xl font-semibold">Tonight in Your Sky</h2>
//           </div>
//           <div className="space-y-3">
//             {skyEvents.map((event, index) => (
//               <GlassCard key={index} className="p-4 hover:bg-white/10 transition-all duration-300">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="font-semibold text-lg mb-1">{event.name}</h3>
//                     <div className="flex items-center gap-3 text-sm text-white/60">
//                       <span className="flex items-center gap-1">
//                         <Calendar className="w-3 h-3" />
//                         {event.date}
//                       </span>
//                       <span>•</span>
//                       <span>{event.time}</span>
//                     </div>
//                   </div>
//                   <div className={`
//                     px-3 py-1 rounded-full text-sm
//                     ${event.visibility === "Excellent" ? "bg-green-500/20 text-green-300" : ""}
//                     ${event.visibility === "Best" ? "bg-cyan-500/20 text-cyan-300" : ""}
//                     ${event.visibility === "Good" ? "bg-blue-500/20 text-blue-300" : ""}
//                   `}>
//                     {event.visibility}
//                   </div>
//                 </div>
//               </GlassCard>
//             ))}
//           </div>
//         </div>

//         {/* Space Weather */}
//         <div className="space-y-4">
//           <div className="flex items-center gap-2 mb-4">
//             <Activity className="w-5 h-5 text-indigo-400" />
//             <h2 className="text-2xl font-semibold">Space Weather</h2>
//           </div>
//           <GlassCard className="p-6">
//             <div className="text-center mb-4">
//               <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
//                 <div className="w-12 h-12 rounded-full bg-green-500/40 animate-pulse"></div>
//               </div>
//               <h3 className="text-xl font-semibold text-green-300">Calm</h3>
//               <p className="text-sm text-white/60 mt-2">Solar activity is low. Excellent conditions for observation.</p>
//             </div>
//             <div className="space-y-2 pt-4 border-t border-white/10">
//               <div className="flex justify-between text-sm">
//                 <span className="text-white/60">Solar Wind Speed</span>
//                 <span className="text-white">342 km/s</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-white/60">Geomagnetic Field</span>
//                 <span className="text-green-300">Quiet</span>
//               </div>
//             </div>
//           </GlassCard>

//           {/* Ask Space Bot */}
//           <div className="space-y-3">
//             <h2 className="text-2xl font-semibold flex items-center gap-2">
//               <MessageCircle className="w-5 h-5 text-indigo-400" />
//               Ask Space Bot
//             </h2>
//             <GlassCard className="p-4">
//               <input
//                 type="text"
//                 placeholder="What would you like to know?"
//                 className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <div className="flex flex-wrap gap-2 mt-3">
//                 <button className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs hover:bg-white/10 transition-colors">
//                   How do stars form?
//                 </button>
//                 <button className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs hover:bg-white/10 transition-colors">
//                   What is a black hole?
//                 </button>
//               </div>
//             </GlassCard>
//           </div>
//         </div>
//       </div>

//       {/* Latest Astronomy News */}
//       <div className="space-y-4">
//         <div className="flex items-center gap-2">
//           <TrendingUp className="w-5 h-5 text-indigo-400" />
//           <h2 className="text-2xl font-semibold">Latest Astronomy News</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {newsItems.map((news, index) => (
//             <GlassCard 
//               key={index} 
//               className="overflow-hidden cursor-pointer group"
//               onClick={() => setSelectedNews(index)}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img 
//                   src={news.image} 
//                   alt={news.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
//                 <div className="absolute top-3 left-3">
//                   <span className="px-3 py-1 rounded-full bg-indigo-500/80 backdrop-blur-sm text-white text-xs">
//                     {news.category}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-5">
//                 <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
//                   {news.title}
//                 </h3>
//                 <p className="text-white/60 text-sm mb-4">
//                   {news.summary}
//                 </p>
//                 <button className="text-indigo-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
//                   Learn More
//                   <ArrowRight className="w-3 h-3" />
//                 </button>
//               </div>
//             </GlassCard>
//           ))}
//         </div>
//       </div>

//       {/* Community Spotlight */}
//       <div className="space-y-4">
//         <h2 className="text-2xl font-semibold flex items-center gap-2">
//           <Sparkles className="w-5 h-5 text-indigo-400" />
//           Community Spotlight
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {communitySpotlight.map((item, index) => (
//             <GlassCard key={index} className="p-5">
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600"></div>
//                 <div className="flex-1">
//                   <h4 className="font-semibold">{item.user}</h4>
//                   <p className="text-sm text-white/60 mt-1">{item.activity}</p>
//                   <div className="flex items-center gap-1 mt-2 text-white/40 text-xs">
//                     <span>❤️</span>
//                     <span>{item.likes}</span>
//                   </div>
//                 </div>
//               </div>
//             </GlassCard>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlassCard } from "./glass-card";
import {
  Sparkles,
  Calendar,
  TrendingUp,
  Activity,
  ArrowRight,
  Eye,
  ExternalLink,
  Star,
  Rocket,
  Brain,
  Zap,
  Search,
  Globe,
  Atom,
  Telescope,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Space Intelligence Component
function SpaceIntelligence() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [displayedFact, setDisplayedFact] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  // Pre-written space knowledge database
  const spaceDatabase = {
  planets: {
    icon: Globe,
    title: "Planetary Facts",
    color: "indigo",
    facts: [
      {
        q: "How many Earths can fit inside Jupiter?",
        a: "Approximately 1,321 Earths can fit inside Jupiter by volume. Jupiter is the largest planet in our solar system, with a diameter about 11 times that of Earth, giving it a much greater internal volume.",
      },
      {
        q: "Why is Mars called the Red Planet?",
        a: "  Mars appears red because its surface contains large amounts of iron oxide, commonly known as rust. Over billions of years, iron-rich minerals reacted with oxygen, covering the planet in reddish dust.",
      },
      {
        q: "Which planets are believed to have diamond rain?",
        a: "  Uranus and Neptune are believed to experience diamond rain. Deep inside these ice giants, extreme pressure and temperature cause methane to break apart, allowing carbon atoms to form diamonds that fall toward the core.",
      },
    ],
  },

  stars: {
    icon: Sparkles,
    title: "Stellar Science",
    color: "yellow",
    facts: [
      {
        q: "How hot is the Sun's core?",
        a: "  The Sun's core reaches about 15 million degrees Celsius (27 million degrees Fahrenheit). At this temperature, nuclear fusion converts hydrogen into helium, releasing enormous energy every second.",
      },
      {
        q: "What is the closest star to Earth?",
        a: "  Proxima Centauri is the closest known star to Earth after the Sun, located about 4.24 light-years away. The light we see from it today actually left the star over four years ago.",
      },
      {
        q: "How are stars born?",
        a: "  Stars form inside giant clouds of gas and dust called nebulae. When gravity causes the material to collapse, the core heats up. Once temperatures reach about 10 million degrees Celsius, nuclear fusion begins and a star is born.",
      },
    ],
  },

  universe: {
    icon: Atom,
    title: "Cosmic Mysteries",
    color: "purple",
    facts: [
      {  
        q: "How old is the universe?",
        a: "  The universe is approximately 13.8 billion years old. This estimate comes from observations of the cosmic microwave background radiation and measurements of how fast the universe is expanding.",
      },
      {
        q: "What is dark matter?",
        a: "  Dark matter is a mysterious form of matter that does not emit or reflect light, making it invisible. It makes up about 85% of all matter in the universe and is detected through its gravitational effects on visible objects.",
      },
      {
        q: "  How many galaxies exist in the universe?",
        a: "  Astronomers estimate there are over 2 trillion galaxies in the observable universe, each containing millions to trillions of stars.",
      },
    ],
  },

  exploration: {
    icon: Rocket,
    title: "Space Missions",
    color: "cyan",
    facts: [
      {
        q: "How fast does the International Space Station travel?",
        a: "  The International Space Station travels at about 28,000 kilometers per hour (17,500 miles per hour). It completes one orbit around Earth roughly every 90 minutes.",
      },
      {
        q: "How far have humans traveled from Earth?",
        a: "  The Apollo 13 crew traveled the farthest from Earth, reaching a distance of about 400,171 kilometers (248,655 miles) during their mission around the Moon.",
      },
      {
        q: "What is the longest continuous human spaceflight?",
        a: "  Cosmonaut Valeri Polyakov holds the record for the longest continuous stay in space, spending 437 days aboard the Mir space station between 1994 and 1995.",
      },
    ],
  },
};


  const quickQuestions = [
    "How big is the universe?",
    "Can we live on Mars?",
    "What are black holes?",
    "How do rockets work?",
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowResponse(false);
    setDisplayedFact("");
  };

  const handleFactSelect = (fact: { q: string; a: string }) => {
    setIsTyping(true);
    setShowResponse(true);
    setDisplayedFact("");
    
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fact.a.length) {
        setDisplayedFact((prev) => prev + fact.a[index]);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 15);

    return () => clearInterval(typeInterval);
  };

  const handleQuickQuestion = (question: string) => {
    setSearchQuery(question);
    const responses: Record<string, string> = {
      "How big is the universe?": "  The observable universe is about 93 billion light-years in diameter! Light from the most distant objects has been traveling for 13.8 billion years to reach us.",
      "Can we live on Mars?": "  With technology, yes! Mars has water ice, a day similar to Earth (24.6 hours), and resources to produce fuel and building materials. SpaceX aims to establish a colony by 2050!",
      "What are black holes?": "  Black holes are regions where gravity is so strong that nothing, not even light, can escape. They form when massive stars collapse, creating a singularity with infinite density!",
      "How do rockets work?": "  Rockets work by Newton's third law - for every action, there's an equal and opposite reaction. They burn fuel to shoot hot gas downward, pushing the rocket upward!",
    };
    
    const answer = responses[question] || "Exploring the cosmos... Try selecting a category above!";
    
    setIsTyping(true);
    setShowResponse(true);
    setDisplayedFact("");
    
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < answer.length) {
        setDisplayedFact((prev) => prev + answer[index]);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 15);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Brain className="w-5 h-5 text-indigo-400" />
        </motion.div>
        <h2 className="text-2xl font-semibold">Space Intelligence</h2>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Zap className="w-4 h-4 text-yellow-400" />
        </motion.div>
      </div>

      <GlassCard className="p-5 space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask me anything about space..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-3.5 w-5 h-5 text-white/40" />
        </div>

        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((q, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleQuickQuestion(q)}
              className="px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-xs hover:bg-indigo-500/20 hover:text-indigo-300 transition-all duration-200 flex items-center gap-1"
            >
              <HelpCircle className="w-3 h-3" />
              {q}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {Object.entries(spaceDatabase).map(([key, category]) => {
            const Icon = category.icon;
            const isActive = selectedCategory === key;
            
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategorySelect(key)}
                className={`
                  p-3 rounded-lg border transition-all duration-200
                  ${
                    isActive
                      ? "bg-indigo-500/20 border-indigo-500/50 text-indigo-300"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.title}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-2"
            >
              <div className="text-xs text-white/60 mb-2">
                Popular questions:
              </div>
              {spaceDatabase[selectedCategory as keyof typeof spaceDatabase].facts.map(
                (fact, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleFactSelect(fact)}
                    className="w-full text-left p-2 rounded-lg bg-white/5 hover:bg-indigo-500/20 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 3,
                        }}
                      >
                        <Telescope className="w-3 h-3 text-indigo-400 opacity-60 group-hover:opacity-100" />
                      </motion.div>
                      <span className="text-sm text-white/80 group-hover:text-indigo-300">
                        {fact.q}
                      </span>
                    </div>
                  </motion.button>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showResponse && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1"
                  >
                    <Brain className="w-4 h-4 text-indigo-400" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs text-indigo-400 mb-1">
                      Space Intelligence
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {displayedFact}
                      {isTyping && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                          }}
                        >
                          |
                        </motion.span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!showResponse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-2"
          >
            <p className="text-xs text-white/40">
              💡 Powered by cosmic knowledge 
            </p>
          </motion.div>
        )}
      </GlassCard>

      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-2 h-2 rounded-full bg-green-400"
          />
          <span className="text-xs text-white/40">Intelligence Active</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="w-1 h-3 bg-indigo-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Rest of your Dashboard component continues here...
// (FloatingSpaceElements, SpaceshipAnimation, and Dashboard remain the same)

// Original Floating Space Elements Animation
function FloatingSpaceElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Star
            className="text-white/30"
            size={4 + Math.random() * 8}
            fill="currentColor"
          />
        </motion.div>
      ))}

      {/* Floating Planets */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-40"
        style={{ left: "10%", top: "20%" }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-30"
        style={{ right: "15%", top: "30%" }}
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-35"
        style={{ left: "70%", top: "60%" }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Saturn-like planet with ring */}
      <motion.div
        className="absolute"
        style={{ right: "8%", bottom: "25%" }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-3 rounded-full border-2 border-yellow-400/20 rotate-12" />
        </div>
      </motion.div>

      {/* Shooting Stars */}
      <motion.div
        className="absolute w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
        style={{ left: "20%", top: "15%" }}
        animate={{
          x: [0, 200],
          y: [0, 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
        style={{ right: "30%", top: "40%" }}
        animate={{
          x: [0, 150],
          y: [0, 80],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeOut",
        }}
      />

      {/* Nebula Clouds */}
      <motion.div
        className="absolute w-40 h-40 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          left: "5%",
          bottom: "10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
          right: "10%",
          top: "10%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Comet */}
      <motion.div
        className="absolute"
        style={{ left: "60%", top: "20%" }}
        animate={{
          x: [-100, 300],
          y: [-50, 150],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "easeIn",
        }}
      >
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-cyan-300" />
          <div className="absolute top-1/2 right-full -translate-y-1/2 w-16 h-1 bg-gradient-to-l from-cyan-300 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

// Enhanced Spaceship Animation
// Spaceship with Simple Glow Trail
function SpaceshipAnimation() {
  return (
    <div className="relative w-32 h-32">
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main spaceship container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Simple glowing trail dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400/60"
            animate={{
              y: [0, 8 + i * 4],
              opacity: [0.8, 0],
              scale: [1, 0.3],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.08,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Spaceship body */}
        <motion.div
          className="relative"
          animate={{
            rotate: [0, -2, 2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main rocket */}
          <Rocket className="w-16 h-16 text-indigo-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
          
          {/* Glowing window */}
          <motion.div
            className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Orbiting stars */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8 - i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          </motion.div>
        ))}

        {/* Speed lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute w-10 h-0.5 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"
            style={{
              left: `${-25 - i * 10}%`,
              top: `${40 + i * 8}%`,
            }}
            animate={{
              x: [0, 80],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function Dashboard() {
  const navigate = useNavigate();

 const skyEvents = [
   {
     name: "Lyrid Meteor Shower",
     date: "Apr 21–22, 2026",
     time: "Late Evening – 2:00 AM",
     visibility: "Good",
     description: "A reliable annual meteor shower producing around 10–20 meteors per hour. Best seen before midnight in clear skies.",
   },
  {
    name: "Quadrantid Meteor Shower",
    date: "Jan 3–4, 2026",
    time: "12:00 AM – Dawn",
    visibility: "Good",
    description: "One of the strongest meteor showers of the year, producing up to ~40 meteors per hour under dark skies. Best viewed after midnight.",
  },
  {
    name: "Perseid Meteor Shower Peak",
    date: "Aug 12–13, 2026",
    time: "10:00 PM – 4:00 AM",
    visibility: "Excellent",
    description: "The most popular meteor shower of the year, often producing up to 80–100 meteors per hour at peak in the Northern Hemisphere.",
  },
  {
    name: "Partial Lunar Eclipse",
    date: "Aug 28, 2026",
    time: "Night (varies by location)",
    visibility: "Best",
    description: "A partial lunar eclipse where part of the Moon passes through Earth’s shadow, visible without any equipment.",
  },
  {
    name: "Geminid Meteor Shower Peak",
    date: "Dec 13–14, 2026",
    time: "9:00 PM – 4:00 AM",
    visibility: "Excellent",
    description: "Considered the king of meteor showers, with up to ~120 bright meteors per hour, visible worldwide.",
  },
];


  const newsItems = [
    {
      title: "Webb Telescope Discovers Water on Exoplanet",
      category: "Discovery",
      image: "https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      summary: "NASA's James Webb Space Telescope has detected water vapor in the atmosphere of a distant rocky exoplanet.",
      link: "https://www.nasa.gov/mission/webb/",
    },
    {
      title: "New Galaxy Cluster Reveals Dark Matter Structure",
      category: "Research",
      image: "https://images.unsplash.com/photo-1660244867765-f656096619af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      summary: "Astronomers mapped the distribution of dark matter in unprecedented detail using gravitational lensing.",
      link: "https://science.nasa.gov/universe/dark-energy-dark-matter/",
    },
    {
      title: "Upcoming Comet May Be Visible to Naked Eye",
      category: "Event",
      image: "https://images.unsplash.com/photo-1730051316601-4c71c894e496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
      summary: "A newly discovered comet is approaching the inner solar system, promising a spectacular show.",
      link: "https://science.nasa.gov/solar-system/comets/",
    },
  ];

  const communitySpotlight = [
    { user: "Sarah Chen", activity: "Photographed the Orion Nebula", likes: 234, avatar: "🔭" },
    { user: "Alex Rivera", activity: "Completed Solar System Challenge", likes: 189, avatar: "🚀" },
    { user: "Jamie Park", activity: "Discovered variable star pattern", likes: 156, avatar: "⭐" },
  ];

  const handleContinueLearning = () => navigate("/explore");
  const handleNewsClick = (link: string) => window.open(link, "_blank", "noopener,noreferrer");
  const handleCommunityClick = () => navigate("/community");

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8 relative">
      {/* Floating Space Elements */}
      <FloatingSpaceElements />

      {/* Hero Welcome Panel */}
      <GlassCard glow className="p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <SpaceshipAnimation />
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back,{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Explorer
                </span>
              </h1>
              <p className="text-white/60 text-lg">Continue your cosmic journey</p>
              <div className="mt-3">
                <motion.div
                  className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm inline-flex items-center gap-1"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(139, 92, 246, 0)",
                      "0 0 0 4px rgba(139, 92, 246, 0.2)",
                      "0 0 0 0 rgba(139, 92, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-3 h-3" />
                  Ready to Explore
                </motion.div>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContinueLearning}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 flex items-center gap-2 relative overflow-hidden group"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Continue Learning</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tonight in Your Sky */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Eye className="w-5 h-5 text-indigo-400" />
            </motion.div>
            <h2 className="text-2xl font-semibold">Upcoming Sky Events</h2>
          </div>
          <div className="space-y-3">
            {skyEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg group-hover:text-indigo-400 transition-colors">
                          {event.name}
                        </h3>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          {event.visibility === "Excellent" && <span className="text-lg">🌟</span>}
                          {event.visibility === "Best" && <span className="text-lg">✨</span>}
                        </motion.div>
                      </div>
                      <p className="text-sm text-white/60 mb-2">{event.description}</p>
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {event.date}
                        </span>
                        <span>•</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm flex-shrink-0 ml-4 ${
                        event.visibility === "Excellent"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-cyan-500/20 text-cyan-300"
                      }`}
                    >
                      {event.visibility}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Space Weather */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-semibold">Space Weather</h2>
          </div>
          <GlassCard className="p-6 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="text-center mb-4 relative z-10">
              <motion.div
                className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 20px rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-green-500/40"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-green-300">Calm</h3>
              <p className="text-sm text-white/60 mt-2">
                Solar activity is low. Excellent conditions for observation.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-white/10 relative z-10">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Solar Wind Speed</span>
                <span className="text-white">342 km/s</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Geomagnetic Field</span>
                <span className="text-green-300">Quiet</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Aurora Probability</span>
                <span className="text-yellow-300">Low</span>
              </div>
            </div>
          </GlassCard>

          {/* Ask Space Bot */}
          {/* Space Intelligence Hub - Replaces Ask Space Bot */}
<SpaceIntelligence />
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard
                className="overflow-hidden cursor-pointer group h-full"
                onClick={() => handleNewsClick(news.link)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/80 backdrop-blur-sm text-white text-xs">
                      {news.category}
                    </span>
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={false}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{news.summary}</p>
                  <button className="text-indigo-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard
                className="p-5 cursor-pointer hover:bg-white/10 transition-all duration-300 group"
                onClick={handleCommunityClick}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {item.avatar}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold group-hover:text-indigo-400 transition-colors">
                      {item.user}
                    </h4>
                    <p className="text-sm text-white/60 mt-1">{item.activity}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        ❤️
                      </motion.span>
                      <span className="text-white/40 text-xs">{item.likes}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}