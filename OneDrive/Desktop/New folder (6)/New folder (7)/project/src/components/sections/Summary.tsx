import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { summaryPoints } from '../../data/summary';

interface SummaryPoint {
  icon: React.ElementType;
  description: string;
}

const SummaryCard = ({ point }: { point: SummaryPoint }) => {
  const Icon = point.icon;

  return (
    <div className="group relative bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <Icon className="w-10 h-10 text-green-400 mb-4" />
      <p className="text-gray-300 text-base">{point.description}</p>
    </div>
  );
};

export default function Summary() {
  const summaryCards: SummaryPoint[] = summaryPoints.map((point) => ({
    icon: CheckCircle,
    description: point,
  }));

  return (
    <section id="summary" className="relative py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Summary</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {summaryCards.map((point, index) => (
            <MagneticButton key={index} asChild>
              <div className="w-full">
                <SummaryCard point={point} />
              </div>
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}
