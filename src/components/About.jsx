import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
            The Intelligent Automation System for <span className="text-blue-600">Rental Businesses</span>
          </h2>
          
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden mt-12 text-left md:text-center border border-slate-100 shadow-xl shadow-slate-200/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 blur-[80px] rounded-full -m-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 blur-[80px] rounded-full -m-20" />
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed relative z-10 font-medium">
              ApexDrive is a leading car rental platform perfectly tailored for modern travelers. With our extensive fleet and straightforward booking process, we dramatically improve your mobility experience from the moment you pick up the keys.
            </p>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mt-6 relative z-10 font-medium">
              Our system handles complex booking workflows, provides immediate answers to inquiries, and sends courteous automated reminders, reducing human error and freeing up your team to focus on scaling the business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
