import React from 'react';
import Header from './header-component';
import AboutHero from './about-hero-component';
import CompanyHistory from './company-history-component';
import ValuesAndMission from './values-and-mission-component';
import TeamSection from './team-section-component';
import AboutCTA from './about-cta-component';
import Footer from './footer-component';

const AboutPage = () => {
  const colors = {
    primary: "#0B3C5D",
    secondary: "#328CC1",
    accent: "#1D5E2A",
    highlight: "#D9B310",
    light: "#F5F5F5",
    dark: "#2A2A2A"
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <head>
        <title>Sobre Nós | TMF Fibers - Nossa História</title>
        <meta name="description" content="Conheça a TMF Fibers: 20 anos de história, inovação e compromisso com a sustentabilidade na indústria de filtração brasileira." />
        <meta name="keywords" content="sobre TMF Fibers, história, missão, valores, equipe, filtração industrial Brasil" />
        
        <meta property="og:title" content="Sobre Nós | TMF Fibers" />
        <meta property="og:description" content="Duas décadas transformando a indústria de filtração com tecnologia e sustentabilidade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tmffibers.com.br/sobre" />
        <meta property="og:image" content="https://www.tmffibers.com.br/images/sobre-og.jpg" />
        
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Sobre a TMF Fibers",
            "description": "História, missão e valores da TMF Fibers",
            "url": "https://www.tmffibers.com.br/sobre",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@id": "https://www.tmffibers.com.br",
                    "name": "Home"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@id": "https://www.tmffibers.com.br/sobre",
                    "name": "Sobre Nós"
                  }
                }
              ]
            }
          }
        `}</script>
      </head>
      
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <CompanyHistory />
        <ValuesAndMission />
        <TeamSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;