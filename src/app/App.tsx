import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Navigation } from "./components/navigation";
import { Dashboard } from "./components/dashboard";
import { Explore } from "./components/explore";
import { Missions } from "./components/missions";
import { Community } from "./components/community";
import { Profile } from "./components/profile";
import { SplashScreen } from "./components/splash-screen";

// Page Transition Wrapper Component
function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  const getCurrentView = () => {
    const path = location.pathname;
    if (path === "/") return "dashboard";
    return path.replace("/", "");
  };

  const handleNavigate = (view: string) => {
    if (view === "dashboard") {
      navigate("/");
    } else {
      navigate(`/${view}`);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentView={getCurrentView()} onNavigate={handleNavigate} />
      
      {/* AnimatePresence for smooth page transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            }
          />
          <Route
            path="/explore"
            element={
              <PageTransition>
                <Explore />
              </PageTransition>
            }
          />
          <Route
            path="/missions"
            element={
              <PageTransition>
                <Missions />
              </PageTransition>
            }
          />
          <Route
            path="/community"
            element={
              <PageTransition>
                <Community />
              </PageTransition>
            }
          />
          <Route
            path="/profile"
            element={
              <PageTransition>
                <Profile />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}