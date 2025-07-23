import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';

const FlashcardPage = () => {
  const { category } = useParams<{ category: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  if (!category) {
    return <div>Category not found.</div>;
  }

  const cardsForCategory = flashcards.filter(
    (card) => card.category === category
  );

  if (cardsForCategory.length === 0) {
    return <div>No flashcards found for {category}.</div>;
  }

  const handleNextCard = () => {
    // Before moving to the next card, we should flip the current one back to the front
    // This is not implemented yet, but something to consider. For now, just advance.
    if (currentIndex < cardsForCategory.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/study'); // Go back to categories when finished
    }
  };

  const handlePreviousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentCard = cardsForCategory[currentIndex];
  const isLastCard = currentIndex === cardsForCategory.length - 1;

  return (
    <div>
      <h2 className="category-title">
        Studying: {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <p className="card-counter">
        Card {currentIndex + 1} of {cardsForCategory.length}
      </p>
      <Flashcard
        french={currentCard.french}
        phonetic={currentCard.phonetic}
        english={currentCard.english}
      />
      <div className="navigation-buttons">
        <button
          onClick={handlePreviousCard}
          className="nav-button prev-button"
          disabled={currentIndex === 0}
        >
          Previous Card
        </button>
        <button onClick={handleNextCard} className="nav-button next-button">
          {isLastCard ? 'Finish Session' : 'Next Card'}
        </button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/study" className="nav-button">
          Back to Categories
        </Link>
      </div>
    </div>
  );
};

export default FlashcardPage; 