import React from 'react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Marcos da Rocha Oliveira',
    role: 'CEO e diretor do escritório',
    image: 'https://i.postimg.cc/Wbs7n94N/dr.png'
  },
  {
    id: '2',
    name: 'Dra. Eliane Miranda',
    role: 'Advogada e Gerente Geral',
    image: 'https://i.postimg.cc/PrdM46qJ/dra1.png'
  },
  {
    id: '3',
    name: 'Dra. Thaís Flausino',
    role: 'Advogada e responsável pelo setor jurídico do Escritório',
    image: 'https://i.postimg.cc/BQJCghvv/dra2.png'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-firm-blue mb-4">Nossa Equipe</h2>
          <div className="w-16 h-1 bg-firm-gold mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Profissionais altamente qualificados dedicados a defender seus direitos com maestria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member) => (
            <div key={member.id} className="group relative overflow-hidden bg-white shadow-lg rounded-sm cursor-pointer border border-gray-100">
              <div className="relative h-96 overflow-hidden bg-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-firm-blue/0 group-hover:bg-firm-blue/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6 bg-white border-b-4 border-transparent group-hover:border-firm-gold transition-all duration-300 min-h-[140px] flex flex-col justify-center">
                <h3 className="text-xl font-serif font-bold text-firm-blue">{member.name}</h3>
                <p className="text-firm-gold uppercase tracking-wider text-xs font-bold mt-2 leading-relaxed">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;