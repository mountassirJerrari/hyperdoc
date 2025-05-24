import { useEffect, useRef } from "react";
import { getRandomNumberInRange } from "@/lib/utils";

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starCount = 150;
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      
      // Random size between 1px and 3px
      const size = getRandomNumberInRange(1, 3);
      
      // Apply styles
      star.style.position = 'absolute';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = 'white';
      star.style.borderRadius = '50%';
      star.style.top = `${getRandomNumberInRange(0, 100)}%`;
      star.style.left = `${getRandomNumberInRange(0, 100)}%`;
      star.style.opacity = `${getRandomNumberInRange(0.2, 0.8)}`;
      
      // Animation
      star.style.animation = `twinkle ${getRandomNumberInRange(3, 8)}s infinite ease-in-out`;
      star.style.animationDelay = `${getRandomNumberInRange(0, 5)}s`;
      
      container.appendChild(star);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default StarBackground;
