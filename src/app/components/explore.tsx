import React, { useState } from "react";
import { GlassCard } from "./glass-card";
import { Lock, CheckCircle, Circle, Star, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { motion } from "motion/react";

interface LessonNode {
  id: number;
  title: string;
  status: "completed" | "current" | "locked";
  xp: number;
}

export function Explore() {
  const [selectedLesson, setSelectedLesson] = useState<number>(3);

  const roadmap: LessonNode[] = [
    { id: 1, title: "Introduction to Astronomy", status: "completed", xp: 100 },
    { id: 2, title: "The Solar System", status: "completed", xp: 150 },
    { id: 3, title: "Comets & Asteroids", status: "current", xp: 200 },
    { id: 4, title: "Stellar Evolution", status: "locked", xp: 250 },
    { id: 5, title: "Galaxies & Nebulae", status: "locked", xp: 300 },
    { id: 6, title: "Black Holes", status: "locked", xp: 350 },
    { id: 7, title: "Cosmology", status: "locked", xp: 400 },
  ];

  const lessonContent = {
    title: "Comets & Asteroids",
    description: "Learn about the icy wanderers and rocky remnants of our solar system's formation.",
    image: "https://images.unsplash.com/photo-1730051316601-4c71c894e496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21ldCUyMHNwYWNlfGVufDF8fHx8MTc2Nzk3NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    sections: [
      {
        title: "What are Comets?",
        content: "Comets are celestial objects made of ice, dust, and rocky material. Often called 'dirty snowballs,' they originate from the outer reaches of the solar system.",
      },
      {
        title: "Comet Anatomy",
        content: "A comet consists of a nucleus (solid core), coma (gas cloud around the nucleus), and tail (streams of gas and dust extending millions of kilometers).",
      },
      {
        title: "Famous Comets",
        content: "Halley's Comet is perhaps the most famous, visible from Earth every 75-76 years. Other notable comets include Hale-Bopp and Comet NEOWISE.",
      },
    ],
    connectedTopics: ["Kuiper Belt", "Oort Cloud", "Meteor Showers"],
    progress: 60,
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Vertical Roadmap */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-semibold">Learning Path</h2>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"></div>
              
              {/* Lesson nodes */}
              <div className="space-y-4">
                {roadmap.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => lesson.status !== "locked" && setSelectedLesson(lesson.id)}
                    className={`
                      relative pl-14 cursor-pointer
                      ${lesson.status === "locked" ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                  >
                    {/* Node icon */}
                    <div
                      className={`
                        absolute left-0 w-10 h-10 rounded-full flex items-center justify-center
                        ${lesson.status === "completed" ? "bg-green-500/20 border-2 border-green-500" : ""}
                        ${lesson.status === "current" ? "bg-indigo-500/20 border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 animate-pulse" : ""}
                        ${lesson.status === "locked" ? "bg-white/5 border-2 border-white/10" : ""}
                      `}
                    >
                      {lesson.status === "completed" && <CheckCircle className="w-5 h-5 text-green-400" />}
                      {lesson.status === "current" && <Circle className="w-5 h-5 text-indigo-400 fill-indigo-400" />}
                      {lesson.status === "locked" && <Lock className="w-4 h-4 text-white/40" />}
                    </div>

                    {/* Lesson info */}
                    <GlassCard 
                      className={`p-3 ${selectedLesson === lesson.id ? "ring-2 ring-indigo-500" : ""}`}
                    >
                      <h3 className="font-semibold text-sm mb-1">{lesson.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{lesson.xp} XP</span>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Lesson Workspace */}
        <div className="lg:col-span-3 space-y-6">
          {/* Lesson Header */}
          <GlassCard glow className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{lessonContent.title}</h1>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                    Level 3
                  </span>
                </div>
                <p className="text-white/60">{lessonContent.description}</p>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Star className="w-5 h-5 fill-yellow-400" />
                <span className="font-semibold">200 XP</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">Progress</span>
                <span className="text-sm text-white/60">{lessonContent.progress}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lessonContent.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
                />
              </div>
            </div>
          </GlassCard>

          {/* Hero Image */}
          <GlassCard className="overflow-hidden">
            <div className="relative h-80">
              <img
                src={lessonContent.image}
                alt={lessonContent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl font-bold mb-2">Journey Through Space</h2>
                <p className="text-white/80">Discover the mysteries of celestial wanderers</p>
              </div>
            </div>
          </GlassCard>

          {/* Lesson Content */}
          <div className="space-y-4">
            {lessonContent.sections.map((section, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-400 font-semibold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                    <p className="text-white/70 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Connected Topics */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-semibold">Connected Topics</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {lessonContent.connectedTopics.map((topic, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                >
                  {topic}
                </motion.button>
              ))}
            </div>
          </GlassCard>

          {/* Complete Level Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
          >
            Complete Level & Earn 200 XP
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
