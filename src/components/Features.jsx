import React from 'react';
import { motion } from 'framer-motion';
import { CarFront, Landmark, Headset, ShieldCheck, CheckCircle } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: <CarFront className="w-8 h-8 text-blue-600" />,
      title: "Wide Range of Vehicles",
      description: "From compact city cars to luxurious sedans and spacious SUVs, we have the perfect vehicle to suit your journey and budget."
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      title: "Affordable & Transparent",
      description: "No hidden fees or surprise charges. Enjoy competitive daily rates and fully transparent pricing on every single rental."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Easy Booking Process",
      description: "Our streamlined online reservation system allows you to book your desired car securely in just a few clicks."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Well-Maintained & Insured",
      description: "Drive with absolute peace of mind. Every vehicle in our fleet is rigorously serviced, cleaned, and fully insured."
    },
    {
      icon: <Headset className="w-8 h-8 text-blue-600" />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist you with reservations, roadside assistance, and inquiries."
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-slate-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">Why Choose Us?</h2>
          <p className="text-slate-600 text-lg">Experience unmatched quality and service on every mile you drive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuresList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/80 border border-slate-100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
