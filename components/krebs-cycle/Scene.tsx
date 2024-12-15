"use client";

import { Line } from "@react-three/drei";
import { Molecule } from "./Molecule";
import { MOLECULES } from "@/lib/constants/krebs-cycle";
import { calculateCircularPosition, calculateLinePoints } from "@/lib/utils/geometry";

const RADIUS = 6;
const STEPS = MOLECULES.length;

interface SceneProps {
  currentStep: number;
}

export function Scene({ currentStep }: SceneProps) {
  return (
    <group>
      {MOLECULES.map((molecule, index) => {
        const position = calculateCircularPosition(index, STEPS, RADIUS);
        
        return (
          <Molecule
            key={molecule.name}
            position={position}
            color={molecule.color}
            name={molecule.name}
            size={0.8}
            highlighted={index === currentStep}
          />
        );
      })}
      
      {MOLECULES.map((_, index) => {
        const points = calculateLinePoints(
          index,
          (index + 1) % STEPS,
          STEPS,
          RADIUS
        );
        
        return (
          <Line
            key={`line-${index}`}
            points={points}
            color="white"
            lineWidth={1}
          />
        );
      })}
    </group>
  );
}