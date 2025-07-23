import { useState } from 'react';
import './Flashcard.css';

type FlashcardProps = {
  french: string;
  phonetic: string;
  english: string;
};

const Flashcard = ({ french, phonetic, english }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-face card-front">
          <div>
            <div className="french-word">{french}</div>
            <div className="phonetic-spelling">{phonetic}</div>
          </div>
        </div>
        <div className="card-face card-back">{english}</div>
      </div>
    </div>
  );
};

export default Flashcard; 