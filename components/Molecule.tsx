"use client";

import { useRef } from "react";
import { Sphere, Line } from "@react-three/drei";
import { Vector3 } from "three";

interface MoleculeProps {
  position: [number, number, number];
  color: string;
  name: string;
  size?: number;
  highlighted?: boolean;
}

export function Molecule({ position, color, name, size = 1, highlighted = false }: MoleculeProps) {
  const sphereRef = useRef();

  return (
    <group position={position}>
      <Sphere args={[size, 32, 32]} ref={sphereRef}>
        <meshStandardMaterial 
          color={color} 
          emissive={highlighted ? color : "black"} 
          emissiveIntensity={highlighted ? 0.5 : 0}
        />
      </Sphere>
      <Text
        position={[0, size + 0.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}