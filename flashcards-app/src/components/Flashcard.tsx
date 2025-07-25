import { useState } from 'react';
import './Flashcard.css';

type FlashcardProps = {
  french: string;
  phonetic: string;
  english: string;
};

/**
 * A component that displays a single flashcard with a French word on the front
 * and the English translation on the back. It supports a click-to-flip interaction.
 * @param {FlashcardProps} props The props for the component.
 * @returns {JSX.Element} The rendered Flashcard component.
 */
const Flashcard = ({ french, phonetic, english }: FlashcardProps) => {
  // State to track whether the card is flipped or not.
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggles the isFlipped state to flip the card over.
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front of the card, showing the French word and its phonetic spelling */}
        <div className="card-face card-front">
          <div>
            <div className="french-word">{french}</div>
            <div className="phonetic-spelling">{phonetic}</div>
          </div>
        </div>
        {/* Back of the card, showing the English translation */}
        <div className="card-face card-back">{english}</div>
      </div>
    </div>
  );
};

export default Flashcard; 