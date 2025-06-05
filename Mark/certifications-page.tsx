import CertificationsHero from './certifications-hero-component';
import CertificationsContent from './certifications-content-component';
import Header from './header-component';
import Footer from './footer-component';

interface CertificationsPageProps {}

export default function CertificationsPage({}: CertificationsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CertificationsHero />
        <CertificationsContent />
      </main>
      <Footer />
    </div>
  );
}