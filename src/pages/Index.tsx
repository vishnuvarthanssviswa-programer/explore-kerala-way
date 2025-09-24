import { useState, useEffect } from "react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import SplashScreen from "@/components/SplashScreen";
import HomeScreen from "@/components/HomeScreen";
import ExploreScreen from "@/components/ExploreScreen";
import TripPlannerScreen from "@/components/TripPlannerScreen";
import ProfileScreen from "@/components/ProfileScreen";
import QRCodeScreen from "@/components/QRCodeScreen";
import JournalScreen from "@/components/JournalScreen";
import MapScreen from "@/components/MapScreen";
import BookTicketsScreen from "@/components/BookTicketsScreen";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setCurrentScreen("home");
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  // Don't show splash on subsequent navigation
  useEffect(() => {
    if (currentScreen !== "splash") {
      setShowSplash(false);
    }
  }, [currentScreen]);

  if (showSplash && currentScreen === "splash") {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onNavigate={handleNavigate} />;
      case "explore":
        return <ExploreScreen onNavigate={handleNavigate} />;
      case "trip-planner":
        return <TripPlannerScreen onNavigate={handleNavigate} />;
      case "profile":
        return <ProfileScreen onNavigate={handleNavigate} />;
      case "qr-download":
        return <QRCodeScreen onNavigate={handleNavigate} />;
      case "journal":
        return <JournalScreen onNavigate={handleNavigate} />;
      case "map":
        return <MapScreen onNavigate={handleNavigate} />;
      case "book-tickets":
        return <BookTicketsScreen onNavigate={handleNavigate} />;
      case "nearby-services":
        return <MapScreen onNavigate={handleNavigate} />;
      case "my-documents":
      case "travel-insurance":
      case "help":
      case "emergency":
      case "travel-advisory":
      case "report-issue":
      case "login":
        return (
          <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground mb-6">This feature will be available once you connect to Supabase</p>
              <button 
                onClick={() => handleNavigate("home")}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar currentScreen={currentScreen} onNavigate={handleNavigate} />
        <SidebarInset>
          <div className="flex h-14 items-center gap-2 border-b border-border/50 px-4">
            <SidebarTrigger />
            <div className="text-xl font-bold text-primary">Trip Verse</div>
          </div>
          <main className="flex-1">
            {renderScreen()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
