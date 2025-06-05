interface PrivacyHeroProps {}

export default function PrivacyHero({}: PrivacyHeroProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(11, 60, 93, 0.85), rgba(50, 140, 193, 0.85)), url("https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="flex items-center space-x-2 text-white/80">
            <li>
              <a href="/" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <i className="fas fa-chevron-right text-xs"></i>
            </li>
            <li className="text-white font-medium">Política de Privacidade</li>
          </ol>
        </nav>
        
        {/* Title and subtitle */}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Política de Privacidade
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          Nosso compromisso com a proteção dos seus dados pessoais e conformidade com a LGPD.
        </p>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 text-white fill-current"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>
    </section>
  );
}