interface ContactInfoProps {}

export default function ContactInfo({}: ContactInfoProps) {
  const contactMethods = [
    {
      title: 'Telefone Comercial',
      icon: 'fas fa-phone',
      value: '(11) 3456-7890',
      subtitle: 'Segunda a Sexta, 8h às 18h',
      link: 'tel:+551134567890',
      color: 'blue'
    },
    {
      title: 'WhatsApp Business',
      icon: 'fab fa-whatsapp',
      value: '(11) 99876-5432',
      subtitle: 'Atendimento rápido',
      link: 'https://wa.me/5511998765432',
      color: 'green'
    },
    {
      title: 'E-mail Comercial',
      icon: 'fas fa-envelope',
      value: 'vendas@tmffibers.com.br',
      subtitle: 'Resposta em até 2 horas',
      link: 'mailto:vendas@tmffibers.com.br',
      color: 'blue'
    },
    {
      title: 'Suporte Técnico',
      icon: 'fas fa-tools',
      value: 'suporte@tmffibers.com.br',
      subtitle: 'Assistência especializada',
      link: 'mailto:suporte@tmffibers.com.br',
      color: 'orange'
    }
  ];

  const businessInfo = [
    {
      title: 'Horário de Atendimento',
      icon: 'fas fa-clock',
      lines: [
        'Segunda a Sexta: 8h às 18h',
        'Sábado: 8h às 12h',
        'Domingo: Fechado'
      ]
    },
    {
      title: 'Tempo de Resposta',
      icon: 'fas fa-stopwatch',
      lines: [
        'E-mail: até 2 horas úteis',
        'WhatsApp: até 30 minutos',
        'Telefone: imediato'
      ]
    },
    {
      title: 'Idiomas Atendidos',
      icon: 'fas fa-globe',
      lines: [
        'Português (nativo)',
        'Inglês (fluente)',
        'Espanhol (básico)'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Canais de Atendimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o canal que preferir. Nossa equipe está preparada para 
            atendê-lo com a excelência que você merece.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="group bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors ${
                method.color === 'blue' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                method.color === 'green' ? 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white' :
                'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
              }`}>
                <i className={`${method.icon} text-2xl`}></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
              <div className="text-lg font-medium text-gray-800 mb-1">{method.value}</div>
              <div className="text-sm text-gray-600">{method.subtitle}</div>
            </a>
          ))}
        </div>

        {/* Business Information */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Informações de Atendimento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${info.icon} text-white text-xl`}></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">{info.title}</h4>
                <div className="space-y-1">
                  {info.lines.map((line, lineIndex) => (
                    <div key={lineIndex} className="text-gray-700 text-sm">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <i className="fas fa-exclamation-triangle text-red-600 text-2xl mr-3"></i>
              <h4 className="text-xl font-semibold text-red-800">Emergência 24h</h4>
            </div>
            <p className="text-red-700 mb-3">
              Para situações de emergência em equipamentos em operação:
            </p>
            <a 
              href="tel:+5511987654321" 
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>
              (11) 98765-4321
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}