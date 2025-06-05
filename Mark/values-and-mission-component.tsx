import React from 'react';
import { Target, Heart, Lightbulb, Shield } from 'lucide-react';

interface ValuesAndMissionProps {}

export default function ValuesAndMission({}: ValuesAndMissionProps) {
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };

  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Compromisso Ambiental',
      description: 'Cada decisão é tomada considerando o impacto no meio ambiente e nas gerações futuras.',
      color: colors.accent
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Inovação Constante',
      description: 'Investimos continuamente em P&D para desenvolver soluções cada vez mais eficientes.',
      color: colors.secondary
    },
    {
      icon: <Shield size={32} />,
      title: 'Qualidade Superior',
      description: 'Nossos produtos passam por rigorosos testes para garantir máxima performance.',
      color: colors.primary
    },
    {
      icon: <Target size={32} />,
      title: 'Foco no Cliente',
      description: 'Desenvolvemos soluções customizadas para atender às necessidades específicas de cada indústria.',
      color: colors.highlight
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Mission and Vision */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: colors.primary }}>
            Missão e Visão
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}15` }}
              >
                <Target size={32} style={{ color: colors.primary }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.primary }}>
                Nossa Missão
              </h3>
              <p className="text-gray-600">
                Fornecer soluções de filtração industrial que combinem alta eficiência, 
                sustentabilidade e custo-benefício, contribuindo para um futuro mais 
                limpo e próspero para a indústria brasileira.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.accent}15` }}
              >
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.accent }}>
                Nossa Visão
              </h3>
              <p className="text-gray-600">
                Ser reconhecida globalmente como a empresa referência em filtração 
                sustentável, liderando a transformação verde da indústria e inspirando 
                práticas ambientalmente responsáveis.
              </p>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.primary }}>
            Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <div style={{ color: value.color }}>
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3" style={{ color: value.color }}>
                  {value.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Company Culture */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>
              Cultura TMF
            </h3>
            <p className="text-gray-700 mb-6">
              Na TMF Fibers, acreditamos que o sucesso vai além dos números. Nossa cultura 
              é baseada em colaboração, respeito mútuo e paixão pelo que fazemos. Valorizamos 
              a diversidade de ideias e incentivamos a inovação em todos os níveis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Integridade', 'Colaboração', 'Excelência', 'Sustentabilidade', 'Inovação'].map((trait) => (
                <span 
                  key={trait}
                  className="inline-block px-6 py-2 rounded-full text-sm font-medium bg-white shadow-sm"
                  style={{ color: colors.primary }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}