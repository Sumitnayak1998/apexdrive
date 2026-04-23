import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Vehicles from './components/Vehicles';
import HowItWorks from './components/HowItWorks';
import StayConnected from './components/StayConnected';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-500/30 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Vehicles />
        <HowItWorks />
        <Testimonials />
        <StayConnected />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
