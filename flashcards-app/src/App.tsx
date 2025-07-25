import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import StatsPage from './pages/StatsPage';
import FlashcardPage from './pages/FlashcardPage';

/**
 * The main application component.
 * It sets up the routing for the entire application, directing users to the
 * appropriate pages based on the URL.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* The main landing page */}
        <Route path="/" element={<HomePage />} />

        {/* The page for selecting a category in study mode */}
        <Route
          path="/study"
          element={<CategorySelectionPage mode="study" />}
        />

        {/* The page for selecting a category in quiz mode */}
        <Route
          path="/quiz"
          element={<CategorySelectionPage mode="quiz" />}
        />

        {/* The page for studying flashcards of a specific category */}
        <Route path="/study/:category" element={<FlashcardPage />} />

        {/* The page for taking a quiz on a specific category (placeholder) */}
        <Route path="/quiz/:category" element={<FlashcardPage />} />

        {/* The page for viewing statistics (placeholder) */}
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App; 