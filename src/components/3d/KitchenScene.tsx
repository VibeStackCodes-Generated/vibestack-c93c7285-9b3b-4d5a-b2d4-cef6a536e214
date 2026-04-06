import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function Cabinets({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Lower cabinets */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[3.5, 0.85, 0.6]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
      </mesh>
      {/* Cabinet doors */}
      {[-1.3, -0.65, 0, 0.65, 1.3].map((x, i) => (
        <group key={i}>
          <mesh position={[x, 0.45, 0.31]}>
            <boxGeometry args={[0.58, 0.75, 0.01]} />
            <meshStandardMaterial color="#222222" roughness={0.3} />
          </mesh>
          <mesh position={[x + 0.2, 0.45, 0.32]}>
            <boxGeometry args={[0.08, 0.02, 0.02]} />
            <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
      {/* Countertop */}
      <mesh position={[0, 0.9, 0.02]}>
        <boxGeometry args={[3.6, 0.05, 0.65]} />
        <meshStandardMaterial color="#e8e0d4" roughness={0.2} metalness={0.05} />
      </mesh>
      {/* Upper cabinets */}
      <mesh position={[0, 1.8, -0.05]}>
        <boxGeometry args={[3.5, 0.7, 0.35]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
      </mesh>
      {/* Upper cabinet doors */}
      {[-1.3, -0.65, 0, 0.65, 1.3].map((x, i) => (
        <group key={`upper-${i}`}>
          <mesh position={[x, 1.8, 0.13]}>
            <boxGeometry args={[0.58, 0.6, 0.01]} />
            <meshStandardMaterial color="#222222" roughness={0.3} />
          </mesh>
          <mesh position={[x + 0.2, 1.8, 0.14]}>
            <boxGeometry args={[0.08, 0.02, 0.02]} />
            <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Island({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Body */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[2.0, 0.85, 0.8]} />
        <meshStandardMaterial color="#1e1e1e" roughness={0.4} />
      </mesh>
      {/* Countertop */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[2.1, 0.05, 0.9]} />
        <meshStandardMaterial color="#e8e0d4" roughness={0.2} metalness={0.05} />
      </mesh>
      {/* Front panel detail */}
      {[-0.5, 0.5].map((x, i) => (
        <mesh key={i} position={[x, 0.45, 0.41]}>
          <boxGeometry args={[0.85, 0.75, 0.01]} />
          <meshStandardMaterial color="#252525" roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function BarStool({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Seat */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.17, 0.17, 0.05, 16]} />
        <meshStandardMaterial color="#4a3728" roughness={0.7} />
      </mesh>
      {/* Leg */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.7, 8]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Base */}
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.03, 16]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Footrest ring */}
      <mesh position={[0, 0.25, 0]}>
        <torusGeometry args={[0.1, 0.008, 8, 16]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function PendantLights({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {[-0.5, 0, 0.5].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.01, 0.12, 0.2, 16, 1, true]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.3} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.005, 16]} />
            <meshStandardMaterial color="#c9a96e" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.003, 0.003, 0.8, 4]} />
            <meshStandardMaterial color="#333" metalness={0.5} roughness={0.3} />
          </mesh>
          <pointLight position={[0, -0.15, 0]} color="#ffecd2" intensity={0.3} distance={2.5} />
        </group>
      ))}
    </group>
  );
}

function Sink({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Basin */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.08, 0.35]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Faucet base */}
      <mesh position={[0, 0.15, -0.12]}>
        <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Faucet spout */}
      <mesh position={[0, 0.28, -0.02]} rotation={[0.5, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.2, 8]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function KitchenScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.13 + 2) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[6, 5]} />
        <meshStandardMaterial color="#2a2420" roughness={0.4} />
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
      {/* Backsplash */}
      <mesh position={[0, 1.3, -2.18]}>
        <boxGeometry args={[3.5, 0.5, 0.02]} />
        <meshStandardMaterial color="#c9a96e" metalness={0.3} roughness={0.4} transparent opacity={0.3} />
      </mesh>

      {/* Furniture */}
      <Cabinets position={[0, 0, -2.2]} />
      <Island position={[0, 0, 0]} />
      <Sink position={[0.5, 0.93, -2.2]} />
      <BarStool position={[-0.6, 0, 0.8]} />
      <BarStool position={[0, 0, 0.8]} />
      <BarStool position={[0.6, 0, 0.8]} />
      <PendantLights position={[0, 2.2, 0]} />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 2]} intensity={0.5} color="#ffecd2" />
      <pointLight position={[0, 2.8, -1]} intensity={0.2} color="#ffecd2" />
    </group>
  );
}
