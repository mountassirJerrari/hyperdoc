import { motion } from "framer-motion";
import { journeyData } from "@/data/journeyData";

// Color mapping for timeline items
const colorMap = {
  purple: {
    bg: 'bg-space-purple',
    border: 'border-space-purple/50',
    text: 'text-space-purple',
    bgLight: 'bg-space-purple/10',
    borderLight: 'border-space-purple/20',
  },
  accent: {
    bg: 'bg-space-accent',
    border: 'border-space-accent/50',
    text: 'text-space-accent',
    bgLight: 'bg-space-accent/10',
    borderLight: 'border-space-accent/20',
  },
  cyan: {
    bg: 'bg-space-cyan',
    border: 'border-space-cyan/50',
    text: 'text-space-cyan',
    bgLight: 'bg-space-cyan/10',
    borderLight: 'border-space-cyan/20',
  },
  mint: {
    bg: 'bg-space-mint',
    border: 'border-space-mint/50',
    text: 'text-space-mint',
    bgLight: 'bg-space-mint/10',
    borderLight: 'border-space-mint/20',
  },
};

const Journey = () => {
  return (
    <motion.section
      className="min-h-screen w-full py-20 px-4 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-space-purple">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-cyan mx-auto mt-4 rounded-full" />
        </motion.div>
        
        <div className="relative pl-8 space-y-12">
          {/* Timeline line */}
          <div className="absolute left-7 top-0 h-full w-0.5 bg-gradient-to-b from-space-purple via-space-accent to-space-mint"></div>
          
          {journeyData.map((item, index) => {
            const colors = colorMap[item.color];
            
            return (
              <motion.div 
                key={index} 
                className="relative flex items-start group"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {/* Dot */}
                <div 
                  className={`absolute left-0 w-5 h-5 rounded-full ${colors.bg} border-4 border-gray-900 z-10 transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300`}
                  style={{ top: '0.5rem' }}
                ></div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className={`card card-hover border ${colors.border} bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-colors duration-300`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <h3 className="text-lg font-orbitron font-semibold text-white">{item.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bgLight} ${colors.text} border ${colors.borderLight} whitespace-nowrap`}>
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Journey;
