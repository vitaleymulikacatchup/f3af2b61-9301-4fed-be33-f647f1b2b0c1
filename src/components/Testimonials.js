import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Lisa Pearson',
      title: 'Property Owner',
      content: 'APWireless made the entire process seamless and transparent. Their expertise in cellular lease management is unmatched.',
      rating: 5
    },
    {
      name: 'Fred Black',
      title: 'Tower Company Executive',
      content: 'Working with APWireless has been exceptional. Their global reach and local expertise deliver consistent results.',
      rating: 5
    },
    {
      name: 'Ray Poole',
      title: 'Network Operations Manager',
      content: 'The team at APWireless understands our needs and consistently delivers high-quality site acquisition services.',
      rating: 5
    },
    {
      name: 'Heather Reycraft',
      title: 'Real Estate Director',
      content: 'Professional, knowledgeable, and results-driven. APWireless is our trusted partner for telecommunications infrastructure.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            TESTIMONIALS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-apw-light-gray p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;