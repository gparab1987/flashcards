import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';

/**
 * The main page for a study session. It displays flashcards for a selected
 * category and allows the user to navigate through them.
 */
const FlashcardPage = () => {
  // Get the category from the URL params.
  const { category } = useParams<{ category: string }>();

  // State to keep track of the current card's index in the filtered list.
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  if (!category) {
    return <div>Category not found.</div>;
  }

  // Filter the main flashcards list to get only the cards for the current category.
  const cardsForCategory = flashcards.filter(
    (card) => card.category === category
  );

  if (cardsForCategory.length === 0) {
    return <div>No flashcards found for {category}.</div>;
  }

  /**
   * Advances to the next card in the deck. If it's the last card,
   * it navigates back to the category selection page.
   */
  const handleNextCard = () => {
    if (currentIndex < cardsForCategory.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/study'); // Go back to categories when finished
    }
  };

  /**
   * Navigates to the previous card in the deck. Does nothing if on the first card.
   */
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
      <div className="back-link-container">
        <Link to="/study" className="nav-button">
          Back to Categories
        </Link>
      </div>
    </div>
  );
};

export default FlashcardPage; 