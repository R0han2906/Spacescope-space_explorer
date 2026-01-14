// import React, { useState } from "react";
// import { GlassCard } from "./glass-card";
// import { Lock, CheckCircle, Circle, Star, ArrowRight, Sparkles, BookOpen } from "lucide-react";
// import { motion } from "motion/react";

// interface LessonNode {
//   id: number;
//   title: string;
//   status: "completed" | "current" | "locked";
//   xp: number;
// }

// export function Explore() {
//   const [selectedLesson, setSelectedLesson] = useState<number>(3);

//   const roadmap: LessonNode[] = [
//     { id: 1, title: "Introduction to Astronomy", status: "completed", xp: 100 },
//     { id: 2, title: "The Solar System", status: "completed", xp: 150 },
//     { id: 3, title: "Comets & Asteroids", status: "current", xp: 200 },
//     { id: 4, title: "Stellar Evolution", status: "locked", xp: 250 },
//     { id: 5, title: "Galaxies & Nebulae", status: "locked", xp: 300 },
//     { id: 6, title: "Black Holes", status: "locked", xp: 350 },
//     { id: 7, title: "Cosmology", status: "locked", xp: 400 },
//   ];

//   const lessonContent = {
//     title: "Comets & Asteroids",
//     description: "Learn about the icy wanderers and rocky remnants of our solar system's formation.",
//     image: "https://images.unsplash.com/photo-1730051316601-4c71c894e496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21ldCUyMHNwYWNlfGVufDF8fHx8MTc2Nzk3NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
//     sections: [
//       {
//         title: "What are Comets?",
//         content: "Comets are celestial objects made of ice, dust, and rocky material. Often called 'dirty snowballs,' they originate from the outer reaches of the solar system.",
//       },
//       {
//         title: "Comet Anatomy",
//         content: "A comet consists of a nucleus (solid core), coma (gas cloud around the nucleus), and tail (streams of gas and dust extending millions of kilometers).",
//       },
//       {
//         title: "Famous Comets",
//         content: "Halley's Comet is perhaps the most famous, visible from Earth every 75-76 years. Other notable comets include Hale-Bopp and Comet NEOWISE.",
//       },
//     ],
//     connectedTopics: ["Kuiper Belt", "Oort Cloud", "Meteor Showers"],
//     progress: 60,
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Left: Vertical Roadmap */}
//         <div className="lg:col-span-1">
//           <div className="sticky top-24 space-y-4">
//             <div className="flex items-center gap-2 mb-6">
//               <BookOpen className="w-5 h-5 text-indigo-400" />
//               <h2 className="text-2xl font-semibold">Learning Path</h2>
//             </div>
//             <div className="relative">
//               {/* Vertical line */}
//               <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"></div>
              
//               {/* Lesson nodes */}
//               <div className="space-y-4">
//                 {roadmap.map((lesson, index) => (
//                   <motion.div
//                     key={lesson.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     onClick={() => lesson.status !== "locked" && setSelectedLesson(lesson.id)}
//                     className={`
//                       relative pl-14 cursor-pointer
//                       ${lesson.status === "locked" ? "opacity-50 cursor-not-allowed" : ""}
//                     `}
//                   >
//                     {/* Node icon */}
//                     <div
//                       className={`
//                         absolute left-0 w-10 h-10 rounded-full flex items-center justify-center
//                         ${lesson.status === "completed" ? "bg-green-500/20 border-2 border-green-500" : ""}
//                         ${lesson.status === "current" ? "bg-indigo-500/20 border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 animate-pulse" : ""}
//                         ${lesson.status === "locked" ? "bg-white/5 border-2 border-white/10" : ""}
//                       `}
//                     >
//                       {lesson.status === "completed" && <CheckCircle className="w-5 h-5 text-green-400" />}
//                       {lesson.status === "current" && <Circle className="w-5 h-5 text-indigo-400 fill-indigo-400" />}
//                       {lesson.status === "locked" && <Lock className="w-4 h-4 text-white/40" />}
//                     </div>

//                     {/* Lesson info */}
//                     <GlassCard 
//                       className={`p-3 ${selectedLesson === lesson.id ? "ring-2 ring-indigo-500" : ""}`}
//                     >
//                       <h3 className="font-semibold text-sm mb-1">{lesson.title}</h3>
//                       <div className="flex items-center gap-2 text-xs text-white/60">
//                         <Star className="w-3 h-3 text-yellow-400" />
//                         <span>{lesson.xp} XP</span>
//                       </div>
//                     </GlassCard>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: Lesson Workspace */}
//         <div className="lg:col-span-3 space-y-6">
//           {/* Lesson Header */}
//           <GlassCard glow className="p-6">
//             <div className="flex items-start justify-between mb-4">
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <h1 className="text-3xl font-bold">{lessonContent.title}</h1>
//                   <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
//                     Level 3
//                   </span>
//                 </div>
//                 <p className="text-white/60">{lessonContent.description}</p>
//               </div>
//               <div className="flex items-center gap-2 text-yellow-400">
//                 <Star className="w-5 h-5 fill-yellow-400" />
//                 <span className="font-semibold">200 XP</span>
//               </div>
//             </div>

//             {/* Progress bar */}
//             <div className="mt-6">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm text-white/60">Progress</span>
//                 <span className="text-sm text-white/60">{lessonContent.progress}%</span>
//               </div>
//               <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${lessonContent.progress}%` }}
//                   transition={{ duration: 1, ease: "easeOut" }}
//                   className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
//                 />
//               </div>
//             </div>
//           </GlassCard>

//           {/* Hero Image */}
//           <GlassCard className="overflow-hidden">
//             <div className="relative h-80">
//               <img
//                 src={lessonContent.image}
//                 alt={lessonContent.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
//               <div className="absolute bottom-6 left-6 right-6">
//                 <h2 className="text-2xl font-bold mb-2">Journey Through Space</h2>
//                 <p className="text-white/80">Discover the mysteries of celestial wanderers</p>
//               </div>
//             </div>
//           </GlassCard>

//           {/* Lesson Content */}
//           <div className="space-y-4">
//             {lessonContent.sections.map((section, index) => (
//               <GlassCard key={index} className="p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
//                     <span className="text-indigo-400 font-semibold">{index + 1}</span>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
//                     <p className="text-white/70 leading-relaxed">{section.content}</p>
//                   </div>
//                 </div>
//               </GlassCard>
//             ))}
//           </div>

//           {/* Connected Topics */}
//           <GlassCard className="p-6">
//             <div className="flex items-center gap-2 mb-4">
//               <Sparkles className="w-5 h-5 text-indigo-400" />
//               <h3 className="text-xl font-semibold">Connected Topics</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {lessonContent.connectedTopics.map((topic, index) => (
//                 <motion.button
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
//                 >
//                   {topic}
//                 </motion.button>
//               ))}
//             </div>
//           </GlassCard>

//           {/* Complete Level Button */}
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
//           >
//             Complete Level & Earn 200 XP
//             <ArrowRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { GlassCard } from "./glass-card";
import {
  Lock,
  CheckCircle,
  Circle,
  Star,
  ArrowRight,
  Sparkles,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";

interface LessonSection {
  title: string;
  content: string;
}

interface ConnectedTopic {
  name: string;
  nasaLink: string;
}

interface LessonContent {
  title: string;
  description: string;
  image: string;
  sections: LessonSection[];
  connectedTopics: ConnectedTopic[];
  xp: number;
}

interface LessonNode {
  id: number;
  title: string;
  status: "completed" | "current" | "locked";
  xp: number;
}

interface UserProgress {
  totalXP: number;
  completedLessons: number[];
  currentLesson: number;
}

// Custom hook to manage progress with localStorage
const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem("spaceExplorerProgress");
    return saved
      ? JSON.parse(saved)
      : {
          totalXP: 0,
          completedLessons: [],
          currentLesson: 1,
        };
  });

  useEffect(() => {
    localStorage.setItem("spaceExplorerProgress", JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (lessonId: number, xp: number) => {
    setProgress((prev) => ({
      totalXP: prev.totalXP + xp,
      completedLessons: [...prev.completedLessons, lessonId],
      currentLesson: lessonId + 1,
    }));
  };

  const resetProgress = () => {
    setProgress({
      totalXP: 0,
      completedLessons: [],
      currentLesson: 1,
    });
  };

  return { progress, completeLesson, resetProgress };
};

// Export progress for use in other components
export const getStoredProgress = (): UserProgress => {
  const saved = localStorage.getItem("spaceExplorerProgress");
  return saved
    ? JSON.parse(saved)
    : {
        totalXP: 0,
        completedLessons: [],
        currentLesson: 1,
      };
};

export function Explore() {
  const { progress, completeLesson } = useProgress();
  const [selectedLesson, setSelectedLesson] = useState<number>(
    progress.currentLesson
  );
  const [lessonProgress, setLessonProgress] = useState<number>(0);

  // All lesson contents
  const allLessonContents: Record<number, LessonContent> = {
    1: {
      title: "Introduction to Astronomy",
      description:
        "Begin your cosmic journey by understanding the fundamentals of astronomy and our place in the universe.",
      image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      sections: [
        {
          title: "What is Astronomy?",
          content:
            "Astronomy is the scientific study of celestial objects, space, and the universe as a whole. It is one of the oldest natural sciences, dating back thousands of years to ancient civilizations who tracked the stars.",
        },
        {
          title: "Tools of the Trade",
          content:
            "Modern astronomers use telescopes, satellites, and space probes to observe the cosmos. From radio telescopes to the James Webb Space Telescope, these instruments help us see beyond what the naked eye can perceive.",
        },
        {
          title: "The Night Sky",
          content:
            "Learning to navigate the night sky is fundamental to astronomy. Constellations serve as a map, helping us locate stars, planets, and deep-sky objects throughout the year.",
        },
      ],
      connectedTopics: [
        {
          name: "Telescopes",
          nasaLink: "https://science.nasa.gov/astrophysics/focus-areas/how-do-we-observe-the-universe",
        },
        {
          name: "Constellations",
          nasaLink: "https://science.nasa.gov/skywatching/",
        },
        {
          name: "Light & Spectrum",
          nasaLink: "https://science.nasa.gov/ems/",
        },
      ],
      xp: 100,
    },
    2: {
      title: "The Solar System",
      description:
        "Explore our cosmic neighborhood - the planets, moons, and other objects that orbit our Sun.",
      image:
        "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      sections: [
        {
          title: "The Sun - Our Star",
          content:
            "The Sun is a G-type main-sequence star at the center of our solar system. It contains 99.86% of the solar system's mass and provides the energy necessary for life on Earth.",
        },
        {
          title: "The Inner Planets",
          content:
            "Mercury, Venus, Earth, and Mars are the rocky terrestrial planets. Each has unique characteristics - from Mercury's extreme temperatures to Mars' rusty red surface.",
        },
        {
          title: "The Outer Planets",
          content:
            "Jupiter, Saturn, Uranus, and Neptune are the gas and ice giants. These massive planets have numerous moons and, in the case of Saturn, spectacular ring systems.",
        },
        {
          title: "Dwarf Planets & Beyond",
          content:
            "Pluto, Eris, and other dwarf planets exist in the outer reaches. The Kuiper Belt and Oort Cloud contain millions of icy bodies waiting to be explored.",
        },
      ],
      connectedTopics: [
        {
          name: "Mars Exploration",
          nasaLink: "https://mars.nasa.gov/",
        },
        {
          name: "Jupiter & Moons",
          nasaLink: "https://science.nasa.gov/jupiter/",
        },
        {
          name: "Saturn's Rings",
          nasaLink: "https://science.nasa.gov/saturn/",
        },
      ],
      xp: 150,
    },
    3: {
      title: "Comets & Asteroids",
      description:
        "Learn about the icy wanderers and rocky remnants of our solar system's formation.",
      image:
        "https://images.unsplash.com/photo-1730051316601-4c71c894e496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      sections: [
        {
          title: "What are Comets?",
          content:
            "Comets are celestial objects made of ice, dust, and rocky material. Often called 'dirty snowballs,' they originate from the outer reaches of the solar system in the Kuiper Belt and Oort Cloud.",
        },
        {
          title: "Comet Anatomy",
          content:
            "A comet consists of a nucleus (solid core), coma (gas cloud around the nucleus), and tail (streams of gas and dust extending millions of kilometers). The tail always points away from the Sun.",
        },
        {
          title: "Asteroids - Rocky Remnants",
          content:
            "Asteroids are rocky objects primarily found in the asteroid belt between Mars and Jupiter. They range from small boulders to dwarf planet Ceres, nearly 1000 km in diameter.",
        },
        {
          title: "Famous Comets & Missions",
          content:
            "Halley's Comet is visible every 75-76 years. NASA's OSIRIS-REx mission successfully collected samples from asteroid Bennu, returning to Earth in 2023.",
        },
      ],
      connectedTopics: [
        {
          name: "Kuiper Belt",
          nasaLink: "https://science.nasa.gov/solar-system/kuiper-belt/",
        },
        {
          name: "Oort Cloud",
          nasaLink: "https://science.nasa.gov/solar-system/oort-cloud/",
        },
        {
          name: "OSIRIS-REx Mission",
          nasaLink: "https://science.nasa.gov/mission/osiris-rex/",
        },
      ],
      xp: 200,
    },
    4: {
      title: "Stellar Evolution",
      description:
        "Discover the life cycles of stars - from their birth in nebulae to their spectacular deaths.",
      image:
        "https://images.unsplash.com/photo-1465101162946-4377e57745c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      sections: [
        {
          title: "Star Formation",
          content:
            "Stars are born in giant molecular clouds called nebulae. Gravity causes regions of gas and dust to collapse, forming protostars that eventually ignite nuclear fusion in their cores.",
        },
        {
          title: "Main Sequence Stars",
          content:
            "Most of a star's life is spent on the main sequence, where it fuses hydrogen into helium. Our Sun has been on the main sequence for about 4.6 billion years and will remain so for another 5 billion.",
        },
        {
          title: "Red Giants & Supergiants",
          content:
            "When stars exhaust their hydrogen fuel, they expand into red giants. Massive stars become supergiants, growing to hundreds of times the Sun's diameter.",
        },
        {
          title: "Stellar Deaths",
          content:
            "Low-mass stars shed their outer layers as planetary nebulae, leaving white dwarfs. Massive stars explode as supernovae, creating neutron stars or black holes.",
        },
      ],
      connectedTopics: [
        {
          name: "Nebulae",
          nasaLink: "https://science.nasa.gov/universe/nebulae/",
        },
        {
          name: "Supernovae",
          nasaLink: "https://science.nasa.gov/universe/stars/supernovae/",
        },
        {
          name: "White Dwarfs",
          nasaLink: "https://science.nasa.gov/universe/stars/white-dwarfs/",
        },
      ],
      xp: 250,
    },
    5: {
      title: "Galaxies & Nebulae",
      description:
        "Explore the vast cosmic structures that contain billions of stars and the stellar nurseries where new stars are born.",
      image:
        "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      sections: [
        {
          title: "What are Galaxies?",
          content:
            "Galaxies are massive systems of stars, gas, dust, and dark matter held together by gravity. The observable universe contains an estimated 2 trillion galaxies.",
        },
        {
          title: "The Milky Way",
          content:
            "Our home galaxy is a barred spiral galaxy containing 100-400 billion stars. Our solar system is located in one of the spiral arms, about 26,000 light-years from the galactic center.",
        },
        {
          title: "Types of Galaxies",
          content:
            "Galaxies come in three main types: spiral (like the Milky Way), elliptical (rounded shapes), and irregular (no defined shape). Each type tells a story of cosmic evolution.",
        },
        {
          title: "Nebulae - Cosmic Clouds",
          content:
            "Nebulae are vast clouds of gas and dust. Emission nebulae glow from ionized gas, reflection nebulae reflect starlight, and dark nebulae block light from objects behind them.",
        },
      ],
      connectedTopics: [
        {
          name: "Milky Way",
          nasaLink: "https://science.nasa.gov/universe/galaxies/milky-way/",
        },
        {
          name: "Andromeda Galaxy",
          nasaLink: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-31/",
        },
        {
          name: "Hubble Deep Field",
          nasaLink: "https://science.nasa.gov/mission/hubble/science/hubble-deep-fields/",
        },
      ],
      xp: 300,
    },
    6: {
      title: "Black Holes",
      description:
        "Venture into the most extreme objects in the universe - where gravity is so strong that nothing can escape.",
      image:
        "https://images.unsplash.com/photo-1634176866089-b633f4aec882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      sections: [
        {
          title: "What are Black Holes?",
          content:
            "Black holes are regions of spacetime where gravity is so intense that nothing, not even light, can escape once it crosses the event horizon. They form when massive stars collapse.",
        },
        {
          title: "Types of Black Holes",
          content:
            "Stellar black holes form from collapsed stars (3-10 solar masses). Supermassive black holes exist at galaxy centers (millions to billions of solar masses). Intermediate black holes bridge the gap.",
        },
        {
          title: "Event Horizon & Singularity",
          content:
            "The event horizon is the boundary beyond which escape is impossible. At the center lies the singularity - a point of theoretically infinite density where our physics breaks down.",
        },
        {
          title: "Observing Black Holes",
          content:
            "We detect black holes through their effects on nearby matter. The Event Horizon Telescope captured the first image of a black hole's shadow in galaxy M87 in 2019.",
        },
      ],
      connectedTopics: [
        {
          name: "Event Horizon Telescope",
          nasaLink: "https://science.nasa.gov/universe/black-holes/",
        },
        {
          name: "Sagittarius A*",
          nasaLink: "https://science.nasa.gov/universe/black-holes/anatomy-of-a-black-hole/",
        },
        {
          name: "Gravitational Waves",
          nasaLink: "https://science.nasa.gov/astrophysics/focus-areas/gravitational-waves/",
        },
      ],
      xp: 350,
    },
    7: {
      title: "Cosmology",
      description:
        "Study the origin, evolution, and ultimate fate of the universe itself.",
      image:
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      sections: [
        {
          title: "The Big Bang",
          content:
            "The universe began approximately 13.8 billion years ago in an incredibly hot, dense state. The Big Bang wasn't an explosion in space - it was the rapid expansion of space itself.",
        },
        {
          title: "Cosmic Microwave Background",
          content:
            "The CMB is the afterglow of the Big Bang - light released when the universe cooled enough for atoms to form. It provides a snapshot of the universe when it was just 380,000 years old.",
        },
        {
          title: "Dark Matter & Dark Energy",
          content:
            "Ordinary matter makes up only 5% of the universe. Dark matter (27%) provides gravitational scaffolding for galaxies. Dark energy (68%) drives the accelerating expansion of the universe.",
        },
        {
          title: "The Fate of the Universe",
          content:
            "The universe continues to expand at an accelerating rate. Possible futures include the Big Freeze (eternal expansion), Big Rip (dark energy tears everything apart), or Big Crunch (collapse).",
        },
      ],
      connectedTopics: [
        {
          name: "Big Bang Theory",
          nasaLink: "https://science.nasa.gov/universe/overview/",
        },
        {
          name: "Dark Energy",
          nasaLink: "https://science.nasa.gov/universe/dark-energy-dark-matter/",
        },
        {
          name: "WMAP Mission",
          nasaLink: "https://science.nasa.gov/mission/wmap/",
        },
      ],
      xp: 400,
    },
  };

  // Generate roadmap based on progress
  const roadmap: LessonNode[] = [
    { id: 1, title: "Introduction to Astronomy", xp: 100 },
    { id: 2, title: "The Solar System", xp: 150 },
    { id: 3, title: "Comets & Asteroids", xp: 200 },
    { id: 4, title: "Stellar Evolution", xp: 250 },
    { id: 5, title: "Galaxies & Nebulae", xp: 300 },
    { id: 6, title: "Black Holes", xp: 350 },
    { id: 7, title: "Cosmology", xp: 400 },
  ].map((lesson) => ({
    ...lesson,
    status: progress.completedLessons.includes(lesson.id)
      ? "completed"
      : lesson.id === progress.currentLesson
        ? "current"
        : "locked",
  })) as LessonNode[];

  const currentLessonContent = allLessonContents[selectedLesson];

  // Simulate reading progress
  useEffect(() => {
    if (selectedLesson === progress.currentLesson) {
      setLessonProgress(0);
      const interval = setInterval(() => {
        setLessonProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    } else if (progress.completedLessons.includes(selectedLesson)) {
      setLessonProgress(100);
    }
  }, [selectedLesson, progress.currentLesson, progress.completedLessons]);

  const handleCompleteLesson = () => {
    if (
      selectedLesson === progress.currentLesson &&
      lessonProgress >= 100
    ) {
      completeLesson(selectedLesson, currentLessonContent.xp);
      // Auto-select next lesson if available
      if (selectedLesson < 7) {
        setSelectedLesson(selectedLesson + 1);
      }
    }
  };

  const handleTopicClick = (nasaLink: string) => {
    window.open(nasaLink, "_blank", "noopener,noreferrer");
  };

  const isLessonAccessible = (lessonId: number) => {
    return (
      progress.completedLessons.includes(lessonId) ||
      lessonId === progress.currentLesson
    );
  };

  const canCompleteCurrentLesson =
    selectedLesson === progress.currentLesson && lessonProgress >= 100;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* XP Display Banner */}
      <GlassCard className="p-4 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Total Experience</p>
              <p className="text-2xl font-bold text-yellow-400">
                {progress.totalXP} XP
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white/60 text-sm">Lessons Completed</p>
              <p className="text-xl font-semibold">
                {progress.completedLessons.length} / 7
              </p>
            </div>
            <div className="w-24 h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                style={{
                  width: `${(progress.completedLessons.length / 7) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </GlassCard>

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
                    onClick={() =>
                      isLessonAccessible(lesson.id) &&
                      setSelectedLesson(lesson.id)
                    }
                    className={`
                      relative pl-14 cursor-pointer
                      ${lesson.status === "locked" ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                  >
                    {/* Node icon */}
                    <div
                      className={`
                        absolute left-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                        ${lesson.status === "completed" ? "bg-green-500/20 border-2 border-green-500" : ""}
                        ${lesson.status === "current" ? "bg-indigo-500/20 border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 animate-pulse" : ""}
                        ${lesson.status === "locked" ? "bg-white/5 border-2 border-white/10" : ""}
                      `}
                    >
                      {lesson.status === "completed" && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                      {lesson.status === "current" && (
                        <Circle className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                      )}
                      {lesson.status === "locked" && (
                        <Lock className="w-4 h-4 text-white/40" />
                      )}
                    </div>

                    {/* Lesson info */}
                    <GlassCard
                      className={`p-3 transition-all duration-300 ${
                        selectedLesson === lesson.id
                          ? "ring-2 ring-indigo-500"
                          : ""
                      } ${isLessonAccessible(lesson.id) ? "hover:bg-white/10" : ""}`}
                    >
                      <h3 className="font-semibold text-sm mb-1">
                        {lesson.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{lesson.xp} XP</span>
                        {lesson.status === "completed" && (
                          <span className="text-green-400 ml-2">✓ Done</span>
                        )}
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
                  <h1 className="text-3xl font-bold">
                    {currentLessonContent.title}
                  </h1>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                    Level {selectedLesson}
                  </span>
                  {progress.completedLessons.includes(selectedLesson) && (
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Completed
                    </span>
                  )}
                </div>
                <p className="text-white/60">
                  {currentLessonContent.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Star className="w-5 h-5 fill-yellow-400" />
                <span className="font-semibold">
                  {currentLessonContent.xp} XP
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">Progress</span>
                <span className="text-sm text-white/60">{lessonProgress}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lessonProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`h-full ${
                    lessonProgress >= 100
                      ? "bg-gradient-to-r from-green-500 to-emerald-400"
                      : "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
                  }`}
                />
              </div>
            </div>
          </GlassCard>

          {/* Hero Image */}
          <GlassCard className="overflow-hidden">
            <div className="relative h-80">
              <img
                src={currentLessonContent.image}
                alt={currentLessonContent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl font-bold mb-2">
                  Level {selectedLesson}: {currentLessonContent.title}
                </h2>
                <p className="text-white/80">
                  Discover the mysteries of the cosmos
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Lesson Content */}
          <div className="space-y-4">
            {currentLessonContent.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-400 font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        {section.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Connected Topics */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-semibold">
                Explore More on NASA
              </h3>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Click on any topic to learn more from NASA's official resources
            </p>
            <div className="flex flex-wrap gap-3">
              {currentLessonContent.connectedTopics.map((topic, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTopicClick(topic.nasaLink)}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  {topic.name}
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </motion.button>
              ))}
            </div>
          </GlassCard>

          {/* Complete Level Button */}
          {selectedLesson === progress.currentLesson ? (
            <motion.button
              whileHover={canCompleteCurrentLesson ? { scale: 1.02 } : {}}
              whileTap={canCompleteCurrentLesson ? { scale: 0.98 } : {}}
              onClick={handleCompleteLesson}
              disabled={!canCompleteCurrentLesson}
              className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                canCompleteCurrentLesson
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 cursor-pointer"
                  : "bg-white/10 text-white/40 cursor-not-allowed"
              }`}
            >
              {canCompleteCurrentLesson ? (
                <>
                  Complete Level & Earn {currentLessonContent.xp} XP
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Reading... {lessonProgress}% Complete
                </>
              )}
            </motion.button>
          ) : progress.completedLessons.includes(selectedLesson) ? (
            <div className="w-full py-4 rounded-xl bg-green-500/20 text-green-300 font-semibold flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Lesson Completed - {currentLessonContent.xp} XP Earned
            </div>
          ) : (
            <div className="w-full py-4 rounded-xl bg-white/10 text-white/40 font-semibold flex items-center justify-center gap-2">
              <Lock className="w-5 h-5" />
              Complete previous lessons to unlock
            </div>
          )}

          {/* Congratulations Message */}
          {progress.completedLessons.length === 7 && (
            <GlassCard glow className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold mb-2">
                  Congratulations, Space Explorer!
                </h2>
                <p className="text-white/60 mb-4">
                  You've completed all lessons and earned {progress.totalXP} XP!
                </p>
                <p className="text-indigo-400">
                  You are now a certified Cosmic Scholar
                </p>
              </motion.div>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}