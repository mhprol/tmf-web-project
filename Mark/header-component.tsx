import React, { useState } from 'react';
import { Menu, Search, X, Phone } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Design system colors from our TMF design system
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };
  
  // Placeholder navigation structure - would be populated from CMS
  const navItems = [
    { name: "Home", url: "/" },
    { name: "Produtos", url: "/produtos", 
      submenu: [
        { name: "Filtros de Celulose", url: "/produtos/celulose" },
        { name: "Filtros Sintéticos", url: "/produtos/sinteticos" },
        { name: "Filtros Compostos", url: "/produtos/compostos" },
        { name: "Elementos Filtrantes", url: "/produtos/elementos" },
        { name: "Sistemas Integrados", url: "/produtos/sistemas" }
      ]
    },
    { name: "Aplicações", url: "/aplicacoes",
      submenu: [
        { name: "Alimentar", url: "/aplicacoes/alimentar" },
        { name: "Químico", url: "/aplicacoes/quimico" },
        { name: "Farmacêutico", url: "/aplicacoes/farmaceutico" },
        { name: "Automotivo", url: "/aplicacoes/automotivo" },
        { name: "Petrolífero", url: "/aplicacoes/petrolifero" },
        { name: "Têxtil", url: "/aplicacoes/textil" },
        { name: "Siderúrgico", url: "/aplicacoes/siderurgico" }
      ]
    },
    { name: "Sustentabilidade", url: "/sustentabilidade" },
    { name: "Sobre Nós", url: "/sobre" },
    { name: "Contato", url: "/contato" }
  ];
  
  return (
    <header className="sticky top-0 z-50 shadow-md bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="flex items-center">
                <svg 
                  className="h-10"
                  viewBox="0 0 200 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="0"
                    y="30"
                    fill={colors.accent}
                    fontFamily="Montserrat, sans-serif"
                    fontSize="32"
                    fontWeight="700"
                  >
                    TMF
                  </text>
                  <text
                    x="75"
                    y="30"
                    fill={colors.accent}
                    fontFamily="Montserrat, sans-serif"
                    fontSize="28"
                    fontWeight="400"
                  >
                    ibers
                  </text>
                </svg>
                <span className="hidden md:block text-xs ml-3" style={{ color: colors.accent }}>
                  We Are Green
                </span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href={item.url}
                  className="text-gray-700 hover:text-gray-900 font-medium transition duration-150 ease-in-out"
                >
                  {item.name}
                </a>
                
                {/* Submenu if exists */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.url}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Right side icons */}
          <div className="flex items-center">
            {/* Search button */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            
            {/* Contact button - visible on desktop */}
            <a 
              href="/contato" 
              className="hidden md:flex items-center ml-4 px-4 py-2 rounded-md font-medium"
              style={{ backgroundColor: colors.accent, color: "white" }}
            >
              <Phone size={16} className="mr-1" />
              <span>Fale Conosco</span>
            </a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-4 p-2 lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Search box - conditional rendering */}
        {searchOpen && (
          <div className="pt-3 pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar produtos, aplicações..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                style={{ borderColor: colors.primary, focusRing: colors.secondary }}
              />
              <button 
                className="absolute right-0 top-0 h-full px-4 text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile menu - conditional rendering */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name} className="py-2">
                  <a 
                    href={item.url}
                    className="text-gray-700 hover:text-gray-900 font-medium block"
                  >
                    {item.name}
                  </a>
                  
                  {/* Mobile submenu if exists */}
                  {item.submenu && (
                    <ul className="pl-4 mt-2 space-y-1 border-l-2 border-gray-200">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.name}>
                          <a
                            href={subitem.url}
                            className="text-sm text-gray-600 hover:text-gray-900 block py-1"
                          >
                            {subitem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;