import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin with an in-depth consultation to understand your vision, lifestyle, and aesthetic preferences.',
  },
  {
    number: '02',
    title: 'Concept Design',
    description: 'Mood boards, material palettes, and initial sketches bring your ideas into a cohesive design direction.',
  },
  {
    number: '03',
    title: '3D Modeling',
    description: 'Your space is built in full 3D — every surface, fixture, and piece of furniture modeled to exact specifications.',
  },
  {
    number: '04',
    title: 'Photorealistic Rendering',
    description: 'Advanced ray-tracing produces images indistinguishable from photographs — see your space in perfect detail.',
  },
  {
    number: '05',
    title: 'Refinement',
    description: 'We iterate together — adjusting colors, materials, and layouts until every detail is exactly right.',
  },
  {
    number: '06',
    title: 'Delivery',
    description: 'Final renders, virtual tours, and construction-ready documentation delivered for seamless execution.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
            How We Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            Our Process
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
            A refined six-step journey from initial vision to photorealistic reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="mb-4">
                <span className="font-serif text-6xl font-bold text-gold/10 group-hover:text-gold/25 transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-px bg-gold/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
