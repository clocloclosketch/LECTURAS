
import React, { useState } from 'react';
import { Flashcard } from '../types';

interface Props {
  cards: Flashcard[];
}

export const Flashcards: React.FC<Props> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full max-w-md h-64 cursor-pointer perspective-1000"
      >
        <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front */}
          <div className="absolute inset-0 bg-white border-2 border-indigo-100 rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center backface-hidden text-center">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Pregunta</span>
            <p className="text-xl font-bold text-gray-800">{card.question}</p>
            <p className="mt-8 text-sm text-gray-400">Haz clic para ver la respuesta</p>
          </div>
          {/* Back */}
          <div className="absolute inset-0 bg-indigo-600 rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-center text-white">
            <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-4">Respuesta</span>
            <p className="text-lg font-medium leading-relaxed">{card.answer}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-8 mt-10">
        <button 
          onClick={handlePrev}
          className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-gray-500 font-medium">{currentIndex + 1} / {cards.length}</span>
        <button 
          onClick={handleNext}
          className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};
