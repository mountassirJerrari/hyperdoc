import { motion } from "framer-motion";
import { techSkills, creativeSkills, softSkills } from "@/data/skillsData";
import { Database, Users, ListChecks, MessageSquare, Lightbulb, Palette, Monitor, Box } from "lucide-react";
import { FaReact, FaNodeJs, FaJsSquare, FaJava, FaAngular, FaDocker, FaAws, FaGitAlt, FaPython } from "react-icons/fa";

const SkillIcon = ({ name }: { name: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    "react": <FaReact className="text-4xl text-space-cyan mb-2" />,
    "node-js": <FaNodeJs className="text-4xl text-space-cyan mb-2" />,
    "js": <FaJsSquare className="text-4xl text-space-cyan mb-2" />,
    "java": <FaJava className="text-4xl text-space-cyan mb-2" />,
    "angular": <FaAngular className="text-4xl text-space-cyan mb-2" />,
    "docker": <FaDocker className="text-4xl text-space-cyan mb-2" />,
    "aws": <FaAws className="text-4xl text-space-cyan mb-2" />,
    "database": <Database className="w-9 h-9 text-space-cyan mb-2" />,
    "git-branch": <FaGitAlt className="text-4xl text-space-cyan mb-2" />,
    "python": <FaPython className="text-4xl text-space-cyan mb-2" />,
    "palette": <Palette className="w-7 h-7 text-space-purple mr-3" />,
    "desktop": <Monitor className="w-7 h-7 text-space-purple mr-3" />,
    "cube": <Box className="w-7 h-7 text-space-purple mr-3" />,
    "users": <Users className="w-7 h-7 text-space-accent mr-3" />,
    "list-checks": <ListChecks className="w-7 h-7 text-space-accent mr-3" />,
    "message-square": <MessageSquare className="w-7 h-7 text-space-accent mr-3" />,
    "lightbulb": <Lightbulb className="w-7 h-7 text-space-accent mr-3" />
  };

  return icons[name] || null;
};

const Skills = () => {
  return (
    <motion.section
      className="min-h-screen w-full flex items-center justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.h2 
          className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-space-cyan">Skills</span>
        </motion.h2>
        
        <div className="mb-10">
          <motion.h3 
            className="text-xl font-orbitron mb-6 text-center text-space-cyan"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-card bg-space-secondary p-4 rounded-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-cyan"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + (index * 0.05), duration: 0.3 }}
              >
                <SkillIcon name={skill.icon} />
                <h4 className="font-orbitron text-sm">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mb-10">
          <motion.h3 
            className="text-xl font-orbitron mb-6 text-center text-space-purple"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            Creative Skills
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {creativeSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-space-secondary p-5 rounded-lg hover:shadow-glow-purple transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <SkillIcon name={skill.icon} />
                  <h4 className="font-orbitron">{skill.name}</h4>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-space-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <motion.h3 
            className="text-xl font-orbitron mb-6 text-center text-space-accent"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            Soft Skills
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-space-secondary p-5 rounded-lg hover:shadow-glow-blue transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 + (index * 0.1), duration: 0.3 }}
              >
                <div className="flex items-center">
                  <SkillIcon name={skill.icon} />
                  <div>
                    <h4 className="font-orbitron">{skill.name}</h4>
                    <p className="text-gray-400 text-sm mt-1">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
