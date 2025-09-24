import { useState } from "react";
import { 
  Home, 
  Calendar, 
  Ticket, 
  MapPin, 
  Wifi, 
  FileText, 
  HelpCircle, 
  AlertTriangle, 
  Flag, 
  MessageSquare, 
  LogIn,
  User,
  BookOpen,
  Shield
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface AppSidebarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

const menuItems = [
  { id: "home", title: "Home", icon: Home, group: "main" },
  { id: "trip-planner", title: "Plan My Trip", icon: Calendar, group: "main" },
  { id: "book-tickets", title: "Book My Tickets", icon: Ticket, group: "main" },
  { id: "nearby-services", title: "Nearby Services", icon: MapPin, group: "main" },
  { id: "journal", title: "My Journal", icon: BookOpen, group: "main" },
  
  { id: "my-documents", title: "My Documents", icon: FileText, group: "tools" },
  { id: "travel-insurance", title: "Travel Insurance", icon: Shield, group: "tools" },
  
  { id: "help", title: "Help", icon: HelpCircle, group: "support" },
  { id: "emergency", title: "Emergency", icon: AlertTriangle, group: "support" },
  { id: "travel-advisory", title: "Travel Advisory", icon: Flag, group: "support" },
  { id: "report-issue", title: "Report an Issue", icon: MessageSquare, group: "support" },
];

export function AppSidebar({ currentScreen, onNavigate }: AppSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const [user] = useState({ name: "Trip Explorer", email: "explorer@tripverse.com" });

  const getGroupItems = (group: string) => menuItems.filter(item => item.group === group);

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold text-primary">
            {isCollapsed ? "TV" : "Trip Verse"}
          </div>
        </div>
        
        {!isCollapsed && (
          <div className="flex items-center space-x-3 mt-4 p-3 bg-muted/50 rounded-lg">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getGroupItems("main").map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild
                    isActive={currentScreen === item.id}
                  >
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="flex items-center space-x-3 w-full"
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tools */}
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getGroupItems("tools").map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild
                    isActive={currentScreen === item.id}
                  >
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="flex items-center space-x-3 w-full"
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support */}
        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getGroupItems("support").map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild
                    isActive={currentScreen === item.id}
                  >
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="flex items-center space-x-3 w-full"
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate("login")}
          className="w-full justify-start"
        >
          <LogIn className="h-4 w-4 mr-2" />
          {!isCollapsed && "Login / Sign Up"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
