import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../../utils/hooks';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const position = useMousePosition();

  useEffect(() => {
    if (cursorRef.current && cursorDotRef.current) {
      cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      cursorDotRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-12 h-12 rounded-full border-2 border-blue-500 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div 
        ref={cursorDotRef}
        className="fixed pointer-events-none z-50 w-2 h-2 bg-blue-500 rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}