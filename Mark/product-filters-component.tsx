import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    efficiency: true,
    temperature: true,
    application: false
  });

  const [filters, setFilters] = useState({
    categories: [],
    efficiency: '',
    temperature: '',
    applications: []
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const categories = [
    { id: 'cellulose', name: 'Filtros de Celulose' },
    { id: 'synthetic', name: 'Filtros Sintéticos' },
    { id: 'composite', name: 'Filtros Compostos' },
    { id: 'elements', name: 'Elementos Filtrantes' },
    { id: 'systems', name: 'Sistemas Integrados' }
  ];

  const efficiencyRanges = [
    { id: '90-95', name: '90-95%' },
    { id: '95-99', name: '95-99%' },
    { id: '99-plus', name: '99%+' }
  ];

  const temperatureRanges = [
    { id: 'up-to-90', name: 'Até 90°C' },
    { id: '90-150', name: '90-150°C' },
    { id: '150-plus', name: 'Acima de 150°C' }
  ];

  const applications = [
    { id: 'food', name: 'Alimentícia' },
    { id: 'chemical', name: 'Química' },
    { id: 'pharma', name: 'Farmacêutica' },
    { id: 'auto', name: 'Automotiva' },
    { id: 'oil', name: 'Petrolífera' },
    { id: 'textile', name: 'Têxtil' },
    { id: 'steel', name: 'Siderúrgica' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Filter className="w-5 h-5 text-primary-500 mr-2" />
        <h3 className="text-lg font-semibold">Filtrar Produtos</h3>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-left font-medium mb-3"
        >
          <span>Categoria</span>
          {expandedSections.category ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 text-primary-500 focus:ring-primary-500"
                  onChange={(e) => {
                    // Handle filter change
                  }}
                />
                <span className="text-sm">{category.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Efficiency Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('efficiency')}
          className="flex items-center justify-between w-full text-left font-medium mb-3"
        >
          <span>Eficiência</span>
          {expandedSections.efficiency ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {expandedSections.efficiency && (
          <div className="space-y-2">
            {efficiencyRanges.map(range => (
              <label key={range.id} className="flex items-center">
                <input
                  type="radio"
                  name="efficiency"
                  className="mr-2 text-primary-500 focus:ring-primary-500"
                  onChange={(e) => {
                    // Handle filter change
                  }}
                />
                <span className="text-sm">{range.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Temperature Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('temperature')}
          className="flex items-center justify-between w-full text-left font-medium mb-3"
        >
          <span>Temperatura</span>
          {expandedSections.temperature ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {expandedSections.temperature && (
          <div className="space-y-2">
            {temperatureRanges.map(range => (
              <label key={range.id} className="flex items-center">
                <input
                  type="radio"
                  name="temperature"
                  className="mr-2 text-primary-500 focus:ring-primary-500"
                  onChange={(e) => {
                    // Handle filter change
                  }}
                />
                <span className="text-sm">{range.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Application Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('application')}
          className="flex items-center justify-between w-full text-left font-medium mb-3"
        >
          <span>Aplicação</span>
          {expandedSections.application ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {expandedSections.application && (
          <div className="space-y-2">
            {applications.map(app => (
              <label key={app.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 text-primary-500 focus:ring-primary-500"
                  onChange={(e) => {
                    // Handle filter change
                  }}
                />
                <span className="text-sm">{app.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters Button */}
      <button className="w-full text-center text-sm text-primary-500 hover:text-primary-600 font-medium">
        Limpar Filtros
      </button>
    </div>
  );
};

export default ProductFilters;