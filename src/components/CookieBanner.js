import React, { useState } from 'react';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-apw-dark text-white p-6 shadow-lg z-50">
      <div className="container-custom">
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-4">
            <h3 className="font-semibold mb-2">This website uses cookies</h3>
            <p className="text-sm text-gray-300 mb-4">
              This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
              <a href="#" className="text-apw-cyan hover:underline ml-1">
                Read more
              </a>
            </p>
            
            {showDetails && (
              <div className="mb-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="strictly-necessary"
                    checked
                    disabled
                    className="rounded"
                  />
                  <label htmlFor="strictly-necessary" className="text-sm">
                    STRICTLY NECESSARY
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="performance"
                    className="rounded"
                  />
                  <label htmlFor="performance" className="text-sm">
                    PERFORMANCE
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="targeting"
                    className="rounded"
                  />
                  <label htmlFor="targeting" className="text-sm">
                    TARGETING
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="functionality"
                    className="rounded"
                  />
                  <label htmlFor="functionality" className="text-sm">
                    FUNCTIONALITY
                  </label>
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-gray-300 hover:text-white underline"
              >
                SHOW DETAILS
              </button>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setIsVisible(false)}
              className="bg-apw-cyan hover:bg-apw-cyan/80 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              ACCEPT ALL
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="border border-gray-500 hover:border-gray-400 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              DECLINE ALL
            </button>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;