import MagneticButton from '../ui/MagneticButton';
import { education } from '../../data/education'; // Import education data

interface EducationCardProps {
  education: {
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    year: string;
    score: string;
  };
}

const EducationCard = ({ education }: { education: EducationCardProps['education'] }) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-xl font-bold text-blue-400 mb-2">{education.degree}</h3>
      <p className="text-gray-300 text-sm">{education.institution} | {education.location}</p>
      <p className="text-gray-300 text-sm">{education.year}</p>
      <p className="text-gray-300 text-sm mb-4">Score: {education.score}</p>
      
      <p className="text-gray-300 text-sm">{education.specialization}</p>
    </div>
  );
};

export default function Education() {
  return (
    <section id="education" className="relative py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <MagneticButton key={index} asChild>
              <div className="w-full">
                <EducationCard education={edu} />
              </div>
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}
