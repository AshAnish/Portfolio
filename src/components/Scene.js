import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

const Scene = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshWobbleMaterial color="cyan" speed={2} factor={0.6} />
    </mesh>
  );
};

export default Scene;
