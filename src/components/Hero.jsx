import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-slate-200/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left mt-12 lg:mt-0"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide backdrop-blur-sm">
            🏆 Premium Fleet Available Now
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
            Reliable Car Rental <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Solutions for Every Journey
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
            Explore a wide range of well-maintained vehicles with flexible booking options, transparent pricing, and seamless customer support.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#vehicles" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Browse Vehicles
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-blue-200 hover:bg-slate-50 text-slate-700 rounded-full font-semibold transition-all shadow-sm flex items-center justify-center hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Right Cover Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="relative transform hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=2070&auto=format&fit=crop" 
              alt="Premium Car Rental" 
              className="w-full h-auto rounded-3xl object-cover h-96 lg:h-[32rem]"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
