import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductCategories = () => {
  // Design system colors from our TMF design system
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };
  
  // Product category items with placeholder data
  const categories = [
    {
      id: 1,
      name: "Filtros de Celulose",
      description: "Produzidos com fibras de celulose nacional sustentável, ideais para aplicações com fluidos aquosos e solventes leves.",
      specs: ["Espessura: 0.5-3.0mm", "Porosidade: 5-50μm", "Temperatura: até 120°C"],
      imageUrl: "/api/placeholder/600/400" // Placeholder image
    },
    {
      id: 2,
      name: "Filtros Sintéticos",
      description: "Compostos por fibras sintéticas de alta resistência química para aplicações com fluidos agressivos e alta temperatura.",
      specs: ["Espessura: 0.8-4.5mm", "Porosidade: 1-100μm", "Temperatura: até 200°C"],
      imageUrl: "/api/placeholder/600/400" // Placeholder image
    },
    {
      id: 3,
      name: "Filtros Compostos",
      description: "Combinação de materiais naturais e sintéticos para otimizar performance em aplicações com requisitos especiais.",
      specs: ["Espessura: 1.0-5.0mm", "Porosidade: 0.5-80μm", "Temperatura: até 180°C"],
      imageUrl: "/api/placeholder/600/400" // Placeholder image
    },
    {
      id: 4,
      name: "Elementos Filtrantes",
      description: "Cartuchos e elementos prontos para instalação em sistemas de filtração industrial, com múltiplas configurações.",
      specs: ["Diâmetros: 60-150mm", "Comprimento: 250-1500mm", "Conexões: Standard/Custom"],
      imageUrl: "/api/placeholder/600/400" // Placeholder image
    },
    {
      id: 5,
      name: "Sistemas Integrados",
      description: "Unidades completas de filtração projetadas para necessidades específicas, incluindo bombas, sensores e controle.",
      specs: ["Capacidade: 500-10000L/h", "Pressão: até 25 bar", "Automação: Opcional"],
      imageUrl: "/api/placeholder/600/400" // Placeholder image
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
            Nossas Categorias de Produtos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos soluções específicas para cada necessidade de filtração industrial,
            combinando materiais sustentáveis com tecnologia de ponta.
          </p>
        </div>
        
        {/* Product category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
            >
              {/* Product image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.imageUrl} 
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Product content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.primary }}>
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                {/* Technical specifications */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">
                    Especificações técnicas:
                  </h4>
                  <ul className="space-y-1">
                    {category.specs.map((spec, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA link */}
                <a 
                  href={`/produtos/${category.id}`} 
                  className="inline-flex items-center text-sm font-medium transition-colors duration-200"
                  style={{ color: colors.secondary }}
                >
                  Ver detalhes completos
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all products button */}
        <div className="text-center mt-12">
          <a 
            href="/produtos" 
            className="inline-flex items-center px-6 py-3 rounded-md font-medium text-base transition duration-150 ease-in-out"
            style={{ backgroundColor: colors.primary, color: "white" }}
          >
            Ver todos os produtos
            <ChevronRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;