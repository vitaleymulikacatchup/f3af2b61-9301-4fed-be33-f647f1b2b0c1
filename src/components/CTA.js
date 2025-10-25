import React from 'react';
import { Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-apw-blue text-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Contact us today for a
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-8">
            FREE LEASE EVALUATION
          </h3>
          
          <div className="flex items-center justify-center mb-8">
            <Phone className="w-8 h-8 mr-4" />
            <span className="text-3xl lg:text-4xl font-bold">
              1.888.232.2740
            </span>
          </div>
          
          <button className="bg-white text-apw-blue hover:bg-gray-50 font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;