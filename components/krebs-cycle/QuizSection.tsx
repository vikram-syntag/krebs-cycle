"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { KREBS_CYCLE_STEPS, MOLECULES } from "@/lib/constants/krebs-cycle";
import { WordBank } from "./WordBank";

interface QuizSectionProps {
  currentStep: number;
  onCorrectAnswer: () => void;
}

export function QuizSection({ currentStep, onCorrectAnswer }: QuizSectionProps) {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  const checkAnswer = useCallback(() => {
    if (!selectedWord) return;
    
    const correct = selectedWord.toLowerCase() === KREBS_CYCLE_STEPS[currentStep].answer.toLowerCase();
    setIsCorrect(correct);
    
    if (correct) {
      setTimeout(() => {
        onCorrectAnswer();
        setSelectedWord(null);
        setIsCorrect(null);
      }, 1000);
    }
  }, [selectedWord, currentStep, onCorrectAnswer]);

  // Get all molecule names for the word bank
  const wordBankOptions = MOLECULES.map(m => m.name.toLowerCase());

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">
        {KREBS_CYCLE_STEPS[currentStep].name}
      </h2>
      <p className="text-lg mb-6">
        {KREBS_CYCLE_STEPS[currentStep].description}
      </p>
      
      <WordBank
        words={wordBankOptions}
        selectedWord={selectedWord}
        onSelectWord={setSelectedWord}
        disabled={isCorrect === true}
      />
      
      <div className="flex justify-end">
        <Button 
          onClick={checkAnswer}
          disabled={!selectedWord || isCorrect === true}
        >
          Check Answer
        </Button>
      </div>
      
      {isCorrect !== null && (
        <p className={`mt-4 text-lg ${isCorrect ? "text-green-500" : "text-red-500"}`}>
          {isCorrect ? "Correct!" : "Try again!"}
        </p>
      )}
    </div>
  );
}