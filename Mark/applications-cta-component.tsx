import React from 'react';
import { Phone, FileText, MessageSquare } from 'lucide-react';

interface ApplicationsCTAProps {}

export default function ApplicationsCTA({}: ApplicationsCTAProps) {
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

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
          Precisa de uma Solução Específica?
        </h2>
        
        <p className="text-xl mb-8 max-w-3xl mx-auto font-open-sans">
          Nossa equipe técnica está pronta para desenvolver a solução ideal para os desafios
          únicos da sua indústria. Entre em contato para uma consultoria personalizada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <FileText size={32} className="mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Análise Técnica</h3>
            <p className="text-sm opacity-90">
              Avaliação completa dos seus processos e necessidades de filtração
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <MessageSquare size={32} className="mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Projeto Customizado</h3>
            <p className="text-sm opacity-90">
              Desenvolvimento de soluções sob medida para sua aplicação
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Phone size={32} className="mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Suporte Contínuo</h3>
            <p className="text-sm opacity-90">
              Acompanhamento técnico durante toda a vida útil dos produtos
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contato" 
            className="inline-block px-8 py-4 bg-white rounded-md font-medium text-lg transition duration-150 ease-in-out hover:bg-gray-100"
            style={{ color: colors.primary }}
          >
            Solicitar Consultoria Técnica
          </a>
          
          <a 
            href="/produtos" 
            className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-medium text-lg transition duration-150 ease-in-out hover:bg-white/10"
          >
            Ver Catálogo Completo
          </a>
        </div>

        <p className="mt-8 text-sm opacity-80">
          Atendimento direto com nossos engenheiros: 
          <a href="tel:+551155551234" className="underline ml-1 font-medium">
            (11) 5555-1234
          </a>
        </p>
      </div>
    </section>
  );
}