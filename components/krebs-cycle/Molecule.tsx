"use client";

import { useRef } from "react";
import { Sphere } from "@react-three/drei";
import { MoleculeLabel } from "./MoleculeLabel";

interface MoleculeProps {
  position: [number, number, number];
  color: string;
  name: string;
  size?: number;
  highlighted?: boolean;
}

export function Molecule({ position, color, name, size = 1, highlighted = false }: MoleculeProps) {
  const sphereRef = useRef();
  const [x, y, z] = position;

  return (
    <group position={position}>
      <Sphere args={[size, 32, 32]} ref={sphereRef}>
        <meshStandardMaterial 
          color={color} 
          emissive={highlighted ? color : "black"} 
          emissiveIntensity={highlighted ? 0.5 : 0}
        />
      </Sphere>
      <MoleculeLabel 
        text={name}
        position={[0, size + 0.5, 0]}
      />
    </group>
  );
}