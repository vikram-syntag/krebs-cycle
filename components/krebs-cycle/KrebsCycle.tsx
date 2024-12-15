"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { QuizSection } from "./QuizSection";
import { KREBS_CYCLE_STEPS } from "@/lib/constants/krebs-cycle";

export function KrebsCycle() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleCorrectAnswer = () => {
    setCurrentStep((prev) => (prev + 1) % KREBS_CYCLE_STEPS.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">The Krebs Cycle</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[600px] bg-card rounded-lg shadow-lg">
            <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Scene currentStep={currentStep} />
              <OrbitControls />
            </Canvas>
          </div>
          <QuizSection 
            currentStep={currentStep}
            onCorrectAnswer={handleCorrectAnswer}
          />
        </div>
      </div>
    </div>
  );
}