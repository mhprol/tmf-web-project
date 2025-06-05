import React, { useState, useEffect } from 'react';
import { Leaf, Droplet, Recycle, TreePine } from 'lucide-react';

interface EnvironmentalMetricsProps {}

export default function EnvironmentalMetrics({}: EnvironmentalMetricsProps) {
  const [counters, setCounters] = useState({
    co2: 0,
    water: 0,
    recycled: 0,
    renewable: 0
  });

  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };

  const metrics = [
    {
      id: 'co2',
      icon: <Leaf size={48} />,
      value: 45,
      unit: '%',
      label: 'Redução de CO₂',
      description: 'Menos emissões comparado a filtros sintéticos tradicionais',
      color: colors.accent
    },
    {
      id: 'water',
      icon: <Droplet size={48} />,
      value: 30,
      unit: '%',
      label: 'Economia de Água',
      description: 'Redução no consumo durante o processo produtivo',
      color: colors.secondary
    },
    {
      id: 'recycled',
      icon: <Recycle size={48} />,
      value: 95,
      unit: '%',
      label: 'Material Reciclável',
      description: 'Componentes podem ser reciclados ou compostados',
      color: colors.highlight
    },
    {
      id: 'renewable',
      icon: <TreePine size={48} />,
      value: 100,
      unit: '%',
      label: 'Matéria-Prima Renovável',
      description: 'Celulose de florestas certificadas e manejadas',
      color: colors.primary
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        
        setCounters({
          co2: Math.round((metrics[0].value * currentStep) / steps),
          water: Math.round((metrics[1].value * currentStep) / steps),
          recycled: Math.round((metrics[2].value * currentStep) / steps),
          renewable: Math.round((metrics[3].value * currentStep) / steps)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('environmental-metrics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="environmental-metrics" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
            Impacto Ambiental Positivo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossos números refletem o compromisso real com a sustentabilidade. 
            Cada filtro TMF representa uma escolha consciente pelo meio ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={metric.id} className="text-center">
              <div 
                className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${metric.color}15` }}
              >
                <div style={{ color: metric.color }}>
                  {metric.icon}
                </div>
              </div>
              
              <div className="mb-2">
                <span 
                  className="text-4xl font-bold"
                  style={{ color: metric.color }}
                >
                  {counters[metric.id as keyof typeof counters]}
                </span>
                <span 
                  className="text-2xl font-bold ml-1"
                  style={{ color: metric.color }}
                >
                  {metric.unit}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.dark }}>
                {metric.label}
              </h3>
              
              <p className="text-sm text-gray-600">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.accent }}>
                Certificado Carbono Neutro
              </h3>
              <p className="text-gray-600">
                Nossas operações são auditadas e certificadas para garantir a 
                neutralidade de carbono em todo o ciclo produtivo.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.accent }}
              >
                <span className="text-white text-center font-bold">
                  CARBONO<br />NEUTRO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}