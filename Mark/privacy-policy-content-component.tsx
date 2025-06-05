interface PrivacyPolicyContentProps {}

export default function PrivacyPolicyContent({}: PrivacyPolicyContentProps) {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <div className="flex items-start">
              <i className="fas fa-shield-alt text-blue-600 text-2xl mr-4 mt-1"></i>
              <div>
                <h2 className="text-xl font-semibold text-blue-800 mb-2">Compromisso com a Privacidade</h2>
                <p className="text-blue-700">
                  A TMF Fibers está comprometida com a proteção da privacidade e dos dados pessoais de nossos 
                  clientes, parceiros e visitantes, em conformidade com a Lei Geral de Proteção de Dados (LGPD) - 
                  Lei nº 13.709/2018.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}<br />
            Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos 
            suas informações quando você utiliza nosso website ou serviços.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <i className="fas fa-list mr-3 text-blue-600"></i>
            Índice
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <a href="#dados-coletados" className="text-blue-600 hover:text-blue-800 py-1">1. Dados Coletados</a>
            <a href="#finalidade" className="text-blue-600 hover:text-blue-800 py-1">2. Finalidade do Tratamento</a>
            <a href="#base-legal" className="text-blue-600 hover:text-blue-800 py-1">3. Base Legal</a>
            <a href="#compartilhamento" className="text-blue-600 hover:text-blue-800 py-1">4. Compartilhamento</a>
            <a href="#direitos" className="text-blue-600 hover:text-blue-800 py-1">5. Seus Direitos</a>
            <a href="#seguranca" className="text-blue-600 hover:text-blue-800 py-1">6. Segurança</a>
            <a href="#retencao" className="text-blue-600 hover:text-blue-800 py-1">7. Retenção de Dados</a>
            <a href="#cookies" className="text-blue-600 hover:text-blue-800 py-1">8. Cookies</a>
            <a href="#alteracoes" className="text-blue-600 hover:text-blue-800 py-1">9. Alterações</a>
            <a href="#contato" className="text-blue-600 hover:text-blue-800 py-1">10. Contato</a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* 1. Dados Coletados */}
          <section id="dados-coletados">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Dados Coletados
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Dados Fornecidos Diretamente</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start"><i className="fas fa-check text-green-600 mr-2 mt-1"></i>Nome completo e cargo</li>
                <li className="flex items-start"><i className="fas fa-check text-green-600 mr-2 mt-1"></i>E-mail corporativo e telefone</li>
                <li className="flex items-start"><i className="fas fa-check text-green-600 mr-2 mt-1"></i>Empresa e segmento industrial</li>
                <li className="flex items-start"><i className="fas fa-check text-green-600 mr-2 mt-1"></i>Necessidades de filtração e especificações técnicas</li>
                <li className="flex items-start"><i className="fas fa-check text-green-600 mr-2 mt-1"></i>Localização para atendimento regionalizado</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Dados Coletados Automaticamente</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><i className="fas fa-check text-green-600 mr-2 mt-1"></i>Endereço IP e dados de navegação</li>
                <li className="flex items-start"><i className="fas fa-check text-green-600 mr-2 mt-1"></i>Páginas visitadas e tempo de permanência</li>
                <li className="flex items-start"><i className="fas fa-check text-green-600 mr-2 mt-1"></i>Dispositivo e navegador utilizado</li>
                <li className="flex items-start"><i className="fas fa-check text-green-600 mr-2 mt-1"></i>Cookies e tecnologias similares</li>
              </ul>
            </div>
          </section>

          {/* 2. Finalidade */}
          <section id="finalidade">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Finalidade do Tratamento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <i className="fas fa-handshake mr-2"></i>
                  Relacionamento Comercial
                </h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Resposta a solicitações de orçamento</li>
                  <li>• Desenvolvimento de soluções técnicas</li>
                  <li>• Comunicação sobre produtos e serviços</li>
                  <li>• Suporte técnico especializado</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                  <i className="fas fa-chart-line mr-2"></i>
                  Melhoria de Serviços
                </h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Análise de navegação do website</li>
                  <li>• Personalização de conteúdo</li>
                  <li>• Desenvolvimento de novos produtos</li>
                  <li>• Pesquisas de satisfação</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Base Legal */}
          <section id="base-legal">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Base Legal
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                O tratamento dos seus dados pessoais é realizado com base nas seguintes hipóteses legais da LGPD:
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="fas fa-balance-scale text-blue-600 mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-800">Execução de contrato:</strong>
                    <span className="text-gray-600"> Para cumprimento de obrigações contratuais e prestação de serviços</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-heart text-blue-600 mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-800">Legítimo interesse:</strong>
                    <span className="text-gray-600"> Para melhoria dos serviços e comunicação comercial relevante</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-800">Consentimento:</strong>
                    <span className="text-gray-600"> Quando expressamente fornecido para finalidades específicas</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Seus Direitos */}
          <section id="direitos">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              Seus Direitos como Titular
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: 'fas fa-eye', title: 'Acesso', desc: 'Confirmar a existência de tratamento e acessar seus dados' },
                { icon: 'fas fa-edit', title: 'Correção', desc: 'Corrigir dados incompletos, inexatos ou desatualizados' },
                { icon: 'fas fa-trash', title: 'Exclusão', desc: 'Solicitar a exclusão de dados desnecessários ou excessivos' },
                { icon: 'fas fa-download', title: 'Portabilidade', desc: 'Receber seus dados em formato estruturado' },
                { icon: 'fas fa-ban', title: 'Oposição', desc: 'Opor-se ao tratamento em casos específicos' },
                { icon: 'fas fa-info-circle', title: 'Informação', desc: 'Obter informações sobre compartilhamento de dados' }
              ].map((right, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <i className={`${right.icon} text-blue-600 mr-2`}></i>
                    <h3 className="font-semibold text-gray-800">{right.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{right.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <i className="fas fa-question-circle mr-2"></i>
                Como exercer seus direitos?
              </h3>
              <p className="text-blue-700 text-sm">
                Entre em contato conosco através do e-mail <strong>privacidade@tmffibers.com.br</strong> ou 
                pelo telefone <strong>(11) 3456-7890</strong>. Responderemos em até 15 dias úteis.
              </p>
            </div>
          </section>

          {/* 8. Cookies */}
          <section id="cookies">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
              Política de Cookies
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação e 
                fornecer funcionalidades personalizadas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                    <i className="fas fa-cog mr-2"></i>
                    Essenciais
                  </h3>
                  <p className="text-sm text-green-700">Necessários para o funcionamento básico do site</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <i className="fas fa-chart-bar mr-2"></i>
                    Analytics
                  </h3>
                  <p className="text-sm text-blue-700">Para análise de tráfego e melhoria do website</p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
                    <i className="fas fa-bullseye mr-2"></i>
                    Marketing
                  </h3>
                  <p className="text-sm text-purple-700">Para personalização de conteúdo relevante</p>
                </div>
              </div>
            </div>
          </section>

          {/* 10. Contato DPO */}
          <section id="contato">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
              Encarregado de Dados (DPO)
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <i className="fas fa-user-shield mr-2"></i>
                    Contato do DPO
                  </h3>
                  <div className="space-y-2 text-blue-700">
                    <p className="flex items-center">
                      <i className="fas fa-envelope mr-2"></i>
                      <strong>E-mail:</strong> privacidade@tmffibers.com.br
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-phone mr-2"></i>
                      <strong>Telefone:</strong> (11) 3456-7890
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-clock mr-2"></i>
                      <strong>Horário:</strong> Segunda a Sexta, 8h às 18h
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <i className="fas fa-gavel mr-2"></i>
                    Autoridade Supervisora
                  </h3>
                  <div className="space-y-2 text-blue-700">
                    <p><strong>ANPD</strong> - Autoridade Nacional de Proteção de Dados</p>
                    <p className="flex items-center">
                      <i className="fas fa-globe mr-2"></i>
                      <a href="https://www.gov.br/anpd" className="hover:underline">www.gov.br/anpd</a>
                    </p>
                    <p className="text-sm">
                      Você pode apresentar reclamações à ANPD sobre o tratamento 
                      de seus dados pessoais.
                    </p>
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