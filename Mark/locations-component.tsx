interface LocationsProps {}

export default function Locations({}: LocationsProps) {
  const locations = [
    {
      type: 'Matriz',
      city: 'São Paulo',
      state: 'SP',
      address: 'Av. Paulista, 1842 - Conj. 142',
      neighborhood: 'Bela Vista',
      zipCode: '01310-923',
      phone: '(11) 3456-7890',
      email: 'matriz@tmffibers.com.br',
      manager: 'Carlos Silva',
      services: ['Vendas', 'Engenharia', 'Suporte Técnico', 'Administração'],
      isHeadquarters: true
    },
    {
      type: 'Filial',
      city: 'Rio de Janeiro',
      state: 'RJ',
      address: 'Rua do Ouvidor, 98 - Sala 304',
      neighborhood: 'Centro',
      zipCode: '20040-030',
      phone: '(21) 3234-5678',
      email: 'rio@tmffibers.com.br',
      manager: 'Ana Costa',
      services: ['Vendas', 'Suporte Técnico']
    },
    {
      type: 'Filial',
      city: 'Belo Horizonte',
      state: 'MG',
      address: 'Av. Afonso Pena, 867 - 8º andar',
      neighborhood: 'Centro',
      zipCode: '30130-002',
      phone: '(31) 3345-6789',
      email: 'bh@tmffibers.com.br',
      manager: 'Roberto Santos',
      services: ['Vendas', 'Distribuidora Regional']
    },
    {
      type: 'Representação',
      city: 'Porto Alegre',
      state: 'RS',
      address: 'Rua dos Andradas, 1234 - Conj. 56',
      neighborhood: 'Centro Histórico',
      zipCode: '90020-015',
      phone: '(51) 3456-7890',
      email: 'rs@tmffibers.com.br',
      manager: 'Fernanda Lima',
      services: ['Vendas', 'Distribuição']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Nossas Localizações
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Presença nacional com escritórios estrategicamente posicionados 
            para atender todo o território brasileiro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-96 lg:h-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/10"></div>
              <div className="relative text-center text-blue-800">
                <i className="fas fa-map-marked-alt text-6xl mb-4"></i>
                <h3 className="text-2xl font-bold mb-2">Cobertura Nacional</h3>
                <p className="text-lg">4 escritórios estratégicos</p>
                <p className="text-sm opacity-75">Atendimento personalizado em sua região</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-8 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 left-12 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Locations List */}
          <div className="order-1 lg:order-2 space-y-6">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow ${
                  location.isHeadquarters ? 'border-2 border-blue-200' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {location.city}, {location.state}
                      </h3>
                      {location.isHeadquarters && (
                        <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                          MATRIZ
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{location.type}</div>
                  </div>
                  <i className="fas fa-building text-2xl text-blue-600"></i>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-gray-500 mt-1 mr-3 w-4"></i>
                    <div className="text-sm text-gray-700">
                      <div>{location.address}</div>
                      <div>{location.neighborhood} - {location.city}/{location.state}</div>
                      <div>CEP: {location.zipCode}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <i className="fas fa-phone text-gray-500 mr-3 w-4"></i>
                      <a 
                        href={`tel:${location.phone.replace(/\D/g, '')}`}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-gray-500 mr-3 w-4"></i>
                      <a 
                        href={`mailto:${location.email}`}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <i className="fas fa-user-tie text-gray-500 mr-3 w-4"></i>
                    <span className="text-sm text-gray-700">
                      Gerente: <span className="font-medium">{location.manager}</span>
                    </span>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">Serviços:</div>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Cobertura Nacional</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Mesmo sem escritório em sua região, atendemos todo o Brasil através 
            de nossa rede de representantes e parceiros qualificados.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-100">Território Nacional</div>
            </div>
            <div>
              <div className="text-3xl font-bold">48h</div>
              <div className="text-blue-100">Tempo de Resposta</div>
            </div>
            <div>
              <div className="text-3xl font-bold">20+</div>
              <div className="text-blue-100">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}