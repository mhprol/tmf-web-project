import ContactHero from './contact-hero-component';
import ContactForm from './contact-form-component';
import ContactInfo from './contact-info-component';
import Locations from './locations-component';
import SupportChannels from './support-channels-component';
import Header from './header-component';
import Footer from './footer-component';

interface ContactPageProps {}

export default function ContactPage({}: ContactPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <SupportChannels />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}