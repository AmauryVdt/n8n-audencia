"use client";

import { useState } from "react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  title?: string;
  questions: QuizQuestion[];
}

export default function Quiz({ title, questions }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];

  function handleSelect(index: number) {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    if (index === q.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  }

  function handleReset() {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="rounded-xl border-2 border-border bg-card p-6">
        <h3 className="text-lg font-semibold">
          {title ?? "Quiz"} - Résultat
        </h3>
        <div className="mt-4 text-center">
          <p className="text-4xl font-bold">
            {score}/{questions.length}
          </p>
          <p className="mt-1 text-muted">
            {percentage >= 80
              ? "Excellent !"
              : percentage >= 50
              ? "Pas mal ! Revoyez les points manqués."
              : "Relisez le tuto et réessayez !"}
          </p>
          <button
            onClick={handleReset}
            className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title ?? "Quiz"}</h3>
        <span className="text-sm text-muted">
          {currentQ + 1}/{questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-4 h-1.5 w-full rounded-full bg-gray-200">
        <div
          className="h-1.5 rounded-full bg-primary transition-all"
          style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
        />
      </div>

      <p className="mb-4 font-medium">{q.question}</p>

      <div className="space-y-2">
        {q.options.map((option, i) => {
          let style = "border-border bg-white hover:border-primary/50 hover:bg-primary-light/50 cursor-pointer";

          if (showResult) {
            if (i === q.correctIndex) {
              style = "border-emerald-400 bg-emerald-50 text-emerald-800";
            } else if (i === selected && i !== q.correctIndex) {
              style = "border-red-400 bg-red-50 text-red-800";
            } else {
              style = "border-border bg-gray-50 text-muted cursor-default";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={`w-full rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors ${style}`}
            >
              <span className="mr-2 font-medium">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-4">
          <div
            className={`rounded-lg p-3 text-sm ${
              selected === q.correctIndex
                ? "bg-emerald-50 text-emerald-800"
                : "bg-orange-50 text-orange-800"
            }`}
          >
            <p className="font-medium">
              {selected === q.correctIndex ? "Correct !" : "Pas tout à fait."}
            </p>
            <p className="mt-1">{q.explanation}</p>
          </div>
          <button
            onClick={handleNext}
            className="mt-3 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            {currentQ < questions.length - 1 ? "Question suivante" : "Voir le résultat"}
          </button>
        </div>
      )}
    </div>
  );
}
