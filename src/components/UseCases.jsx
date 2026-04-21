import React from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, MapPin } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Car Rental Companies",
      desc: "Perfect for independent car rental agencies looking to scale operations, improve customer response times, and reduce wait times."
    },
    {
      icon: <Truck className="w-12 h-12 text-indigo-500" />,
      title: "Fleet Management",
      desc: "Ideal for large-scale fleets that require organized, automated notifications for maintenance, check-ins, and driver communications."
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-500" />,
      title: "Vehicle Booking Platforms",
      desc: "For aggregators bridging multiple rental providers who need a unified, intelligent WhatsApp notification layer for all clients."
    }
  ];

  return (
    <section id="use-cases" className="py-24 relative bg-slate-50">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 text-center max-w-2xl mx-auto md:mx-0 md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">Who Is This For?</h2>
          <p className="text-slate-600 text-lg">Designed and engineered specifically for mobility and rental services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-10 text-center border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;
