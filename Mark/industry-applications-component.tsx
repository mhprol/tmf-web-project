import React from 'react';
import { ChevronRight, Droplet, Beaker, Pill, Car, Fuel, Scissors, HardHat } from 'lucide-react';

const IndustryApplications = () => {
  // Design system colors from our TMF design system
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };
  
  // Industry applications data with icons
  const industries = [
    {
      id: "alimentar",
      name: "Indústria Alimentar",
      description: "Sistemas de filtração para processamento de bebidas, lácteos e óleos, garantindo segurança alimentar e qualidade.",
      challenges: ["Segurança alimentar", "Particulados finos", "Lavagens frequentes"],
      icon: <Droplet size={32} />,
      color: colors.primary
    },
    {
      id: "quimico",
      name: "Indústria Química",
      description: "Soluções para processos químicos que exigem alta resistência a produtos corrosivos e temperaturas extremas.",
      challenges: ["Corrosão", "Compatibilidade química", "Alta temperatura"],
      icon: <Beaker size={32} />,
      color: colors.secondary
    },
    {
      id: "farmaceutico",
      name: "Indústria Farmacêutica",
      description: "Elementos filtrantes para aplicações que requerem alta pureza, esterilidade e conformidade regulatória.",
      challenges: ["Precisão crítica", "Validação regulatória", "Esterilização"],
      icon: <Pill size={32} />,
      color: colors.accent
    },
    {
      id: "automotivo",
      name: "Indústria Automotiva",
      description: "Filtros para sistemas hidráulicos, de lubrificação e refrigeração em linhas de produção e equipamentos.",
      challenges: ["Partículas metálicas", "Óleo e fluidos", "Alta pressão"],
      icon: <Car size={32} />,
      color: colors.highlight
    },
    {
      id: "petrolifero",
      name: "Setor Petrolífero",
      description: "Soluções para processos de refino, tratamento de água produzida e sistemas de recuperação.",
      challenges: ["Contaminantes múltiplos", "Pressões elevadas", "Ambientes agressivos"],
      icon: <Fuel size={32} />,
      color: "#D35400"
    },
    {
      id: "textil",
      name: "Indústria Têxtil",
      description: "Sistemas para tratamento de efluentes, recuperação de corantes e processos de tingimento.",
      challenges: ["Fibras e partículas", "Corantes", "Tratamento de efluentes"],
      icon: <Scissors size={32} />,
      color: "#8E44AD"
    },
    {
      id: "siderurgico",
      name: "Setor Siderúrgico",
      description: "Filtração de alta resistência para processos de resfriamento, óleos e sistemas hidráulicos pesados.",
      challenges: ["Altas temperaturas", "Partículas abrasivas", "Óleos pesados"],
      icon: <HardHat size={32} />,
      color: "#2C3E50"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
            Aplicações por Segmento Industrial
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossas soluções de filtração atendem às necessidades específicas de cada setor industrial,
            com foco em eficiência e sustentabilidade.
          </p>
        </div>
        
        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border-t-4"
              style={{ borderColor: industry.color }}
            >
              <div className="p-6">
                {/* Industry icon */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${industry.color}20` }}
                >
                  <div style={{ color: industry.color }}>
                    {industry.icon}
                  </div>
                </div>
                
                {/* Industry name and description */}
                <h3 className="text-xl font-semibold mb-3" style={{ color: industry.color }}>
                  {industry.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                
                {/* Industry challenges */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">
                    Desafios específicos:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.challenges.map((challenge, idx) => (
                      <span 
                        key={idx}
                        className="inline-block px-2 py-1 rounded-full text-xs"
                        style={{ 
                          backgroundColor: `${industry.color}15`,
                          color: industry.color
                        }}
                      >
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA link */}
                <a 
                  href={`/aplicacoes/${industry.id}`} 
                  className="inline-flex items-center text-sm font-medium transition-colors duration-200"
                  style={{ color: industry.color }}
                >
                  Ver soluções para este segmento
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center">
          <a 
            href="/aplicacoes" 
            className="inline-block px-6 py-3 rounded-md font-medium text-base transition duration-150 ease-in-out"
            style={{ backgroundColor: colors.primary, color: "white" }}
          >
            Explorar todas as aplicações industriais
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;