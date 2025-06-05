import React from 'react';
import Header from './header-component';
import SustainabilityHero from './sustainability-hero-component';
import EnvironmentalMetrics from './environmental-metrics-component';
import SustainabilityPillars from './sustainability-pillars-component';
import Certifications from './certifications-component';
import SustainabilityCTA from './sustainability-cta-component';
import Footer from './footer-component';

const SustainabilityPage = () => {
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
        <title>Sustentabilidade | TMF Fibers - Compromisso Verde</title>
        <meta name="description" content="Conheça nosso compromisso com a sustentabilidade. Filtração industrial com matéria-prima 100% renovável, certificações ambientais e impacto positivo." />
        <meta name="keywords" content="sustentabilidade, filtros ecológicos, carbono neutro, certificações ambientais, TMF Fibers" />
        
        <meta property="og:title" content="Sustentabilidade | TMF Fibers" />
        <meta property="og:description" content="Compromisso real com o meio ambiente através de filtração industrial sustentável." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tmffibers.com.br/sustentabilidade" />
        <meta property="og:image" content="https://www.tmffibers.com.br/images/sustentabilidade-og.jpg" />
        
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sustentabilidade - TMF Fibers",
            "description": "Compromisso ambiental e práticas sustentáveis na filtração industrial",
            "url": "https://www.tmffibers.com.br/sustentabilidade",
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
                    "@id": "https://www.tmffibers.com.br/sustentabilidade",
                    "name": "Sustentabilidade"
                  }
                }
              ]
            }
          }
        `}</script>
      </head>
      
      <Header />
      <main className="flex-grow">
        <SustainabilityHero />
        <EnvironmentalMetrics />
        <SustainabilityPillars />
        <Certifications />
        <SustainabilityCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SustainabilityPage;