import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Navigation, 
  Search, 
  Filter,
  Clock,
  Star,
  Phone,
  Route,
  Layers,
  Zap,
  ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";

interface MapScreenProps {
  onNavigate: (screen: string) => void;
}

const MapScreen = ({ onNavigate }: MapScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentLocation] = useState("Kochi");

  const categories = [
    { id: "all", name: "All", icon: "🗺️" },
    { id: "attractions", name: "Attractions", icon: "🏛️" },
    { id: "restaurants", name: "Food", icon: "🍽️" },
    { id: "hotels", name: "Hotels", icon: "🏨" },
    { id: "emergency", name: "Emergency", icon: "🚨" },
    { id: "transport", name: "Transport", icon: "🚗" }
  ];

  const nearbyPlaces = [
    {
      id: 1,
      name: "Fort Kochi Beach",
      category: "attractions",
      distance: "2.5 km",
      duration: "8 min drive",
      rating: 4.6,
      image: "🏖️",
      description: "Historic waterfront with Chinese fishing nets",
      isOpen: true,
      contact: "+91 484 123 4567"
    },
    {
      id: 2,
      name: "Mattancherry Palace",
      category: "attractions", 
      distance: "3.1 km",
      duration: "12 min drive",
      rating: 4.4,
      image: "🏰",
      description: "Dutch Palace with traditional murals",
      isOpen: true,
      contact: "+91 484 234 5678"
    },
    {
      id: 3,
      name: "Dhe Puttu Restaurant",
      category: "restaurants",
      distance: "1.8 km", 
      duration: "6 min drive",
      rating: 4.8,
      image: "🥥",
      description: "Authentic breakfast specialties",
      isOpen: true,
      contact: "+91 484 345 6789"
    },
    {
      id: 4,
      name: "Kochi Marine Drive",
      category: "attractions",
      distance: "1.2 km",
      duration: "4 min walk",
      rating: 4.5,
      image: "🌊",
      description: "Scenic walkway along the backwaters",
      isOpen: true,
      contact: "+91 484 456 7890"
    }
  ];

  const filteredPlaces = nearbyPlaces.filter(place => 
    (selectedCategory === "all" || place.category === selectedCategory) &&
    (searchQuery === "" || place.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleGetDirections = (place: any) => {
    // This would open navigation app or show route
    console.log(`Getting directions to ${place.name}`);
    onNavigate("trip-planner"); // Navigate to trip planner with destination
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-border/50 p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="ghost" size="icon" onClick={() => onNavigate("home")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Explore Nearby</h1>
            <p className="text-sm text-muted-foreground flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              {currentLocation}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search places..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-64 bg-gradient-to-br from-emerald-100 to-emerald-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">🗺️</div>
            <p className="text-sm text-foreground/70">Interactive Map View</p>
            <p className="text-xs text-muted-foreground">Tap locations for details</p>
          </div>
        </div>
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 space-y-2">
          <Button size="icon" variant="outline" className="bg-white/90">
            <Layers className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="bg-white/90">
            <Navigation className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="bg-white/90">
            <Zap className="h-4 w-4" />
          </Button>
        </div>

        {/* Current Location Pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg animate-pulse" />
        </div>
      </div>

      {/* Categories */}
      <div className="p-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <span>{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Places List */}
      <div className="px-4 pb-4 space-y-3">
        {filteredPlaces.map((place, index) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="cursor-pointer transition-all duration-300 hover:shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{place.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground truncate">{place.name}</h3>
                        <p className="text-sm text-muted-foreground">{place.description}</p>
                      </div>
                      <div className="flex items-center space-x-1 ml-2">
                        <Star className="h-3 w-3 text-accent fill-current" />
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {place.distance}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {place.duration}
                      </span>
                      <Badge 
                        variant={place.isOpen ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {place.isOpen ? "Open" : "Closed"}
                      </Badge>
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="hero"
                        onClick={() => handleGetDirections(place)}
                        className="flex-1"
                      >
                        <Route className="h-3 w-3 mr-1" />
                        Directions
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredPlaces.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">No places found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default MapScreen;