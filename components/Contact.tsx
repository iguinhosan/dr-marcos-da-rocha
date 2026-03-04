import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

// Componente ícone do TikTok personalizado
const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9Z" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-firm-blue mb-4">Localização e Contatos</h2>
          <div className="w-16 h-1 bg-firm-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 shadow-md rounded-sm border-l-4 border-firm-gold">
              <h3 className="text-2xl font-serif text-firm-blue mb-6">Fale Conosco</h3>
              
              <div className="space-y-6">
                {/* Endereços */}
                <div className="flex items-start gap-4">
                  <div className="bg-firm-blue/10 p-3 rounded-full text-firm-blue shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-firm-blue uppercase text-sm tracking-wide">Matriz - Franca/SP</h4>
                      <p className="text-gray-600">R. Couto Magalhães 2204, Centro</p>
                    </div>
                    <div className="border-t border-gray-100 pt-2">
                      <h4 className="font-bold text-firm-blue uppercase text-sm tracking-wide">Filial - Ribeirão Preto/SP</h4>
                      <p className="text-gray-600">R. Campos Salles, 805, Centro</p>
                    </div>
                  </div>
                </div>

                {/* Telefones */}
                <div className="flex items-start gap-4">
                  <div className="bg-firm-blue/10 p-3 rounded-full text-firm-blue shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Telefones</h4>
                    <p className="text-gray-600"><span className="font-semibold text-firm-blue">(16) 3722-5513</span> <span className="text-xs text-gray-400 ml-1">(Franca)</span></p>
                    <p className="text-gray-600"><span className="font-semibold text-firm-blue">(16) 3636-0046</span> <span className="text-xs text-gray-400 ml-1">(Ribeirão Preto)</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-firm-blue/10 p-3 rounded-full text-firm-blue shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600 break-all">contato@marcosrochaadv.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-firm-blue/10 p-3 rounded-full text-firm-blue shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Horário de Atendimento</h4>
                      <p className="text-gray-600">Segunda a Sexta: 08h às 18h</p>
                    </div>
                  </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-serif text-firm-blue mb-4">Siga-nos nas redes sociais</h4>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.facebook.com/marcosdarochaadvogados" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-firm-gold hover:text-firm-blue transition-colors duration-300"
                  >
                    <Facebook size={20} />
                    <span className="text-sm font-bold">Facebook</span>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/marcosdarochaadvogados/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-pink-700 text-white rounded hover:bg-firm-gold hover:text-firm-blue transition-colors duration-300"
                  >
                    <Instagram size={20} />
                    <span className="text-sm font-bold">Instagram</span>
                  </a>

                  <a 
                    href="https://www.youtube.com/@marcosdarochaoliveira7164" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-firm-gold hover:text-firm-blue transition-colors duration-300"
                  >
                    <Youtube size={20} />
                    <span className="text-sm font-bold">YouTube</span>
                  </a>

                  <a 
                    href="https://www.tiktok.com/@dr.marcosdarochaoliveira" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-firm-gold hover:text-firm-blue transition-colors duration-300"
                  >
                    <TikTokIcon size={20} />
                    <span className="text-sm font-bold">TikTok</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Map - Apontando para a Matriz em Franca */}
          <div className="h-full min-h-[400px] w-full bg-gray-200 shadow-md rounded-sm overflow-hidden relative group">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.068361864146!2d-47.40422992388656!3d-20.53673566166415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a63f1013444b%3A0x62955512061e8888!2sR.%20Couto%20Magalh%C3%A3es%2C%202204%20-%20Centro%2C%20Franca%20-%20SP%2C%2014400-020!5e0!3m2!1spt-BR!2sbr!4v1709228123456!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                title="Mapa Matriz Franca"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;