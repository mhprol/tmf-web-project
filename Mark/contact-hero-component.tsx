interface ContactHeroProps {}

export default function ContactHero({}: ContactHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-20">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-blue-200 hover:text-white transition-colors">
                Início
              </a>
            </li>
            <li className="text-blue-300">/</li>
            <li className="text-white font-medium">Contato</li>
          </ol>
        </nav>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Nossa equipe de especialistas está pronta para desenvolver a solução ideal 
            para suas necessidades de filtração industrial. Fale conosco.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div>
                <div className="font-semibold">Atendimento</div>
                <div className="text-blue-100 text-sm">Segunda a Sexta, 8h às 18h</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <div className="font-semibold">E-mail</div>
                <div className="text-blue-100 text-sm">Resposta em até 2 horas</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div>
                <div className="font-semibold">Localização</div>
                <div className="text-blue-100 text-sm">São Paulo, SP</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-auto" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          style={{ height: '60px' }}
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}