import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowLeft,
  Plus,
  Trash2,
  Star,
  Clock,
  DollarSign
} from "lucide-react";
import { motion } from "framer-motion";

interface TripPlannerScreenProps {
  onNavigate: (screen: string) => void;
}

const TripPlannerScreen = ({ onNavigate }: TripPlannerScreenProps) => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [notes, setNotes] = useState("");
  const [destinations, setDestinations] = useState([
    { id: 1, name: "Munnar", days: 2, selected: true },
    { id: 2, name: "Alleppey", days: 1, selected: false },
    { id: 3, name: "Kochi", days: 1, selected: false },
  ]);

  const toggleDestination = (id: number) => {
    setDestinations(destinations.map(dest => 
      dest.id === id ? { ...dest, selected: !dest.selected } : dest
    ));
  };

  const selectedDestinations = destinations.filter(dest => dest.selected);
  const totalDays = selectedDestinations.reduce((sum, dest) => sum + dest.days, 0);
  const estimatedBudget = selectedDestinations.length * 5000; // ₹5000 per destination

  const suggestions = [
    {
      title: "Hill Station Escape",
      destinations: ["Munnar", "Wayanad"],
      duration: "4 days",
      budget: "₹12,000"
    },
    {
      title: "Backwater Bliss",
      destinations: ["Alleppey", "Kumarakom"],
      duration: "3 days",
      budget: "₹15,000"
    },
    {
      title: "Cultural Heritage",
      destinations: ["Kochi", "Thrissur"],
      duration: "3 days",
      budget: "₹8,000"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground p-6">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onNavigate("home")}
            className="text-primary-foreground hover:bg-white/20"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Plan Your Trip</h1>
          <div className="w-10"></div>
        </div>
        <p className="text-primary-foreground/90">Create your perfect adventure</p>
      </div>

      <div className="p-6 -mt-4 relative z-10 space-y-6">
        {/* Trip Details */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Trip Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="trip-name">Trip Name</Label>
              <Input
                id="trip-name"
                placeholder="My Adventure"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-date">Start Date</Label>
                <Input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="end-date">End Date</Label>
                <Input
                  id="end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="travelers">Number of Travelers</Label>
              <Input
                id="travelers"
                type="number"
                min="1"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="notes">Special Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any special requirements, preferences, or notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Destination Selection */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Select Destinations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    destination.selected 
                      ? 'border-primary bg-primary/5 shadow-soft' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => toggleDestination(destination.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-foreground">{destination.name}</h3>
                      <p className="text-sm text-muted-foreground">{destination.days} days recommended</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      destination.selected ? 'border-primary bg-primary' : 'border-muted-foreground'
                    }`}>
                      {destination.selected && <div className="w-3 h-3 rounded-full bg-primary-foreground"></div>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trip Summary */}
        {selectedDestinations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Trip Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{totalDays} Days</p>
                    <p className="text-sm text-muted-foreground">Duration</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{selectedDestinations.length}</p>
                    <p className="text-sm text-muted-foreground">Destinations</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">₹{estimatedBudget.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Est. Budget</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Quick Suggestions */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Popular Itineraries</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border rounded-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-medium text-foreground">{suggestion.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {suggestion.destinations.join(", ")}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary">{suggestion.duration}</span>
                    <span className="font-medium text-foreground">{suggestion.budget}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button variant="hero" size="hero" className="w-full">
            Create Trip Plan
          </Button>
          <Button variant="outline" className="w-full" onClick={() => onNavigate("explore")}>
            Explore More Destinations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripPlannerScreen;