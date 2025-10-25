import React from 'react';

const Locations = () => {
  return (
    <section className="section-padding bg-apw-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            OUR LOCATIONS
          </h2>
        </div>
        
        <div className="relative">
          {/* World Map */}
          <div className="flex justify-center">
            <img
              src="/images/world-map.png"
              alt="World map showing APWireless locations"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;