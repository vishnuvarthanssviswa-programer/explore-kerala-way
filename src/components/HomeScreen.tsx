import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Calendar, 
  BookOpen, 
  Camera, 
  User, 
  Compass,
  Cloud,
  Bell,
  Star,
  MapIcon,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";
import backwatersHero from "@/assets/backwaters-hero.jpg";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const [userName] = useState("Traveler");

  const quickAccessTiles = [
    { 
      id: "trip-planner", 
      title: "Plan Trip", 
      icon: Calendar, 
      description: "Create your perfect journey",
      color: "emerald"
    },
    { 
      id: "explore", 
      title: "Explore", 
      icon: Compass, 
      description: "Discover hidden gems",
      color: "sunset"
    },
    { 
      id: "journal", 
      title: "Journal", 
      icon: BookOpen, 
      description: "Capture memories",
      color: "spice"
    },
    { 
      id: "map", 
      title: "Map", 
      icon: MapIcon, 
      description: "Navigate with ease",
      color: "emerald"
    },
  ];

  const highlights = [
    {
      title: "Munnar Tea Gardens",
      category: "Nature",
      rating: 4.8,
      image: "🌿"
    },
    {
      title: "Backwater Cruise",
      category: "Experience",
      rating: 4.9,
      image: "🚤"
    },
    {
      title: "Kochi Fort",
      category: "Culture",
      rating: 4.6,
      image: "🏰"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header with Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={backwatersHero} 
          alt="Backwaters" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Header Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
              <p className="text-white/90 mt-1">Ready for your next adventure?</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white border-white/30 hover:bg-white/20">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white border-white/30 hover:bg-white/20" onClick={() => onNavigate("profile")}>
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Weather Widget */}
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <Cloud className="h-5 w-5" />
            <div>
              <p className="text-sm font-medium">Kochi</p>
              <p className="text-xs text-white/80">28°C • Partly Cloudy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 -mt-6 relative z-10">
        {/* Quick Access Tiles */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickAccessTiles.map((tile, index) => (
              <motion.div
                key={tile.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="cursor-pointer transition-all duration-300 hover:shadow-soft hover:scale-105 bg-gradient-card border-border/50"
                  onClick={() => onNavigate(tile.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <tile.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{tile.title}</h3>
                    <p className="text-xs text-muted-foreground">{tile.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Destinations */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-foreground">Featured Destinations</h2>
            <Button variant="ghost" size="sm" onClick={() => onNavigate("explore")}>
              View All
            </Button>
          </div>
          
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="cursor-pointer transition-all duration-300 hover:shadow-soft bg-gradient-card border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{highlight.image}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground">{highlight.category}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-accent fill-current" />
                        <span className="text-sm font-medium">{highlight.rating}</span>
                      </div>
                      <Heart className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button 
            variant="hero" 
            size="hero" 
            onClick={() => onNavigate("trip-planner")}
            className="w-full"
          >
            Start Planning Your Adventure
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeScreen;