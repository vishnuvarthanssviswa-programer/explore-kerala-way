import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Train, 
  Bus, 
  Ship,
  Calendar,
  Users,
  MapPin,
  Star,
  Clock,
  CreditCard,
  Shield,
  ArrowLeft,
  Search,
  Filter
} from "lucide-react";
import { motion } from "framer-motion";

interface BookTicketsScreenProps {
  onNavigate: (screen: string) => void;
}

const BookTicketsScreen = ({ onNavigate }: BookTicketsScreenProps) => {
  const [selectedTransport, setSelectedTransport] = useState("flight");
  const [showInsurance, setShowInsurance] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const transportTypes = [
    { id: "flight", name: "Flights", icon: Plane },
    { id: "train", name: "Trains", icon: Train },
    { id: "bus", name: "Buses", icon: Bus },
    { id: "boat", name: "Boats", icon: Ship }
  ];

  const flightOptions = [
    {
      id: 1,
      airline: "IndiGo",
      route: "Mumbai → Kochi",
      departure: "06:30",
      arrival: "08:45",
      duration: "2h 15m",
      price: "₹4,250",
      rating: 4.2,
      stops: "Non-stop"
    },
    {
      id: 2,
      airline: "Air India",
      route: "Delhi → Kochi", 
      departure: "09:15",
      arrival: "12:30",
      duration: "3h 15m",
      price: "₹5,890",
      rating: 4.0,
      stops: "Non-stop"
    },
    {
      id: 3,
      airline: "SpiceJet",
      route: "Bangalore → Kochi",
      departure: "14:20",
      arrival: "15:35",
      duration: "1h 15m", 
      price: "₹3,120",
      rating: 4.1,
      stops: "Non-stop"
    }
  ];

  const handleBookTicket = (option: any) => {
    setShowInsurance(true);
  };

  const handleConfirmBooking = (withInsurance: boolean) => {
    setBookingSuccess(true);
    // This would integrate with actual booking APIs
  };

  if (bookingSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-6">Your trip is all set. Have a wonderful journey!</p>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Booking Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Booking ID:</span>
                  <span className="font-mono">TV-2024-001234</span>
                </div>
                <div className="flex justify-between">
                  <span>Flight:</span>
                  <span>IndiGo 6E-5432</span>
                </div>
                <div className="flex justify-between">
                  <span>Route:</span>
                  <span>Mumbai → Kochi</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>Jan 20, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Button variant="hero" onClick={() => onNavigate("trip-planner")} className="w-full">
              Plan Your Trip
            </Button>
            <Button variant="outline" onClick={() => onNavigate("home")} className="w-full">
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (showInsurance) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="icon" onClick={() => setShowInsurance(false)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold ml-4">Travel Insurance</h1>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Protect Your Journey</CardTitle>
                  <p className="text-sm text-muted-foreground">Stay safe with comprehensive travel coverage</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="text-lg">Basic Coverage</CardTitle>
                    <p className="text-2xl font-bold text-primary">₹299</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>✅ Trip cancellation coverage</li>
                      <li>✅ Medical emergency: ₹5 Lakh</li>
                      <li>✅ Baggage loss: ₹25,000</li>
                      <li>✅ Flight delay compensation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Premium Coverage</CardTitle>
                    <p className="text-2xl font-bold">₹599</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>✅ All Basic features</li>
                      <li>✅ Medical emergency: ₹15 Lakh</li>
                      <li>✅ Baggage loss: ₹75,000</li>
                      <li>✅ Adventure sports coverage</li>
                      <li>✅ 24/7 assistance</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <Button 
                  variant="hero" 
                  onClick={() => handleConfirmBooking(true)}
                  className="w-full"
                >
                  Book with Basic Insurance (₹299)
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleConfirmBooking(true)}
                  className="w-full"
                >
                  Book with Premium Insurance (₹599)
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => handleConfirmBooking(false)}
                  className="w-full text-muted-foreground"
                >
                  Continue without Insurance
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-border/50 p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="ghost" size="icon" onClick={() => onNavigate("home")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Book Tickets</h1>
            <p className="text-sm text-muted-foreground">Find the best travel options</p>
          </div>
        </div>

        {/* Transport Type Selector */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {transportTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setSelectedTransport(type.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedTransport === type.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <type.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Form */}
      <div className="p-4">
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">From</label>
                <Input placeholder="Departure city" />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">To</label>
                <Input placeholder="Destination" defaultValue="Kochi" />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Departure</label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Passengers</label>
                <Input placeholder="1 Adult" />
              </div>
            </div>
            <Button variant="hero" className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Search Flights
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Available Flights</h2>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="space-y-4">
          {flightOptions.map((flight, index) => (
            <motion.div
              key={flight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer transition-all duration-300 hover:shadow-soft">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <Plane className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-semibold">{flight.airline}</h3>
                        <p className="text-sm text-muted-foreground">{flight.route}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{flight.price}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-accent fill-current" />
                        <span className="text-sm">{flight.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="font-semibold">{flight.departure}</p>
                        <p className="text-xs text-muted-foreground">Departure</p>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <div className="w-16 h-px bg-primary" />
                          <div className="text-xs text-muted-foreground">{flight.duration}</div>
                          <div className="w-16 h-px bg-primary" />
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">{flight.arrival}</p>
                        <p className="text-xs text-muted-foreground">Arrival</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{flight.stops}</Badge>
                    <Button variant="hero" onClick={() => handleBookTicket(flight)}>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookTicketsScreen;