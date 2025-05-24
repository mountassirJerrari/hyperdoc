import { motion } from "framer-motion";
import ProfileNavigation from "@/components/ProfileNavigation";

const Home = () => {
  return (
    <motion.section
      className="min-h-screen w-full flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Profile Navigation */}
        <ProfileNavigation />
        
        {/* Name and Title */}
        <motion.h1 
          className="font-orbitron text-4xl md:text-5xl font-bold mt-6 mb-2 text-center"
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
      </div>
    </motion.section>
  );
};

export default Home;
