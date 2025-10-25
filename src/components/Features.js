import React from 'react';
import { Globe, Users, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operating across multiple international markets with extensive local expertise and established relationships in key regions worldwide.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced professionals bring decades of combined expertise in telecommunications infrastructure and site development.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful project delivery and long-term partnerships with leading mobile network operators and tower companies.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-apw-light-blue/10 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-apw-light-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;