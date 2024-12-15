"use client";

import { Text3D, Center } from "@react-three/drei";

interface MoleculeLabelProps {
  text: string;
  position: [number, number, number];
}

export function MoleculeLabel({ text, position }: MoleculeLabelProps) {
  return (
    <Center position={position}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.3}
        height={0.1}
        curveSegments={12}
      >
        {text}
        <meshStandardMaterial color="white" />
      </Text3D>
    </Center>
  );
}