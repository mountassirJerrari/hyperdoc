import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, User, Code, Laptop, Gamepad, Mail, Award } from "lucide-react";
import StarBackground from "@/components/StarBackground";

const Home = () => {
  // Define navigation items
  const navItems = [
    {
      icon: <Users className="text-space-purple" size={20} />,
      label: "JOURNEY",
      path: "/journey",
      color: "text-space-purple",
      bgColor: "bg-space-purple/5",
      glowClass: "hover:shadow-[0_0_8px_rgba(167,66,245,0.3)]",
    },
    {
      icon: <User className="text-space-accent" size={20} />,
      label: "ABOUT",
      path: "/about",
      color: "text-space-accent",
      bgColor: "bg-space-accent/5",
      glowClass: "hover:shadow-[0_0_8px_rgba(77,97,252,0.3)]",
    },
    {
      icon: <Code className="text-space-cyan" size={20} />,
      label: "SKILLS",
      path: "/skills",
      color: "text-space-cyan",
      bgColor: "bg-space-cyan/5",
      glowClass: "hover:shadow-[0_0_8px_rgba(0,234,255,0.3)]",
    },
    {
      icon: <Laptop className="text-space-mint" size={20} />,
      label: "PROJECTS",
      path: "/projects",
      color: "text-space-mint",
      bgColor: "bg-space-mint/5",
      glowClass: "hover:shadow-[0_0_8px_rgba(54,240,151,0.3)]",
    },
    {
      icon: <Gamepad className="text-space-purple" size={20} />,
      label: "HOBBIES",
      path: "/hobbies",
      color: "text-space-purple/90", 
      bgColor: "bg-space-purple/5",
      glowClass: "hover:shadow-[0_0_8px_rgba(167,66,245,0.3)]",
    },
    {
      icon: <Award className="text-space-accent" size={20} />,
      label: "CERTIFICATIONS",
      path: "/certifications",
      color: "text-space-accent/90",
      bgColor: "bg-space-accent/5",
      glowClass: "hover:shadow-[0_0_8px_rgba(77,97,252,0.3)]",
    },
    {
      icon: <Mail className="text-space-purple" size={20} />,
      label: "CONTACT",
      path: "/contact",
      color: "text-space-purple/90",
      bgColor: "bg-space-purple/5",
      glowClass: "hover:shadow-[0_0_8px_rgba(167,66,245,0.3)]",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <StarBackground />
      <motion.section
        className="fixed inset-0 w-full h-full flex flex-col items-center justify-center px-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Profile with Links */}
        <div className="flex items-center justify-center gap-8 mb-6">
          {/* Left Side Links */}
          <div className="flex flex-col gap-4 text-right">
            <a 
              href="/cv_jerrari_mountassir-ast-freindly.pdf" 
              download="Mountassir_Jerrari_AST_Friendly_CV.pdf"
              className="text-space-cyan hover:text-space-cyan/80 transition-colors text-sm md:text-base"
            >
              AST Friendly CV
            </a>
            <a 
              href="/cv-jerrari-mountassir-human-freindly.pdf" 
              download="Mountassir_Jerrari_Human_Friendly_CV.pdf"
              className="text-space-cyan hover:text-space-cyan/80 transition-colors text-sm md:text-base"
            >
              Human Friendly CV
            </a>
          </div>
          
          {/* Profile Picture */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-space-accent/50 shadow-[0_0_8px_rgba(77,97,252,0.3)]">
              <img 
                src="./profile.png" 
                alt="Profile - Mountassir Jerrari" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Right Side Links */}
          <div className="flex flex-col gap-4 text-left">
            <a 
              href="https://www.linkedin.com/jobs/view/4240971386/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-space-mint hover:text-space-mint/80 transition-colors text-sm md:text-base"
            >
              Job Offer
            </a>
            <a 
              href="/cover_letter.pdf" 
              download="Mountassir_Jerrari_Cover_Letter.pdf"
              className="text-space-mint hover:text-space-mint/80 transition-colors text-sm md:text-base"
            >
              Cover Letter
            </a>
          </div>
        </div>
        
        {/* Name and Title */}
        <motion.h1 
          className="font-orbitron text-4xl md:text-5xl font-bold mb-2 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span style={{ color: 'hsl(241.7, 70.3%, 69.6%)' }}>MOUNTASSIR</span> JERRARI
        </motion.h1>
        
        <motion.div 
          className="h-px w-40 bg-gradient-to-r from-transparent via-space-accent to-transparent my-4"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        
        <motion.div 
          className="text-center mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-light text-gray-100 mb-2">
            Software Engineer & Developer
          </h2>
          <p className="text-gray-300">
            Crafting digital experiences with modern technologies
          </p>
        </motion.div>
        
        {/* Navigation Grid - Single Row */}
        <motion.div 
          className="w-full mt-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 px-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="flex justify-center"
                >
                  <Link
                    href={item.path}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 ${item.bgColor.replace('/5', '/10')} ${item.glowClass} hover:scale-105 w-full aspect-square border border-gray-700/50 backdrop-blur-sm hover:backdrop-blur-md`}
                  >
                    <div className={`mb-1.5 ${item.color} opacity-90`}>
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                    <span className={`text-[11px] sm:text-xs font-medium ${item.color} opacity-90 text-center leading-tight`}>
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  </div>
  );
};

export default Home;
