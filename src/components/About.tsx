import { motion } from 'framer-motion';
import { Award, Users, Building, Globe } from 'lucide-react';

const stats = [
  { icon: Building, value: '280+', label: 'Projects Completed' },
  { icon: Globe, value: '24', label: 'Countries Served' },
  { icon: Award, value: '15', label: 'Design Awards' },
  { icon: Users, value: '12', label: 'Team Members' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src="https://img.vibestack.site/s/architect%20studio%20workspace/600/500"
                alt="Atelier Lumière design studio workspace"
                loading="lazy"
                className="rounded-xl w-full object-cover aspect-[6/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 hidden md:block">
                <p className="font-serif text-3xl font-bold text-gold">Since</p>
                <p className="font-serif text-4xl font-bold text-foreground">2016</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4 mb-6">
              Where Vision Meets
              <br />
              <span className="text-gradient-gold">Dimension</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Founded in Paris by architect Élise Moreau, Atelier Lumière has grown from a boutique visualization studio into an internationally recognized interior design practice. We believe that great design should be experienced — not just imagined.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-10">
              Our team of architects, 3D artists, and interior designers work at the intersection of technology and aesthetics, using cutting-edge rendering tools to create spaces that inspire before they're built.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <stat.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground text-sm font-light">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
