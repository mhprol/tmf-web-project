interface CertificationsContentProps {}

export default function CertificationsContent({}: CertificationsContentProps) {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      category: 'Qualidade',
      icon: 'fas fa-award',
      description: 'Sistema de Gestão da Qualidade certificado internacionalmente',
      benefits: ['Processos padronizados', 'Melhoria contínua', 'Satisfação do cliente', 'Controle rigoroso'],
      color: 'blue',
      valid: 'Válido até: Dezembro 2026'
    },
    {
      title: 'ISO 14001:2015',
      category: 'Meio Ambiente',
      icon: 'fas fa-leaf',
      description: 'Gestão Ambiental para redução de impactos ecológicos',
      benefits: ['Gestão sustentável', 'Redução de resíduos', 'Eficiência energética', 'Conformidade legal'],
      color: 'green',
      valid: 'Válido até: Março 2027'
    },
    {
      title: 'ISO 45001:2018',
      category: 'Segurança',
      icon: 'fas fa-shield-alt',
      description: 'Sistema de Gestão de Saúde e Segurança Ocupacional',
      benefits: ['Ambiente seguro', 'Prevenção de acidentes', 'Bem-estar', 'Compliance trabalhista'],
      color: 'orange',
      valid: 'Válido até: Agosto 2026'
    },
    {
      title: 'INMETRO',
      category: 'Conformidade',
      icon: 'fas fa-certificate',
      description: 'Certificação nacional para produtos de filtração industrial',
      benefits: ['Padrão brasileiro', 'Qualidade assegurada', 'Rastreabilidade', 'Confiança nacional'],
      color: 'purple',
      valid: 'Válido até: Junho 2027'
    }
  ];

  const awards = [
    { year: '2023', title: 'Prêmio Excelência Industrial', category: 'Inovação em Filtração' },
    { year: '2022', title: 'Selo Verde FIESP', category: 'Sustentabilidade Empresarial' },
    { year: '2021', title: 'Top of Mind B2B', category: 'Filtração Industrial' },
    { year: '2020', title: 'Empresa Destaque', category: 'Tecnologia Ambiental' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 text-white',
      green: 'bg-green-600 text-white',
      orange: 'bg-orange-600 text-white',
      purple: 'bg-purple-600 text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Introduction */}
        <div className="mb-12 text-center">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8 text-left max-w-4xl mx-auto">
            <div className="flex items-start">
              <i className="fas fa-trophy text-blue-600 text-2xl mr-4 mt-1"></i>
              <div>
                <h2 className="text-xl font-semibold text-blue-800 mb-2">Excelência Reconhecida</h2>
                <p className="text-blue-700">
                  Nossas certificações e prêmios refletem nosso compromisso contínuo com a qualidade, 
                  sustentabilidade e inovação na indústria de filtração brasileira.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Certifications Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-display mb-8 text-center">
            Certificações Internacionais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Header */}
                <div className={`p-6 ${getColorClasses(cert.color)} border-b`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getIconColorClasses(cert.color)}`}>
                        <i className={`${cert.icon} text-xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <span className="text-sm opacity-80">{cert.category}</span>
                      </div>
                    </div>
                    <a 
                      href="#download" 
                      className="text-sm hover:underline opacity-75 hover:opacity-100"
                      title="Download do certificado"
                    >
                      <i className="fas fa-download mr-1"></i>
                      PDF
                    </a>
                  </div>
                  <p className="text-sm opacity-80">{cert.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cert.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check-circle text-green-500 mr-2 text-xs"></i>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 pt-3 border-t border-gray-100">
                    {cert.valid}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-display mb-8 text-center">
            Conformidade com Normas Técnicas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <i className="fas fa-globe mr-2 text-blue-600"></i>
                Normas Internacionais
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  ASTM D6400 - Filtração de Líquidos
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  EN 779:2012 - Filtros de Ar
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  ISO 16890 - Classificação de Eficiência
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  HEPA H13/H14 Standards
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <i className="fas fa-flag mr-2 text-green-600"></i>
                Normas Brasileiras
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  ABNT NBR 16401 - Qualidade do Ar
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  ANVISA RDC 275 - Filtração Farmacêutica
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  CONAMA 382 - Emissões Atmosféricas
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  NR-15 - Atividades Insalubres
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <i className="fas fa-industry mr-2 text-purple-600"></i>
                Normas Setoriais
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  FDA 21 CFR 177 - Contato Alimentar
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  USP Class VI - Biocompatibilidade
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  EU GMP Anexo 1 - Farmacêutica
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  ASME BPE - Equipamentos Bioprocesso
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-display mb-8 text-center">
            Prêmios e Reconhecimentos
          </h2>
          
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-trophy text-white text-2xl"></i>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600 mb-1">{award.year}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-600">{award.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-display mb-8 text-center">
            Indicadores de Qualidade
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { metric: '99.8%', label: 'Satisfação do Cliente', icon: 'fas fa-smile', color: 'green' },
              { metric: '< 0.1%', label: 'Taxa de Defeitos', icon: 'fas fa-bug', color: 'red' },
              { metric: '48h', label: 'Tempo Médio de Entrega', icon: 'fas fa-shipping-fast', color: 'blue' },
              { metric: '100%', label: 'Produtos Testados', icon: 'fas fa-check-circle', color: 'purple' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md border border-gray-100">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  item.color === 'green' ? 'bg-green-100 text-green-600' :
                  item.color === 'red' ? 'bg-red-100 text-red-600' :
                  item.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{item.metric}</div>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-display mb-8 text-center">
            Downloads de Certificados
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Certificado ISO 9001:2015', size: '1.2 MB', type: 'PDF' },
                { name: 'Certificado ISO 14001:2015', size: '980 KB', type: 'PDF' },
                { name: 'Certificado ISO 45001:2018', size: '1.1 MB', type: 'PDF' },
                { name: 'Certificação INMETRO', size: '760 KB', type: 'PDF' },
                { name: 'Compêndio de Certificações', size: '3.2 MB', type: 'PDF' },
                { name: 'Declarações de Conformidade', size: '1.8 MB', type: 'ZIP' }
              ].map((file, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-file-pdf text-red-600"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 text-sm">{file.name}</h3>
                        <p className="text-xs text-gray-500">{file.size} • {file.type}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      <i className="fas fa-download"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Todos os certificados são válidos e verificáveis através dos órgãos certificadores.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                <i className="fas fa-download mr-2"></i>
                Baixar Todos os Certificados
              </button>
            </div>
          </div>
        </section>

        {/* Continuous Improvement */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 font-display mb-8 text-center">
            Compromisso com a Melhoria Contínua
          </h2>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
            <i className="fas fa-chart-line text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Nossa Jornada de Excelência</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Investimos continuamente em tecnologia, treinamento e processos para manter 
              nossos padrões de qualidade sempre em evolução, superando as expectativas 
              dos nossos clientes e as exigências do mercado.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 rounded-lg p-4">
                <i className="fas fa-graduation-cap text-2xl mb-2"></i>
                <h4 className="font-semibold mb-1">Treinamento</h4>
                <p className="text-sm opacity-90">Capacitação contínua da equipe</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <i className="fas fa-microscope text-2xl mb-2"></i>
                <h4 className="font-semibold mb-1">Pesquisa</h4>
                <p className="text-sm opacity-90">Inovação e desenvolvimento</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <i className="fas fa-handshake text-2xl mb-2"></i>
                <h4 className="font-semibold mb-1">Parcerias</h4>
                <p className="text-sm opacity-90">Colaboração com institutos</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}