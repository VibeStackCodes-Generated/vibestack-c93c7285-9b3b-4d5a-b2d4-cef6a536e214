import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ShowcaseBanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://img.vibestack.site/s/luxury%20bedroom%20interior%20design/1600/600"
          alt="Luxury bedroom 3D render"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6">
            Ready to Transform
            <br />
            <span className="text-gradient-gold">Your Space?</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto mb-8">
            Book a complimentary 30-minute consultation and receive a free concept sketch of your space.
          </p>
          <a href="#contact">
            <Button className="bg-gradient-gold text-background font-medium tracking-wider uppercase text-xs px-10 py-6 hover:opacity-90 transition-opacity">
              Schedule Your Free Consultation
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
