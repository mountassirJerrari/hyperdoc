import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Users, 
  User, 
  Code, 
  Laptop, 
  Gamepad, 
  Mail 
} from "lucide-react";

type NavItem = {
  icon: React.ReactNode;
  label: string;
  path: string;
  color: string;
  glowClass: string;
};

const ProfileNavigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const navItems: NavItem[] = [
    {
      icon: <Users className="text-space-purple" size={22} />,
      label: "MY JOURNEY",
      path: "/journey",
      color: "text-space-purple",
      glowClass: "glow-purple",
    },
    {
      icon: <User className="text-space-accent" size={22} />,
      label: "ABOUT ME",
      path: "/about",
      color: "text-space-accent",
      glowClass: "glow-blue",
    },
    {
      icon: <Code className="text-space-cyan" size={22} />,
      label: "MY SKILLS",
      path: "/skills",
      color: "text-space-cyan",
      glowClass: "glow-cyan",
    },
    {
      icon: <Laptop className="text-space-mint" size={22} />,
      label: "PROJECTS",
      path: "/projects",
      color: "text-space-mint",
      glowClass: "glow-mint",
    },
    {
      icon: <Gamepad className="text-space-purple" size={22} />,
      label: "HOBBIES",
      path: "/hobbies",
      color: "text-space-purple",
      glowClass: "glow-purple",
    },
    {
      icon: <Mail className="text-space-accent" size={22} />,
      label: "CONTACT",
      path: "/contact",
      color: "text-space-accent",
      glowClass: "glow-blue",
    },
  ];

  return (
    <div className="relative w-[400px] h-[400px] mb-16">
      {/* Orbit Path */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Profile Picture */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-space-accent shadow-[0_0_15px_rgba(77,97,252,0.7)]">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
      {/* Navigation Items */}
      {navItems.map((item, index) => {
        const angle = index * (360 / navItems.length);
        const delay = index * 0.1;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * 150;
        const y = Math.sin(radian) * 150;
        
        return (
          <motion.div
            key={item.path}
            className="absolute top-1/2 left-1/2 flex flex-col items-center"
            style={{ 
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + delay }}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href={item.path}>
              <button 
                className={`w-12 h-12 rounded-full bg-space-secondary flex items-center justify-center ${item.glowClass} transition-all duration-300 hover:scale-110`}
                aria-label={item.label}
              >
                {item.icon}
              </button>
            </Link>
            <motion.span
              className={`absolute mt-14 text-xs font-orbitron whitespace-nowrap ${item.color}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredItem === item.path ? 1 : 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProfileNavigation;
