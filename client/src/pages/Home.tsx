import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, User, Code, Laptop, Gamepad, Mail } from "lucide-react";

const Home = () => {
  // Define navigation items
  const navItems = [
    {
      icon: <Users className="text-space-purple" size={24} />,
      label: "MY JOURNEY",
      path: "/journey",
      color: "text-space-purple",
      bgColor: "bg-space-purple/10",
      glowClass: "shadow-[0_0_15px_rgba(167,66,245,0.5)]",
    },
    {
      icon: <User className="text-space-accent" size={24} />,
      label: "ABOUT ME",
      path: "/about",
      color: "text-space-accent",
      bgColor: "bg-space-accent/10",
      glowClass: "shadow-[0_0_15px_rgba(77,97,252,0.5)]",
    },
    {
      icon: <Code className="text-space-cyan" size={24} />,
      label: "MY SKILLS",
      path: "/skills",
      color: "text-space-cyan",
      bgColor: "bg-space-cyan/10",
      glowClass: "shadow-[0_0_15px_rgba(0,234,255,0.5)]",
    },
    {
      icon: <Laptop className="text-space-mint" size={24} />,
      label: "PROJECTS",
      path: "/projects",
      color: "text-space-mint",
      bgColor: "bg-space-mint/10",
      glowClass: "shadow-[0_0_15px_rgba(54,240,151,0.5)]",
    },
    {
      icon: <Gamepad className="text-space-purple" size={24} />,
      label: "HOBBIES",
      path: "/hobbies",
      color: "text-space-purple", 
      bgColor: "bg-space-purple/10",
      glowClass: "shadow-[0_0_15px_rgba(167,66,245,0.5)]",
    },
    {
      icon: <Mail className="text-space-accent" size={24} />,
      label: "CONTACT",
      path: "/contact",
      color: "text-space-accent",
      bgColor: "bg-space-accent/10",
      glowClass: "shadow-[0_0_15px_rgba(77,97,252,0.5)]",
    },
  ];

  return (
    <motion.section
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* Profile */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-space-accent shadow-[0_0_15px_rgba(77,97,252,0.7)]">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Name and Title */}
        <motion.h1 
          className="font-orbitron text-4xl md:text-5xl font-bold mb-2 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-space-accent">JOHN</span> DOE
        </motion.h1>
        
        <motion.div 
          className="h-px w-40 bg-gradient-to-r from-transparent via-space-accent to-transparent my-4"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        
        <motion.p 
          className="text-xl text-gray-300 font-light mb-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Software Developer & Digital Artist
        </motion.p>
        
        {/* Introduction Text */}
        <motion.p 
          className="text-center max-w-2xl text-gray-400 mb-10 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Creating digital experiences that blend technology and art. 
          Specializing in full-stack development with a passion for 
          creative coding and interactive applications.
        </motion.p>
        
        {/* Navigation Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + (index * 0.1), duration: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Link href={item.path}>
                <div className={`cursor-pointer h-full rounded-lg p-5 ${item.bgColor} ${item.glowClass} transition-all duration-300 flex flex-col items-center justify-center text-center`}>
                  <div className="mb-3">
                    {item.icon}
                  </div>
                  <span className={`font-orbitron text-sm ${item.color}`}>
                    {item.label}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
