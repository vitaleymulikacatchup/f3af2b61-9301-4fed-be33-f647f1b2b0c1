import React from 'react';
import { MapPin, Search, Award, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Site Acquisition',
      description: 'Comprehensive site identification and acquisition services tailored to your network expansion requirements.'
    },
    {
      icon: Search,
      title: 'Due Diligence',
      description: 'Thorough site evaluation and risk assessment to ensure optimal investment decisions and regulatory compliance.'
    },
    {
      icon: Award,
      title: 'Lease Management',
      description: 'Professional lease negotiation and ongoing management services to maximize value and minimize operational complexity.'
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Optimization',
      description: 'Strategic analysis and optimization of existing site portfolios to enhance performance and reduce costs.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-apw-cyan/10 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-apw-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;