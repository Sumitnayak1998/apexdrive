import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Business Traveler",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      text: "The Telegram booking process is incredibly fast. I got my Audi A6 confirmed within minutes. The car was pristine and the service was flawless.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Family Vacation",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      text: "Rented an Innova Hycross for our family trip. The automated assistant made the entire process so easy, and the vehicle was exactly as promised.",
      rating: 5
    },
    {
      name: "Amit Desai",
      role: "Weekend Getaway",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      text: "ApexDrive offers the best fleet in the city. The Mahindra Thar I booked was in perfect condition. Highly recommend their service!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative bg-slate-900 overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-sm font-bold tracking-wide mb-6 border border-white/10 backdrop-blur-md"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight"
          >
            Loved By Our Riders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-medium"
          >
            Don't just take our word for it. Discover what our customers have to say about their seamless journeys.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`p-6 md:p-8 rounded-3xl relative group transition-all duration-500 hover:-translate-y-2
                bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl
                shadow-2xl shadow-blue-900/20
                ${idx === 1 ? 'md:-translate-y-4 hover:-translate-y-6' : ''}
              `}
            >
              {/* Oversized Background Quote */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 -rotate-12 transition-transform duration-500 group-hover:rotate-0" />
              
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                ))}
              </div>
              
              <p className="text-slate-300 text-base leading-relaxed mb-6 relative z-10 font-medium">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="relative w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{review.name}</h4>
                  <p className="text-xs text-blue-300 font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
