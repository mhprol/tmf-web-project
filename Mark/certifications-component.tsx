import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

interface CertificationsProps {}

export default function Certifications({}: CertificationsProps) {
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };

  const certifications = [
    {
      name: 'ISO 14001:2015',
      description: 'Sistema de Gestão Ambiental',
      icon: <Shield size={60} />,
      details: 'Certificação internacional que comprova nosso compromisso com a gestão ambiental eficaz.'
    },
    {
      name: 'FSC® Certified',
      description: 'Forest Stewardship Council',
      icon: <Award size={60} />,
      details: 'Garantia de que nossa celulose vem de florestas manejadas de forma responsável.'
    },
    {
      name: 'Selo Verde Brasil',
      description: 'Produto Sustentável Nacional',
      icon: <CheckCircle size={60} />,
      details: 'Reconhecimento nacional pela excelência em práticas sustentáveis.'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Prêmio Indústria Sustentável',
      organization: 'FIESP',
      description: 'Reconhecimento pela inovação em filtração sustentável'
    },
    {
      year: '2023',
      title: 'Certificado Carbono Neutro',
      organization: 'Green Initiative Brasil',
      description: 'Neutralização de 100% das emissões de carbono'
    },
    {
      year: '2022',
      title: 'Selo Empresa B',
      organization: 'Sistema B Brasil',
      description: 'Empresa que gera impacto positivo na sociedade e meio ambiente'
    },
    {
      year: '2021',
      title: 'Top 10 Cleantech Brasil',
      organization: 'Cleantech Group',
      description: 'Entre as 10 empresas mais inovadoras em tecnologia limpa'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
            Certificações e Reconhecimentos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nosso compromisso com a qualidade e sustentabilidade é validado por 
            certificações internacionais e reconhecimentos do setor.
          </p>
        </div>

        {/* Main Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div 
                className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.accent}15` }}
              >
                <div style={{ color: colors.accent }}>
                  {cert.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
                {cert.name}
              </h3>
              
              <p className="text-sm font-medium text-gray-500 mb-4">
                {cert.description}
              </p>
              
              <p className="text-gray-600">
                {cert.details}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline of Achievements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8" style={{ color: colors.primary }}>
            Linha do Tempo de Conquistas
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: colors.accent }}
            />
            
            {achievements.map((achievement, index) => (
              <div key={index} className="relative flex items-start mb-8">
                {/* Timeline dot */}
                <div 
                  className="absolute left-8 w-4 h-4 rounded-full border-4 border-white -translate-x-1/2"
                  style={{ backgroundColor: colors.accent }}
                />
                
                {/* Year */}
                <div className="w-20 text-right mr-8">
                  <span className="font-bold" style={{ color: colors.accent }}>
                    {achievement.year}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-lg p-6 shadow-sm ml-8">
                  <h4 className="font-semibold mb-1" style={{ color: colors.primary }}>
                    {achievement.title}
                  </h4>
                  <p className="text-sm font-medium mb-2" style={{ color: colors.secondary }}>
                    {achievement.organization}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8" style={{ color: colors.primary }}>
            Parceiros em Sustentabilidade
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Pacto Global', 'Instituto Ethos', 'CEBDS', 'GBC Brasil'].map((partner) => (
              <div 
                key={partner}
                className="bg-white rounded-lg px-8 py-4 shadow-sm"
              >
                <span className="font-medium text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}