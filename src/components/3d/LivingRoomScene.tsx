import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function Sofa({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Seat */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[2.4, 0.3, 0.9]} />
        <meshStandardMaterial color="#4a3728" roughness={0.8} />
      </mesh>
      {/* Back */}
      <mesh position={[0, 0.7, -0.35]}>
        <boxGeometry args={[2.4, 0.5, 0.2]} />
        <meshStandardMaterial color="#4a3728" roughness={0.8} />
      </mesh>
      {/* Left arm */}
      <mesh position={[-1.1, 0.5, 0]}>
        <boxGeometry args={[0.2, 0.35, 0.9]} />
        <meshStandardMaterial color="#3d2e20" roughness={0.8} />
      </mesh>
      {/* Right arm */}
      <mesh position={[1.1, 0.5, 0]}>
        <boxGeometry args={[0.2, 0.35, 0.9]} />
        <meshStandardMaterial color="#3d2e20" roughness={0.8} />
      </mesh>
      {/* Cushions */}
      {[-0.55, 0.55].map((x, i) => (
        <mesh key={i} position={[x, 0.55, 0.05]}>
          <boxGeometry args={[0.9, 0.12, 0.7]} />
          <meshStandardMaterial color="#c9a96e" roughness={0.6} />
        </mesh>
      ))}
      {/* Back cushions */}
      {[-0.55, 0.55].map((x, i) => (
        <mesh key={`back-${i}`} position={[x, 0.75, -0.25]}>
          <boxGeometry args={[0.85, 0.35, 0.15]} />
          <meshStandardMaterial color="#b8956a" roughness={0.7} />
        </mesh>
      ))}
      {/* Legs */}
      {[[-1.05, 0.08, 0.35], [1.05, 0.08, 0.35], [-1.05, 0.08, -0.35], [1.05, 0.08, -0.35]].map((pos, i) => (
        <mesh key={`leg-${i}`} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.03, 0.03, 0.16, 8]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function CoffeeTable({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Top */}
      <mesh position={[0, 0.38, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.04, 32]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.1} roughness={0.3} />
      </mesh>
      {/* Marble top layer */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.48, 0.48, 0.02, 32]} />
        <meshStandardMaterial color="#e8e0d4" roughness={0.2} metalness={0.05} />
      </mesh>
      {/* Leg */}
      <mesh position={[0, 0.19, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.38, 8]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Base */}
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.03, 32]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Decorative items on table */}
      <mesh position={[0.15, 0.48, 0.1]}>
        <cylinderGeometry args={[0.06, 0.05, 0.14, 16]} />
        <meshStandardMaterial color="#1a3a2a" roughness={0.4} />
      </mesh>
      <mesh position={[-0.12, 0.46, -0.08]}>
        <boxGeometry args={[0.18, 0.08, 0.12]} />
        <meshStandardMaterial color="#8b7355" roughness={0.5} />
      </mesh>
    </group>
  );
}

function FloorLamp({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.03, 16]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Pole */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 1.55, 8]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Shade */}
      <mesh position={[0, 1.55, 0]}>
        <cylinderGeometry args={[0.12, 0.2, 0.3, 16, 1, true]} />
        <meshStandardMaterial color="#f5e6c8" roughness={0.6} side={THREE.DoubleSide} transparent opacity={0.85} />
      </mesh>
      {/* Light bulb glow */}
      <pointLight position={[0, 1.5, 0]} color="#ffecd2" intensity={0.5} distance={3} />
    </group>
  );
}

function Bookshelf({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Frame */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[1.2, 1.8, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
      </mesh>
      {/* Shelves */}
      {[0.3, 0.7, 1.1, 1.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0.01]}>
          <boxGeometry args={[1.1, 0.03, 0.26]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.4} />
        </mesh>
      ))}
      {/* Books */}
      {[[-0.35, 0.48, 0], [-0.2, 0.47, 0], [-0.05, 0.49, 0], [0.1, 0.46, 0], [0.25, 0.48, 0]].map((pos, i) => (
        <mesh key={`book1-${i}`} position={pos as [number, number, number]}>
          <boxGeometry args={[0.08, 0.28 + Math.random() * 0.06, 0.18]} />
          <meshStandardMaterial color={['#8b4513', '#c9a96e', '#2d4a3e', '#6b3a3a', '#4a4a6a'][i]} roughness={0.7} />
        </mesh>
      ))}
      {/* Books on second shelf */}
      {[[-0.3, 0.88, 0], [-0.1, 0.87, 0], [0.15, 0.89, 0], [0.35, 0.86, 0]].map((pos, i) => (
        <mesh key={`book2-${i}`} position={pos as [number, number, number]}>
          <boxGeometry args={[0.1, 0.25 + Math.random() * 0.08, 0.18]} />
          <meshStandardMaterial color={['#3a5a4a', '#a08060', '#5a3a5a', '#c9a96e'][i]} roughness={0.7} />
        </mesh>
      ))}
      {/* Decorative object */}
      <mesh position={[0.3, 1.2, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Rug({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[2.5, 1.8]} />
      <meshStandardMaterial color="#3d3028" roughness={0.9} />
    </mesh>
  );
}

function WallArt({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Frame */}
      <mesh>
        <boxGeometry args={[0.9, 0.6, 0.03]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Canvas */}
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[0.8, 0.5, 0.01]} />
        <meshStandardMaterial color="#2a3a4a" roughness={0.5} />
      </mesh>
      {/* Abstract art shapes */}
      <mesh position={[-0.1, 0.05, 0.035]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="#c9a96e" roughness={0.4} />
      </mesh>
      <mesh position={[0.15, -0.05, 0.035]}>
        <circleGeometry args={[0.06, 16]} />
        <meshStandardMaterial color="#e8d5b5" roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function LivingRoomScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Room */}
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[6, 5]} />
        <meshStandardMaterial color="#2a2420" roughness={0.6} />
      </mesh>
      {/* Back wall */}
      <mesh position={[0, 1.5, -2.5]}>
        <planeGeometry args={[6, 3]} />
        <meshStandardMaterial color="#1e1e1e" roughness={0.7} />
      </mesh>
      {/* Left wall */}
      <mesh position={[-3, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[5, 3]} />
        <meshStandardMaterial color="#222222" roughness={0.7} />
      </mesh>

      {/* Furniture */}
      <Sofa position={[0, 0, -1.2]} />
      <CoffeeTable position={[0, 0, 0.2]} />
      <FloorLamp position={[-1.8, 0, -1.5]} />
      <FloorLamp position={[1.8, 0, -1.5]} />
      <Bookshelf position={[-2.3, 0, -2.2]} />
      <Rug position={[0, 0.01, -0.3]} />
      <WallArt position={[0, 1.6, -2.48]} />

      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 2]} intensity={0.6} color="#ffecd2" castShadow />
      <pointLight position={[0, 2.8, 0]} intensity={0.3} color="#ffecd2" />
    </group>
  );
}
