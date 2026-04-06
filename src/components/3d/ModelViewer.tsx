import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Loader2, RotateCcw, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ModelViewerProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-card/80">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-8 h-8 text-gold animate-spin" />
        <span className="text-sm text-muted-foreground font-light">Loading 3D scene...</span>
      </div>
    </div>
  );
}

export default function ModelViewer({ children, title, subtitle }: ModelViewerProps) {
  const [key, setKey] = useState(0);

  const handleReset = () => setKey((k) => k + 1);

  return (
    <div className="relative group">
      <div className="aspect-[4/3] bg-card rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-500">
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            key={key}
            camera={{ position: [3.5, 2.5, 3.5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <fog attach="fog" args={['#0a0a0a', 6, 14]} />
            {children}
            <ContactShadows
              position={[0, -0.01, 0]}
              opacity={0.4}
              scale={8}
              blur={2}
              far={4}
            />
            <Environment preset="apartment" />
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={3}
              maxDistance={8}
              minPolarAngle={0.3}
              maxPolarAngle={Math.PI / 2.1}
              autoRotate={false}
            />
          </Canvas>
        </Suspense>

        {/* Controls overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="w-8 h-8 bg-background/70 backdrop-blur-sm border border-border hover:border-gold/30"
            onClick={handleReset}
          >
            <RotateCcw size={14} className="text-gold" />
          </Button>
        </div>

        {/* Drag hint */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-background/70 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 flex items-center gap-2">
            <Maximize2 size={12} className="text-gold" />
            <span className="text-xs text-muted-foreground">Drag to rotate • Scroll to zoom</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="mt-4">
        <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">{subtitle}</span>
        <h3 className="font-serif text-xl font-semibold mt-1">{title}</h3>
      </div>
    </div>
  );
}
