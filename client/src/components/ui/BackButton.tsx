import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <motion.div
      className="fixed top-5 left-5 z-50"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <button 
          className="flex items-center justify-center p-3 rounded-full bg-space-secondary text-white opacity-80 hover:opacity-100 transition-all duration-300 hover:-translate-x-1"
          aria-label="Back to home"
        >
          <ArrowLeft size={18} />
        </button>
      </Link>
    </motion.div>
  );
};

export default BackButton;
