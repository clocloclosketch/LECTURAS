
import React from 'react';
import { ReadingId } from '../types.ts';
import { READINGS } from '../constants.ts';

interface Props {
  onSelect: (id: ReadingId) => void;
}

export const ReadingSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4 tracking-tight">FlashStudy Express</h1>
        <p className="text-gray-600 text-lg">Selecciona la lectura que necesitas dominar ahora mismo.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.keys(READINGS) as ReadingId[]).map((id) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-left overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">{READINGS[id].title}</h2>
            <p className="text-sm text-indigo-500 font-semibold mb-3 uppercase tracking-wider">{READINGS[id].author}</p>
            <p className="text-gray-500 text-sm leading-relaxed relative z-10">{READINGS[id].quickSummary}</p>
            <div className="mt-6 flex items-center text-indigo-600 font-bold text-sm">
              Estudiar ahora
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-12 p-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl text-white text-center">
        <h3 className="text-2xl font-bold mb-2">¡Ahorra horas de lectura!</h3>
        <p className="opacity-90">Resúmenes estratégicos optimizados para exámenes de Primaria/ESO/Bachillerato.</p>
      </div>
    </div>
  );
};
