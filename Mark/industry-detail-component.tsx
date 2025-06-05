import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Filter, Beaker, Droplet, Pill, Car, Fuel, Scissors, HardHat, ArrowRight } from 'lucide-react';

interface IndustryDetailProps {}

export default function IndustryDetail({}: IndustryDetailProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('alimentar');

  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };

  const industriesData = {
    alimentar: {
      id: "alimentar",
      name: "Indústria Alimentar",
      icon: <Droplet size={32} />,
      color: colors.primary,
      description: "A indústria alimentícia exige os mais altos padrões de qualidade e segurança. Nossas soluções garantem a integridade dos produtos e a conformidade com as normas sanitárias.",
      applications: [
        {
          name: "Filtração de Bebidas",
          description: "Remoção de partículas e clarificação em sucos, cervejas e refrigerantes",
          products: ["Filtros de Celulose FC-100", "Elementos Compostos EC-200"]
        },
        {
          name: "Processamento de Óleos",
          description: "Purificação de óleos vegetais e remoção de impurezas",
          products: ["Filtros Sintéticos FS-300", "Sistemas Integrados SI-400"]
        },
        {
          name: "Produtos Lácteos",
          description: "Filtração de leite e derivados com manutenção das propriedades nutricionais",
          products: ["Filtros Especiais FE-500", "Elementos de Alta Pureza"]
        }
      ],
      benefits: [
        "Certificação para contato com alimentos",
        "Resistência a lavagens frequentes",
        "Manutenção do sabor e nutrientes",
        "Conformidade com normas ANVISA"
      ],
      caseStudy: {
        title: "Cervejaria Artesanal Reduz Perdas em 40%",
        description: "Implementação de nossos filtros de celulose especiais resultou em maior clareza do produto final e redução significativa de perdas no processo.",
        metrics: ["40% menos perdas", "30% maior vida útil", "ROI em 6 meses"]
      }
    },
    quimico: {
      id: "quimico",
      name: "Indústria Química",
      icon: <Beaker size={32} />,
      color: colors.secondary,
      description: "Processos químicos demandam filtros com alta resistência a produtos corrosivos e temperaturas extremas. Nossa linha oferece soluções robustas e duráveis.",
      applications: [
        {
          name: "Processos Corrosivos",
          description: "Filtração de ácidos, bases e solventes agressivos",
          products: ["Filtros Resistentes Químicos FRQ-100", "Elementos PTFE"]
        },
        {
          name: "Alta Temperatura",
          description: "Operação em processos com temperaturas até 200°C",
          products: ["Filtros Térmicos FT-200", "Elementos Metálicos EM-300"]
        },
        {
          name: "Catalisadores",
          description: "Recuperação e purificação de catalisadores valiosos",
          products: ["Sistemas de Recuperação SR-400", "Filtros de Precisão"]
        }
      ],
      benefits: [
        "Resistência química superior",
        "Operação em altas temperaturas",
        "Longa vida útil em ambientes agressivos",
        "Compatibilidade com diversos químicos"
      ],
      caseStudy: {
        title: "Planta Petroquímica Aumenta Eficiência em 35%",
        description: "Substituição de filtros importados por nossa solução nacional resultou em maior eficiência e redução de paradas para manutenção.",
        metrics: ["35% mais eficiência", "50% menos paradas", "Economia de R$ 200mil/ano"]
      }
    },
    farmaceutico: {
      id: "farmaceutico",
      name: "Indústria Farmacêutica",
      icon: <Pill size={32} />,
      color: colors.accent,
      description: "O setor farmacêutico requer máxima precisão e esterilidade. Nossos filtros atendem às rigorosas normas de qualidade e rastreabilidade exigidas.",
      applications: [
        {
          name: "Água Purificada",
          description: "Produção de água para injetáveis (WFI) e processos críticos",
          products: ["Filtros Estéreis FE-100", "Membranas de 0.2 micron"]
        },
        {
          name: "Ar Comprimido",
          description: "Filtração de ar para salas limpas e processos assépticos",
          products: ["Filtros HEPA Industriais", "Elementos de Retenção Absoluta"]
        },
        {
          name: "Produtos Biotecnológicos",
          description: "Clarificação e esterilização de produtos biológicos",
          products: ["Filtros de Fluxo Tangencial", "Sistemas de Ultrafiltração"]
        }
      ],
      benefits: [
        "Validação completa FDA/ANVISA",
        "Rastreabilidade total de lotes",
        "Esterilização por autoclave",
        "Certificados de qualidade"
      ],
      caseStudy: {
        title: "Laboratório Nacional Obtém Certificação Internacional",
        description: "Com nossos filtros validados, o cliente conseguiu aprovação FDA para exportação de seus produtos.",
        metrics: ["100% aprovação em auditorias", "Zero contaminação", "Certificação FDA"]
      }
    },
    automotivo: {
      id: "automotivo",
      name: "Indústria Automotiva",
      icon: <Car size={32} />,
      color: colors.highlight,
      description: "A indústria automotiva demanda filtração eficiente para fluidos hidráulicos, óleos e sistemas de pintura, garantindo qualidade e produtividade.",
      applications: [
        {
          name: "Fluidos Hidráulicos",
          description: "Proteção de sistemas hidráulicos de prensas e robôs",
          products: ["Filtros Hidráulicos FH-100", "Elementos Beta 1000"]
        },
        {
          name: "Cabines de Pintura",
          description: "Filtração de ar e overspray em processos de pintura",
          products: ["Filtros de Cabine Paint-Stop", "Mantas Filtrantes"]
        },
        {
          name: "Óleos de Corte",
          description: "Reciclagem e purificação de fluidos de usinagem",
          products: ["Sistemas de Reciclagem SR-200", "Filtros Magnéticos"]
        }
      ],
      benefits: [
        "Redução de defeitos de pintura",
        "Maior vida útil de equipamentos",
        "Economia com fluidos de corte",
        "Melhoria na qualidade final"
      ],
      caseStudy: {
        title: "Montadora Reduz Custos com Fluidos em 60%",
        description: "Sistema de filtração e reciclagem permitiu reutilização contínua de fluidos de corte.",
        metrics: ["60% economia em fluidos", "80% menos descarte", "Payback em 8 meses"]
      }
    },
    petrolifero: {
      id: "petrolifero",
      name: "Setor Petrolífero",
      icon: <Fuel size={32} />,
      color: "#D35400",
      description: "O setor de óleo e gás exige soluções robustas para ambientes agressivos, com alta confiabilidade e resistência a pressões extremas.",
      applications: [
        {
          name: "Água Produzida",
          description: "Tratamento de água de produção para reinjeção ou descarte",
          products: ["Filtros Coalescentes FC-500", "Separadores Água-Óleo"]
        },
        {
          name: "Gás Natural",
          description: "Remoção de líquidos e partículas em gasodutos",
          products: ["Filtros de Gás FG-300", "Elementos Coalescentes"]
        },
        {
          name: "Fluidos de Perfuração",
          description: "Filtração e reciclagem de lamas de perfuração",
          products: ["Peneiras Vibratórias", "Sistemas de Controle de Sólidos"]
        }
      ],
      benefits: [
        "Resistência a H2S e CO2",
        "Operação em alta pressão",
        "Certificações para áreas classificadas",
        "Mínima manutenção requerida"
      ],
      caseStudy: {
        title: "Plataforma Offshore Zera Descarte de Água",
        description: "Nossa solução permitiu 100% de reinjeção da água produzida, eliminando descarte ao mar.",
        metrics: ["Zero descarte ao mar", "99.9% eficiência", "Conformidade ambiental total"]
      }
    },
    textil: {
      id: "textil",
      name: "Indústria Têxtil",
      icon: <Scissors size={32} />,
      color: "#8E44AD",
      description: "A indústria têxtil requer soluções especializadas para tratamento de efluentes, recuperação de corantes e processos de acabamento.",
      applications: [
        {
          name: "Efluentes Têxteis",
          description: "Remoção de cor e tratamento de águas residuais",
          products: ["Filtros de Carvão Ativado", "Sistemas de Membranas"]
        },
        {
          name: "Recuperação de Corantes",
          description: "Economia através da recuperação e reuso de corantes",
          products: ["Ultrafiltração UF-200", "Nanofiltração NF-300"]
        },
        {
          name: "Água de Processo",
          description: "Tratamento de água para tingimento e acabamento",
          products: ["Filtros Multimídia", "Abrandadores"]
        }
      ],
      benefits: [
        "Redução do consumo de água",
        "Recuperação de produtos químicos",
        "Conformidade ambiental",
        "Economia de corantes"
      ],
      caseStudy: {
        title: "Têxtil Sustentável Reduz Consumo de Água em 70%",
        description: "Sistema integrado de filtração e reuso permitiu economia significativa de água e químicos.",
        metrics: ["70% menos água", "50% economia em corantes", "Certificação têxtil verde"]
      }
    },
    siderurgico: {
      id: "siderurgico",
      name: "Setor Siderúrgico",
      icon: <HardHat size={32} />,
      color: "#2C3E50",
      description: "A siderurgia demanda filtros de alta resistência para águas de resfriamento, óleos hidráulicos e tratamento de gases.",
      applications: [
        {
          name: "Água de Resfriamento",
          description: "Filtração de água em circuitos de resfriamento de alto-fornos",
          products: ["Filtros Autolimpantes FA-400", "Hidrociclones"]
        },
        {
          name: "Óleos Hidráulicos",
          description: "Proteção de sistemas hidráulicos de laminadores",
          products: ["Filtros de Alta Pressão FAP-500", "Elementos Sinterizados"]
        },
        {
          name: "Gases de Exaustão",
          description: "Filtração de particulados em sistemas de exaustão",
          products: ["Filtros de Mangas", "Precipitadores Eletrostáticos"]
        }
      ],
      benefits: [
        "Resistência a altas temperaturas",
        "Operação contínua 24/7",
        "Mínima perda de carga",
        "Alta capacidade de retenção"
      ],
      caseStudy: {
        title: "Usina Siderúrgica Aumenta Disponibilidade em 25%",
        description: "Filtros autolimpantes reduziram paradas para manutenção e aumentaram produtividade.",
        metrics: ["25% mais disponibilidade", "40% menos manutenção", "R$ 1.5M economia/ano"]
      }
    }
  };

  const currentIndustry = industriesData[selectedIndustry];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>
              Selecione o Segmento
            </h3>
            <div className="space-y-2">
              {Object.values(industriesData).map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    selectedIndustry === industry.id 
                      ? 'border-2 shadow-md' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    borderColor: selectedIndustry === industry.id ? industry.color : undefined,
                    backgroundColor: selectedIndustry === industry.id ? `${industry.color}08` : undefined
                  }}
                >
                  <div className="flex items-center">
                    <div 
                      className="mr-3"
                      style={{ color: selectedIndustry === industry.id ? industry.color : '#6B7280' }}
                    >
                      {industry.icon}
                    </div>
                    <span 
                      className="font-medium"
                      style={{ color: selectedIndustry === industry.id ? industry.color : '#374151' }}
                    >
                      {industry.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-start mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${currentIndustry.color}20` }}
                >
                  <div style={{ color: currentIndustry.color }}>
                    {currentIndustry.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: currentIndustry.color }}>
                    {currentIndustry.name}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {currentIndustry.description}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4" style={{ color: colors.dark }}>
                  Aplicações Específicas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentIndustry.applications.map((app, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold mb-2" style={{ color: currentIndustry.color }}>
                        {app.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">{app.description}</p>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-gray-500">Produtos recomendados:</p>
                        {app.products.map((product, pidx) => (
                          <div key={pidx} className="flex items-center text-xs text-gray-600">
                            <Filter size={12} className="mr-1" style={{ color: currentIndustry.color }} />
                            {product}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: colors.dark }}>
                    Benefícios Principais
                  </h3>
                  <div className="space-y-3">
                    {currentIndustry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle 
                          size={20} 
                          className="mr-3 mt-0.5 flex-shrink-0" 
                          style={{ color: currentIndustry.color }} 
                        />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: colors.dark }}>
                    Caso de Sucesso
                  </h3>
                  <div 
                    className="bg-white rounded-lg p-6 border-l-4"
                    style={{ borderColor: currentIndustry.color }}
                  >
                    <h4 className="font-semibold mb-2" style={{ color: currentIndustry.color }}>
                      {currentIndustry.caseStudy.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{currentIndustry.caseStudy.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {currentIndustry.caseStudy.metrics.map((metric, idx) => (
                        <span 
                          key={idx}
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                          style={{ 
                            backgroundColor: `${currentIndustry.color}15`,
                            color: currentIndustry.color
                          }}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/produtos" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition duration-150 ease-in-out"
                  style={{ 
                    backgroundColor: currentIndustry.color, 
                    color: 'white' 
                  }}
                >
                  Ver produtos para {currentIndustry.name}
                  <ArrowRight size={20} className="ml-2" />
                </a>
                <a 
                  href="/contato" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium border-2 transition duration-150 ease-in-out"
                  style={{ 
                    borderColor: currentIndustry.color,
                    color: currentIndustry.color
                  }}
                >
                  Solicitar consultoria técnica
                  <ChevronRight size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}