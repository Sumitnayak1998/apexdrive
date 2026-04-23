import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Vehicles = () => {
  const [showAll, setShowAll] = useState(false);
  const fleet = [
    { name: "Toyota Camry", type: "Sedan", price: "₹3,500", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg/960px-2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg", features: ["5 Seats", "Automatic", "Premium Sedan"] },
    { name: "Mahindra Thar", type: "SUV", price: "₹4,500", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mahindra_Thar_SUV_in_%22Red_Rage%22_color_at_Ashiana_Brahmanda%2C_East_Singbhum_India_%28Ank_Kumar%2C_Infosys_limited%29_02_%28cropped%29.jpg/960px-Mahindra_Thar_SUV_in_%22Red_Rage%22_color_at_Ashiana_Brahmanda%2C_East_Singbhum_India_%28Ank_Kumar%2C_Infosys_limited%29_02_%28cropped%29.jpg", features: ["4 Seats", "Manual", "Off-Road Ready"] },
    { name: "BMW 5 Series", type: "Luxury", price: "₹12,000", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/BMW_G60_520i_1X7A2443.jpg/960px-BMW_G60_520i_1X7A2443.jpg", features: ["5 Seats", "Automatic", "Luxury Interior"] },
    { name: "Maruti Suzuki Swift", type: "Hatchback", price: "₹2,000", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg/960px-Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg", features: ["5 Seats", "Manual", "High Efficiency"] },
    { name: "Hyundai Creta", type: "SUV", price: "₹4,000", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg/960px-2022_Hyundai_Creta_1.6_Plus_%28Chile%29_front_view.jpg", features: ["5 Seats", "Automatic", "Panoramic Sunroof"] },
    { name: "Honda City", type: "Sedan", price: "₹3,200", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg/960px-2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg", features: ["5 Seats", "Manual", "Spacious Boot"] },
    { name: "Mercedes-Benz C-Class", type: "Luxury", price: "₹15,000", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mercedes-Benz_W206_IMG_6380.jpg/960px-Mercedes-Benz_W206_IMG_6380.jpg", features: ["5 Seats", "Automatic", "Advanced Tech"] },
    { name: "Tata Nexon EV", type: "SUV (Electric)", price: "₹4,200", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tata_Nexon_Blue_Dual_Tone.jpg/960px-Tata_Nexon_Blue_Dual_Tone.jpg", features: ["5 Seats", "Automatic", "Zero Emissions"] },
    { name: "Mahindra Scorpio-N", type: "SUV", price: "₹5,200", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mahindra_Scorpio_GLX_2.6_m-Hawk_2011_%2836756517492%29.jpg/960px-Mahindra_Scorpio_GLX_2.6_m-Hawk_2011_%2836756517492%29.jpg", features: ["7 Seats", "Automatic", "Powerful Engine"] },
    { name: "Toyota Innova Hycross", type: "MUV / SUV", price: "₹7,500", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg/960px-2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg", features: ["7 Seats", "Automatic", "Ultimate Comfort"] },
    { name: "Kia Seltos", type: "SUV", price: "₹4,200", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg/960px-Kia_Seltos_SP2_PE_Snow_White_Pearl_%2817%29_%28cropped%29.jpg", features: ["5 Seats", "Automatic", "Smart Features"] },
    { name: "Volkswagen Virtus", type: "Sedan", price: "₹3,800", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2022_Volkswagen_Virtus_1.5_GT_%28India%29_front_view_02.png/960px-2022_Volkswagen_Virtus_1.5_GT_%28India%29_front_view_02.png", features: ["5 Seats", "Manual", "German Build"] },
    { name: "Skoda Slavia", type: "Sedan", price: "₹3,800", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2021_%C5%A0koda_Slavia_1.5_TSI_Style_%28India%29_front_view.png/960px-2021_%C5%A0koda_Slavia_1.5_TSI_Style_%28India%29_front_view.png", features: ["5 Seats", "Automatic", "Premium Design"] },
    { name: "Honda Amaze", type: "Sedan", price: "₹2,800", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Honda_Amaze_front_view_%28cropped%29.jpg/960px-Honda_Amaze_front_view_%28cropped%29.jpg", features: ["5 Seats", "Manual", "Compact Sedan"] },
    { name: "Hyundai i20 N-Line", type: "Hatchback", price: "₹2,500", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hyundai_i20_%28III%2C_Facelift%29_%E2%80%93_f_11102025.jpg/960px-Hyundai_i20_%28III%2C_Facelift%29_%E2%80%93_f_11102025.jpg", features: ["5 Seats", "Automatic", "Sporty Look"] },
    { name: "Maruti Suzuki Baleno", type: "Hatchback", price: "₹2,200", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Suzuki_Baleno_front_20071004.jpg/960px-Suzuki_Baleno_front_20071004.jpg", features: ["5 Seats", "Manual", "Premium Hatch"] },
    { name: "MG Astor", type: "SUV", price: "₹4,000", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/MG_ZS_%28crossover%2C_second_generation%29_DSC_8542.jpg/960px-MG_ZS_%28crossover%2C_second_generation%29_DSC_8542.jpg", features: ["5 Seats", "Automatic", "AI Assistant"] },
    { name: "Audi A6", type: "Luxury", price: "₹18,500", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Audi_A6_C9_IAA_2025_DSC_1920.jpg/960px-Audi_A6_C9_IAA_2025_DSC_1920.jpg", features: ["5 Seats", "Automatic", "Business Class"] },
    { name: "Toyota Fortuner", type: "SUV", price: "₹9,500", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg/960px-2015_Toyota_Fortuner_%28New_Zealand%29.jpg", features: ["7 Seats", "Manual", "Commanding Stance"] },
    { name: "Victoris Aura", type: "Luxury (EV)", price: "₹16,500", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hyundai_Grand_i10_Sedan_2022_%2853703857804%29_%28cropped%29.jpg/960px-Hyundai_Grand_i10_Sedan_2022_%2853703857804%29_%28cropped%29.jpg", features: ["5 Seats", "Automatic", "Luxury Electric"] }
  ];

  return (
    <section id="vehicles" className="py-24 relative bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">Our Premium Fleet</h2>
            <p className="text-slate-600 text-lg">Choose from our wide selection of meticulously maintained vehicles.</p>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-block mt-4 md:mt-0 text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer"
          >
            {showAll ? "Show Less Vehicles \u2191" : "View All Vehicles \u2192"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
          {(showAll ? fleet : fleet.slice(0, 8)).map((car, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.1 }}
              className="bg-slate-50 flex flex-col rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-40 relative overflow-hidden">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] uppercase tracking-wider font-bold rounded-full shadow-sm border border-white/20">
                    {car.type}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{car.name}</h3>
                  <div className="text-right shrink-0">
                    <span className="text-base font-extrabold text-blue-600">{car.price}</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold mt-0.5">/ day</span>
                  </div>
                </div>
                
                <ul className="text-xs text-slate-600 space-y-2 mb-5 flex-grow font-medium">
                  {car.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>

                <a href="#connected" className="w-full block text-center py-2.5 text-sm bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700 font-bold rounded-xl transition-all hover:shadow-sm">
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Vehicles;
