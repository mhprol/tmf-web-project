import React, { useState } from 'react';
import { Download, Eye, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  images: string[];
  description: string;
  specs: {
    efficiency: string;
    temperature: string;
    retention: string;
    material: string;
    lifecycle: string;
  };
  applications: string[];
  datasheet: string;
}

interface ProductGridProps {
  products?: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<{[key: string]: number}>({});

  // Sample products data
  const defaultProducts: Product[] = [
    {
      id: 'cel-001',
      name: 'Filtro Celulose Premium CP-100',
      category: 'Filtros de Celulose',
      images: [
        'https://breinerco.com/wp-content/uploads/2023/01/BRI-Properties-of-Cellulose-Fiber-Material-1-1080x600.png',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ],
      description: 'Filtro de alta eficiência produzido com celulose 100% renovável, ideal para aplicações que exigem biodegradabilidade.',
      specs: {
        efficiency: '95-99%',
        temperature: 'Até 90°C',
        retention: '1-100 mícrons',
        material: 'Celulose natural',
        lifecycle: '18 meses'
      },
      applications: ['Alimentícia', 'Farmacêutica', 'Química'],
      datasheet: '/datasheets/cp-100.pdf'
    },
    {
      id: 'syn-001',
      name: 'Filtro Sintético Industrial SI-200',
      category: 'Filtros Sintéticos',
      images: [
        'https://matriculas.estacio.br/blog/wp-content/uploads/2022/10/engenharia-de-materiais-capa.webp',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ],
      description: 'Solução de alta durabilidade para ambientes agressivos, com resistência química superior.',
      specs: {
        efficiency: '99.5%',
        temperature: 'Até 180°C',
        retention: '0.5-50 mícrons',
        material: 'Polipropileno/Poliéster',
        lifecycle: '24 meses'
      },
      applications: ['Química', 'Petrolífera', 'Siderúrgica'],
      datasheet: '/datasheets/si-200.pdf'
    },
    {
      id: 'com-001',
      name: 'Filtro Composto Multicamadas MC-300',
      category: 'Filtros Compostos',
      images: [
        'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ],
      description: 'Tecnologia multicamadas que combina diferentes materiais para máxima eficiência de filtração.',
      specs: {
        efficiency: '99.9%',
        temperature: 'Até 150°C',
        retention: 'Customizável',
        material: 'Composto híbrido',
        lifecycle: '30 meses'
      },
      applications: ['Farmacêutica', 'Alimentícia', 'Automotiva'],
      datasheet: '/datasheets/mc-300.pdf'
    }
  ];

  const productList = products || defaultProducts;

  const nextImage = (productId: string, currentIndex: number, totalImages: number) => {
    setSelectedImageIndex(prev => ({
      ...prev,
      [productId]: (currentIndex + 1) % totalImages
    }));
  };

  const prevImage = (productId: string, currentIndex: number, totalImages: number) => {
    setSelectedImageIndex(prev => ({
      ...prev,
      [productId]: currentIndex === 0 ? totalImages - 1 : currentIndex - 1
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productList.map((product) => {
        const currentImageIndex = selectedImageIndex[product.id] || 0;
        
        return (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            {/* Image Carousel */}
            <div className="relative h-64 bg-gray-100">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => prevImage(product.id, currentImageIndex, product.images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => nextImage(product.id, currentImageIndex, product.images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                {product.category}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary-500">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              
              {/* Specifications */}
              <div className="mb-4">
                <h4 className="font-medium text-sm text-gray-700 mb-2">Especificações:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Eficiência:</span>
                    <span className="font-medium">{product.specs.efficiency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Temperatura:</span>
                    <span className="font-medium">{product.specs.temperature}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Retenção:</span>
                    <span className="font-medium">{product.specs.retention}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Vida útil:</span>
                    <span className="font-medium">{product.specs.lifecycle}</span>
                  </div>
                </div>
              </div>
              
              {/* Applications */}
              <div className="mb-4">
                <h4 className="font-medium text-sm text-gray-700 mb-2">Aplicações:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="bg-accent-100 text-accent-700 px-2 py-1 rounded-full text-xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition">
                  <Eye size={16} />
                  <span className="text-sm">Ver Detalhes</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary-500 text-primary-500 rounded-md hover:bg-primary-50 transition">
                  <Download size={16} />
                  <span className="text-sm">Datasheet</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;