import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Array of vibrant colors for the glow effect
const glowColors = [
  'rgba(236, 72, 153, 0.6)',  // Pink
  'rgba(99, 102, 241, 0.6)',  // Indigo
  'rgba(16, 185, 129, 0.6)',  // Emerald
  'rgba(245, 158, 11, 0.6)',  // Amber
  'rgba(239, 68, 68, 0.6)',   // Red
  'rgba(139, 92, 246, 0.6)',  // Violet
  'rgba(6, 182, 212, 0.6)',   // Cyan
  'rgba(236, 72, 153, 0.6)',  // Pink
];

const getRandomColor = () => glowColors[Math.floor(Math.random() * glowColors.length)];

interface ArtCardProps {
  title: string;
  thumbnail: string;
  count: number;
  onClick: () => void;
}

const ArtCard = ({ title, thumbnail, count, onClick }: ArtCardProps) => {
  const [glowColorsState, setGlowColors] = useState({
    topLeft: getRandomColor(),
    topRight: getRandomColor(),
    bottomLeft: getRandomColor(),
    bottomRight: getRandomColor(),
  });

  useEffect(() => {
    // Change glow colors every few seconds
    const interval = setInterval(() => {
      setGlowColors({
        topLeft: getRandomColor(),
        topRight: getRandomColor(),
        bottomLeft: getRandomColor(),
        bottomRight: getRandomColor(),
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  // Pixel art corner decoration
  const PixelCorner = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => (
    <div className={`absolute ${position.includes('top') ? 'top-0' : 'bottom-0'} ${position.includes('left') ? 'left-0' : 'right-0'} w-6 h-6`}>
      <div className="absolute w-1.5 h-1.5 bg-pink-400" style={{ [position.includes('top') ? 'top' : 'bottom']: '0.25rem', [position.includes('left') ? 'left' : 'right']: '0.25rem' }} />
      <div className="absolute w-1.5 h-1.5 bg-cyan-300" style={{ [position.includes('top') ? 'top' : 'bottom']: '0.25rem', [position.includes('left') ? 'right' : 'left']: '0.25rem' }} />
      <div className="absolute w-1.5 h-1.5 bg-purple-400" style={{ [position.includes('bottom') ? 'bottom' : 'top']: '0.25rem', [position.includes('left') ? 'left' : 'right']: '0.25rem' }} />
    </div>
  );

  return (
    <div className="relative w-full h-80 flex flex-col group">
      {/* Outer glow effect - always visible but more prominent on hover */}
      <motion.div 
        className="absolute -inset-2 rounded-lg -z-10"
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          background: [
            `radial-gradient(circle at 30% 30%, ${glowColorsState.topLeft}, transparent 50%),
             radial-gradient(circle at 70% 30%, ${glowColorsState.topRight}, transparent 50%),
             radial-gradient(circle at 30% 70%, ${glowColorsState.bottomLeft}, transparent 50%),
             radial-gradient(circle at 70% 70%, ${glowColorsState.bottomRight}, transparent 50%)`,
            `radial-gradient(circle at 25% 25%, ${glowColorsState.bottomRight}, transparent 50%),
             radial-gradient(circle at 75% 25%, ${glowColorsState.bottomLeft}, transparent 50%),
             radial-gradient(circle at 25% 75%, ${glowColorsState.topRight}, transparent 50%),
             radial-gradient(circle at 75% 75%, ${glowColorsState.topLeft}, transparent 50%)`,
            `radial-gradient(circle at 30% 30%, ${glowColorsState.topLeft}, transparent 50%),
             radial-gradient(circle at 70% 30%, ${glowColorsState.topRight}, transparent 50%),
             radial-gradient(circle at 30% 70%, ${glowColorsState.bottomLeft}, transparent 50%),
             radial-gradient(circle at 70% 70%, ${glowColorsState.bottomRight}, transparent 50%)`,
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 bg-current rounded-lg blur-2xl opacity-70" />
      </motion.div>
      
      {/* Inner glow effect - more subtle */}
      <motion.div 
        className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <div 
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(
              circle at 20% 20%, ${glowColorsState.topLeft} 0%, 
              transparent 60%
            ),
            radial-gradient(
              circle at 80% 20%, ${glowColorsState.topRight} 0%, 
              transparent 60%
            ),
            radial-gradient(
              circle at 20% 80%, ${glowColorsState.bottomLeft} 0%, 
              transparent 60%
            ),
            radial-gradient(
              circle at 80% 80%, ${glowColorsState.bottomRight} 0%, 
              transparent 60%
            )`,
            filter: 'blur(15px)',
          }}
        />
      </motion.div>
      
      {/* Main card container */}
      <motion.div 
        className="relative flex-1 flex flex-col cursor-pointer group h-full"
        onClick={onClick}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main card with pixel art border */}
        <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-pink-500/5 to-cyan-500/10 border-2 border-transparent group-hover:border-pink-400/30 transition-all duration-300 p-0.5 backdrop-blur-sm">
          {/* Pixel border effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-300/20 transition-all duration-300" />
          
          {/* Pixel corners */}
          <PixelCorner position="top-left" />
          <PixelCorner position="top-right" />
          <PixelCorner position="bottom-left" />
          <PixelCorner position="bottom-right" />
          
          {/* Artwork container */}
          <div className="relative w-full h-full overflow-hidden bg-black/20 backdrop-blur-sm">
            <motion.img 
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover p-2 mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              style={{ filter: 'saturate(1.1) contrast(1.05)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="w-full text-center">
                <span className="inline-block px-3 py-1.5 text-sm font-bold text-cyan-200 bg-black/60 backdrop-blur-sm rounded-full border border-cyan-400/30">
                  Explore Gallery • {count} Artworks
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Title with creative typography */}
        <div className="mt-4 text-center relative">
          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300 font-orbitron tracking-wider">
            {title}
          </h4>
          <div className="mt-1 h-0.5 w-12 mx-auto bg-gradient-to-r from-pink-500/0 via-pink-400 to-pink-500/0 opacity-70" />
        </div>
        
        {/* Subtle floating pixels */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-300/60"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${5 + Math.random() * 90}%`,
              boxShadow: '0 0 8px 2px rgba(165, 243, 252, 0.5)'
            }}
            animate={{
              y: [0, -5, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ArtCard;
