import { motion } from 'framer-motion';
import { Box, Eye, Palette, Ruler, Rotate3d, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Rotate3d,
    title: '3D Visualization',
    description: 'Photorealistic renders that bring your design to life with accurate materials, lighting, and spatial proportions.',
  },
  {
    icon: Eye,
    title: 'Virtual Walkthroughs',
    description: 'Immersive 360° tours of your future space — explore every angle before construction begins.',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Full-service design from concept to completion — material selection, furniture curation, and art placement.',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description: 'Optimized floor plans that maximize flow, function, and natural light in every room.',
  },
  {
    icon: Box,
    title: '3D Floor Plans',
    description: 'Detailed isometric and perspective floor plans that communicate spatial relationships clearly.',
  },
  {
    icon: Video,
    title: 'Animation & Film',
    description: 'Cinematic flythrough animations for presentations, marketing, and client approvals.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
            From initial concept sketches to photorealistic 3D renders, we offer a complete suite of visualization and design services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="bg-card/50 border-border hover:border-gold/30 transition-all duration-500 group h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon size={28} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
