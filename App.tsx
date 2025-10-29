
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#131414] text-gray-300 overflow-x-hidden antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
