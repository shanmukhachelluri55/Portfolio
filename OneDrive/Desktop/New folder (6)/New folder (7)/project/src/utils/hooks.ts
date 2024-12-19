import { useState, useEffect, useCallback } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
};

export const useParallax = (ref: React.RefObject<HTMLElement>, strength = 20) => {
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (ref.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * strength;
        const yPos = (clientY / innerHeight - 0.5) * strength;
        
        ref.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
    },
    [strength]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);
};