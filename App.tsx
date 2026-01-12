
import React, { useState } from 'react';
import { ReadingId } from './types.ts';
import { READINGS } from './constants.ts';
import { ReadingSelector } from './components/ReadingSelector.tsx';
import { Flashcards } from './components/Flashcards.tsx';
import { Quiz } from './components/Quiz.tsx';
import { ChatInterface } from './components/ChatInterface.tsx';

type Tab = 'summary' | 'flashcards' | 'quiz' | 'tutor';

const App: React.FC = () => {
  const [selectedReadingId, setSelectedReadingId] = useState<ReadingId | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('summary');

  const selectedReading = selectedReadingId ? READINGS[selectedReadingId] : null;

  const handleBack = () => {
    setSelectedReadingId(null);
    setActiveTab('summary');
  };

  if (!selectedReading) {
    return (
      <div className="min-h-screen pb-20">
        <ReadingSelector onSelect={setSelectedReadingId} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="flex items-center text-gray-500 hover:text-indigo-600 font-bold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Volver
          </button>
          <div className="text-center flex-1">
            <h1 className="text-xl font-black text-gray-900 leading-tight">{selectedReading.title}</h1>
            <p className="text-xs text-indigo-500 font-bold uppercase tracking-widest">{selectedReading.author}</p>
          </div>
          <div className="w-16"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-8 border-t border-gray-50">
            {(['summary', 'flashcards', 'quiz', 'tutor'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${
                  activeTab === tab 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab === 'summary' ? 'Resumen' : tab === 'flashcards' ? 'Flashcards' : tab === 'quiz' ? 'Test' : 'Tutor IA'}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 pb-20">
        {activeTab === 'summary' && (
          <div className="space-y-10 animate-fade-in">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-indigo-600 font-black text-xs uppercase tracking-[0.2em] mb-4">La Idea Clave</h3>
                <p className="text-xl font-bold text-gray-800 leading-relaxed italic">
                  "{selectedReading.quickSummary}"
                </p>
              </div>
              <div className="bg-indigo-600 p-8 rounded-3xl shadow-xl shadow-indigo-100 text-white">
                <h3 className="text-indigo-200 font-black text-xs uppercase tracking-[0.2em] mb-4">Lo que dice tu OCR</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {selectedReading.fullSummary}
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-gray-900 font-black text-lg mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </span>
                Personajes Críticos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedReading.characters.map((char, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-indigo-200 transition-colors shadow-sm">
                    <h4 className="font-bold text-indigo-600">{char.name}</h4>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{char.role}</p>
                    <p className="text-sm text-gray-600 leading-tight">{char.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-gray-900 font-black text-lg mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a3 3 0 01-3-3V6z" clipRule="evenodd" />
                  </svg>
                </span>
                Temas Clave para el Examen
              </h3>
              <div className="space-y-4">
                {selectedReading.themes.map((theme, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                      {theme.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{theme.content}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'flashcards' && <Flashcards cards={selectedReading.flashcards} />}
        {activeTab === 'quiz' && <Quiz questions={selectedReading.quiz} />}
        {activeTab === 'tutor' && <ChatInterface reading={selectedReading} />}
      </main>

      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-100 py-3 text-center md:hidden">
         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estudiando para el éxito 🚀</p>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
