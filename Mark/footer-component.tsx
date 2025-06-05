import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronRight, Facebook, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  // Design system colors from our TMF design system
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };
  
  // Handle newsletter submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the email to a backend service
    console.log('Subscribing email:', email);
    // Reset form
    setEmail('');
    // Show success message (in a real implementation)
    alert('Obrigado por se inscrever em nossa newsletter!');
  };
  
  return (
    <footer style={{ backgroundColor: colors.dark }}>
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company and contact info */}
          <div>
            <div className="mb-6">
              <svg 
                className="h-10 mb-2"
                viewBox="0 0 200 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="30"
                  fill="#4c9f5f"
                  fontFamily="Montserrat, sans-serif"
                  fontSize="32"
                  fontWeight="700"
                >
                  TMF
                </text>
                <text
                  x="75"
                  y="30"
                  fill="#4c9f5f"
                  fontFamily="Montserrat, sans-serif"
                  fontSize="28"
                  fontWeight="400"
                >
                  ibers
                </text>
              </svg>
              <span className="block text-xs text-gray-400">
                We Are Green
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Soluções sustentáveis em filtração industrial, combinando tecnologia nacional 
              com responsabilidade ambiental.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-2 mt-1 text-gray-400" />
                <span>Av. Industrial, 1500<br />Ribeirão Pires, SP<br />09400-000</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2 text-gray-400" />
                <span>(11) 5555-1234</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2 text-gray-400" />
                <span>contato@tmffibers.com.br</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Clock size={18} className="mr-2 text-gray-400" />
                <span>Seg - Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {['Produtos', 'Aplicações', 'Sustentabilidade', 'Sobre Nós', 'Contato', 'Blog', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-white flex items-center transition duration-200"
                  >
                    <ChevronRight size={14} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Conecte-se Conosco</h3>
            <div className="flex space-x-4 mb-8">
              {[
                { icon: <Facebook size={20} />, url: 'https://facebook.com' },
                { icon: <Twitter size={20} />, url: 'https://twitter.com' },
                { icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
                { icon: <Instagram size={20} />, url: 'https://instagram.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-gray-200 transition duration-200"
                  style={{ backgroundColor: colors.primary }}
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-4">Certificações</h3>
            <div className="flex flex-wrap gap-3">
              {['ISO 9001', 'ISO 14001', 'ABNT NBR', 'ASTM'].map((cert) => (
                <span 
                  key={cert}
                  className="inline-block px-3 py-1 rounded-md text-xs font-semibold"
                  style={{ backgroundColor: '#ffffff20', color: '#fff' }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber atualizações sobre novos produtos, tecnologias e 
              informações sobre filtração industrial.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  required
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-r-md"
                  style={{ backgroundColor: colors.accent }}
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={18} className="text-white" />
                </button>
              </div>
            </form>
            
            <p className="text-xs text-gray-500">
              Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
            </p>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="py-4" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TMF Fibers. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="/privacidade" className="hover:text-gray-400 transition duration-200">
                Política de Privacidade
              </a>
              <a href="/termos" className="hover:text-gray-400 transition duration-200">
                Termos de Uso
              </a>
              <a href="/certificacoes" className="hover:text-gray-400 transition duration-200">
                Certificações
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;