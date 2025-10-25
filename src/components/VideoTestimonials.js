import React from 'react';

const VideoTestimonials = () => {
  return (
    <section className="section-padding bg-apw-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            VIDEO TESTIMONIALS
          </h2>
        </div>
        
        <div className="flex justify-center space-x-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
            </div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-white text-apw-blue hover:bg-gray-50 font-medium px-8 py-3 rounded-lg transition-colors duration-200">
            See More Video Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;