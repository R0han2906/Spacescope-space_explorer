// import React, { useState } from "react";
// import { GlassCard } from "./glass-card";
// import { Rocket, MapPin, Calendar, Users, CheckCircle } from "lucide-react";
// import { motion } from "motion/react";

// interface Mission {
//   id: number;
//   name: string;
//   agency: string;
//   status: "Active" | "Planned" | "Complete";
//   launch: string;
//   destination: string;
//   crew?: number;
//   image: string;
//   description: string;
//   extra_details: string;
//   official_link: string;
// }

// export function Missions() {
//   const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
//   const [filter, setFilter] = useState<string>("all");

//   const missions: Mission[] = [
//     {
//     id: 1,
//     name: "Chandrayaan-3",
//     agency: "ISRO",
//     status: "Complete",
//     launch: "July 2023",
//     destination: "Moon (South Pole)",
//     image:
//       "https://cdn.mos.cms.futurecdn.net/tFk3GajhFRKryJYHJ7EekA-970-80.jpg.webp",
//     description:
//       "India's historic lunar mission that successfully landed on the Moon's south pole, making India the 4th country to achieve a soft lunar landing.",
//     extra_details:
//       "Chandrayaan-3 was ISRO's successful lunar mission that made history on August 23, 2023, when the Vikram lander touched down near the Moon's south pole. India became the first country to land near the lunar south pole and the fourth nation to achieve a soft landing on the Moon. The Pragyan rover conducted experiments for 14 days, analyzing lunar soil composition and confirming the presence of sulfur. The mission cost approximately ₹615 crores ($75 million), making it one of the most cost-effective lunar missions in history.",
//     official_link: "https://www.isro.gov.in/Chandrayaan3.html",
//   },
//   {
//     id: 2,
//     name: "Aditya-L1",
//     agency: "ISRO",
//     status: "Active",
//     launch: "September 2023",
//     destination: "Sun-Earth L1 Point",
//     image:
//       "https://img.jagranjosh.com/images/2023/September/292023/aditya-l1-mission-faqs.webp",
//     description:
//       "India's first dedicated solar mission to study the Sun's corona, solar winds, and space weather from the L1 Lagrange point.",
//     extra_details:
//       "Aditya-L1 is India's first space-based observatory to study the Sun, launched on September 2, 2023. The spacecraft successfully reached its destination at the Sun-Earth Lagrange Point 1 (L1) on January 6, 2024, located about 1.5 million kilometers from Earth. It carries seven scientific payloads to observe the photosphere, chromosphere, and corona of the Sun. The mission will help scientists understand solar activities and their impact on space weather, which affects satellites and communication systems on Earth.",
//     official_link: "https://www.isro.gov.in/Aditya-L1.html",
//   },
//   {
//     id: 3,
//     name: "Gaganyaan",
//     agency: "ISRO",
//     status: "Planned",
//     launch: "2025",
//     destination: "Low Earth Orbit",
//     crew: 3,
//     image:
//       "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
//     description:
//       "India's first crewed spaceflight mission, aiming to send three Indian astronauts (Gaganauts) to space.",
//     extra_details:
//       "Gaganyaan is India's ambitious human spaceflight program that aims to send three Indian astronauts (called Gaganauts) to Low Earth Orbit at an altitude of 400 km for a 3-day mission. Four Indian Air Force pilots have been selected and trained at the Yuri Gagarin Cosmonaut Training Centre in Russia. The mission will use the Human Rated Launch Vehicle (HLVM3) and an Orbital Module consisting of a Crew Module and Service Module. ISRO has successfully completed several test flights including the Crew Escape System demonstration. If successful, India will become the fourth nation to independently send humans to space.",
//     official_link: "https://www.isro.gov.in/Gaganyaan.html",
//   },
//   {
//     id: 4,
//     name: "Mangalyaan-2 (MOM 2)",
//     agency: "ISRO",
//     status: "Planned",
//     launch: "2026",
//     destination: "Mars",
//     image:
//       "https://static.toiimg.com/thumb/msid-120306969,width-400,resizemode-4/How-Mangalyaan-2-will-land-on-Mars-ISRO-chief-reveals-plan.jpg",
//     description:
//       "ISRO's second Mars mission featuring an orbiter and a lander to study Martian surface and atmosphere.",
//     extra_details:
//       "Mars Orbiter Mission 2 (MOM 2), also known as Mangalyaan-2, is ISRO's planned follow-up mission to the highly successful Mangalyaan mission of 2014. The mission will include an orbiter and possibly a lander and rover to study Mars' surface, atmosphere, and geology in greater detail. ISRO's first Mars mission made India the first Asian nation to reach Mars orbit and the first nation in the world to do so in its first attempt. MOM 2 will carry more advanced scientific instruments and build upon the success of its predecessor, which operated for over 8 years.",
//     official_link: "https://www.isro.gov.in/",
//   },
//   {
//     id: 5,
//     name: "Shukrayaan-1",
//     agency: "ISRO",
//     status: "Planned",
//     launch: "2028",
//     destination: "Venus",
//     image:
//       "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
//     description:
//       "India's first mission to Venus to study the planet's atmosphere, surface, and volcanic activity.",
//     extra_details:
//       "Shukrayaan-1 is ISRO's planned orbiter mission to Venus, designed to study the planet's geological and volcanic activity, emissions on the ground, wind speed, cloud cover, and other planetary characteristics. The spacecraft will carry a Synthetic Aperture Radar (SAR) that can observe Venus through its thick cloud cover. The mission will also study the atmospheric chemistry of the hottest planet in our solar system. France's CNES and Sweden have expressed interest in contributing instruments. If successful, India will join an elite group of nations that have explored Venus.",
//     official_link: "https://www.isro.gov.in/",
//   },





//     {
//       id: 6,
//       name: "Artemis II",
//       agency: "NASA",
//       status: "Planned",
//       launch: "September 2025",
//       destination: "Moon",
//       crew: 4,
//       image:
//         "https://images.unsplash.com/photo-1710267224216-8eced3320dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBzcGFjZXxlbnwxfHx8fDE3Njc4Njc3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
//       description:
//         "First crewed mission to the Moon in over 50 years, testing systems for future lunar surface missions.",
//       extra_details:
//         "Artemis 2 is NASA's first crewed mission under the Artemis program, planned to send four astronauts on a lunar flyby without landing on the Moon. The crew includes NASA astronauts Reid Wiseman, Victor Glover, Christina Koch, and Canadian astronaut Jeremy Hansen. The mission will use the Space Launch System (SLS) rocket and Orion spacecraft for an approximately 10-day journey around the Moon. It will be the first crewed lunar mission since Apollo 17 in 1972 and is currently scheduled for September 2025 (after delays from the original 2024 timeline).",
//       official_link: "https://www.nasa.gov/mission/artemis-ii/",
//     },
//     {
//       id: 7,
//       name: "Europa Clipper",
//       agency: "NASA",
//       status: "Active",
//       launch: "October 2024",
//       destination: "Jupiter's Moon Europa",
//       image:
//         "https://images.unsplash.com/photo-1630839437035-dac17da580d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXBpdGVyJTIwcGxhbmV0fGVufDF8fHx8MTc2Nzk3NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080",
//       description:
//         "Investigating Europa's potential habitability and subsurface ocean through multiple flybys.",
//       extra_details:
//         "Europa Clipper is NASA's flagship mission to study Jupiter's icy moon Europa, which is believed to harbor a vast subsurface ocean beneath its frozen crust. Launched in October 2024 aboard a SpaceX Falcon Heavy rocket, the spacecraft will perform nearly 50 close flybys of Europa starting in 2030. It carries nine science instruments including ice-penetrating radar, high-resolution cameras, and thermal imaging to analyze the moon's surface and ocean. The mission aims to determine if Europa has the conditions necessary to support life.",
//       official_link: "https://europa.nasa.gov/",
//     },
//     {
//       id: 8,
//       name: "James Webb Space Telescope",
//       agency: "NASA/ESA/CSA",
//       status: "Active",
//       launch: "December 2021",
//       destination: "L2 Lagrange Point",
//       image:
//         "https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMHB1cnBsZXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//       description:
//         "Observing the universe's first galaxies and studying exoplanet atmospheres with unprecedented detail.",
//       extra_details:
//         "The James Webb Space Telescope (JWST) is the largest and most powerful space telescope ever built, developed through a collaboration between NASA, ESA, and CSA. Positioned at the L2 Lagrange point approximately 1.5 million kilometers from Earth, it observes the universe primarily in infrared wavelengths. Its 6.5-meter gold-coated primary mirror and four advanced instruments allow scientists to peer into the earliest epochs of cosmic history. JWST has revolutionized our understanding of exoplanet atmospheres, star formation, and ancient galaxies since becoming fully operational in July 2022.",
//       official_link: "https://webb.nasa.gov/",
//     },
//     {
//       id: 9,
//       name: "Mars Sample Return",
//       agency: "NASA/ESA",
//       status: "Planned",
//       launch: "2028",
//       destination: "Mars",
//       image:
//         "https://images.unsplash.com/photo-1727363584291-433dcd86a0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc2Nzk1OTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
//       description:
//         "Ambitious mission to retrieve rock and soil samples collected by the Perseverance rover.",
//       extra_details:
//         "Mars Sample Return (MSR) is an ambitious joint mission between NASA and ESA designed to bring Martian rock and soil samples back to Earth for detailed laboratory analysis. The samples are currently being collected and cached by NASA's Perseverance rover, which landed in Jezero Crater in February 2021. The complex mission architecture involves a Sample Retrieval Lander, Mars Ascent Vehicle, and Earth Return Orbiter working together. These pristine samples could provide definitive evidence of ancient microbial life on Mars and crucial data for future human exploration.",
//       official_link: "https://mars.nasa.gov/msr/",
//     },
//     {
//       id: 10,
//       name: "Dragonfly",
//       agency: "NASA",
//       status: "Planned",
//       launch: "2027",
//       destination: "Saturn's Moon Titan",
//       image:
//         "https://images.unsplash.com/photo-1660244867765-f656096619af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMGFzdHJvbm9teXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//       description:
//         "A rotorcraft lander that will explore Titan's organic chemistry and habitability.",
//       extra_details:
//         "Dragonfly is a revolutionary NASA mission that will send a car-sized rotorcraft lander to explore Saturn's largest moon, Titan. Unlike any previous planetary mission, Dragonfly will use its eight rotors to fly to dozens of locations across Titan's diverse organic-rich surface. Titan is unique as the only moon with a dense nitrogen atmosphere and stable liquid methane lakes on its surface. Scheduled to launch in 2027 and arrive at Titan in 2034, the mission will study prebiotic chemistry and assess the moon's potential habitability for life.",
//       official_link: "https://dragonfly.jhuapl.edu/",
//     },
//   ];

//   const filteredMissions =
//     filter === "all"
//       ? missions
//       : missions.filter((m) => m.status.toLowerCase() === filter);

//   const filters = ["all", "active", "planned", "complete"];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
//           <Rocket className="w-10 h-10 text-indigo-400" />
//           Space Missions Timeline
//         </h1>
//         <p className="text-white/60 text-lg">
//           Track humanity's journey across the cosmos
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="flex gap-2 mb-8">
//         {filters.map((f) => (
//           <button
//             key={f}
//             onClick={() => setFilter(f)}
//             className={`
//               px-4 py-2 rounded-lg capitalize transition-all duration-300
//               ${
//                 filter === f
//                   ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/50"
//                   : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
//               }
//             `}
//           >
//             {f}
//           </button>
//         ))}
//       </div>

//       {/* Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-20 hidden md:block"></div>

//         {/* Mission Cards */}
//         <div className="space-y-6">
//           {filteredMissions.map((mission, index) => (
//             <motion.div
//               key={mission.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="relative"
//             >
//               {/* Timeline node */}
//               <div className="absolute left-6 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-black shadow-lg shadow-indigo-500/50 hidden md:block"></div>

//               <GlassCard
//                 className="md:ml-20 overflow-hidden cursor-pointer"
//                 onClick={() => setSelectedMission(mission)}
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {/* Image */}
//                   <div className="relative h-64 md:h-auto overflow-hidden">
//                     <img
//                       src={mission.image}
//                       alt={mission.name}
//                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40"></div>
//                     <div className="absolute top-4 left-4">
//                       <span
//                         className={`
//                         px-3 py-1 rounded-full text-xs backdrop-blur-sm
//                         ${mission.status === "Active" ? "bg-green-500/80 text-white" : ""}
//                         ${mission.status === "Planned" ? "bg-blue-500/80 text-white" : ""}
//                         ${mission.status === "Complete" ? "bg-purple-500/80 text-white" : ""}
//                       `}
//                       >
//                         {mission.status}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="md:col-span-2 p-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <div>
//                         <h2 className="text-2xl font-bold mb-1">
//                           {mission.name}
//                         </h2>
//                         <p className="text-indigo-400">{mission.agency}</p>
//                       </div>
//                       {mission.status === "Complete" && (
//                         <CheckCircle className="w-6 h-6 text-green-400" />
//                       )}
//                     </div>

//                     <p className="text-white/70 mb-4 leading-relaxed">
//                       {mission.description}
//                     </p>

//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
//                       <div className="flex items-center gap-2 text-sm">
//                         <Calendar className="w-4 h-4 text-indigo-400" />
//                         <div>
//                           <div className="text-white/60 text-xs">Launch</div>
//                           <div className="text-white">{mission.launch}</div>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm">
//                         <MapPin className="w-4 h-4 text-purple-400" />
//                         <div>
//                           <div className="text-white/60 text-xs">
//                             Destination
//                           </div>
//                           <div className="text-white">
//                             {mission.destination}
//                           </div>
//                         </div>
//                       </div>
//                       {mission.crew && (
//                         <div className="flex items-center gap-2 text-sm">
//                           <Users className="w-4 h-4 text-cyan-400" />
//                           <div>
//                             <div className="text-white/60 text-xs">Crew</div>
//                             <div className="text-white">
//                               {mission.crew} astronauts
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </GlassCard>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Mission Detail Modal */}
//       {selectedMission && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
//           onClick={() => setSelectedMission(null)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="max-w-3xl w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* <GlassCard className="overflow-hidden">
//               <div className="relative h-80">
//                 <img
//                   src={selectedMission.image}
//                   alt={selectedMission.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <h2 className="text-3xl font-bold mb-2">
//                     {selectedMission.name}
//                   </h2>
//                   <p className="text-indigo-400 text-lg">
//                     {selectedMission.agency}
//                   </p>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <p className="text-white/80 mb-6 leading-relaxed text-lg">
//                   {selectedMission.extra_details}
//                 </p>
//                 <button
//                   onClick={() => setSelectedMission(null)}
//                   className="w-full py-3 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
//                 >
//                   Close
//                 </button>
//                 <a
//                   href={selectedMission.official_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full py-3 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors block text-center"
//                 >
//                   Visit Official Website
//                 </a>
//               </div>
//             </GlassCard> */}
//             <GlassCard className="overflow-hidden">
//               <div className="p-8">
//                 <div className="mb-6">
//                   <h2 className="text-3xl font-bold mb-2">
//                     {selectedMission.name}
//                   </h2>
//                   <p className="text-indigo-400 text-lg">
//                     {selectedMission.agency}
//                   </p>
//                 </div>
//                 <p className="text-white/80 mb-6 leading-relaxed text-lg">
//                   {selectedMission.extra_details}
//                 </p>
//                 <button
//                   onClick={() => setSelectedMission(null)}
//                   className="w-full py-3 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
//                 >
//                   Close
//                 </button>
//                 <a
//                   href={selectedMission.official_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full py-3 mt-3 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors block text-center"
//                 >
//                   Visit Official Website
//                 </a>
//               </div>
//             </GlassCard>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { GlassCard } from "./glass-card";
import {
  Rocket,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  ExternalLink,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
  extra_details: string;
  official_link: string;
}

// Move missions data outside component to prevent recreation on each render
const missionsData: Mission[] = [
  {
    id: 1,
    name: "Chandrayaan-3",
    agency: "ISRO",
    status: "Complete",
    launch: "July 2023",
    destination: "Moon (South Pole)",
    image:
      "https://planetary.s3.amazonaws.com/web/assets/pictures/_768x768_crop_center-center_82_line/ch3-pragyan-images-vikram.jpg.webp",
    description:
      "India's historic lunar mission that successfully landed on the Moon's south pole, making India the 4th country to achieve a soft lunar landing.",
    extra_details:
      "Chandrayaan-3 was ISRO's successful lunar mission that made history on August 23, 2023, when the Vikram lander touched down near the Moon's south pole. India became the first country to land near the lunar south pole and the fourth nation to achieve a soft landing on the Moon. The Pragyan rover conducted experiments for 14 days, analyzing lunar soil composition and confirming the presence of sulfur. The mission cost approximately ₹615 crores ($75 million), making it one of the most cost-effective lunar missions in history.",
    official_link: "https://www.isro.gov.in/Chandrayaan3.html",
  },
  {
    id: 2,
    name: "Aditya-L1",
    agency: "ISRO",
    status: "Active",
    launch: "September 2023",
    destination: "Sun-Earth L1 Point",
    image:
      "https://img.jagranjosh.com/images/2023/September/292023/aditya-l1-mission-faqs.webp",
    description:
      "India's first dedicated solar mission to study the Sun's corona, solar winds, and space weather from the L1 Lagrange point.",
    extra_details:
      "Aditya-L1 is India's first space-based observatory to study the Sun, launched on September 2, 2023. The spacecraft successfully reached its destination at the Sun-Earth Lagrange Point 1 (L1) on January 6, 2024, located about 1.5 million kilometers from Earth. It carries seven scientific payloads to observe the photosphere, chromosphere, and corona of the Sun. The mission will help scientists understand solar activities and their impact on space weather, which affects satellites and communication systems on Earth.",
    official_link: "https://www.isro.gov.in/Aditya-L1.html",
  },
  {
    id: 3,
    name: "Gaganyaan",
    agency: "ISRO",
    status: "Planned",
    launch: "2025",
    destination: "Low Earth Orbit",
    crew: 3,
    image:
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description:
      "India's first crewed spaceflight mission, aiming to send three Indian astronauts (Gaganauts) to space.",
    extra_details:
      "Gaganyaan is India's ambitious human spaceflight program that aims to send three Indian astronauts (called Gaganauts) to Low Earth Orbit at an altitude of 400 km for a 3-day mission. Four Indian Air Force pilots have been selected and trained at the Yuri Gagarin Cosmonaut Training Centre in Russia. The mission will use the Human Rated Launch Vehicle (HLVM3) and an Orbital Module consisting of a Crew Module and Service Module. ISRO has successfully completed several test flights including the Crew Escape System demonstration. If successful, India will become the fourth nation to independently send humans to space.",
    official_link: "https://www.isro.gov.in/Gaganyaan.html",
  },
  {
    id: 4,
    name: "Mangalyaan-2 (MOM 2)",
    agency: "ISRO",
    status: "Planned",
    launch: "2026",
    destination: "Mars",
    image:
      "https://static.toiimg.com/thumb/msid-120306969,width-400,resizemode-4/How-Mangalyaan-2-will-land-on-Mars-ISRO-chief-reveals-plan.jpg",
    description:
      "ISRO's second Mars mission featuring an orbiter and a lander to study Martian surface and atmosphere.",
    extra_details:
      "Mars Orbiter Mission 2 (MOM 2), also known as Mangalyaan-2, is ISRO's planned follow-up mission to the highly successful Mangalyaan mission of 2014. The mission will include an orbiter and possibly a lander and rover to study Mars' surface, atmosphere, and geology in greater detail. ISRO's first Mars mission made India the first Asian nation to reach Mars orbit and the first nation in the world to do so in its first attempt. MOM 2 will carry more advanced scientific instruments and build upon the success of its predecessor, which operated for over 8 years.",
    official_link: "https://www.isro.gov.in/",
  },
  {
    id: 5,
    name: "Shukrayaan-1",
    agency: "ISRO",
    status: "Planned",
    launch: "2028",
    destination: "Venus",
    image:
      "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description:
      "India's first mission to Venus to study the planet's atmosphere, surface, and volcanic activity.",
    extra_details:
      "Shukrayaan-1 is ISRO's planned orbiter mission to Venus, designed to study the planet's geological and volcanic activity, emissions on the ground, wind speed, cloud cover, and other planetary characteristics. The spacecraft will carry a Synthetic Aperture Radar (SAR) that can observe Venus through its thick cloud cover. The mission will also study the atmospheric chemistry of the hottest planet in our solar system. France's CNES and Sweden have expressed interest in contributing instruments. If successful, India will join an elite group of nations that have explored Venus.",
    official_link: "https://www.isro.gov.in/",
  },
  {
    id: 6,
    name: "Artemis II",
    agency: "NASA",
    status: "Planned",
    launch: "September 2025",
    destination: "Moon",
    crew: 4,
    image:
      "https://images.unsplash.com/photo-1710267224216-8eced3320dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBzcGFjZXxlbnwxfHx8fDE3Njc4Njc3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "First crewed mission to the Moon in over 50 years, testing systems for future lunar surface missions.",
    extra_details:
      "Artemis 2 is NASA's first crewed mission under the Artemis program, planned to send four astronauts on a lunar flyby without landing on the Moon. The crew includes NASA astronauts Reid Wiseman, Victor Glover, Christina Koch, and Canadian astronaut Jeremy Hansen. The mission will use the Space Launch System (SLS) rocket and Orion spacecraft for an approximately 10-day journey around the Moon. It will be the first crewed lunar mission since Apollo 17 in 1972 and is currently scheduled for September 2025 (after delays from the original 2024 timeline).",
    official_link: "https://www.nasa.gov/mission/artemis-ii/",
  },
  {
    id: 7,
    name: "Europa Clipper",
    agency: "NASA",
    status: "Active",
    launch: "October 2024",
    destination: "Jupiter's Moon Europa",
    image:
      "https://images.unsplash.com/photo-1630839437035-dac17da580d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXBpdGVyJTIwcGxhbmV0fGVufDF8fHx8MTc2Nzk3NjU2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Investigating Europa's potential habitability and subsurface ocean through multiple flybys.",
    extra_details:
      "Europa Clipper is NASA's flagship mission to study Jupiter's icy moon Europa, which is believed to harbor a vast subsurface ocean beneath its frozen crust. Launched in October 2024 aboard a SpaceX Falcon Heavy rocket, the spacecraft will perform nearly 50 close flybys of Europa starting in 2030. It carries nine science instruments including ice-penetrating radar, high-resolution cameras, and thermal imaging to analyze the moon's surface and ocean. The mission aims to determine if Europa has the conditions necessary to support life.",
    official_link: "https://europa.nasa.gov/",
  },
  {
    id: 8,
    name: "James Webb Space Telescope",
    agency: "NASA/ESA/CSA",
    status: "Active",
    launch: "December 2021",
    destination: "L2 Lagrange Point",
    image:
      "https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMHB1cnBsZXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Observing the universe's first galaxies and studying exoplanet atmospheres with unprecedented detail.",
    extra_details:
      "The James Webb Space Telescope (JWST) is the largest and most powerful space telescope ever built, developed through a collaboration between NASA, ESA, and CSA. Positioned at the L2 Lagrange point approximately 1.5 million kilometers from Earth, it observes the universe primarily in infrared wavelengths. Its 6.5-meter gold-coated primary mirror and four advanced instruments allow scientists to peer into the earliest epochs of cosmic history. JWST has revolutionized our understanding of exoplanet atmospheres, star formation, and ancient galaxies since becoming fully operational in July 2022.",
    official_link: "https://webb.nasa.gov/",
  },
  {
    id: 9,
    name: "Mars Sample Return",
    agency: "NASA/ESA",
    status: "Planned",
    launch: "2028",
    destination: "Mars",
    image:
      "https://images.unsplash.com/photo-1727363584291-433dcd86a0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBlYXJ0aCUyMHNwYWNlfGVufDF8fHx8MTc2Nzk1OTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Ambitious mission to retrieve rock and soil samples collected by the Perseverance rover.",
    extra_details:
      "Mars Sample Return (MSR) is an ambitious joint mission between NASA and ESA designed to bring Martian rock and soil samples back to Earth for detailed laboratory analysis. The samples are currently being collected and cached by NASA's Perseverance rover, which landed in Jezero Crater in February 2021. The complex mission architecture involves a Sample Retrieval Lander, Mars Ascent Vehicle, and Earth Return Orbiter working together. These pristine samples could provide definitive evidence of ancient microbial life on Mars and crucial data for future human exploration.",
    official_link: "https://mars.nasa.gov/msr/",
  },
  {
    id: 10,
    name: "Dragonfly",
    agency: "NASA",
    status: "Planned",
    launch: "2027",
    destination: "Saturn's Moon Titan",
    image:
      "https://images.unsplash.com/photo-1660244867765-f656096619af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMGFzdHJvbm9teXxlbnwxfHx8fDE3Njc5NzY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "A rotorcraft lander that will explore Titan's organic chemistry and habitability.",
    extra_details:
      "Dragonfly is a revolutionary NASA mission that will send a car-sized rotorcraft lander to explore Saturn's largest moon, Titan. Unlike any previous planetary mission, Dragonfly will use its eight rotors to fly to dozens of locations across Titan's diverse organic-rich surface. Titan is unique as the only moon with a dense nitrogen atmosphere and stable liquid methane lakes on its surface. Scheduled to launch in 2027 and arrive at Titan in 2034, the mission will study prebiotic chemistry and assess the moon's potential habitability for life.",
    official_link: "https://dragonfly.jhuapl.edu/",
  },
];

export function Missions() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [missions, setMissions] = useState<Mission[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize missions data on component mount
  useEffect(() => {
    setIsLoading(true);
    // Small delay to ensure proper mounting
    const timer = setTimeout(() => {
      setMissions(missionsData);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Filter missions based on selected filter
  const filteredMissions =
    filter === "all"
      ? missions
      : missions.filter((m) => m.status.toLowerCase() === filter);

  const filters = ["all", "active", "planned", "complete"];

  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white/60">Loading missions...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Rocket className="w-10 h-10 text-indigo-400" />
          Space Missions Timeline
        </h1>
        <p className="text-white/60 text-lg">
          Track humanity's journey across the cosmos
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`
              px-4 py-2 rounded-lg capitalize transition-all duration-300
              ${
                filter === f
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
          <AnimatePresence mode="wait">
            {filteredMissions.length > 0 ? (
              filteredMissions.map((mission, index) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-black shadow-lg shadow-indigo-500/50 hidden md:block"></div>

                  <GlassCard
                    className="md:ml-20 overflow-hidden cursor-pointer hover:ring-2 hover:ring-indigo-500/50 transition-all duration-300"
                    onClick={() => setSelectedMission(mission)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Image */}
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <img
                          src={mission.image}
                          alt={mission.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40"></div>
                        <div className="absolute top-4 left-4">
                          <span
                            className={`
                              px-3 py-1 rounded-full text-xs backdrop-blur-sm font-medium
                              ${mission.status === "Active" ? "bg-green-500/80 text-white" : ""}
                              ${mission.status === "Planned" ? "bg-blue-500/80 text-white" : ""}
                              ${mission.status === "Complete" ? "bg-purple-500/80 text-white" : ""}
                            `}
                          >
                            {mission.status}
                          </span>
                        </div>
                        {/* Agency Badge */}
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs backdrop-blur-sm bg-black/50 text-white font-medium">
                            {mission.agency}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h2 className="text-2xl font-bold mb-1">
                              {mission.name}
                            </h2>
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
                              <div className="text-white/60 text-xs">
                                Launch
                              </div>
                              <div className="text-white">{mission.launch}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <div>
                              <div className="text-white/60 text-xs">
                                Destination
                              </div>
                              <div className="text-white">
                                {mission.destination}
                              </div>
                            </div>
                          </div>
                          {mission.crew && (
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="w-4 h-4 text-cyan-400" />
                              <div>
                                <div className="text-white/60 text-xs">
                                  Crew
                                </div>
                                <div className="text-white">
                                  {mission.crew} astronauts
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Rocket className="w-16 h-16 text-white/20 mx-auto mb-4" />
                <p className="text-white/60 text-lg">
                  No missions found for this filter.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mission Detail Modal */}
      <AnimatePresence>
        {selectedMission && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedMission(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="overflow-hidden relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMission(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${selectedMission.status === "Active" ? "bg-green-500/20 text-green-300" : ""}
                          ${selectedMission.status === "Planned" ? "bg-blue-500/20 text-blue-300" : ""}
                          ${selectedMission.status === "Complete" ? "bg-purple-500/20 text-purple-300" : ""}
                        `}
                      >
                        {selectedMission.status}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/70">
                        {selectedMission.agency}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedMission.name}
                    </h2>
                    <p className="text-indigo-400 text-lg">
                      {selectedMission.destination}
                    </p>
                  </div>

                  {/* Mission Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-white/60 text-xs mb-1">
                        Launch Date
                      </div>
                      <div className="text-white font-medium">
                        {selectedMission.launch}
                      </div>
                    </div>
                    <div>
                      <div className="text-white/60 text-xs mb-1">
                        Destination
                      </div>
                      <div className="text-white font-medium">
                        {selectedMission.destination}
                      </div>
                    </div>
                    {selectedMission.crew && (
                      <div>
                        <div className="text-white/60 text-xs mb-1">
                          Crew Size
                        </div>
                        <div className="text-white font-medium">
                          {selectedMission.crew} astronauts
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Extra Details */}
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">
                    {selectedMission.extra_details}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <a
                      href={selectedMission.official_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-lg bg-indigo-500/30 text-indigo-300 hover:bg-indigo-500/40 transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Official Website
                    </a>
                    <button
                      onClick={() => setSelectedMission(null)}
                      className="w-full py-3 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 transition-colors font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
