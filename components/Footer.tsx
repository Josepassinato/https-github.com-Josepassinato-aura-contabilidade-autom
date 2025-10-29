
import React from 'react';
import { Logo } from './Icons';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C1E] border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1 lg:col-span-2">
            <a href="#inicio">
              <Logo className="h-10 w-auto" />
            </a>
            <p className="mt-4 text-gray-400 max-w-xs">
              Sua parceira em contabilidade digital e consultiva para o sucesso do seu negócio.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase">Navegação</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase">Siga-nos</h4>
            <div className="flex mt-4 space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00F729] transition-colors duration-200">
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Contabilidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
