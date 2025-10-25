import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'COMPANY',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'News & Press',
        'Contact Us'
      ]
    },
    {
      title: 'SERVICES & SOLUTIONS',
      links: [
        'Site Acquisition',
        'Lease Management',
        'Due Diligence',
        'Portfolio Optimization',
        'Consulting Services'
      ]
    },
    {
      title: 'RESOURCE CENTER',
      links: [
        'Industry Reports',
        'White Papers',
        'Case Studies',
        'FAQs',
        'Blog'
      ]
    }
  ];

  return (
    <footer className="bg-apw-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img
              src="/images/apw-logo-white.png"
              alt="APWireless"
              className="h-8 mb-6"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading global telecom and digital infrastructure solutions provider specializing in site acquisition, leasing, and management services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 APWireless International LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;