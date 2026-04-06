import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Penthouse Riviera',
    category: 'Residential',
    location: 'Monaco',
    image: 'luxury%20penthouse%20interior%20design/600/400',
    description: 'A 4,200 sq ft penthouse with panoramic Mediterranean views, featuring Italian marble and custom millwork.',
    tags: ['3D Visualization', 'Full Design'],
  },
  {
    title: 'Noir Restaurant',
    category: 'Hospitality',
    location: 'London',
    image: 'dark%20luxury%20restaurant%20interior/600/400',
    description: 'Moody fine-dining concept with blackened oak, brass accents, and dramatic lighting design.',
    tags: ['3D Rendering', 'Concept Design'],
  },
  {
    title: 'Serenity Spa',
    category: 'Wellness',
    location: 'Bali',
    image: 'luxury%20spa%20interior%20zen/600/400',
    description: 'Tropical wellness retreat blending Balinese craftsmanship with contemporary minimalism.',
    tags: ['Virtual Tour', 'Interior Design'],
  },
  {
    title: 'Apex Tower Office',
    category: 'Commercial',
    location: 'Dubai',
    image: 'modern%20luxury%20office%20interior/600/400',
    description: 'Executive floor redesign for a Fortune 500 firm — glass, steel, and warm walnut throughout.',
    tags: ['3D Visualization', 'Space Planning'],
  },
  {
    title: 'Villa Toscana',
    category: 'Residential',
    location: 'Florence',
    image: 'tuscan%20villa%20elegant%20interior/600/400',
    description: 'Historic villa restoration merging Renaissance architecture with modern luxury amenities.',
    tags: ['Full Design', '3D Rendering'],
  },
  {
    title: 'The Loft Gallery',
    category: 'Cultural',
    location: 'New York',
    image: 'modern%20art%20gallery%20interior/600/400',
    description: 'Industrial SoHo loft converted into a curated gallery space with adaptive lighting systems.',
    tags: ['Concept Design', 'Virtual Tour'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
            Selected Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            Our Portfolio
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
            Every project begins as a 3D vision — photorealistic renders that let you walk through your future space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-500 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={`https://img.vibestack.site/s/${project.image}`}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-background/70 backdrop-blur-sm text-xs font-light">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} className="text-gold" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground text-xs">{project.location}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
