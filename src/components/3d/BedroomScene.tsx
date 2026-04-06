import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function Bed({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Mattress base */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[2.2, 0.25, 2.6]} />
        <meshStandardMaterial color="#2a2420" roughness={0.6} />
      </mesh>
      {/* Mattress */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2.0, 0.18, 2.4]} />
        <meshStandardMaterial color="#f0e6d6" roughness={0.7} />
      </mesh>
      {/* Headboard */}
      <mesh position={[0, 0.9, -1.25]}>
        <boxGeometry args={[2.3, 1.0, 0.12]} />
        <meshStandardMaterial color="#3d3028" roughness={0.6} />
      </mesh>
      {/* Headboard padding */}
      {[-0.55, 0, 0.55].map((x, i) => (
        <mesh key={i} position={[x, 0.9, -1.18]}>
          <boxGeometry args={[0.5, 0.85, 0.06]} />
          <meshStandardMaterial color="#4a3d30" roughness={0.7} />
        </mesh>
      ))}
      {/* Duvet */}
      <mesh position={[0, 0.62, 0.3]}>
        <boxGeometry args={[1.9, 0.08, 1.7]} />
        <meshStandardMaterial color="#e8ddd0" roughness={0.8} />
      </mesh>
      {/* Pillows */}
      {[-0.5, 0.5].map((x, i) => (
        <mesh key={`pillow-${i}`} position={[x, 0.68, -0.8]}>
          <boxGeometry args={[0.55, 0.12, 0.35]} />
          <meshStandardMaterial color="#c9a96e" roughness={0.6} />
        </mesh>
      ))}
      {/* Decorative pillow */}
      <mesh position={[0, 0.7, -0.55]}>
        <boxGeometry args={[0.35, 0.1, 0.3]} />
        <meshStandardMaterial color="#8b7355" roughness={0.6} />
      </mesh>
    </group>
  );
}

function Nightstand({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Body */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[0.5, 0.55, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
      </mesh>
      {/* Drawer front */}
      <mesh position={[0, 0.3, 0.21]}>
        <boxGeometry args={[0.45, 0.2, 0.01]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.3} />
      </mesh>
      {/* Handle */}
      <mesh position={[0, 0.3, 0.22]}>
        <boxGeometry args={[0.12, 0.02, 0.02]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Top */}
      <mesh position={[0, 0.58, 0]}>
        <boxGeometry args={[0.52, 0.02, 0.42]} />
        <meshStandardMaterial color="#e8ddd0" roughness={0.3} metalness={0.05} />
      </mesh>
    </group>
  );
}

function TableLamp({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.04, 16]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Stem */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.28, 8]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Shade */}
      <mesh position={[0, 0.32, 0]}>
        <cylinderGeometry args={[0.06, 0.1, 0.16, 16, 1, true]} />
        <meshStandardMaterial color="#f5e6c8" roughness={0.6} side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>
      <pointLight position={[0, 0.3, 0]} color="#ffecd2" intensity={0.3} distance={2} />
    </group>
  );
}

function Dresser({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Body */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[1.2, 0.85, 0.45]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
      </mesh>
      {/* Drawers */}
      {[0.2, 0.5, 0.7].map((y, i) => (
        <group key={i}>
          <mesh position={[0, y, 0.23]}>
            <boxGeometry args={[1.1, 0.18, 0.01]} />
            <meshStandardMaterial color="#2a2a2a" roughness={0.3} />
          </mesh>
          <mesh position={[0, y, 0.24]}>
            <boxGeometry args={[0.15, 0.02, 0.02]} />
            <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
      {/* Mirror */}
      <mesh position={[0, 1.3, -0.1]}>
        <boxGeometry args={[0.8, 1.0, 0.03]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.3, -0.08]}>
        <boxGeometry args={[0.7, 0.9, 0.02]} />
        <meshStandardMaterial color="#4a5a6a" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function PendantLight({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.7} roughness={0.3} transparent opacity={0.6} />
      </mesh>
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.6, 4]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
      </mesh>
      <pointLight position={[0, -0.1, 0]} color="#ffecd2" intensity={0.4} distance={3} />
    </group>
  );
}

export default function BedroomScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12 + 1) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[6, 5]} />
        <meshStandardMaterial color="#2a2420" roughness={0.5} />
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

      {/* Rug */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0.5]}>
        <planeGeometry args={[2.8, 2.0]} />
        <meshStandardMaterial color="#3d3028" roughness={0.9} />
      </mesh>

      {/* Furniture */}
      <Bed position={[0, 0, -0.8]} />
      <Nightstand position={[-1.5, 0, -1.0]} />
      <Nightstand position={[1.5, 0, -1.0]} />
      <TableLamp position={[-1.5, 0.6, -1.0]} />
      <TableLamp position={[1.5, 0.6, -1.0]} />
      <Dresser position={[-2.2, 0, 0.5]} />
      <PendantLight position={[-0.6, 2.2, -0.8]} />
      <PendantLight position={[0.6, 2.2, -0.8]} />

      {/* Lighting */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 2]} intensity={0.5} color="#ffecd2" />
    </group>
  );
}
