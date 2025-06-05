import React, { useState } from 'react';
import { Check, X, Plus } from 'lucide-react';

interface ComparisonTableProps {}

const ComparisonTable: React.FC<ComparisonTableProps> = () => {
  const [selectedProducts, setSelectedProducts] = useState(['cel-001', 'syn-001', 'com-001']);
  
  const products = [
    {
      id: 'cel-001',
      name: 'CP-100',
      category: 'Celulose',
      efficiency: '95-99%',
      temperature: 'Até 90°C',
      retention: '1-100 μm',
      lifecycle: '18 meses',
      biodegradable: true,
      chemicalResistant: false,
      washable: true,
      price: '$$'
    },
    {
      id: 'syn-001',
      name: 'SI-200',
      category: 'Sintético',
      efficiency: '99.5%',
      temperature: 'Até 180°C',
      retention: '0.5-50 μm',
      lifecycle: '24 meses',
      biodegradable: false,
      chemicalResistant: true,
      washable: true,
      price: '$$$'
    },
    {
      id: 'com-001',
      name: 'MC-300',
      category: 'Composto',
      efficiency: '99.9%',
      temperature: 'Até 150°C',
      retention: 'Customizável',
      lifecycle: '30 meses',
      biodegradable: false,
      chemicalResistant: true,
      washable: true,
      price: '$$$$'
    }
  ];

  const features = [
    { key: 'efficiency', label: 'Eficiência de Filtração' },
    { key: 'temperature', label: 'Temperatura Máxima' },
    { key: 'retention', label: 'Retenção de Partículas' },
    { key: 'lifecycle', label: 'Vida Útil' },
    { key: 'biodegradable', label: 'Biodegradável', type: 'boolean' },
    { key: 'chemicalResistant', label: 'Resistência Química', type: 'boolean' },
    { key: 'washable', label: 'Lavável/Reutilizável', type: 'boolean' },
    { key: 'price', label: 'Faixa de Preço' }
  ];

  const selectedProductsData = products.filter(p => selectedProducts.includes(p.id));

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-500 mb-4">
            Compare Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analise lado a lado as características de diferentes filtros para encontrar a solução ideal para sua aplicação
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-500 text-white">
                  <th className="text-left p-4 font-medium">Características</th>
                  {selectedProductsData.map(product => (
                    <th key={product.id} className="p-4 text-center min-w-[200px]">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm opacity-90">{product.category}</div>
                    </th>
                  ))}
                  {selectedProducts.length < 4 && (
                    <th className="p-4 text-center min-w-[200px]">
                      <button className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition">
                        <Plus size={24} />
                        <span className="text-sm mt-1">Adicionar Produto</span>
                      </button>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium text-gray-700">{feature.label}</td>
                    {selectedProductsData.map(product => (
                      <td key={product.id} className="p-4 text-center">
                        {feature.type === 'boolean' ? (
                          product[feature.key] ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600">{product[feature.key]}</span>
                        )}
                      </td>
                    ))}
                    {selectedProducts.length < 4 && <td></td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-gray-50 border-t">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition">
                Solicitar Consultoria Técnica
              </button>
              <button className="px-6 py-3 border border-primary-500 text-primary-500 rounded-md hover:bg-primary-50 transition">
                Baixar Comparativo Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;