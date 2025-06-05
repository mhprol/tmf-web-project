import React from 'react';
import { Calendar, TrendingUp, Award, Globe } from 'lucide-react';

interface CompanyHistoryProps {}

export default function CompanyHistory({}: CompanyHistoryProps) {
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };

  const milestones = [
    {
      year: '2003',
      title: 'Fundação da TMF Fibers',
      description: 'Início das operações em Ribeirão Pires com foco em filtração sustentável',
      icon: <Calendar size={24} />,
      highlight: true
    },
    {
      year: '2008',
      title: 'Primeira Patente Verde',
      description: 'Desenvolvimento da tecnologia de filtros biodegradáveis de alta eficiência',
      icon: <Award size={24} />,
      highlight: false
    },
    {
      year: '2013',
      title: 'Expansão Nacional',
      description: 'Abertura de centros de distribuição em 5 estados brasileiros',
      icon: <TrendingUp size={24} />,
      highlight: false
    },
    {
      year: '2018',
      title: 'Certificação Internacional',
      description: 'Obtenção das certificações ISO 14001 e FSC para toda linha de produtos',
      icon: <Globe size={24} />,
      highlight: false
    },
    {
      year: '2021',
      title: 'Carbono Neutro',
      description: 'Primeira empresa do setor a alcançar neutralidade de carbono no Brasil',
      icon: <Award size={24} />,
      highlight: true
    },
    {
      year: '2024',
      title: 'Centro de Inovação',
      description: 'Inauguração do maior centro de P&D em filtração sustentável da América Latina',
      icon: <TrendingUp size={24} />,
      highlight: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
              Duas Décadas de Inovação
            </h2>
            
            <p className="text-gray-600 mb-4">
              A TMF Fibers nasceu em 2003 com uma visão clara: revolucionar a indústria 
              de filtração através de soluções sustentáveis e eficientes. Fundada por 
              engenheiros químicos apaixonados por meio ambiente, nossa empresa cresceu 
              de uma pequena operação familiar para líder nacional em filtração industrial.
            </p>
            
            <p className="text-gray-600 mb-4">
              Nossa jornada começou com a pergunta: "Por que não podemos ter filtros 
              industriais que sejam ao mesmo tempo eficientes e ecológicos?" Essa questão 
              nos levou a anos de pesquisa e desenvolvimento, resultando em tecnologias 
              pioneiras que hoje definem o padrão da indústria.
            </p>
            
            <p className="text-gray-600 mb-6">
              Hoje, atendemos mais de 500 empresas em todo o Brasil, ajudando-as a 
              reduzir seu impacto ambiental sem comprometer a qualidade ou eficiência 
              de seus processos produtivos.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: colors.accent }}>20+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: colors.secondary }}>500+</div>
                <div className="text-sm text-gray-600">Clientes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: colors.highlight }}>15</div>
                <div className="text-sm text-gray-600">Patentes Registradas</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Timeline */}
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-8" style={{ color: colors.primary }}>
              Nossa Trajetória
            </h3>
            
            {/* Timeline line */}
            <div 
              className="absolute left-4 top-16 bottom-4 w-0.5"
              style={{ backgroundColor: colors.secondary + '30' }}
            />
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 ${
                      milestone.highlight ? 'ring-4 ring-opacity-30' : ''
                    }`}
                    style={{ 
                      backgroundColor: milestone.highlight ? colors.accent : colors.secondary,
                      ringColor: milestone.highlight ? colors.accent : 'transparent'
                    }}
                  >
                    <div className="text-white text-xs">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <div className="flex items-center mb-1">
                      <span 
                        className="font-bold text-lg mr-3"
                        style={{ color: milestone.highlight ? colors.accent : colors.secondary }}
                      >
                        {milestone.year}
                      </span>
                      <h4 className="font-semibold" style={{ color: colors.dark }}>
                        {milestone.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}