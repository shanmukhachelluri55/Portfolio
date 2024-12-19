import MagneticButton from '../ui/MagneticButton';
import { experiences } from '../../data/experience'; // Import the experiences data

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  };
}

const ExperienceCard = ({ experience }: { experience: ExperienceCardProps['experience'] }) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-xl font-bold text-blue-400 mb-2">{experience.title}</h3>
      <p className="text-gray-300 text-sm">{experience.company} | {experience.location}</p>
      <p className="text-gray-300 text-sm mb-4">{experience.period}</p>

      <div className="mt-4">
        <ul className="list-disc pl-5 space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-300 text-base">{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <MagneticButton key={index} asChild>
              <div className="w-full">
                <ExperienceCard experience={experience} />
              </div>
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}
