import React from 'react';
import { Leaf, Zap, DollarSign, Headphones } from 'lucide-react';

const ValueProposition = () => {
  // Design system colors from our TMF design system
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };
  
  // Value proposition items with icons
  const valueProps = [
    {
      title: "Filtros biodegradáveis",
      description: "Matéria-prima nacional renovável com baixo impacto ambiental durante todo o ciclo de vida.",
      icon: <Leaf size={28} style={{ color: colors.accent }} />,
      color: "bg-green-50"
    },
    {
      title: "Alta eficiência",
      description: "Performance superior em capacidade de filtração e durabilidade mesmo em condições extremas.",
      icon: <Zap size={28} style={{ color: colors.secondary }} />,
      color: "bg-blue-50"
    },
    {
      title: "Custo-benefício superior",
      description: "Maior vida útil e eficiência energética reduzem o custo operacional total do sistema.",
      icon: <DollarSign size={28} style={{ color: colors.highlight }} />,
      color: "bg-yellow-50"
    },
    {
      title: "Suporte técnico especializado",
      description: "Equipe de engenheiros dedicada para dimensionamento, instalação e manutenção dos sistemas.",
      icon: <Headphones size={28} style={{ color: colors.primary }} />,
      color: "bg-indigo-50"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
            Por que escolher a TMF Fibers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa tecnologia de filtração combina sustentabilidade e performance técnica 
            para entregar a melhor solução para seu processo industrial.
          </p>
        </div>
        
        {/* Value proposition cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index} 
              className={`${prop.color} rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md`}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                {prop.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.dark }}>
                {prop.title}
              </h3>
              
              <p className="text-gray-600">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;