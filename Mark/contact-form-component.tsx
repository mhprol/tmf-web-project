import { useState } from 'react';

interface ContactFormProps {}

export default function ContactForm({}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    productInterest: '',
    urgency: 'medium',
    preferredContact: 'email',
    message: ''
  });

  const industries = [
    { value: 'alimentar', label: 'Indústria Alimentar' },
    { value: 'quimico', label: 'Indústria Química' },
    { value: 'farmaceutico', label: 'Indústria Farmacêutica' },
    { value: 'petroleo', label: 'Petróleo e Gás' },
    { value: 'mineracao', label: 'Mineração' },
    { value: 'papel', label: 'Papel e Celulose' },
    { value: 'textil', label: 'Indústria Têxtil' },
    { value: 'outros', label: 'Outros' }
  ];

  const productCategories = [
    { value: 'filtros-cartucho', label: 'Filtros de Cartucho' },
    { value: 'filtros-saco', label: 'Filtros de Saco' },
    { value: 'filtros-plissados', label: 'Filtros Plissados' },
    { value: 'filtros-liquidos', label: 'Filtração de Líquidos' },
    { value: 'sistemas-completos', label: 'Sistemas Completos' },
    { value: 'consultoria', label: 'Consultoria Técnica' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-4">
              Solicite sua Proposta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para 
              desenvolver a solução ideal para sua empresa.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <i className="fas fa-user text-blue-600 mr-3"></i>
                  Informações de Contato
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <i className="fas fa-industry text-blue-600 mr-3"></i>
                  Informações do Projeto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Segmento Industrial *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione seu segmento</option>
                      {industries.map((industry) => (
                        <option key={industry.value} value={industry.value}>
                          {industry.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Interesse em Produto
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione uma categoria</option>
                      {productCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgência do Projeto
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    >
                      <option value="low">Baixa (mais de 3 meses)</option>
                      <option value="medium">Média (1-3 meses)</option>
                      <option value="high">Alta (menos de 1 mês)</option>
                      <option value="urgent">Urgente (imediato)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Forma Preferida de Contato
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    >
                      <option value="email">E-mail</option>
                      <option value="phone">Telefone</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="presencial">Reunião Presencial</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Detalhes do Projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Descreva suas necessidades de filtração, especificações técnicas, volume de produção, ou qualquer informação relevante para desenvolvermos a melhor solução..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Enviar Solicitação
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  * Campos obrigatórios. Retornaremos em até 2 horas úteis.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}