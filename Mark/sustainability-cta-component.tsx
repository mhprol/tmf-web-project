import React from 'react';
import { FileText, Download, Phone } from 'lucide-react';

interface SustainabilityCTAProps {}

export default function SustainabilityCTA({}: SustainabilityCTAProps) {
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.secondary} 100%)`
        }}
      />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Faça Parte da Mudança Verde
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se a centenas de empresas que já escolheram a sustentabilidade 
            sem abrir mão da eficiência. Solicite nosso relatório completo de 
            impacto ambiental e descubra como podemos ajudar sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Download Report */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FileText size={48} className="mx-auto mb-4" style={{ color: colors.accent }} />
            <h3 className="font-semibold mb-2" style={{ color: colors.primary }}>
              Relatório de Sustentabilidade
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Baixe nosso relatório completo com todas as métricas e certificações
            </p>
            <button 
              className="inline-flex items-center px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out text-white"
              style={{ backgroundColor: colors.accent }}
            >
              <Download size={16} className="mr-2" />
              Download PDF
            </button>
          </div>

          {/* Calculate Impact */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div 
              className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${colors.secondary}20` }}
            >
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: colors.primary }}>
              Calculadora de Impacto
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Calcule a redução de emissões ao migrar para filtros TMF
            </p>
            <button 
              className="inline-flex items-center px-4 py-2 rounded-md font-medium border-2 transition duration-150 ease-in-out"
              style={{ 
                borderColor: colors.secondary,
                color: colors.secondary
              }}
            >
              Calcular Agora
            </button>
          </div>

          {/* Contact Expert */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <Phone size={48} className="mx-auto mb-4" style={{ color: colors.primary }} />
            <h3 className="font-semibold mb-2" style={{ color: colors.primary }}>
              Fale com um Especialista
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Tire suas dúvidas sobre sustentabilidade e certificações
            </p>
            <a 
              href="/contato"
              className="inline-flex items-center px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out text-white"
              style={{ backgroundColor: colors.primary }}
            >
              Agendar Conversa
            </a>
          </div>
        </div>

        {/* Environmental Commitment Statement */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto border border-white/20">
          <blockquote className="text-center">
            <p className="text-lg italic text-white mb-4">
              "Cada filtro TMF instalado representa uma escolha consciente pelo futuro. 
              Juntos, já evitamos a emissão de mais de 10.000 toneladas de CO₂ e 
              economizamos milhões de litros de água."
            </p>
            <footer className="text-white/80">
              <strong>João Silva</strong><br />
              <span className="text-sm">CEO, TMF Fibers</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}