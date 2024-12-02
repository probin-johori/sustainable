import React from 'react';
import { Leaf, Users, Shield, Recycle, Rocket, LucideIcon } from 'lucide-react';

type MetricId = 'environmental' | 'social' | 'ethical' | 'durability' | 'innovation';

interface RatingProps {
  ratings: Record<MetricId, number>;
}

const metrics: Array<{ name: string; icon: LucideIcon; id: MetricId }> = [
  { name: 'Environmental Impact', icon: Leaf, id: 'environmental' },
  { name: 'Social Responsibility', icon: Users, id: 'social' },
  { name: 'Ethical Practices', icon: Shield, id: 'ethical' },
  { name: 'Product Durability & Circularity', icon: Recycle, id: 'durability' },
  { name: 'Innovation & Leadership', icon: Rocket, id: 'innovation' }
];

const BrandRating: React.FC<RatingProps> = ({ ratings }) => {
  const average = Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).length;

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center">
          <span className="text-6xl font-bold" style={{ color: '#163400' }}>{average.toFixed(2)}</span>
          <span className="text-md font-medium text-neutral-600 ml-1">/5</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mt-2">Sustainability Score</h3>
        <p className="text-sm text-gray-600 mt-0">
          Top 10% of sustainable brands
        </p>
      </div>

      <div className="flex">
        {metrics.map(({ name, icon: Icon, id }, index) => (
          <React.Fragment key={id}>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="text-sm" style={{ color: '#163400' }}>{name}</div>
              <div className="flex items-center mt-1 mb-8">
                <span className="text-lg font-bold" style={{ color: '#163400' }}>{ratings[id]}</span>
                <span className="text-neutral-600 text-sm font-medium ml-1">/5</span>
              </div>
              <Icon className="w-8 h-8" style={{ color: '#163400' }} />
            </div>
            {index < metrics.length - 1 && (
              <div className="w-px h-24 bg-neutral-200 mx-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BrandRating;
