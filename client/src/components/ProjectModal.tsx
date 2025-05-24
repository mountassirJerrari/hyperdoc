import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ProjectType } from "@/data/projectData";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType | null;
};

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-space-secondary rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-orbitron text-2xl text-space-mint">{project.title}</h3>
                <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover rounded-lg mb-6"
                />
                
                <div className="mb-6">
                  <h4 className="font-orbitron text-lg mb-2 text-space-mint">Overview</h4>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-orbitron text-lg mb-2 text-space-mint">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-space-dark px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-orbitron text-lg mb-2 text-space-mint">Challenges</h4>
                    <p className="text-gray-300">{project.challenges}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-orbitron text-lg mb-2 text-space-mint">Outcome</h4>
                    <p className="text-gray-300">{project.outcome}</p>
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block bg-space-mint hover:bg-opacity-80 text-space-dark font-orbitron py-2 px-6 rounded-md transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
