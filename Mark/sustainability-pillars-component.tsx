import React from 'react';
import { Leaf, Users, Factory, Globe } from 'lucide-react';

interface SustainabilityPillarsProps {}

export default function SustainabilityPillars({}: SustainabilityPillarsProps) {
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };

  const pillars = [
    {
      icon: <Leaf size={40} />,
      title: 'Matéria-Prima Sustentável',
      description: 'Utilizamos exclusivamente celulose de florestas manejadas e certificadas, garantindo a renovação dos recursos naturais.',
      features: [
        'Certificação FSC e PEFC',
        'Rastreabilidade completa',
        'Zero desmatamento',
        'Biodegradável'
      ],
      color: colors.accent
    },
    {
      icon: <Factory size={40} />,
      title: 'Produção Limpa',
      description: 'Nosso processo produtivo minimiza o impacto ambiental através de tecnologias limpas e eficiência energética.',
      features: [
        'Energia renovável',
        'Tratamento de efluentes',
        'Reuso de água',
        'Zero resíduo ao aterro'
      ],
      color: colors.secondary
    },
    {
      icon: <Users size={40} />,
      title: 'Responsabilidade Social',
      description: 'Investimos no desenvolvimento das comunidades locais e na capacitação de nossos colaboradores.',
      features: [
        'Empregos locais',
        'Programas de capacitação',
        'Apoio a cooperativas',
        'Educação ambiental'
      ],
      color: colors.highlight
    },
    {
      icon: <Globe size={40} />,
      title: 'Economia Circular',
      description: 'Nossos produtos são projetados para o ciclo completo, desde a produção até o descarte responsável.',
      features: [
        'Design para reciclagem',
        'Logística reversa',
        'Parcerias de reciclagem',
        'Compostagem industrial'
      ],
      color: colors.primary
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
            Pilares da Sustentabilidade TMF
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa abordagem sustentável está fundamentada em quatro pilares que 
            guiam todas as nossas decisões e processos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-8 border-l-4 hover:shadow-lg transition-shadow duration-300"
              style={{ borderColor: pillar.color }}
            >
              <div className="flex items-start mb-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  style={{ backgroundColor: `${pillar.color}20` }}
                >
                  <div style={{ color: pillar.color }}>
                    {pillar.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: pillar.color }}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="ml-20">
                <ul className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div 
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: pillar.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.accent }}>
              Compromisso com os ODS da ONU
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              A TMF Fibers está alinhada com os Objetivos de Desenvolvimento Sustentável 
              das Nações Unidas, contribuindo ativamente para:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { number: 6, text: 'Água Limpa e Saneamento' },
                { number: 9, text: 'Indústria, Inovação e Infraestrutura' },
                { number: 12, text: 'Consumo e Produção Responsáveis' },
                { number: 13, text: 'Ação Contra a Mudança Global do Clima' },
                { number: 15, text: 'Vida Terrestre' }
              ].map((ods) => (
                <div 
                  key={ods.number}
                  className="bg-white rounded-lg p-4 shadow-sm flex items-center"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-3 font-bold text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {ods.number}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{ods.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}