export type Flashcard = {
  french: string;
  phonetic: string;
  english: string;
  category: 'animals' | 'food' | 'verbs';
  quiz: {
    type: 'multiple-choice';
    options: string[];
  } | {
    type: 'fill-in-the-blank';
  };
};

export const flashcards: Flashcard[] = [
  // Animals
  {
    french: 'le chien',
    phonetic: '/lə ʃjɛ̃/',
    english: 'the dog',
    category: 'animals',
    quiz: {
      type: 'multiple-choice',
      options: ['the cat', 'the bird', 'the fish', 'the dog'],
    },
  },
  {
    french: 'le chat',
    phonetic: '/lə ʃa/',
    english: 'the cat',
    category: 'animals',
    quiz: {
      type: 'multiple-choice',
      options: ['the dog', 'the bird', 'the fish', 'the cat'],
    },
  },
  {
    french: "l'oiseau",
    phonetic: '/lwazo/',
    english: 'the bird',
    category: 'animals',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    french: 'le cheval',
    phonetic: '/lə ʃəval/',
    english: 'the horse',
    category: 'animals',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    french: 'le lion',
    phonetic: '/lə ljɔ̃/',
    english: 'the lion',
    category: 'animals',
    quiz: {
      type: 'multiple-choice',
      options: ['the tiger', 'the bear', 'the wolf', 'the lion'],
    },
  },
  {
    french: "l'éléphant",
    phonetic: "/lelefɑ̃/",
    english: 'the elephant',
    category: 'animals',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  // Food
  {
    french: 'la pomme',
    phonetic: '/la pɔm/',
    english: 'the apple',
    category: 'food',
    quiz: {
      type: 'multiple-choice',
      options: ['the banana', 'the orange', 'the grape', 'the apple'],
    },
  },
  {
    french: 'le pain',
    phonetic: '/lə pɛ̃/',
    english: 'the bread',
    category: 'food',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    french: 'le fromage',
    phonetic: '/lə fʁɔmaʒ/',
    english: 'the cheese',
    category: 'food',
    quiz: {
      type: 'multiple-choice',
      options: ['the milk', 'the butter', 'the yogurt', 'the cheese'],
    },
  },
  {
    french: "l'eau",
    phonetic: '/lo/',
    english: 'the water',
    category: 'food',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    french: 'le vin',
    phonetic: '/lə vɛ̃/',
    english: 'the wine',
    category: 'food',
    quiz: {
      type: 'multiple-choice',
      options: ['the beer', 'the juice', 'the soda', 'the wine'],
    },
  },
  {
    french: 'le poisson',
    phonetic: '/lə pwasɔ̃/',
    english: 'the fish',
    category: 'food',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  // Verbs
  {
    french: 'courir',
    phonetic: '/kuʁiʁ/',
    english: 'to run',
    category: 'verbs',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    french: 'manger',
    phonetic: '/mɑ̃ʒe/',
    english: 'to eat',
    category: 'verbs',
    quiz: {
      type: 'multiple-choice',
      options: ['to drink', 'to sleep', 'to read', 'to eat'],
    },
  },
  {
    french: 'dormir',
    phonetic: '/dɔʁmiʁ/',
    english: 'to sleep',
    category: 'verbs',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    french: 'parler',
    phonetic: '/paʁle/',
    english: 'to speak',
    category: 'verbs',
    quiz: {
      type: 'multiple-choice',
      options: ['to listen', 'to write', 'to see', 'to speak'],
    },
  },
  {
    french: 'boire',
    phonetic: '/bwaʁ/',
    english: 'to drink',
    category: 'verbs',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    french: 'lire',
    phonetic: '/liʁ/',
    english: 'to read',
    category: 'verbs',
    quiz: {
      type: 'multiple-choice',
      options: ['to write', 'to draw', 'to sing', 'to read'],
    },
  },
]; 