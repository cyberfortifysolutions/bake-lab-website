import ParticleBackground from '../components/bakery/ParticleBackground';
import Navbar from '../components/bakery/Navbar';
import HeroSection from '../components/bakery/HeroSection';
import AboutSection from '../components/bakery/AboutSection';
import OrderForm from '../components/bakery/OrderForm';
import ReviewsSection from '../components/bakery/ReviewsSection';
import ContactSection from '../components/bakery/ContactSection';
import Footer from '../components/bakery/Footer';

export default function Home() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', position: 'relative' }}>
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OrderForm />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}