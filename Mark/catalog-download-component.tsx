import React, { useState } from 'react';
import { Download, FileText, Mail, Building } from 'lucide-react';

interface CatalogDownloadProps {}

const CatalogDownload: React.FC<CatalogDownloadProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Info */}
            <div className="p-8 md:p-12 bg-neutral-50">
              <div className="flex items-center mb-6">
                <FileText className="w-12 h-12 text-primary-500 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-primary-500">Catálogo Completo</h3>
                  <p className="text-gray-600">TMF Fibers 2024</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Baixe nosso catálogo completo e tenha acesso a:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span className="text-gray-700">Especificações técnicas detalhadas de todos os produtos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span className="text-gray-700">Tabelas de aplicação por segmento industrial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span className="text-gray-700">Guia de seleção de filtros</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span className="text-gray-700">Cases de sucesso e certificações</span>
                </li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Formato do arquivo:</p>
                <div className="flex items-center">
                  <Download className="w-5 h-5 text-primary-500 mr-2" />
                  <span className="font-medium">PDF (15 MB)</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="p-8 md:p-12">
              <h4 className="text-xl font-semibold mb-6">Preencha seus dados para baixar</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail corporativo *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 mr-2 text-primary-500 focus:ring-primary-500"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({...formData, acceptTerms: e.target.checked})}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Aceito receber comunicações da TMF Fibers sobre produtos e novidades do setor *
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition"
                >
                  <Download size={20} />
                  <span>Baixar Catálogo</span>
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  Seus dados estão seguros e não serão compartilhados com terceiros
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogDownload;