import React from 'react';
import { Code, GitBranch, Database, Terminal, Shield, Brain } from 'lucide-react'; // Updated icons
import MagneticButton from '../ui/MagneticButton';
import { skills } from '../../data/skills';

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  technologies: string[];
}

const SkillCard = ({ skill }: { skill: SkillCategory }) => {
  const Icon = skill.icon;

  return (
    <div className="group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <Icon className="w-12 h-12 text-blue-400 mb-4" />
      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
      <p className="text-gray-300 mb-4">{skill.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {skill.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: Code,
      title: 'Languages',
      description: 'Programming languages I work with',
      technologies: skills.languages
    },
    {
      icon: GitBranch,
      title: 'Frameworks',
      description: 'Frameworks and libraries I use',
      technologies: skills.frameworks
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'Database systems I work with',
      technologies: skills.databases
    },
    {
      icon: Terminal,
      title: 'Tools',
      description: 'Development tools I use',
      technologies: skills.tools
    },
    {
      icon: Brain, // More fitting for "Core Skills"
      title: 'Core Skills',
      description: 'Essential development skills',
      technologies: skills.core
    }
  ];

  return (
    <section id="skills" className="relative py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((skill, index) => (
            <MagneticButton key={index} asChild>
              <div className="w-full">
                <SkillCard skill={skill} />
              </div>
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}
