import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <span className="font-serif text-2xl font-semibold tracking-tight">
              Atelier <span className="text-gold">Lumière</span>
            </span>
            <p className="text-muted-foreground font-light mt-4 max-w-sm leading-relaxed text-sm">
              Transforming spaces through photorealistic 3D visualization and bespoke interior design since 2016.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-wider uppercase mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground text-sm font-light hover:text-gold transition-colors">3D Visualization</a></li>
              <li><a href="#services" className="text-muted-foreground text-sm font-light hover:text-gold transition-colors">Virtual Tours</a></li>
              <li><a href="#services" className="text-muted-foreground text-sm font-light hover:text-gold transition-colors">Interior Design</a></li>
              <li><a href="#services" className="text-muted-foreground text-sm font-light hover:text-gold transition-colors">Space Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm tracking-wider uppercase mb-4">Studio</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground text-sm font-light hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-muted-foreground text-sm font-light hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#process" className="text-muted-foreground text-sm font-light hover:text-gold transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-muted-foreground text-sm font-light hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border" />

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
          <p className="text-muted-foreground text-xs font-light">
            © 2024 Atelier Lumière. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-xs font-light hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground text-xs font-light hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
