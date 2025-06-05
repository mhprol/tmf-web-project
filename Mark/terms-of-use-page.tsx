import TermsHero from './terms-hero-component';
import TermsOfUseContent from './terms-of-use-content-component';
import Header from './header-component';
import Footer from './footer-component';

interface TermsOfUsePageProps {}

export default function TermsOfUsePage({}: TermsOfUsePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TermsHero />
        <TermsOfUseContent />
      </main>
      <Footer />
    </div>
  );
}