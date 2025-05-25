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
          className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-space-dark border border-space-accent/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-orbitron text-2xl md:text-3xl text-space-cyan">
                  {project.title}
                </h3>
                <button 
                  onClick={onClose}
                  className="text-gray-300 hover:text-space-cyan transition-colors p-1 hover:bg-space-accent/20 rounded-full"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-8">
                <div className="relative rounded-xl overflow-hidden border border-space-accent/30 bg-space-secondary">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-60 md:h-80 object-cover"
                  />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-orbitron text-lg text-space-cyan flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-space-cyan animate-pulse" />
                    Overview
                  </h4>
                  <p className="text-gray-200 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-orbitron text-lg text-space-cyan flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-space-cyan animate-pulse" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-space-accent/15 text-space-cyan px-3 py-1.5 rounded-full text-sm font-medium border border-space-accent/30 hover:bg-space-accent/25 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-orbitron text-lg text-space-cyan flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-space-cyan animate-pulse" />
                      Challenges
                    </h4>
                    <p className="text-gray-200 leading-relaxed">{project.challenges}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-orbitron text-lg text-space-cyan flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-space-cyan animate-pulse" />
                      Outcome
                    </h4>
                    <p className="text-gray-200 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href={project.link} 
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-space-cyan to-space-mint hover:opacity-90 text-space-dark font-orbitron py-2.5 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
