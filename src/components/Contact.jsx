import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-blue-50/50 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-[2.5rem] p-8 md:p-16 text-center border border-slate-200 shadow-2xl shadow-blue-900/5 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white"
        >
          <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-6">
            Get In Touch
          </span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Ready to Start <br /> Your Journey?
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
            Experience the freedom of reliable car rentals. Drop us an email to book with ApexDrive and transform your next trip today.
          </p>

          <a 
            href="mailto:sumitkr07.nayak@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-1 group"
          >
            <Mail className="w-5 h-5" />
            sumitkr07.nayak@gmail.com
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
