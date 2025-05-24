import { motion } from "framer-motion";
import { journeyData } from "@/data/journeyData";

const Journey = () => {
  return (
    <motion.section
      className="min-h-screen w-full flex items-center justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl w-full mx-auto">
        <motion.h2 
          className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-space-purple">Journey</span>
        </motion.h2>
        
        <div className="timeline space-y-10 pl-4">
          {journeyData.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-dot flex"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div 
                className={`w-5 h-5 rounded-full bg-space-${item.color} shadow-glow-${item.color} mt-1.5 mr-6`}
              ></div>
              <div className="flex-1">
                <div className={`bg-space-secondary p-5 rounded-lg shadow-lg glow-border ${item.color}-glow`}>
                  <h3 className="text-xl font-orbitron mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.period}</p>
                  <p className="text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Journey;
