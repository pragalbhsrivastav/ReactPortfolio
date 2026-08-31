import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Slowly rotating particle shell behind the hero.
 * Points are distributed on a sphere so the silhouette stays round from any angle.
 */
const ParticleField = ({ count = 2600 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Even spread over a sphere: acos keeps points from clustering at the poles.
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2.4 + Math.random() * 1.5;
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock, pointer }) => {
    const mesh = pointsRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    mesh.rotation.y = t * 0.06;
    // Ease toward the cursor instead of snapping to it.
    mesh.rotation.x += (pointer.y * 0.25 - mesh.rotation.x) * 0.03;
    mesh.rotation.z += (pointer.x * 0.12 - mesh.rotation.z) * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#6d5efc"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const HeroScene = () => {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default HeroScene;
