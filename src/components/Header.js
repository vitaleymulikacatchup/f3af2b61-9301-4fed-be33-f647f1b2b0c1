import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = [
    { name: 'Who We Are', href: '#' },
    { name: 'Property Owners', href: '#' },
    { name: 'MNOs & TowerCos', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Our Sites', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Resource Center', href: '#' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="/images/apw-logo.png"
              alt="APWireless"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-apw-blue font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-apw-blue font-medium text-sm">
              APW Connect
            </button>
            <button className="btn-primary text-sm">
              Contact Us
            </button>
            <div className="flex items-center space-x-2">
              <img src="/images/us-flag.png" alt="US" className="w-6 h-4" />
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-apw-blue"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-apw-blue font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-apw-blue font-medium">
                  APW Connect
                </button>
                <button className="block w-full btn-primary text-sm">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;