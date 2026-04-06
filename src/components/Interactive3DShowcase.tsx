import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Rotate3d, MousePointer } from 'lucide-react';
import ModelViewer from '@/components/3d/ModelViewer';
import LivingRoomScene from '@/components/3d/LivingRoomScene';
import BedroomScene from '@/components/3d/BedroomScene';
import KitchenScene from '@/components/3d/KitchenScene';

const scenes = [
  {
    component: <LivingRoomScene />,
    title: 'Modern Living Room',
    subtitle: 'Residential Concept',
    description: 'Italian leather sofa, marble coffee table, custom brass floor lamps, and curated bookshelf — all rendered in real-time 3D.',
  },
  {
    component: <BedroomScene />,
    title: 'Luxury Master Suite',
    subtitle: 'Penthouse Design',
    description: 'Upholstered headboard, pendant lighting, marble-top nightstands, and a full vanity dresser with mirror.',
  },
  {
    component: <KitchenScene />,
    title: 'Designer Kitchen',
    subtitle: 'Hospitality Project',
    description: 'Matte black cabinetry, marble countertops, brass fixtures, island with bar seating, and pendant lighting trio.',
  },
];

export default function Interactive3DShowcase() {
  return (
    <section id="3d-showcase" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="outline" className="border-gold/30 text-gold gap-1.5 px-3 py-1">
              <Rotate3d size={14} />
              Interactive 3D
            </Badge>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            Explore Our <span className="text-gradient-gold">3D Models</span>
          </h2>
          <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto mb-2">
            Interact with real-time 3D renders of our interior designs. Drag to rotate, scroll to zoom — experience the space from every angle.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground/60 text-sm">
            <MousePointer size={14} />
            <span className="font-light">Click and drag on any model to explore</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {scenes.map((scene, i) => (
            <motion.div
              key={scene.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <ModelViewer title={scene.title} subtitle={scene.subtitle}>
                {scene.component}
              </ModelViewer>
              <p className="text-muted-foreground text-sm font-light leading-relaxed mt-3">
                {scene.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-card/50 border border-border rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold mb-1">See Your Space in 3D</h3>
            <p className="text-muted-foreground text-sm font-light">
              Every project we deliver includes interactive 3D models like these — explore before you build.
            </p>
          </div>
          <div className="flex gap-8">
            {[
              { value: '4K', label: 'Render Quality' },
              { value: '360°', label: 'Full Rotation' },
              { value: 'Real-time', label: 'Interaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-gold">{stat.value}</p>
                <p className="text-muted-foreground text-xs font-light mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
