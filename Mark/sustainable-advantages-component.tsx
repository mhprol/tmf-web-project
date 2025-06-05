import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SustainableAdvantages = () => {
  // Design system colors from our TMF design system
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };
  
  // Placeholder data for comparison charts
  // In a real implementation, this would come from actual data
  const wasteReductionData = [
    { name: 'TMF Fibers', value: 85, fill: colors.accent },
    { name: 'Concorrente A', value: 45, fill: colors.primary },
    { name: 'Concorrente B', value: 30, fill: colors.secondary }
  ];
  
  const energySavingsData = [
    { name: 'TMF Fibers', value: 70, fill: colors.accent },
    { name: 'Concorrente A', value: 40, fill: colors.primary },
    { name: 'Concorrente B', value: 35, fill: colors.secondary }
  ];
  
  const lifeCycleData = [
    { name: 'TMF Fibers', value: 24, fill: colors.accent },
    { name: 'Concorrente A', value: 16, fill: colors.primary },
    { name: 'Concorrente B', value: 12, fill: colors.secondary }
  ];
  
  const environmentalImpactData = [
    { name: 'TMF Fibers', value: 90, fill: colors.accent },
    { name: 'Concorrente A', value: 35, fill: colors.primary },
    { name: 'Concorrente B', value: 45, fill: colors.secondary }
  ];
  
  // Chart configuration
  const chartConfig = {
    waste: {
      title: "Redução de resíduos",
      description: "Porcentagem de redução de resíduos em comparação com filtros convencionais",
      unit: "%",
      data: wasteReductionData
    },
    energy: {
      title: "Economia de energia",
      description: "Redução percentual no consumo de energia durante o ciclo de produção",
      unit: "%",
      data: energySavingsData
    },
    lifecycle: {
      title: "Ciclo de vida estendido",
      description: "Duração média em meses antes da substituição necessária",
      unit: " meses",
      data: lifeCycleData
    },
    impact: {
      title: "Menor impacto ambiental",
      description: "Índice de sustentabilidade baseado em múltiplos fatores (maior = melhor)",
      unit: "",
      data: environmentalImpactData
    }
  };
  
  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label, unit }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded border border-gray-200">
          <p className="font-medium text-gray-700">{payload[0].payload.name}</p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold" style={{ color: payload[0].fill }}>{payload[0].value}</span>
            {unit}
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
            Nossos Diferenciais Sustentáveis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comparando TMF Fibers com a concorrência, nossos produtos oferecem 
            significativas vantagens ambientais e econômicas.
          </p>
        </div>
        
        {/* Charts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.keys(chartConfig).map((key) => {
            const chart = chartConfig[key];
            return (
              <div key={key} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.dark }}>
                  {chart.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {chart.description}
                </p>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chart.data}
                      margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis tickFormatter={(value) => `${value}${chart.unit}`} />
                      <Tooltip content={<CustomTooltip unit={chart.unit} />} />
                      <Bar dataKey="value" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <a 
            href="/sustentabilidade" 
            className="inline-block px-6 py-3 rounded-md font-medium text-base transition duration-150 ease-in-out"
            style={{ backgroundColor: colors.accent, color: "white" }}
          >
            Saiba mais sobre nossas práticas sustentáveis
          </a>
        </div>
      </div>
    </section>
  );
};

export default SustainableAdvantages;