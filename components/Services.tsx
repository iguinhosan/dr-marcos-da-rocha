import React from 'react';
import { Briefcase, Gavel, FileText, Landmark } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'prev',
    title: 'Direito Previdenciário',
    description: 'Aposentadorias, pensões e auxílios. Planejamento previdenciário completo para garantir o melhor benefício.',
    icon: FileText
  },
  {
    id: 'trab',
    title: 'Direito Trabalhista',
    description: 'Defesa dos direitos do trabalhador e assessoria empresarial para prevenção de litígios.',
    icon: Briefcase
  },
  {
    id: 'civ',
    title: 'Direito Civil',
    description: 'Família, sucessões, contratos e responsabilidade civil. Soluções para conflitos cotidianos.',
    icon: Gavel
  },
  {
    id: 'trib',
    title: 'Direito Tributário',
    description: 'Consultoria fiscal, recuperação de créditos e defesa em execuções fiscais.',
    icon: Landmark
  }
];

const Services: React.FC = () => {
  return (
    <section 
      id="services" 
      className="relative py-32 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-firm-blue/90"></div>
      
      <div className="relative z-10 container mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Áreas de Atuação</h2>
          <div className="w-16 h-1 bg-firm-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-sm hover:bg-firm-blue hover:border-firm-gold transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-firm-gold rounded-full flex items-center justify-center mb-6 text-firm-blue group-hover:scale-110 transition-transform">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-firm-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;