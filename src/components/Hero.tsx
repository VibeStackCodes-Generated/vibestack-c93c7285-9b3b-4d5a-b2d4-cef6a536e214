import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://img.vibestack.site/s/luxury%20modern%20living%20room%20interior/1600/900"
          alt="Luxury modern living room with floor-to-ceiling windows"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
              3D Interior Design Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-8"
          >
            See Your Space
            <br />
            <span className="text-gradient-gold">Before It Exists</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl mb-10"
          >
            We craft photorealistic 3D visualizations of bespoke interiors — transforming your vision into an immersive experience before a single wall is touched.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#portfolio">
              <Button className="bg-gradient-gold text-background font-medium tracking-wider uppercase text-xs px-8 py-6 hover:opacity-90 transition-opacity">
                View Our Work
              </Button>
            </a>
            <a href="#process">
              <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 font-medium tracking-wider uppercase text-xs px-8 py-6 gap-2">
                <Play size={14} fill="currentColor" />
                Our Process
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#portfolio"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gold/60 hover:text-gold transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
