import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const About = () => {
  const values = [
    {
      name: "Innovation",
      color: "purple",
      description: "Constantly seeking new approaches and solutions"
    },
    {
      name: "Craftsmanship",
      color: "accent",
      description: "Dedicated to quality and excellence in everything I create"
    },
    {
      name: "Collaboration",
      color: "cyan",
      description: "Building together achieves greater results than working alone"
    },
    {
      name: "Continuous Growth",
      color: "mint",
      description: "Always learning, always improving"
    }
  ];

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
          About <span className="text-space-accent">Me</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-space-secondary p-6 rounded-lg shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-orbitron mb-4 text-space-accent">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a software developer with a passion for creating elegant solutions to complex problems. 
              With a background in both computer science and digital art, I bring a unique perspective 
              to every project I work on.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in clean code, continuous learning, and pushing the boundaries of what's possible 
              with technology. When I'm not coding, you'll find me exploring new art techniques or 
              contributing to open-source projects.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-space-secondary p-6 rounded-lg shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-xl font-orbitron mb-4 text-space-purple">My Values</h3>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.3 }}
                >
                  <div className={`w-5 h-5 rounded-full bg-space-${value.color} mt-1 mr-3 flex-shrink-0`}></div>
                  <div>
                    <h4 className="font-semibold mb-1">{value.name}</h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-10 bg-space-secondary p-6 rounded-lg shadow-lg text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Quote className="text-space-cyan opacity-50 mx-auto mb-4" size={36} />
          <p className="text-xl italic font-light mb-4">
            "The intersection of art and technology is where true innovation happens. 
            I strive to bring both technical excellence and creative vision to every project."
          </p>
          <p className="text-space-cyan font-orbitron">- John Doe</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
