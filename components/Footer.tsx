import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-firm-dark text-white py-10 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl mb-4">Marcos da Rocha Oliveira <span className="text-firm-gold">Advogados</span></h2>
        <div className="flex justify-center gap-6 mb-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-firm-gold transition-colors">Início</a>
            <a href="#about" className="hover:text-firm-gold transition-colors">O Escritório</a>
            <a href="#services" className="hover:text-firm-gold transition-colors">Áreas de Atuação</a>
            <a href="#contact" className="hover:text-firm-gold transition-colors">Contato</a>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Marcos da Rocha Oliveira Advogados. Todos os direitos reservados.<br/>
          OAB/SP 000.000
        </p>
      </div>
    </footer>
  );
};

export default Footer;