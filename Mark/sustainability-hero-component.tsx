import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SustainabilityHeroProps {}

export default function SustainabilityHero({}: SustainabilityHeroProps) {
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };

  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(29, 94, 42, 0.85), rgba(50, 140, 193, 0.85)), url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="flex items-center space-x-2 text-white/80">
            <li>
              <a href="/" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <ChevronRight size={16} />
            </li>
            <li className="text-white font-medium">Sustentabilidade</li>
          </ol>
        </nav>
        
        {/* Title and subtitle */}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Nosso Compromisso Verde
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          Filtração industrial sustentável com matéria-prima 100% brasileira e renovável, 
          contribuindo para um futuro mais limpo e responsável.
        </p>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}