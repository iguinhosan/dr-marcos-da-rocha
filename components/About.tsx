import React from 'react';
import { Scale, History, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-firm-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 reveal">
          
          <div className="w-full md:w-1/2">
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Escritório de Advocacia" 
                    className="rounded-sm shadow-2xl border-l-8 border-firm-blue grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                <div className="absolute -bottom-6 -right-6 bg-firm-gold p-6 text-firm-blue shadow-lg hidden md:block">
                    <p className="font-serif text-3xl font-bold">23+</p>
                    <p className="text-sm font-bold uppercase tracking-widest">Anos de História</p>
                </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-firm-blue">
              O Escritório
            </h2>
            <div className="w-20 h-1 bg-firm-gold"></div>
            
            <h3 className="text-2xl font-serif text-gray-700 italic">
              Fundado em 2002
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              O Escritório <strong className="text-firm-blue">Marcos da Rocha Oliveira Advogados</strong> nasceu do sonho de promover justiça com ética e compromisso. 
              Fundado há mais de 23 anos, cresceu com dedicação, excelência e foco no atendimento humanizado. 
              Aqui, cada cliente é acolhido com respeito e seriedade, entendendo que por trás de cada processo existe uma história de vida.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-firm-blue text-firm-gold rounded-full">
                        <History size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-firm-blue">Tradição</h4>
                        <p className="text-sm text-gray-500">Duas décadas de experiência sólida.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-firm-blue text-firm-gold rounded-full">
                        <Award size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-firm-blue">Excelência</h4>
                        <p className="text-sm text-gray-500">Compromisso com o melhor resultado.</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;