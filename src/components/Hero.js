import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Rural landscape with telecommunications infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            A leading global telecom and digital
            <span className="block">infrastructure solutions provider</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            We specialize in site acquisition, leasing, and management services for wireless infrastructure across multiple markets worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary inline-flex items-center justify-center group">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;