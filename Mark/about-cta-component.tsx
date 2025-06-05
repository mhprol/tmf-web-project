import React from 'react';
import { Users, Briefcase, ArrowRight } from 'lucide-react';

interface AboutCTAProps {}

export default function AboutCTA({}: AboutCTAProps) {
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
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
        }}
      />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Faça Parte da Nossa História
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Seja como cliente, parceiro ou colaborador, você pode fazer parte da 
            transformação sustentável da indústria brasileira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Become a Client */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <Briefcase size={48} className="mx-auto mb-4" style={{ color: colors.primary }} />
            <h3 className="font-semibold mb-2" style={{ color: colors.primary }}>
              Seja Nosso Cliente
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Descubra como nossas soluções podem transformar seus processos industriais
            </p>
            <a 
              href="/contato"
              className="inline-flex items-center px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out text-white"
              style={{ backgroundColor: colors.primary }}
            >
              Solicitar Orçamento
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          {/* Work With Us */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <Users size={48} className="mx-auto mb-4" style={{ color: colors.accent }} />
            <h3 className="font-semibold mb-2" style={{ color: colors.accent }}>
              Trabalhe Conosco
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Junte-se a uma equipe apaixonada por inovação e sustentabilidade
            </p>
            <a 
              href="#carreiras"
              className="inline-flex items-center px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out text-white"
              style={{ backgroundColor: colors.accent }}
            >
              Ver Vagas Abertas
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          {/* Partner With Us */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div 
              className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${colors.secondary}20` }}
            >
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: colors.secondary }}>
              Seja Nosso Parceiro
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Oportunidades de parceria para fornecedores e distribuidores
            </p>
            <a 
              href="/contato"
              className="inline-flex items-center px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out text-white"
              style={{ backgroundColor: colors.secondary }}
            >
              Falar com Comercial
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <blockquote className="text-center">
            <p className="text-lg italic text-white mb-4">
              "Nossa maior conquista não está nos prêmios ou certificações, mas em saber 
              que cada dia contribuímos para um Brasil mais sustentável e próspero. 
              Essa é a herança que queremos deixar."
            </p>
            <footer className="text-white/80">
              <strong>Maria Santos</strong><br />
              <span className="text-sm">Diretora de P&D, TMF Fibers</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}