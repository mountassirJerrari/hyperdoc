import { useState } from "react";
import { motion } from "framer-motion";
import { projectData, ProjectType } from "@/data/projectData";
import ProjectModal from "@/components/ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

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
          My <span className="text-space-mint">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-glow-mint transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              onClick={() => openProjectModal(project)}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="font-orbitron text-xl mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{project.technologies.slice(0, 3).join(', ')}</p>
                <div className="flex space-x-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-space-mint bg-opacity-30 text-space-mint px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </motion.section>
  );
};

export default Projects;
