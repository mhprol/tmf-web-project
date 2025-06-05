import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamSectionProps {}

export default function TeamSection({}: TeamSectionProps) {
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };

  const teamMembers = [
    {
      name: 'Thiago Prol',
      role: 'Diretor Comercial',
      photo: 'https://storage.googleapis.com/msgsndr/z43yPMqfh4IteF0CUxld/media/684192265f5470cf89bc2888.jpeg',
      bio: 'Lidera as estratégias comerciais e relacionamento com clientes industriais.',
      linkedin: '#',
      email: 'thiago.prol@tmffibers.com.br'
    },
    {
      name: 'Marcelo Lima',
      role: 'Diretor de Produção',
      photo: 'https://storage.googleapis.com/msgsndr/z43yPMqfh4IteF0CUxld/media/684192265f5470267cbc2887.jpeg',
      bio: 'Responsável pela excelência operacional e inovação nos processos produtivos.',
      linkedin: '#',
      email: 'marcelo.lima@tmffibers.com.br'
    },
    {
      name: 'Matheus Prol',
      role: 'Diretor de Marketing',
      photo: 'https://storage.googleapis.com/msgsndr/z43yPMqfh4IteF0CUxld/media/68338209968167689fc1a4ff.webp',
      bio: 'Conecta a marca TMF Fibers ao mercado através de estratégias digitais inovadoras.',
      linkedin: '#',
      email: 'matheus.prol@tmffibers.com.br'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
            Nossa Equipe de Liderança
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça os profissionais dedicados que lideram a TMF Fibers rumo a um 
            futuro mais sustentável para a indústria brasileira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1" style={{ color: colors.primary }}>
                  {member.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: colors.secondary }}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>
                
                <div className="flex gap-3">
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{ 
                      backgroundColor: `${colors.primary}15`,
                      color: colors.primary
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.primary;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.primary}15`;
                      e.currentTarget.style.color = colors.primary;
                    }}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{ 
                      backgroundColor: `${colors.secondary}15`,
                      color: colors.secondary
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.secondary;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.secondary}15`;
                      e.currentTarget.style.color = colors.secondary;
                    }}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold" style={{ color: colors.primary }}>150+</div>
              <div className="text-gray-600">Colaboradores</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: colors.secondary }}>45%</div>
              <div className="text-gray-600">Mulheres na Liderança</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: colors.accent }}>12</div>
              <div className="text-gray-600">PhDs e Mestres</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: colors.highlight }}>8</div>
              <div className="text-gray-600">Nacionalidades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}