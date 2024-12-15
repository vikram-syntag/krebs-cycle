"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Molecule } from "@/components/Molecule";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scene } from "@/components/Scene";

const steps = [
  {
    name: "Citrate Formation",
    description: "Acetyl-CoA (2C) combines with oxaloacetate (4C) to form citrate (6C)",
    answer: "citrate",
  },
  {
    name: "Isomerization",
    description: "Citrate is converted to ___ through cis-aconitate",
    answer: "isocitrate",
  },
  {
    name: "First Decarboxylation",
    description: "___ is oxidized to α-ketoglutarate, producing NADH and CO₂",
    answer: "isocitrate",
  },
  {
    name: "Second Decarboxylation",
    description: "α-Ketoglutarate is converted to ___, generating NADH and CO₂",
    answer: "succinyl-coa",
  },
  {
    name: "ATP/GTP Production",
    description: "Succinyl-CoA is converted to ___, coupled with ATP/GTP generation",
    answer: "succinate",
  },
  {
    name: "Oxidation of Succinate",
    description: "Succinate is oxidized to ___, producing FADH₂",
    answer: "fumarate",
  },
  {
    name: "Hydration",
    description: "Fumarate is hydrated to ___",
    answer: "malate",
  },
  {
    name: "Regeneration",
    description: "___ is oxidized to oxaloacetate, producing NADH",
    answer: "malate",
  },
];

export function KrebsCycle() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  const checkAnswer = () => {
    const correct = userAnswer.toLowerCase() === steps[currentStep].answer;
    setIsCorrect(correct);
    if (correct) {
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setUserAnswer("");
        setIsCorrect(null);
      }, 1000);
    }
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
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{steps[currentStep].name}</h2>
            <p className="text-lg mb-6">{steps[currentStep].description}</p>
            <div className="flex gap-4">
              <Input
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
                className={isCorrect === true ? "border-green-500" : isCorrect === false ? "border-red-500" : ""}
              />
              <Button onClick={checkAnswer}>Check</Button>
            </div>
            {isCorrect !== null && (
              <p className={`mt-4 text-lg ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                {isCorrect ? "Correct!" : "Try again!"}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}