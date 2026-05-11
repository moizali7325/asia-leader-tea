import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface TeaBoxProps {
  textureUrl: string;
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

/**
 * Custom hook to load a texture safely with no-referrer policy.
 * This is the most robust way to handle the "Could not load" error
 * in environments with strict referrer policies.
 */
function useSafeTexture(url: string) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.referrerPolicy = 'no-referrer';
    
    img.onload = () => {
      const tex = new THREE.Texture(img);
      tex.needsUpdate = true;
      setTexture(tex);
    };
    
    img.onerror = () => {
      console.warn(`Failed to load 3D texture: ${url}. Falling back to default.`);
      // Fallback to a plain colored texture if needed
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#1f7a5a';
        ctx.fillRect(0, 0, 64, 64);
        setTexture(new THREE.CanvasTexture(canvas));
      }
    };

    img.src = url;
  }, [url]);

  return texture;
}

export function TeaBox({ textureUrl, position = [0, 0, 0], scale = [1.5, 2.5, 0.8], rotation = [0, 0, 0] }: TeaBoxProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useSafeTexture(textureUrl);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t / 2) * 0.2 + rotation[1];
      meshRef.current.position.y = Math.sin(t) * 0.1 + position[1];
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        <boxGeometry args={[1, 1, 1]} />
        {texture ? (
          <meshStandardMaterial map={texture} roughness={0.2} metalness={0.15} />
        ) : (
          <meshStandardMaterial color="#1f7a5a" roughness={0.4} />
        )}
      </mesh>
    </Float>
  );
}

export function TeaLeaf({ position, scale, rotation }: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.position.y += Math.sin(t + position[0]) * 0.002;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
      <coneGeometry args={[0.2, 0.5, 3]} />
      <meshStandardMaterial color="#27ae60" roughness={0.5} />
    </mesh>
  );
}

export function TeaCup() {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Simulation of a cup */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[1.2, 1, 1.8, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
      </mesh>
      {/* Handle */}
      <mesh position={[1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.5, 0.15, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Tea surface */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[1.15, 1.15, 0.1, 32]} />
        <meshStandardMaterial color="#d35400" transparent opacity={0.9} />
      </mesh>
      
      {/* Steam Particles */}
      {[...Array(15)].map((_, i) => (
        <SteamParticle key={i} delay={i * 0.2} />
      ))}
    </group>
  );
}

function SteamParticle({ delay }: { delay: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const [initialX] = useState((Math.random() - 0.5) * 1.5);
  
  useFrame((state) => {
    const t = (state.clock.getElapsedTime() + delay) % 3;
    const opacity = 1 - t/3;
    
    if (ref.current) {
      ref.current.position.y = 0.5 + t * 2;
      ref.current.position.x = initialX + Math.sin(t * 3) * 0.2;
      ref.current.scale.setScalar(0.1 + t * 0.2);
      (ref.current.material as THREE.MeshStandardMaterial).opacity = opacity * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#ffffff" transparent opacity={0} depthWrite={false} />
    </mesh>
  );
}

export function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={1.5} castShadow />
      <pointLight position={[-10, 5, -5]} intensity={2} color="#d4af37" />
      <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.4} far={4.5} color="#0b0f0c" />
    </>
  );
}
