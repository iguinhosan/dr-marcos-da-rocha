import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Fees: React.FC = () => {
  return (
    <section id="fees" className="py-24 bg-white">
      <div className="container mx-auto px-6 reveal">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-4xl font-serif text-firm-blue mb-8">Honorários e Contratação</h2>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              Acreditamos na transparência absoluta desde o primeiro contato. Nossa política de honorários é baseada na tabela da OAB, ajustada à complexidade de cada caso e à realidade econômica do cliente.
            </p>
            
            <ul className="space-y-4">
              {[
                "Consulta inicial detalhada para diagnóstico do caso",
                "Contrato de prestação de serviços claro e objetivo",
                "Possibilidade de honorários 'ad exitum' (no êxito) para causas previdenciárias e trabalhistas",
                "Parcelamento facilitado via cartão de crédito ou boleto"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-firm-gold shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 bg-firm-blue p-10 rounded-lg text-center shadow-2xl relative overflow-hidden">
             {/* Decorative overlay */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'radial-gradient(circle, #ddaf59 1px, transparent 1px)', 
                     backgroundSize: '20px 20px' 
                 }}>
             </div>
             
             <h3 className="text-2xl font-serif text-firm-gold mb-4">Agende sua Consulta</h3>
             <p className="text-white mb-8 font-light">
                Entenda seus direitos e as possibilidades do seu caso com quem tem mais de duas décadas de experiência.
             </p>
             <a 
               href="https://wa.me/5516999018665?text=Vim%20pelo%20site%20do%20Dr.%20Marcos%20da%20Rocha%20e%20gostaria%20de%20ser%20atendido." 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block border-2 border-firm-gold text-firm-gold px-8 py-3 hover:bg-firm-gold hover:text-firm-blue transition-all duration-300 font-bold uppercase tracking-widest text-sm"
             >
                Entre em Contato
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Fees;