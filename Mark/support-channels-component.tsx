interface SupportChannelsProps {}

export default function SupportChannels({}: SupportChannelsProps) {
  const departments = [
    {
      title: 'Vendas e Orçamentos',
      icon: 'fas fa-handshake',
      description: 'Consultoria comercial, cotações e propostas técnicas personalizadas',
      email: 'vendas@tmffibers.com.br',
      phone: '(11) 3456-7890',
      whatsapp: '5511987654321',
      color: 'blue',
      services: [
        'Cotações e propostas',
        'Consultoria de produtos',
        'Análise de aplicações',
        'Projetos especiais'
      ]
    },
    {
      title: 'Suporte Técnico',
      icon: 'fas fa-tools',
      description: 'Assistência técnica especializada, instalação e manutenção preventiva',
      email: 'suporte@tmffibers.com.br',
      phone: '(11) 3456-7891',
      whatsapp: '5511987654322',
      color: 'orange',
      services: [
        'Assistência técnica',
        'Instalação de equipamentos',
        'Manutenção preventiva',
        'Treinamento operacional'
      ]
    },
    {
      title: 'Engenharia e P&D',
      icon: 'fas fa-drafting-compass',
      description: 'Desenvolvimento de soluções customizadas e projetos de engenharia',
      email: 'engenharia@tmffibers.com.br',
      phone: '(11) 3456-7892',
      whatsapp: '5511987654323',
      color: 'green',
      services: [
        'Projetos customizados',
        'Análise de viabilidade',
        'Estudos de caso',
        'Inovação e desenvolvimento'
      ]
    },
    {
      title: 'Qualidade e Certificações',
      icon: 'fas fa-certificate',
      description: 'Controle de qualidade, certificações e conformidade regulatória',
      email: 'qualidade@tmffibers.com.br',
      phone: '(11) 3456-7893',
      whatsapp: '5511987654324',
      color: 'purple',
      services: [
        'Laudos técnicos',
        'Certificações',
        'Controle de qualidade',
        'Conformidade regulatória'
      ]
    },
    {
      title: 'Logística e Entrega',
      icon: 'fas fa-shipping-fast',
      description: 'Acompanhamento de pedidos, entregas e logística especializada',
      email: 'logistica@tmffibers.com.br',
      phone: '(11) 3456-7894',
      whatsapp: '5511987654325',
      color: 'indigo',
      services: [
        'Rastreamento de pedidos',
        'Logística expressa',
        'Entregas programadas',
        'Estoque consignado'
      ]
    },
    {
      title: 'Pós-Vendas',
      icon: 'fas fa-user-shield',
      description: 'Garantia, assistência contínua e relacionamento com o cliente',
      email: 'pos-vendas@tmffibers.com.br',
      phone: '(11) 3456-7895',
      whatsapp: '5511987654326',
      color: 'red',
      services: [
        'Garantia de produtos',
        'Assistência contínua',
        'Feedback e melhorias',
        'Programas de fidelidade'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      red: 'bg-red-50 border-red-200 text-red-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 text-white',
      orange: 'bg-orange-600 text-white',
      green: 'bg-green-600 text-white',
      purple: 'bg-purple-600 text-white',
      indigo: 'bg-indigo-600 text-white',
      red: 'bg-red-600 text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Departamentos Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe está organizada para oferecer atendimento especializado 
            em cada área. Fale diretamente com o departamento que pode ajudá-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1"
            >
              {/* Header */}
              <div className={`p-6 ${getColorClasses(dept.color)} border-b`}>
                <div className="flex items-center mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getIconColorClasses(dept.color)}`}>
                    <i className={`${dept.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold">{dept.title}</h3>
                </div>
                <p className="text-sm opacity-80">{dept.description}</p>
              </div>

              {/* Contact Methods */}
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <a 
                    href={`mailto:${dept.email}`}
                    className="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <i className="fas fa-envelope w-5 mr-3 text-gray-500"></i>
                    {dept.email}
                  </a>
                  <a 
                    href={`tel:${dept.phone.replace(/\D/g, '')}`}
                    className="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <i className="fas fa-phone w-5 mr-3 text-gray-500"></i>
                    {dept.phone}
                  </a>
                  <a 
                    href={`https://wa.me/${dept.whatsapp}`}
                    className="flex items-center text-sm text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <i className="fab fa-whatsapp w-5 mr-3 text-gray-500"></i>
                    WhatsApp
                  </a>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Serviços:</h4>
                  <div className="space-y-2">
                    {dept.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check-circle text-green-500 mr-2 text-xs"></i>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Não sabe qual departamento procurar?
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Entre em contato com nossa central de atendimento. Direcionaremos 
            você para o especialista certo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+551134567890"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-phone mr-2"></i>
              (11) 3456-7890
            </a>
            <a 
              href="https://wa.me/5511987654321"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              WhatsApp
            </a>
            <a 
              href="mailto:contato@tmffibers.com.br"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-envelope mr-2"></i>
              E-mail Geral
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}