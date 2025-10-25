import React from 'react';

const Stats = () => {
  const stats = [
    { number: '0', label: 'Countries' },
    { number: '0', label: 'Sites' },
    { number: '0+', label: 'Years Experience' },
    { number: '0+', label: 'Team Members' }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-apw-blue mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;