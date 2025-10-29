
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Cta: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-cta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto">
          Transforme a gestão financeira do seu negócio
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Fale com um de nossos especialistas e descubra como a Aura pode ajudar sua empresa a crescer de forma inteligente e sustentável.
        </p>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-[#00F729] text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00f729]/20"
        >
          Quero uma consultoria gratuita
        </a>
      </div>
    </section>
  );
};

export default Cta;
