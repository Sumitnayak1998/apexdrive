import React from 'react';
import { CarFront } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand */}
          <div className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4 md:mb-0">
            <div className="p-2 bg-blue-100 rounded-lg">
              <CarFront className="w-6 h-6 text-blue-600" />
            </div>
            <span>Apex<span className="text-blue-600">Drive</span></span>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-600">
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-slate-200 mb-8" />

        <div className="text-center text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} ApexDrive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
