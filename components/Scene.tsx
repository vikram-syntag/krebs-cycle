"use client";

import { useRef } from "react";
import { Molecule } from "./Molecule";
import { Line } from "@react-three/drei";

const RADIUS = 6;
const STEPS = 8;

interface SceneProps {
  currentStep: number;
}

export function Scene({ currentStep }: SceneProps) {
  const molecules = [
    { name: "Citrate", color: "#FF6B6B" },
    { name: "Isocitrate", color: "#4ECDC4" },
    { name: "α-Ketoglutarate", color: "#45B7D1" },
    { name: "Succinyl-CoA", color: "#96CEB4" },
    { name: "Succinate", color: "#FFEEAD" },
    { name: "Fumarate", color: "#D4A5A5" },
    { name: "Malate", color: "#9B59B6" },
    { name: "Oxaloacetate", color: "#E74C3C" },
  ];

  return (
    <group>
      {molecules.map((molecule, index) => {
        const angle = (index * 2 * Math.PI) / STEPS;
        const x = RADIUS * Math.cos(angle);
        const z = RADIUS * Math.sin(angle);
        
        return (
          <Molecule
            key={molecule.name}
            position={[x, 0, z]}
            color={molecule.color}
            name={molecule.name}
            size={0.8}
            highlighted={index === currentStep}
          />
        );
      })}
      
      {/* Draw connecting lines between molecules */}
      {molecules.map((_, index) => {
        const startAngle = (index * 2 * Math.PI) / STEPS;
        const endAngle = ((index + 1) * 2 * Math.PI) / STEPS;
        
        const startX = RADIUS * Math.cos(startAngle);
        const startZ = RADIUS * Math.sin(startAngle);
        const endX = RADIUS * Math.cos(endAngle);
        const endZ = RADIUS * Math.sin(endAngle);
        
        return (
          <Line
            key={`line-${index}`}
            points={[[startX, 0, startZ], [endX, 0, endZ]]}
            color="white"
            lineWidth={1}
          />
        );
      })}
    </group>
  );
}