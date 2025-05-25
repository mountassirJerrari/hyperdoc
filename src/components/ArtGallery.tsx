import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

interface ArtGalleryProps {
  images: { src: string; alt: string }[];
  onClose: () => void;
  deviantArtUrl: string;
}

const ArtGallery = ({ images, onClose, deviantArtUrl }: ArtGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div 
        className="bg-space-dark/95 border border-space-accent/30 rounded-xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-3 sm:p-4 border-b border-space-accent/30 bg-space-darker/80">
          <div className="flex items-center gap-3">
            <h3 className="font-orbitron text-lg sm:text-xl text-space-cyan">Art Gallery</h3>
            <span className="text-sm text-gray-400 hidden sm:inline">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={deviantArtUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-space-cyan hover:text-cyan-300 hover:bg-space-accent/20 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="hidden sm:inline">View on</span> DeviantArt
              <ExternalLink size={14} className="flex-shrink-0" />
            </a>
            <button 
              onClick={onClose}
              className="text-gray-300 hover:text-space-cyan transition-colors p-1.5 hover:bg-space-accent/20 rounded-md"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 bg-gradient-to-br from-space-darker/80 to-space-darker/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="w-full h-full flex items-center justify-center p-2"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt} 
                className="max-h-[calc(90vh-160px)] w-auto max-w-full object-contain"
                draggable="false"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {isWideScreen && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-space-secondary/90 hover:bg-space-accent/90 text-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-space-cyan/50"
                aria-label="Previous image"
              >
                <ArrowLeft size={24} />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-space-secondary/90 hover:bg-space-accent/90 text-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-space-cyan/50"
                aria-label="Next image"
              >
                <ArrowRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        {!isWideScreen && (
          <div className="flex justify-between items-center p-3 border-t border-space-accent/30 bg-space-darker/80">
            <button 
              onClick={prevImage}
              className="flex-1 flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-space-cyan p-2 rounded-md hover:bg-space-accent/20 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Previous</span>
            </button>
            <div className="text-sm text-gray-400 px-4">
              {currentIndex + 1} / {images.length}
            </div>
            <button 
              onClick={nextImage}
              className="flex-1 flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-space-cyan p-2 rounded-md hover:bg-space-accent/20 transition-colors"
            >
              <span>Next</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ArtGallery;
