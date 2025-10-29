
import React from 'react';
import { CONTACT_INFO, WHATSAPP_LINK } from '../constants';
import { ContactInfo } from '../types';

const ContactCard: React.FC<{ info: ContactInfo }> = ({ info }) => {
    const content = (
        <>
            <div className="mb-4">{info.icon}</div>
            <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
            <p className="text-gray-400">{info.value}</p>
        </>
    );

    if (info.href) {
        return (
            <a href={info.href} className="block text-center bg-[#1C1C1E] p-8 rounded-lg border border-gray-800/50 hover:border-[#00F729] hover:bg-[#2a2a2e] transition-all duration-300 transform hover:-translate-y-2">
                {content}
            </a>
        );
    }

    return (
        <div className="text-center bg-[#1C1C1E] p-8 rounded-lg border border-gray-800/50">
            {content}
        </div>
    );
};

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Entre em <span className="text-[#00F729]">Contato</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Estamos prontos para atender você. Escolha o melhor canal de comunicação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CONTACT_INFO.map((info) => (
            <ContactCard key={info.title} info={info} />
          ))}
        </div>
        <div className="text-center">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#6A32B4] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#6a32b4]/30"
            >
              Falar pelo WhatsApp
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
