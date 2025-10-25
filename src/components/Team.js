import React from 'react';

const Team = () => {
  return (
    <section className="section-padding bg-apw-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            THE VALUE OF CELLULAR LEASES: A DEEP DIVE
          </h2>
          <p className="text-xl text-white/80 mb-8">
            WITH APWIRELESS
          </p>
          
          <div className="flex justify-center mb-8">
            <img
              src="/images/apw-logo-white.png"
              alt="APWireless"
              className="h-12"
            />
          </div>
          
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <img
                src="/images/team-member-1.jpg"
                alt="Team member"
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
            </div>
            <div className="text-center">
              <img
                src="/images/team-member-2.jpg"
                alt="Team member"
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
            </div>
            <div className="text-center">
              <img
                src="/images/team-member-3.jpg"
                alt="Team member"
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
            </div>
          </div>
          
          <p className="text-white/80 mt-6">
            Hosted by our experts
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;