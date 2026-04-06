import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Isabelle Fontaine',
    role: 'Homeowner, Monaco',
    avatar: 'elegant%20woman%20headshot%20studio/200/200',
    text: 'The 3D renders were so realistic that I thought I was looking at photographs of the finished space. Atelier Lumière exceeded every expectation.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'CEO, Apex Holdings',
    avatar: 'professional%20man%20headshot%20studio/200/200',
    text: 'They transformed our executive floor into a space that perfectly balances prestige and productivity. The virtual walkthrough sold the board instantly.',
    rating: 5,
  },
  {
    name: 'Sofia Andersson',
    role: 'Hotel Director, Stockholm',
    avatar: 'scandinavian%20woman%20headshot%20studio/200/200',
    text: 'Working with Élise and her team was seamless. The 3D visualizations allowed us to make confident decisions and stay on budget throughout.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            What They Say
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
            Our clients' words speak louder than our renders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="bg-card/50 border-border hover:border-gold/20 transition-all duration-500 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote size={32} className="text-gold/20 mb-4" />
                  <p className="text-foreground/90 font-light leading-relaxed mb-6 flex-1">
                    "{t.text}"
                  </p>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://img.vibestack.site/s/${t.avatar}`}
                      alt={t.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
