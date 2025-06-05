import PrivacyHero from './privacy-hero-component';
import PrivacyPolicyContent from './privacy-policy-content-component';
import Header from './header-component';
import Footer from './footer-component';

interface PrivacyPolicyPageProps {}

export default function PrivacyPolicyPage({}: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PrivacyHero />
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}