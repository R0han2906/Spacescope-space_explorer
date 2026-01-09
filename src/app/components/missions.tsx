import React, { useState } from "react";
import { GlassCard } from "./glass-card";
import { Rocket, MapPin, Calendar, Users, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface Mission {
  id: number;
  name: string;
  agency: string;
  status: "Active" | "Planned" | "Complete";
  launch: string;
  destination: string;
  crew?: number;
  image: string;
  description: string;
}

export function Missions() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const missions: Mission[] = [
    {
      id: 1,
      name: "Artemis II",
      agency: "NASA",
      status: "Planned",
      launch: "September 2025",
      destination: "Moon",
      crew: 4,
      image: "https://images.unsplash.com/photo-1710267224216-8eced3320dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBzcGFjZXxlbnwxfHx8fDE3Njc4Njc3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "First crewed mission to the Moon in over 50 years, testing systems for future lunar surface missions.",
    },
    {
      id: 2,
      name: "Europa Clipper",
      agency: "NASA",
      status: "Active",
      launch: "October 2024",
      destination: "Jupiter's Moon Europa",
      image: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXBpdGVyJTIwcGxhbmV0fGVufDF8fHx8MTc2Nzk3NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Investigating Europa's potential habitability and subsurface ocean through multiple flybys.",
    },
    {
      id: 3,
      name: "James Webb Space Telescope",
      agency: "NASA/ESA/CSA",
      status: "Active",
      launch: "December 2021",
      destination: "L2 Lagrange Point",
      image: "https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMHB1cnBsZXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Observing the universe's first galaxies and studying exoplanet atmospheres with unprecedented detail.",
    },
    {
      id: 4,
      name: "Mars Sample Return",
      agency: "NASA/ESA",
      status: "Planned",
      launch: "2028",
      destination: "Mars",
      image: "https://images.unsplash.com/photo-1727363584291-433dcd86a0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc2Nzk1OTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Ambitious mission to retrieve rock and soil samples collected by the Perseverance rover.",
    },
    {
      id: 5,
      name: "Dragonfly",
      agency: "NASA",
      status: "Planned",
      launch: "2027",
      destination: "Saturn's Moon Titan",
      image: "https://images.unsplash.com/photo-1660244867765-f656096619af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMGFzdHJvbm9teXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "A rotorcraft lander that will explore Titan's organic chemistry and habitability.",
    },
  ];

  const filteredMissions = filter === "all" 
    ? missions 
    : missions.filter(m => m.status.toLowerCase() === filter);

  const filters = ["all", "active", "planned", "complete"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Rocket className="w-10 h-10 text-indigo-400" />
          Space Missions Timeline
        </h1>
        <p className="text-white/60 text-lg">Track humanity's journey across the cosmos</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`
              px-4 py-2 rounded-lg capitalize transition-all duration-300
              ${filter === f 
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/50" 
                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-20 hidden md:block"></div>

        {/* Mission Cards */}
        <div className="space-y-6">
          {filteredMissions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline node */}
              <div className="absolute left-6 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-black shadow-lg shadow-indigo-500/50 hidden md:block"></div>

              <GlassCard 
                className="md:ml-20 overflow-hidden cursor-pointer"
                onClick={() => setSelectedMission(mission)}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={mission.image}
                      alt={mission.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`
                        px-3 py-1 rounded-full text-xs backdrop-blur-sm
                        ${mission.status === "Active" ? "bg-green-500/80 text-white" : ""}
                        ${mission.status === "Planned" ? "bg-blue-500/80 text-white" : ""}
                        ${mission.status === "Complete" ? "bg-purple-500/80 text-white" : ""}
                      `}>
                        {mission.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-1">{mission.name}</h2>
                        <p className="text-indigo-400">{mission.agency}</p>
                      </div>
                      {mission.status === "Complete" && (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      )}
                    </div>

                    <p className="text-white/70 mb-4 leading-relaxed">
                      {mission.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        <div>
                          <div className="text-white/60 text-xs">Launch</div>
                          <div className="text-white">{mission.launch}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className="text-white/60 text-xs">Destination</div>
                          <div className="text-white">{mission.destination}</div>
                        </div>
                      </div>
                      {mission.crew && (
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <div>
                            <div className="text-white/60 text-xs">Crew</div>
                            <div className="text-white">{mission.crew} astronauts</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Detail Modal */}
      {selectedMission && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedMission(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <GlassCard className="overflow-hidden">
              <div className="relative h-80">
                <img
                  src={selectedMission.image}
                  alt={selectedMission.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-bold mb-2">{selectedMission.name}</h2>
                  <p className="text-indigo-400 text-lg">{selectedMission.agency}</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  {selectedMission.description}
                </p>
                <button
                  onClick={() => setSelectedMission(null)}
                  className="w-full py-3 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
                >
                  Close
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
