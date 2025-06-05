interface TermsOfUseContentProps {}

export default function TermsOfUseContent({}: TermsOfUseContentProps) {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <div className="flex items-start">
              <i className="fas fa-gavel text-blue-600 text-2xl mr-4 mt-1"></i>
              <div>
                <h2 className="text-xl font-semibold text-blue-800 mb-2">Termos e Condições Gerais</h2>
                <p className="text-blue-700">
                  Estes Termos de Uso regem a utilização do website da TMF Fibers e estabelecem 
                  as condições para relacionamento comercial entre nossa empresa e nossos clientes B2B.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}<br />
            Ao acessar e utilizar nosso website ou contratar nossos serviços, você concorda 
            com estes termos e condições.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <i className="fas fa-list mr-3 text-blue-600"></i>
            Índice
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <a href="#definicoes" className="text-blue-600 hover:text-blue-800 py-1">1. Definições</a>
            <a href="#uso-website" className="text-blue-600 hover:text-blue-800 py-1">2. Uso do Website</a>
            <a href="#propriedade" className="text-blue-600 hover:text-blue-800 py-1">3. Propriedade Intelectual</a>
            <a href="#servicos" className="text-blue-600 hover:text-blue-800 py-1">4. Serviços e Produtos</a>
            <a href="#responsabilidades" className="text-blue-600 hover:text-blue-800 py-1">5. Responsabilidades</a>
            <a href="#limitacao" className="text-blue-600 hover:text-blue-800 py-1">6. Limitação de Responsabilidade</a>
            <a href="#confidencialidade" className="text-blue-600 hover:text-blue-800 py-1">7. Confidencialidade</a>
            <a href="#vigencia" className="text-blue-600 hover:text-blue-800 py-1">8. Vigência e Rescisão</a>
            <a href="#lei-aplicavel" className="text-blue-600 hover:text-blue-800 py-1">9. Lei Aplicável</a>
            <a href="#contato-legal" className="text-blue-600 hover:text-blue-800 py-1">10. Contato</a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* 1. Definições */}
          <section id="definicoes">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Definições
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1">TMF Fibers</h3>
                  <p className="text-gray-600 text-sm">
                    TMF Fibers Ltda., empresa de filtração industrial com sede em São Paulo, SP.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Cliente</h3>
                  <p className="text-gray-600 text-sm">
                    Pessoa jurídica que contrata produtos ou serviços da TMF Fibers.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Usuário</h3>
                  <p className="text-gray-600 text-sm">
                    Qualquer pessoa que acesse ou utilize nosso website.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Serviços</h3>
                  <p className="text-gray-600 text-sm">
                    Produtos de filtração, consultoria técnica e suporte especializado.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Website</h3>
                  <p className="text-gray-600 text-sm">
                    Portal eletrônico www.tmffibers.com.br e subdomínios.
                  </p>
                </div>
                
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Conteúdo</h3>
                  <p className="text-gray-600 text-sm">
                    Textos, imagens, vídeos e demais materiais disponibilizados.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Uso do Website */}
          <section id="uso-website">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Uso do Website
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <i className="fas fa-check-circle mr-2 text-green-600"></i>
                  Uso Permitido
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1 text-sm"></i>
                    Acesso a informações sobre produtos e serviços
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1 text-sm"></i>
                    Solicitação de orçamentos e propostas técnicas
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1 text-sm"></i>
                    Download de materiais técnicos disponibilizados
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1 text-sm"></i>
                    Contato com nossa equipe comercial e técnica
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1 text-sm"></i>
                    Navegação para fins comerciais legítimos
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                  <i className="fas fa-times-circle mr-2 text-red-600"></i>
                  Uso Proibido
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-times text-red-600 mr-2 mt-1 text-sm"></i>
                    Atividades ilegais ou não autorizadas
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-red-600 mr-2 mt-1 text-sm"></i>
                    Interferência no funcionamento do website
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-red-600 mr-2 mt-1 text-sm"></i>
                    Tentativas de acesso não autorizado
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-red-600 mr-2 mt-1 text-sm"></i>
                    Reprodução não autorizada de conteúdo
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-red-600 mr-2 mt-1 text-sm"></i>
                    Uso para fins concorrenciais diretos
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Propriedade Intelectual */}
          <section id="propriedade">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Propriedade Intelectual
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <i className="fas fa-copyright text-blue-600 text-2xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Direitos Autorais e Marcas</h3>
                  <p className="text-blue-700 mb-4">
                    Todo o conteúdo do website, incluindo textos, imagens, logotipos, marcas, 
                    designs e tecnologias são de propriedade exclusiva da TMF Fibers ou 
                    licenciados para uso.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-800">Protegido por direitos autorais:</strong>
                      <ul className="mt-1 text-blue-700">
                        <li>• Catálogos técnicos e especificações</li>
                        <li>• Imagens e fotografias de produtos</li>
                        <li>• Textos e descrições técnicas</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-blue-800">Marcas registradas:</strong>
                      <ul className="mt-1 text-blue-700">
                        <li>• "TMF Fibers" e logotipo</li>
                        <li>• "We Are Green" (slogan)</li>
                        <li>• Designs e identidade visual</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Serviços e Produtos */}
          <section id="servicos">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Serviços e Produtos
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                    <i className="fas fa-industry mr-2"></i>
                    Produtos
                  </h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Filtros industriais de alta performance</li>
                    <li>• Elementos filtrantes customizados</li>
                    <li>• Sistemas de filtração integrados</li>
                    <li>• Peças de reposição originais</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <i className="fas fa-tools mr-2"></i>
                    Serviços
                  </h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Consultoria técnica especializada</li>
                    <li>• Projetos de engenharia customizados</li>
                    <li>• Instalação e comissionamento</li>
                    <li>• Manutenção preventiva e corretiva</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-800 mb-3 flex items-center">
                    <i className="fas fa-handshake mr-2"></i>
                    Suporte
                  </h3>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Atendimento técnico 24/7</li>
                    <li>• Treinamento de equipes</li>
                    <li>• Análises de performance</li>
                    <li>• Relatórios técnicos detalhados</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  Condições Comerciais
                </h3>
                <p className="text-yellow-700 text-sm">
                  Todos os preços, especificações e condições estão sujeitos a confirmação 
                  através de proposta comercial formal. As informações do website são orientativas 
                  e podem ser alteradas sem aviso prévio.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Responsabilidades */}
          <section id="responsabilidades">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              Responsabilidades das Partes
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                  <i className="fas fa-building mr-2"></i>
                  TMF Fibers
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-check text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Fornecer informações técnicas precisas</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Manter a funcionalidade do website</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Proteger dados pessoais conforme LGPD</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Cumprir prazos acordados comercialmente</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-blue-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Prestar suporte técnico qualificado</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <i className="fas fa-user-tie mr-2"></i>
                  Cliente/Usuário
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Utilizar o website de forma adequada</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Fornecer informações verdadeiras e atualizadas</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Respeitar direitos de propriedade intelectual</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Cumprir condições de pagamento acordadas</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check text-green-600 mr-2 mt-1"></i>
                    <span className="text-gray-600 text-sm">Manter confidencialidade de informações técnicas</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Limitação de Responsabilidade */}
          <section id="limitacao">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
              Limitação de Responsabilidade
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <i className="fas fa-shield-alt text-red-600 text-xl mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Limitações Importantes</h3>
                  <p className="text-red-700 text-sm mb-3">
                    A TMF Fibers não se responsabiliza por danos indiretos, lucros cessantes 
                    ou consequenciais decorrentes do uso do website ou de nossos produtos, 
                    exceto em casos de dolo ou culpa grave.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-red-800">Não nos responsabilizamos por:</strong>
                      <ul className="mt-1 text-red-700">
                        <li>• Interrupções temporárias do website</li>
                        <li>• Falhas de conectividade ou internet</li>
                        <li>• Uso inadequado de produtos/serviços</li>
                        <li>• Decisões baseadas exclusivamente no website</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-red-800">Nossa responsabilidade limita-se a:</strong>
                      <ul className="mt-1 text-red-700">
                        <li>• Valor contratado dos produtos/serviços</li>
                        <li>• Danos diretos comprovadamente causados</li>
                        <li>• Reparação ou substituição de produtos</li>
                        <li>• Cumprimento de garantias contratuais</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Lei Aplicável */}
          <section id="lei-aplicavel">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
              Lei Aplicável e Jurisdição
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <i className="fas fa-gavel mr-2 text-blue-600"></i>
                    Legislação Brasileira
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Estes termos são regidos pelas leis da República Federativa do Brasil, 
                    especialmente:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Código Civil Brasileiro (Lei 10.406/2002)</li>
                    <li>• Marco Civil da Internet (Lei 12.965/2014)</li>
                    <li>• LGPD (Lei 13.709/2018)</li>
                    <li>• Código de Defesa do Consumidor (quando aplicável)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
                    Foro e Jurisdição
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Fica eleito o foro da comarca de São Paulo, SP, para dirimir 
                    quaisquer questões decorrentes destes termos.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <strong className="text-blue-800 text-sm">Resolução de Conflitos:</strong>
                    <p className="text-blue-700 text-sm mt-1">
                      Priorizamos a resolução amigável através de negociação direta. 
                      Em caso de impasse, poderá ser utilizada mediação ou arbitragem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 10. Contato Legal */}
          <section id="contato-legal">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
              Contato para Questões Legais
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <i className="fas fa-scale-balanced mr-2"></i>
                    Departamento Jurídico
                  </h3>
                  <div className="space-y-2 text-blue-700">
                    <p className="flex items-center">
                      <i className="fas fa-envelope mr-2"></i>
                      <strong>E-mail:</strong> juridico@tmffibers.com.br
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-phone mr-2"></i>
                      <strong>Telefone:</strong> (11) 3456-7890 - Ramal 300
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-clock mr-2"></i>
                      <strong>Horário:</strong> Segunda a Sexta, 9h às 17h
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <i className="fas fa-building mr-2"></i>
                    Dados da Empresa
                  </h3>
                  <div className="space-y-2 text-blue-700 text-sm">
                    <p><strong>Razão Social:</strong> TMF Fibers Indústria e Comércio Ltda.</p>
                    <p><strong>CNPJ:</strong> 12.345.678/0001-90</p>
                    <p><strong>Endereço:</strong> Av. Industrial, 1500 - Ribeirão Pires - SP</p>
                    <p><strong>CEP:</strong> 09400-000</p>
                    <p><strong>Responsável Legal:</strong> Departamento Jurídico</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}