import React, { useState } from "react";
import { Navigation } from "./components/navigation";
import { Dashboard } from "./components/dashboard";
import { Explore } from "./components/explore";
import { Missions } from "./components/missions";
import { Community } from "./components/community";
import { Profile } from "./components/profile";
import { SplashScreen } from "./components/splash-screen";

export default function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "explore":
        return <Explore />;
      case "missions":
        return <Missions />;
      case "community":
        return <Community />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentView={currentView} onNavigate={setCurrentView} />
      <main>{renderView()}</main>
    </div>
  );
}