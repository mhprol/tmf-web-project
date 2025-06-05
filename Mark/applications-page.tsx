import React from 'react';
import Header from './header-component';
import ApplicationsHero from './applications-hero-component';
import IndustryDetail from './industry-detail-component';
import ApplicationsCTA from './applications-cta-component';
import Footer from './footer-component';

const ApplicationsPage = () => {
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
        <title>Aplicações Industriais | TMF Fibers - Soluções de Filtração</title>
        <meta name="description" content="Soluções especializadas de filtração para cada segmento industrial. Tecnologia brasileira para indústrias alimentícia, química, farmacêutica, automotiva e mais." />
        <meta name="keywords" content="aplicações industriais, filtração industrial, soluções por segmento, filtros industriais, TMF Fibers" />
        
        <meta property="og:title" content="Aplicações Industriais | TMF Fibers" />
        <meta property="og:description" content="Soluções especializadas de filtração para cada segmento industrial brasileiro." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tmffibers.com.br/aplicacoes" />
        <meta property="og:image" content="https://www.tmffibers.com.br/images/aplicacoes-og.jpg" />
        
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Aplicações Industriais - TMF Fibers",
            "description": "Soluções de filtração para diversos segmentos industriais",
            "url": "https://www.tmffibers.com.br/aplicacoes",
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
                    "@id": "https://www.tmffibers.com.br/aplicacoes",
                    "name": "Aplicações"
                  }
                }
              ]
            }
          }
        `}</script>
      </head>
      
      <Header />
      <main className="flex-grow">
        <ApplicationsHero />
        <IndustryDetail />
        <ApplicationsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationsPage;