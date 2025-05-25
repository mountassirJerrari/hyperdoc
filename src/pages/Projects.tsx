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
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.h2 
          className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          My <span className="text-space-mint">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="relative overflow-hidden rounded-xl cursor-pointer group card card-hover"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="card-title group-hover:text-space-accent transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-space-secondary/70 text-space-cyan border border-space-cyan/20 px-2.5 py-1 rounded-full"
                    >
                      {tech}
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
