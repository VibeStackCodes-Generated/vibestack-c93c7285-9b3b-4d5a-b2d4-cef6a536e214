import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Interactive3DShowcase from '@/components/Interactive3DShowcase';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import ShowcaseBanner from '@/components/ShowcaseBanner';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Portfolio />
      <Interactive3DShowcase />
      <Services />
      <Process />
      <About />
      <ShowcaseBanner />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}