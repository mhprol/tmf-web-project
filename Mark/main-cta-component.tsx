import React from 'react';
import { Phone, ChevronRight } from 'lucide-react';

const MainCTA = () => {
  // Design system colors from our TMF design system
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          className="rounded-2xl p-10 text-center"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          }}
        >
          <div className="max-w-3xl mx-auto">
            {/* CTA content */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Encontre a solução ideal para seu processo industrial
            </h2>
            
            <p className="text-lg text-gray-100 mb-8">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar a 
              melhor solução de filtração para suas necessidades específicas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <a 
                href="/contato" 
                className="inline-flex items-center px-6 py-3 rounded-md font-medium text-base transition duration-150 ease-in-out"
                style={{ backgroundColor: colors.accent, color: "white" }}
              >
                <Phone size={18} className="mr-2" />
                Fale com um especialista
              </a>
              
              {/* Secondary CTA */}
              <a 
                href="/aplicacoes" 
                className="inline-flex items-center px-6 py-3 rounded-md font-medium text-base transition duration-150 ease-in-out bg-white text-blue-900"
              >
                Explore nossas soluções por segmento
                <ChevronRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCTA;