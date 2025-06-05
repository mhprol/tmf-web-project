import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ValueProposition from './ValueProposition';
import ProductCategories from './ProductCategories';
import SustainableAdvantages from './SustainableAdvantages';
import IndustryApplications from './IndustryApplications';
import MainCTA from './MainCTA';
import Footer from './Footer';

const HomePage = () => {
  // Design system colors from our TMF design system
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
      {/* Meta tags for SEO */}
      <head>
        <title>TMF Fibers | Soluções Avançadas em Filtração Sustentável</title>
        <meta name="description" content="Tecnologia brasileira para filtração industrial com alta eficiência e sustentabilidade. Filtros biodegradáveis para diversos segmentos industriais." />
        <meta name="keywords" content="filtros industriais, filtração industrial, elementos filtrantes, sistemas de filtração, filtros biodegradáveis" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="TMF Fibers | Soluções em Filtração Sustentável" />
        <meta property="og:description" content="Tecnologia brasileira para filtração industrial com alta eficiência e sustentabilidade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tmffibers.com.br" />
        <meta property="og:image" content="https://www.tmffibers.com.br/images/og-image.jpg" />
        
        {/* Structured data for rich results */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TMF Fibers",
            "url": "https://www.tmffibers.com.br",
            "logo": "https://www.tmffibers.com.br/images/logo.png",
            "description": "Soluções avançadas em filtração sustentável para indústrias.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Industrial, 1500",
              "addressLocality": "Ribeirão Pires",
              "addressRegion": "SP",
              "postalCode": "09400-000",
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-5555-1234",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/tmffibers",
              "https://www.linkedin.com/company/tmffibers",
              "https://twitter.com/tmffibers",
              "https://www.instagram.com/tmffibers"
            ]
          }
        `}</script>
      </head>
      
      {/* Components */}
      <Header />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <ProductCategories />
        <SustainableAdvantages />
        <IndustryApplications />
        <MainCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;