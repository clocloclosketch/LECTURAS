
import { ReadingId, ReadingData } from './types';

export const READINGS: Record<ReadingId, ReadingData> = {
  [ReadingId.FUENTEOVEJUNA]: {
    id: ReadingId.FUENTEOVEJUNA,
    title: 'Fuenteovejuna',
    author: 'Lope de Vega',
    quickSummary: 'Conflicto colectivo donde un pueblo entero se rebela contra la tiranía del Comendador para defender su honor.',
    fullSummary: 'La obra comienza in media res. Presenta la lucha entre el poder tiránico (Comendador) y el poder justo (Reyes Católicos). El pueblo actúa como un solo cuerpo moral tras la violación de Laurencia.',
    characters: [
      { name: 'Laurencia', role: 'Motor del cambio', description: 'Evoluciona de la prudencia a la rebeldía tras ser deshonrada. Voz de la justicia femenina.' },
      { name: 'El Comendador', role: 'Antagonista', description: 'Simboliza el abuso del poder feudal y la corrupción moral.' },
      { name: 'Frondoso', role: 'Galán', description: 'Encarna el amor honesto frente al deseo abusivo.' },
      { name: 'Pueblo Colectivo', role: 'Protagonista real', description: 'Se une para impartir justicia tras el discurso de Laurencia.' }
    ],
    themes: [
      { title: 'Honor vs Honra', content: 'Honor es la virtud interna; Honra es la reputación social. Lope democratiza el honor: no depende del linaje sino de la virtud.' },
      { title: 'Buen vs Mal Poder', content: 'Los Reyes (justicia) frente al Comendador (tiranía). La obra legitima la monarquía absoluta.' },
      { title: 'Oposición Binaria', content: 'Contraste constante: amor lícito vs ilícito, justicia vs injusticia.' }
    ],
    flashcards: [
      { question: '¿Quién es el verdadero protagonista de Fuenteovejuna?', answer: 'El pueblo colectivo.' },
      { question: 'Diferencia entre Honor y Honra', answer: 'Honor: virtud interna. Honra: opinión de los demás.' },
      { question: '¿Qué simboliza el Comendador?', answer: 'La corrupción del poder feudal y el mal gobernante.' }
    ],
    quiz: [
      {
        question: '¿Qué evento desencadena la rebelión del pueblo?',
        options: ['La toma de Ciudad Real', 'El discurso de Laurencia tras ser violada', 'La llegada de los Reyes', 'El encarcelamiento de Frondoso'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el recurso final que restablece el orden?',
        options: ['Anagnórisis', 'Deus ex machina (aparición de los Reyes)', 'Muerte del Maestre', 'Matrimonio de Mengo'],
        correctIndex: 1
      }
    ]
  },
  [ReadingId.LAZARILLO]: {
    id: ReadingId.LAZARILLO,
    title: 'El Lazarillo de Tormes',
    author: 'Anónimo',
    quickSummary: 'Novela picaresca epistolar que narra la vida de Lázaro y su evolución para sobrevivir mediante el ingenio ante amos crueles.',
    fullSummary: 'Lázaro nace en la pobreza y sirve a diversos amos (ciego, clérigo, escudero...). Aprende a usar la malicia para no pasar hambre, culminando en una estabilidad económica cínica basada en aceptar la infidelidad de su esposa.',
    characters: [
      { name: 'Lázaro', role: 'Protagonista/Pícaro', description: 'Evoluciona de la inocencia a la malicia y la degradación moral por supervivencia.' },
      { name: 'El Ciego', role: 'Maestro de astucia', description: 'Primer amo. Le enseña a palos que el mundo es cruel.' },
      { name: 'El Clérigo', role: 'Símbolo de avaricia', description: 'Amo tacaño que guarda el pan bajo llave.' },
      { name: 'El Escudero', role: 'Apariencia', description: 'Representa la falsa honra de la nobleza arruinada.' }
    ],
    themes: [
      { title: 'Supervivencia y Hambre', content: 'El motor de la acción. El hambre justifica la falta de moral inicial.' },
      { title: 'Crítica Social/Eclesiástica', content: 'Cada amo representa un vicio de la sociedad estamental o de la Iglesia (avaricia, hipocresía).' },
      { title: 'Evolución del Pícaro', content: 'Paso de la inocencia a la malicia. El final justifica la deshonra actual para no pasar penurias.' }
    ],
    flashcards: [
      { question: '¿Cómo se llama la forma narrativa del libro?', answer: 'Epistolar (una carta a Vuestra Merced).' },
      { question: '¿Qué simboliza el arca del clérigo?', answer: 'La avaricia extrema y la barrera para la supervivencia de Lázaro.' },
      { question: '¿Cuál es el "caso" final de la obra?', answer: 'La aceptación de la deshonra (infidelidad de su mujer) a cambio de estabilidad.' }
    ],
    quiz: [
      {
        question: '¿Qué amo le regala sus primeros zapatos?',
        options: ['El Ciego', 'El Escudero', 'El Fraile de la Merced', 'El Capellán'],
        correctIndex: 2
      },
      {
        question: '¿Por qué Lázaro escribe su historia?',
        options: ['Para presumir de dinero', 'Para justificar su situación actual ("el caso")', 'Para denunciar al ciego', 'Por orden del Rey'],
        correctIndex: 1
      }
    ]
  },
  [ReadingId.ESPANOL_ESCONDE]: {
    id: ReadingId.ESPANOL_ESCONDE,
    title: 'Lo que el español esconde',
    author: 'Ensayo Lingüístico',
    quickSummary: 'Ensayo sobre la vitalidad, evolución y diversidad del español, defendiendo la unidad en la variedad frente a los purismos.',
    fullSummary: 'Analiza desde la etimología de las palabras hasta la influencia de la cultura popular (reggaetón, series) y el contacto con otras lenguas (anglicismos, lenguas indígenas).',
    characters: [
      { name: 'El Autor', role: 'Guía experto', description: 'Voz didáctica que desmitifica prejuicios lingüísticos.' },
      { name: 'Valera vs Cuervo', role: 'Figuras históricas', description: 'Representan el debate entre la unidad y la fragmentación del idioma.' },
      { name: 'Iconos Pop', role: 'Agentes de cambio', description: 'Figuras como Pablo Escobar o artistas de reggaetón que difunden el idioma.' }
    ],
    themes: [
      { title: 'Unidad en la Diversidad', content: 'El español es uno pero se manifiesta de formas múltiples. Ninguna variedad es superior.' },
      { title: 'Lengua como Organismo Vivo', content: 'La lengua cambia constantemente. Lo que hoy es vulgarismo, mañana es norma.' },
      { title: 'Tradición vs Modernidad', content: 'Muchos rasgos "modernos" de América son en realidad arcaísmos del español clásico (ej. vide).' }
    ],
    flashcards: [
      { question: '¿Qué es la variación diatópica?', answer: 'Diferencias del idioma según la geografía (España vs América).' },
      { question: '¿Qué función cumple el reggaetón según el texto?', answer: 'Vehículo de difusión de neologismos y "joyas lingüísticas".' },
      { question: '¿Cuál es el tema central del ensayo?', answer: 'La unidad del español en su diversidad.' }
    ],
    quiz: [
      {
        question: '¿Qué postura adopta el autor ante los anglicismos?',
        options: ['Rechazo total', 'Purismo académico', 'Descriptiva y moderada (natural y necesario)', 'Obligatoriedad'],
        correctIndex: 2
      }
    ]
  }
};
