import React from 'react';

const Chart = () => {
  return (
    <section className="section-padding bg-apw-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            GAIN CONTROL WITH A LEASE BUYOUT
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Take control of your cellular lease with our comprehensive buyout solutions. Our data-driven approach ensures you get the best value for your investment.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-8">
            <img
              src="/images/lease-chart.png"
              alt="Lease value comparison chart"
              className="max-w-full h-auto"
            />
          </div>
          
          <div className="text-center">
            <button className="btn-primary">
              Learn More About Lease Buyouts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;