import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Camera, 
  Calendar, 
  MapPin, 
  Heart,
  Share,
  Download,
  Search,
  Filter,
  ArrowLeft,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";

interface JournalScreenProps {
  onNavigate: (screen: string) => void;
}

const JournalScreen = ({ onNavigate }: JournalScreenProps) => {
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
    location: "",
    mood: "😊"
  });

  const journalEntries = [
    {
      id: 1,
      title: "Houseboat Adventure in Alleppey",
      content: "What an incredible day floating through the backwaters! The sunset views were absolutely breathtaking...",
      date: "2024-01-15",
      location: "Alleppey Backwaters",
      mood: "😍",
      photos: 5,
      tags: ["backwaters", "sunset", "peaceful"]
    },
    {
      id: 2,
      title: "Spice Garden Trek in Munnar",
      content: "Learned so much about cardamom and pepper cultivation. The mountain air is so refreshing here...",
      date: "2024-01-14",
      location: "Munnar",
      mood: "🌿",
      photos: 8,
      tags: ["trekking", "spices", "mountains"]
    }
  ];

  const moods = ["😊", "😍", "🤩", "😌", "🥰", "🌟", "🌿", "🏔️"];

  const handleAddEntry = () => {
    // This would normally save to backend via Supabase
    console.log("Adding entry:", newEntry);
    setIsAddingEntry(false);
    setNewEntry({ title: "", content: "", location: "", mood: "😊" });
  };

  if (isAddingEntry) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsAddingEntry(false)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold ml-4">New Journal Entry</h1>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Input
                  placeholder="Entry title..."
                  value={newEntry.title}
                  onChange={(e) => setNewEntry(prev => ({ ...prev, title: e.target.value }))}
                  className="text-lg font-semibold"
                />
                <div className="flex space-x-2">
                  {moods.map(mood => (
                    <button
                      key={mood}
                      onClick={() => setNewEntry(prev => ({ ...prev, mood }))}
                      className={`text-2xl p-2 rounded-lg hover:bg-muted ${
                        newEntry.mood === mood ? 'bg-primary/20' : ''
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>
              <Input
                placeholder="Location..."
                value={newEntry.location}
                onChange={(e) => setNewEntry(prev => ({ ...prev, location: e.target.value }))}
                className="mt-2"
              />
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write about your experience... What did you see? How did it make you feel? What memories do you want to capture?"
                value={newEntry.content}
                onChange={(e) => setNewEntry(prev => ({ ...prev, content: e.target.value }))}
                className="min-h-[200px] mb-4"
              />
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Add Photos
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  Add Location
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Set Date
                </Button>
              </div>

              <div className="flex space-x-3">
                <Button 
                  variant="hero" 
                  onClick={handleAddEntry}
                  className="flex-1"
                >
                  Save Entry
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsAddingEntry(false)}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Travel Journal</h1>
            <p className="text-muted-foreground">Capture your memories</p>
          </div>
          <Button 
            variant="hero" 
            onClick={() => setIsAddingEntry(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            New Entry
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search entries..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Journal Entries */}
        <div className="space-y-6">
          {journalEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer transition-all duration-300 hover:shadow-soft">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{entry.mood}</span>
                      <div>
                        <CardTitle className="text-xl">{entry.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(entry.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {entry.location}
                          </span>
                          <span className="flex items-center">
                            <Camera className="h-4 w-4 mr-1" />
                            {entry.photos} photos
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{entry.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {journalEntries.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No journal entries yet</h3>
            <p className="text-muted-foreground mb-6">Start capturing your memories!</p>
            <Button variant="hero" onClick={() => setIsAddingEntry(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Entry
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalScreen;