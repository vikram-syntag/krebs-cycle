"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WordBankProps {
  words: string[];
  selectedWord: string | null;
  onSelectWord: (word: string) => void;
  disabled?: boolean;
}

export function WordBank({ words, selectedWord, onSelectWord, disabled }: WordBankProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {words.map((word) => (
        <Button
          key={word}
          variant={selectedWord === word ? "default" : "outline"}
          className={cn(
            "capitalize",
            selectedWord === word && "bg-primary text-primary-foreground",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => onSelectWord(word)}
          disabled={disabled}
        >
          {word}
        </Button>
      ))}
    </div>
  );
}