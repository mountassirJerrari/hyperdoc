import { useEffect, useRef } from "react";
import { getRandomNumberInRange } from "@/lib/utils";

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starCount = 200; // Increased number of stars
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      
      // Random size between 1px and 3px for normal stars, with occasional larger ones
      const isBigStar = Math.random() > 0.9; // 10% chance of being a bigger star
      const size = isBigStar ? getRandomNumberInRange(2, 4) : getRandomNumberInRange(1, 2);
      const opacity = isBigStar ? getRandomNumberInRange(0.7, 1) : getRandomNumberInRange(0.2, 0.6);
      
      // Apply styles
      star.style.position = 'absolute';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = 'white';
      star.style.borderRadius = '50%';
      star.style.top = `${getRandomNumberInRange(0, 100)}%`;
      star.style.left = `${getRandomNumberInRange(0, 100)}%`;
      star.style.opacity = `${opacity}`;
      
      // Add glow effect for bigger stars
      if (isBigStar) {
        star.style.boxShadow = '0 0 5px 1px rgba(255, 255, 255, 0.8)';
      }
      
      // Animation - vary speed and delay
      const duration = isBigStar ? getRandomNumberInRange(4, 10) : getRandomNumberInRange(2, 6);
      const delay = getRandomNumberInRange(0, 10);
      star.style.animation = `twinkle ${duration}s infinite ease-in-out`;
      star.style.animationDelay = `${delay}s`;
      
      container.appendChild(star);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default StarBackground;
