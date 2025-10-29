
import React from 'react';
import { ABOUT_POINTS, WHATSAPP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-24 bg-[#1C1C1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-bold text-[#6A32B4] uppercase">Sobre nós</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
              Conheça a Aura, sua parceira estratégica para o sucesso financeiro.
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Na Aura, unimos tecnologia de ponta e expertise contábil para oferecer soluções que realmente fazem a diferença. Acreditamos que uma contabilidade inteligente e proativa é a chave para o crescimento sustentável de qualquer negócio.
            </p>
            <div className="space-y-6 mb-10">
              {ABOUT_POINTS.map((point) => (
                <div key={point.title} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">{point.icon}</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">{point.title}</h4>
                    <p className="text-gray-400">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#00F729] text-black font-bold py-3 px-8 rounded-full text-base hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#00f729]/20"
            >
              Saiba Mais
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/seed/aura-about/600/500" 
              alt="Equipe Aura Contabilidade" 
              className="rounded-lg shadow-2xl object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
