import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock,
  ArrowLeft,
  Heart,
  Camera,
  Utensils,
  Mountain,
  Waves,
  TreePine,
  Building2
} from "lucide-react";
import { motion } from "framer-motion";

interface ExploreScreenProps {
  onNavigate: (screen: string) => void;
}

const ExploreScreen = ({ onNavigate }: ExploreScreenProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All", icon: null },
    { id: "nature", name: "Nature", icon: TreePine },
    { id: "culture", name: "Culture", icon: Building2 },
    { id: "food", name: "Food", icon: Utensils },
    { id: "adventure", name: "Adventure", icon: Mountain },
    { id: "wellness", name: "Wellness", icon: Waves },
  ];

  const destinations = [
    {
      id: 1,
      name: "Munnar Tea Gardens",
      category: "nature",
      rating: 4.8,
      reviewCount: 1250,
      distance: "120 km",
      duration: "Full Day",
      price: "₹2,500",
      image: "🌿",
      description: "Rolling hills covered in emerald tea plantations",
      highlights: ["Tea Factory Tour", "Scenic Views", "Cool Climate"]
    },
    {
      id: 2,
      name: "Alleppey Backwaters",
      category: "nature",
      rating: 4.9,
      reviewCount: 2100,
      distance: "85 km",
      duration: "2 Days",
      price: "₹8,000",
      image: "🚤",
      description: "Serene backwater cruise through coconut groves",
      highlights: ["Houseboat Stay", "Village Life", "Sunset Views"]
    },
    {
      id: 3,
      name: "Kathakali Performance",
      category: "culture",
      rating: 4.7,
      reviewCount: 650,
      distance: "15 km",
      duration: "2 Hours",
      price: "₹500",
      image: "🎭",
      description: "Traditional classical dance drama",
      highlights: ["Live Performance", "Cultural Story", "Authentic Costumes"]
    },
    {
      id: 4,
      name: "Spice Plantation Tour",
      category: "food",
      rating: 4.6,
      reviewCount: 890,
      distance: "95 km",
      duration: "Half Day",
      price: "₹1,200",
      image: "🌶️",
      description: "Explore aromatic spice gardens and learn processing",
      highlights: ["Spice Tasting", "Farm Tour", "Cooking Demo"]
    },
    {
      id: 5,
      name: "Periyar Wildlife Sanctuary",
      category: "adventure",
      rating: 4.5,
      reviewCount: 980,
      distance: "150 km",
      duration: "Full Day",
      price: "₹3,500",
      image: "🐘",
      description: "Wildlife spotting and nature trekking",
      highlights: ["Elephant Spotting", "Boat Safari", "Nature Walk"]
    },
    {
      id: 6,
      name: "Ayurvedic Spa Retreat",
      category: "wellness",
      rating: 4.8,
      reviewCount: 420,
      distance: "25 km",
      duration: "Half Day",
      price: "₹4,000",
      image: "🧘",
      description: "Traditional wellness treatments",
      highlights: ["Massage Therapy", "Herbal Treatments", "Meditation"]
    }
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = selectedCategory === "all" || dest.category === selectedCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onNavigate("home")}
            className="text-primary-foreground hover:bg-white/20"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Explore</h1>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary-foreground hover:bg-white/20"
          >
            <Filter className="h-6 w-6" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search destinations, activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="p-6 -mt-4 relative z-10">
        <div className="flex space-x-3 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant={selectedCategory === category.id ? "emerald" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2 whitespace-nowrap"
              >
                {category.icon && <category.icon className="h-4 w-4" />}
                <span>{category.name}</span>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Results */}
        <div className="mt-6">
          <p className="text-muted-foreground mb-4">
            {filteredDestinations.length} destinations found
          </p>

          <div className="space-y-4">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="cursor-pointer transition-all duration-300 hover:shadow-soft hover:scale-[1.02] bg-gradient-card border-border/50">
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* Image */}
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl rounded-l-lg">
                        {destination.image}
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground text-lg">{destination.name}</h3>
                            <p className="text-sm text-muted-foreground">{destination.description}</p>
                          </div>
                          <Heart className="h-5 w-5 text-muted-foreground" />
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {destination.highlights.slice(0, 2).map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-accent fill-current" />
                              <span>{destination.rating}</span>
                              <span>({destination.reviewCount})</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{destination.distance}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{destination.duration}</span>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {destination.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;