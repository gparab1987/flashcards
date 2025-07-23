export type Flashcard = {
  spanish: string;
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
    spanish: 'el perro',
    english: 'the dog',
    category: 'animals',
    quiz: {
      type: 'multiple-choice',
      options: ['the cat', 'the bird', 'the fish', 'the dog'],
    },
  },
  {
    spanish: 'el gato',
    english: 'the cat',
    category: 'animals',
    quiz: {
      type: 'multiple-choice',
      options: ['the dog', 'the bird', 'the fish', 'the cat'],
    },
  },
  {
    spanish: 'el pájaro',
    english: 'the bird',
    category: 'animals',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  // Food
  {
    spanish: 'la manzana',
    english: 'the apple',
    category: 'food',
    quiz: {
      type: 'multiple-choice',
      options: ['the banana', 'the orange', 'the grape', 'the apple'],
    },
  },
  {
    spanish: 'el pan',
    english: 'the bread',
    category: 'food',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    spanish: 'el queso',
    english: 'the cheese',
    category: 'food',
    quiz: {
      type: 'multiple-choice',
      options: ['the milk', 'the butter', 'the yogurt', 'the cheese'],
    },
  },
  // Verbs
  {
    spanish: 'correr',
    english: 'to run',
    category: 'verbs',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
  {
    spanish: 'comer',
    english: 'to eat',
    category: 'verbs',
    quiz: {
      type: 'multiple-choice',
      options: ['to drink', 'to sleep', 'to read', 'to eat'],
    },
  },
  {
    spanish: 'dormir',
    english: 'to sleep',
    category: 'verbs',
    quiz: {
      type: 'fill-in-the-blank',
    },
  },
]; 