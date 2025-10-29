
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-[#1C1C1E] p-8 rounded-lg border border-gray-800/50 hover:border-[#6A32B4] hover:bg-[#2a2a2e] transition-all duration-300 transform hover:-translate-y-2">
    <div className="mb-4">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
    <p className="text-gray-400">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Nossos <span className="text-[#6A32B4]">Serviços</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Oferecemos soluções completas e personalizadas para impulsionar o crescimento da sua empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
