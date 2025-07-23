import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import StatsPage from './pages/StatsPage';
import FlashcardPage from './pages/FlashcardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/study"
          element={<CategorySelectionPage mode="study" />}
        />
        <Route
          path="/quiz"
          element={<CategorySelectionPage mode="quiz" />}
        />
        <Route path="/study/:category" element={<FlashcardPage />} />
        <Route path="/quiz/:category" element={<FlashcardPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App; 