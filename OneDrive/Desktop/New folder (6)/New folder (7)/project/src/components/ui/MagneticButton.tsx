import React, { useRef, useEffect } from 'react';
import { magneticEffect } from '../../utils/animations';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  asChild?: boolean; // Add this prop to determine if we should render as a div
}

export default function MagneticButton({ 
  children, 
  className = '', 
  onClick,
  asChild = false 
}: MagneticButtonProps) {
  const elementRef = useRef<HTMLDivElement | HTMLButtonElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      magneticEffect(e, element);
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const Element = asChild ? 'div' : 'button';

  return (
    <Element
      ref={elementRef as any}
      className={`relative transition-transform duration-100 ease-out ${className}`}
      onClick={onClick}
      type={!asChild ? "button" : undefined}
    >
      {children}
    </Element>
  );
}