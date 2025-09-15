import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Smartphone, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface QRCodeScreenProps {
  onNavigate: (screen: string) => void;
}

const QRCodeScreen = ({ onNavigate }: QRCodeScreenProps) => {
  // This would be the actual Expo QR code in a real implementation
  const expoQRCode = `
    ████ ▄▄▄▄▄ █▀█ █▄█ ▄▄▄▄▄ ████
    ████ █   █ █▀▀ █ ▀ █   █ ████
    ████ █▄▄▄█ ██▄ ▀ █ █▄▄▄█ ████
    ████▄▄▄▄▄▄▄█▄█ █ █▄▄▄▄▄▄▄████
    ████▄▄█▄█▄▄  ▀▀▀▀  ▄█ ▀▄▄████
    ████ ▄  ▄▄▄█▄▄██▄▄▄▄▄▄▄  ████
    ████▄  ▄█▄▄█  ██  █ ▀█▀ ▄████
    ████ ▄▄▄▄▄ ██▄▄▀ ▄ █▄█  ▄████
    ████ █   █ █▄██▀▀▀▄ ▄▄ ▄▄████
    ████ █▄▄▄█ █▀██▄▄█▀▀██▄▄▄████
    ████▄▄▄▄▄▄▄█▄▄▄█▄█▄█▄█▄▄▄████
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground p-6">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onNavigate("profile")}
            className="text-primary-foreground hover:bg-white/20"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Download App</h1>
          <div className="w-10"></div>
        </div>
        <p className="text-primary-foreground/90">Get the mobile app for the full experience</p>
      </div>

      <div className="p-6 -mt-4 relative z-10 space-y-6">
        {/* Download Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <span>Mobile Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                  <Smartphone className="h-10 w-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Download Trip Verse
                  </h3>
                  <p className="text-muted-foreground">
                    Get access to offline maps, GPS navigation, camera integration, 
                    and push notifications for the best travel experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* QR Code Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-center">Scan QR Code with Expo Go</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                {/* QR Code Placeholder */}
                <div className="w-64 h-64 mx-auto bg-white p-4 rounded-lg shadow-soft">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded flex items-center justify-center">
                    <pre className="text-xs font-mono text-primary leading-none">
                      {expoQRCode}
                    </pre>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    1. Install Expo Go app from App Store or Play Store
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2. Open Expo Go and scan this QR code
                  </p>
                  <p className="text-sm text-muted-foreground">
                    3. Start exploring on your mobile device!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Mobile App Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📍", title: "GPS Navigation", desc: "Turn-by-turn directions" },
                  { icon: "📷", title: "Camera Integration", desc: "Capture & share moments" },
                  { icon: "🗺️", title: "Offline Maps", desc: "Works without internet" },
                  { icon: "🔔", title: "Push Notifications", desc: "Weather & safety alerts" },
                  { icon: "📱", title: "Native Performance", desc: "Smooth & fast experience" },
                  { icon: "🌍", title: "Location Services", desc: "Smart recommendations" }
                ].map((feature, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-primary/5">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Download Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <Button variant="hero" size="hero" className="w-full">
            <Download className="h-5 w-5 mr-2" />
            Download for iOS
          </Button>
          <Button variant="emerald" size="hero" className="w-full">
            <Download className="h-5 w-5 mr-2" />
            Download for Android
          </Button>
          <Button variant="outline" className="w-full" onClick={() => onNavigate("home")}>
            Continue in Browser
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default QRCodeScreen;