import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is a cellular lease and how does it work?',
      answer: 'A cellular lease is an agreement between a property owner and a wireless carrier or tower company to use a portion of the property for telecommunications equipment.'
    },
    {
      question: 'How do you determine the value of my cellular lease?',
      answer: 'We evaluate multiple factors including location, lease terms, carrier relationships, and market conditions to provide accurate valuations.'
    },
    {
      question: 'What are the benefits of working with APWireless?',
      answer: 'Our global expertise, established relationships, and comprehensive services ensure optimal outcomes for all stakeholders.'
    },
    {
      question: 'How long does the lease acquisition process take?',
      answer: 'Timeline varies by project complexity, but we work efficiently to minimize delays while ensuring thorough due diligence.'
    }
  ];

  return (
    <section className="section-padding bg-apw-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            FAQs
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="">
                <h3 className="text-lg font-semibold mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-apw-blue hover:bg-gray-50 font-medium px-8 py-3 rounded-lg transition-colors duration-200">
              View All FAQs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;