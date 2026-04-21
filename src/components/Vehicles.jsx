import React from 'react';
import { motion } from 'framer-motion';

const Vehicles = () => {
  const fleet = [
    {
      name: "Luxury Sedan",
      price: "$85",
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
      features: ["5 Seats", "Automatic", "Leather Interior"]
    },
    {
      name: "Family SUV",
      price: "$110",
      img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop",
      features: ["7 Seats", "Automatic", "Extra Luggage"]
    },
    {
      name: "Compact Hatchback",
      price: "$45",
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop",
      features: ["4 Seats", "Manual", "High Efficiency"]
    }
  ];

  return (
    <section id="vehicles" className="py-24 relative bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">Our Premium Fleet</h2>
            <p className="text-slate-600 text-lg">Choose from our wide selection of meticulously maintained vehicles.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Vehicles &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((car, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 flex flex-col rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
                  <div className="text-right">
                    <span className="text-xl font-extrabold text-blue-600">{car.price}</span>
                    <span className="text-sm text-slate-500 block">/day</span>
                  </div>
                </div>
                
                <ul className="text-sm text-slate-600 space-y-2 mb-8 flex-grow">
                  {car.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-300" /> {feat}
                    </li>
                  ))}
                </ul>

                <a href="#connected" className="w-full block text-center py-3 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700 font-semibold rounded-xl transition-colors">
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Vehicles;
