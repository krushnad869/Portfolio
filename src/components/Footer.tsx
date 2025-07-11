import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Krushna Desai</h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer & SEO Executive passionate about creating 
              exceptional digital experiences that drive business growth.
            </p>
            
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Frontend Development</span></li>
              <li><span className="text-gray-400">SEO Optimization</span></li>
              <li><span className="text-gray-400">Website Audits</span></li>
              <li><span className="text-gray-400">Performance Optimization</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Krushna Desai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;