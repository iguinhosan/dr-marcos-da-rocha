import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-firm-blue overflow-hidden"
    >
      {/* Background Layer Fixa (A tela fica parada) */}
      <div className="absolute inset-0 bg-firm-blue z-0"></div>

      {/* Imagem do Escritório - Fullscreen, Centered, 50% Opacity */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
      >
        <img 
            src="https://i.postimg.cc/FsLXmHv4/escritorio-marcos.png" 
            alt="Escritório Marcos da Rocha Oliveira"
            className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Gradient Overlay suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-firm-blue/30 via-transparent to-firm-blue/90 z-0"></div>

      {/* Conteúdo com efeito Reveal */}
      <div className="reveal relative z-10 container mx-auto px-6 text-center">
        <div className="border-t-4 border-b-4 border-firm-gold inline-block py-10 px-6 md:px-12 backdrop-blur-sm bg-firm-blue/40 rounded-lg shadow-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6 tracking-wide drop-shadow-lg">
            Marcos da Rocha Oliveira <br />
            <span className="text-firm-gold">Advogados</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-100 max-w-4xl mx-auto font-light italic drop-shadow-md">
            "Há mais de 23 anos somos referência em Direito 
            <span className="text-firm-gold font-semibold"> Previdenciário</span>, 
            <span className="text-firm-gold font-semibold"> Trabalhista</span>, 
            <span className="text-firm-gold font-semibold"> Civil</span> e 
            <span className="text-firm-gold font-semibold"> Tributário</span>."
          </p>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-firm-gold hover:text-white transition-colors duration-300">
            <ArrowDown size={48} className="mx-auto opacity-80 drop-shadow-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;