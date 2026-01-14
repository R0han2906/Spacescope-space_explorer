// import React from "react";
// import { Telescope, Compass, Rocket, Users, User } from "lucide-react";

// interface NavigationProps {
//   currentView: string;
//   onNavigate: (view: string) => void;
// }

// export function Navigation({ currentView, onNavigate }: NavigationProps) {
//   const navItems = [
//     { id: "dashboard", label: "Dashboard", icon: Telescope },
//     { id: "explore", label: "Explore", icon: Compass },
//     { id: "missions", label: "Missions", icon: Rocket },
//     { id: "community", label: "Community", icon: Users },
//     { id: "profile", label: "Profile", icon: User },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/50">
//               <Telescope className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
//               SpaceScope
//             </span>
//           </div>

//           {/* Navigation Items */}
//           <div className="flex items-center gap-1">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = currentView === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => onNavigate(item.id)}
//                   className={`
//                     px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300
//                     ${
//                       isActive
//                         ? "bg-indigo-500/20 text-indigo-300 shadow-lg shadow-indigo-500/20"
//                         : "text-white/60 hover:text-white hover:bg-white/5"
//                     }
//                   `}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span className="hidden md:inline">{item.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { Telescope, Compass, Rocket, Users, User } from "lucide-react";
import { motion } from "motion/react";

interface NavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Navigation({ currentView, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Telescope },
    { id: "explore", label: "Explore", icon: Compass },
    { id: "missions", label: "Missions", icon: Rocket },
    { id: "community", label: "Community", icon: Users },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate("dashboard")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/50"
              animate={{
                boxShadow: [
                  "0 10px 15px -3px rgba(99, 102, 241, 0.3)",
                  "0 10px 15px -3px rgba(99, 102, 241, 0.5)",
                  "0 10px 15px -3px rgba(99, 102, 241, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Telescope className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              SpaceScope
            </span>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1 relative">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`
                    relative px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 z-10
                    ${
                      isActive
                        ? "text-indigo-300"
                        : "text-white/60 hover:text-white"
                    }
                  `}
                >
                  {/* Active background indicator - optimized */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-indigo-500/20 rounded-lg shadow-lg shadow-indigo-500/20"
                      initial={false}
                      transition={{
                        type: "tween",
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      style={{
                        zIndex: -1,
                      }}
                    />
                  )}

                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
