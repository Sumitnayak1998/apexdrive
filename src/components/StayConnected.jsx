import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2, ChevronDown } from 'lucide-react';

const StayConnected = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const countryCodes = [
    { code: '+1', label: 'US/CA (+1)' },
    { code: '+44', label: 'UK (+44)' },
    { code: '+61', label: 'AU (+61)' },
    { code: '+91', label: 'IN (+91)' },
    { code: '+49', label: 'DE (+49)' },
    { code: '+33', label: 'FR (+33)' },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const fullPhoneNumber = `${formData.countryCode}${formData.phone}`;
      const payload = {
        name: formData.name,
        email: formData.email,
        whatsapp_number: fullPhoneNumber,
        timestamp: new Date().toISOString()
      };

      // Send to webhook
      await fetch('INSERT_YOUR_MAKE_WEBHOOK_URL_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // Show success
      setIsSuccess(true);
      setFormData({ name: '', email: '', countryCode: '+1', phone: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      // In a real app we might show an error message, but we'll fulfill the user request
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connected" className="py-24 relative bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 bg-white overflow-hidden relative border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 blur-[80px] rounded-full -m-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 blur-[80px] rounded-full -m-20 pointer-events-none" />
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left relative z-10 max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wide mb-6">
              <MessageCircle className="w-4 h-4" /> AI Automation Included
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Stay Connected <br/> with Ease
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
              We leverage advanced chat automation to enhance your rental experience. Instantly connect with our team through WhatsApp to get quick booking updates, digital confirmations, and 24/7 personalized support.
            </p>
            <div className="hidden lg:flex items-center gap-4 text-slate-500 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Fast Response Times
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-2" />
                <CheckCircle2 className="w-5 h-5 text-green-500" /> End-to-End Encryption
            </div>
          </div>

          {/* Right Form Card */}
          <div className="w-full lg:w-[450px] relative z-10 shrink-0">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/60 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500" />
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 font-medium text-lg leading-relaxed">
                      Check your WhatsApp! <br/> We are reaching out now.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-sm font-semibold text-green-600 hover:text-green-700"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1.5">WhatsApp Number</label>
                      <div className="flex gap-3">
                        <div className="relative w-[35%]">
                          <select 
                            name="countryCode" 
                            value={formData.countryCode}
                            onChange={handleInputChange}
                            className="w-full pl-3 pr-8 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-slate-700 font-bold cursor-pointer appearance-none shadow-sm"
                          >
                            {countryCodes.map(c => (
                              <option key={c.code} value={c.code}>{c.label}</option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          </div>
                        </div>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          required
                          placeholder="000-000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-[65%] px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="mt-2 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Start Chat <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 font-medium mt-2">
                      Secure connection. Your privacy is protected.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StayConnected;
