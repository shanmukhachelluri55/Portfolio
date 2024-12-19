import React, { useRef } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useParallax } from '../../utils/hooks';
import { personalInfo } from '../../data/personalInfo';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useParallax(titleRef, 10);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          {personalInfo.name}
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-gray-300">
          {personalInfo.role}
        </p>
        <p className="text-lg mb-12 text-gray-400">
          {personalInfo.location}
        </p>
        
        <div className="flex justify-center space-x-8">
          <MagneticButton asChild>
            <div className="hover:text-blue-400 transition-colors">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-8 h-8" />
              </a>
            </div>
          </MagneticButton>
          
          <MagneticButton asChild>
            <div className="hover:text-blue-400 transition-colors">
              <a href={`https://linkedin.com/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </MagneticButton>
          
          <MagneticButton asChild>
            <div className="hover:text-blue-400 transition-colors">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </MagneticButton>
          
          <MagneticButton asChild>
            <div className="hover:text-blue-400 transition-colors">
              <a href={`tel:${personalInfo.phone}`}>
                <Phone className="w-8 h-8" />
              </a>
            </div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}