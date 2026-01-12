
export enum ReadingId {
  FUENTEOVEJUNA = 'fuenteovejuna',
  LAZARILLO = 'lazarillo',
  ESPANOL_ESCONDE = 'espanol_esconde'
}

export interface Character {
  name: string;
  description: string;
  role: string;
}

export interface Theme {
  title: string;
  content: string;
}

export interface Flashcard {
  question: string;
  answer: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface ReadingData {
  id: ReadingId;
  title: string;
  author: string;
  quickSummary: string;
  fullSummary: string;
  characters: Character[];
  themes: Theme[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
}
