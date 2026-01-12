
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface Props {
  questions: QuizQuestion[];
}

export const Quiz: React.FC<Props> = ({ questions }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isConfirmed) return;
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === questions[currentStep].correctIndex) {
      setScore(prev => prev + 1);
    }
    setIsConfirmed(true);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setIsConfirmed(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsConfirmed(false);
  };

  if (showResult) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Resultado Final!</h2>
        <div className="text-6xl font-black text-indigo-600 mb-6">{score} / {questions.length}</div>
        <p className="text-gray-600 mb-8">
          {score === questions.length ? "¡Excelente! Estás listo para el examen." : "Sigue repasando los conceptos clave."}
        </p>
        <button 
          onClick={resetQuiz}
          className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
        >
          Reintentar Quiz
        </button>
      </div>
    );
  }

  const q = questions[currentStep];

  return (
    <div className="max-w-xl mx-auto py-6">
      <div className="mb-8 flex justify-between items-center">
        <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest">Pregunta {currentStep + 1} de {questions.length}</span>
        <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 transition-all duration-300" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-8">{q.question}</h2>

      <div className="space-y-4">
        {q.options.map((opt, i) => {
          let bgClass = "bg-white border-gray-200 hover:border-indigo-400";
          if (selectedOption === i) bgClass = "bg-indigo-50 border-indigo-600";
          
          if (isConfirmed) {
            if (i === q.correctIndex) bgClass = "bg-green-50 border-green-500 text-green-700";
            else if (selectedOption === i) bgClass = "bg-red-50 border-red-500 text-red-700";
            else bgClass = "bg-gray-50 border-gray-100 opacity-50";
          }

          return (
            <button
              key={i}
              onClick={() => handleOptionSelect(i)}
              disabled={isConfirmed}
              className={`w-full p-5 text-left rounded-2xl border-2 font-medium transition-all ${bgClass}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {!isConfirmed ? (
          <button
            onClick={handleConfirm}
            disabled={selectedOption === null}
            className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${selectedOption !== null ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
          >
            Confirmar Respuesta
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-xl"
          >
            Siguiente Pregunta
          </button>
        )}
      </div>
    </div>
  );
};
