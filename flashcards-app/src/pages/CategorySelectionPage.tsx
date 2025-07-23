import { Link } from 'react-router-dom';
import { flashcards } from '../data/flashcards';

// Get unique categories from the flashcard data
const categories = [...new Set(flashcards.map((card) => card.category))];

type CategorySelectionPageProps = {
  mode: 'study' | 'quiz';
};

const CategorySelectionPage = ({ mode }: CategorySelectionPageProps) => {
  const title = mode === 'study' ? 'Study Mode' : 'Quiz Mode';
  const prompt = 'Choose a category to begin:';

  return (
    <div>
      <h1>{title}</h1>
      <h3>{prompt}</h3>
      <ul className="nav-list">
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/${mode}/${category}`} className="nav-button">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/" className="nav-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CategorySelectionPage; 