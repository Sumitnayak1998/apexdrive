import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Choose Your Car",
      desc: "Browse our extensive fleet and select the vehicle that perfectly matches your travel needs and preferences."
    },
    {
      num: "02",
      title: "Select Rental Dates",
      desc: "Pick your required pickup and drop-off dates, along with any additional accessories like GPS or child seats."
    },
    {
      num: "03",
      title: "Confirm Booking",
      desc: "Review your transparent pricing quote and securely finalize your reservation online in minutes."
    },
    {
      num: "04",
      title: "Pick Up & Drive",
      desc: "Collect your keys from our location or have the car delivered to you. Start your journey hassle-free!"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">How To Rent</h2>
          <p className="text-slate-600 text-lg">A simple, four-step process to get you on the road quickly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          <div className="hidden lg:block absolute top-[45px] left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-indigo-100 border-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-3xl font-extrabold text-blue-600 mb-6 relative z-10 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-300 group-hover:border-blue-50">
                {step.num}
              </div>
              <h3 className="text-lg font-bold mb-3 text-slate-900">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
