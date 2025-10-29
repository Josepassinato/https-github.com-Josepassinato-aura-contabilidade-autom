
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Contabilidade <span className="text-[#00F729]">automatizada</span> para o sucesso do seu negócio.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          Simplifique sua gestão financeira com a Aura, sua parceira em contabilidade digital e consultiva.
        </p>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-[#00F729] text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00f729]/20"
        >
          Fale com um especialista
        </a>
      </div>
    </section>
  );
};

export default Hero;
