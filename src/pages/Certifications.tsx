import { motion } from "framer-motion";
import { certifications } from "@/data/certificationsData";
import { ExternalLink, Award, FileText } from "lucide-react";

const Certifications = () => {
  return (
    <motion.section
      className="min-h-screen w-full py-20 px-4 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-2">
            Certifications <span className="text-space-cyan">& Badges</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-cyan to-space-purple mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={`group relative overflow-hidden rounded-xl backdrop-blur-sm border ${
                cert.isBadge 
                  ? 'border-space-cyan/30 hover:border-space-cyan/50' 
                  : 'border-space-purple/30 hover:border-space-purple/50'
              } bg-gray-900/50 transition-all duration-300 hover:shadow-lg`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-orbitron text-white mb-1.5 truncate">
                      {cert.title}
                    </h3>
                    <p className="text-space-cyan/90 text-sm font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className={`ml-4 p-2 rounded-lg ${
                    cert.isBadge 
                      ? 'bg-space-cyan/10 text-space-cyan' 
                      : 'bg-space-purple/10 text-space-purple'
                  }`}>
                    {cert.isBadge ? (
                      <Award className="w-5 h-5" />
                    ) : (
                      <FileText className="w-5 h-5" />
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-300 mb-4">
                  <span className="inline-flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {cert.issueDate}
                  </span>
                  
                  {cert.credentialId && (
                    <span className="inline-flex items-center bg-gray-800/50 px-2.5 py-0.5 rounded-full text-xs font-mono">
                      {cert.credentialId}
                    </span>
                  )}
                </div>

                {cert.description && (
                  <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                    {cert.description}
                  </p>
                )}

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800/50">
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-md transition-colors ${
                        cert.isBadge
                          ? 'text-space-cyan hover:bg-space-cyan/10'
                          : 'text-space-purple hover:bg-space-purple/10'
                      }`}
                    >
                      {cert.isBadge ? 'View Badge' : 'View Certificate'}
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  )}
                  
                  {cert.badgeImage && (
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700/50 flex-shrink-0">
                      <img 
                        src={cert.badgeImage} 
                        alt={`${cert.title} badge`}
                        className="w-full h-full object-contain p-1.5"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Animated background highlight */}
              <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                cert.isBadge 
                  ? 'bg-gradient-to-br from-space-cyan/5 to-transparent' 
                  : 'bg-gradient-to-br from-space-purple/5 to-transparent'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
