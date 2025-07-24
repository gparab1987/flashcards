import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>French Flashcards</h1>
      <h3>Choose an activity:</h3>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/study" className="nav-button">Study Mode</Link>
          </li>
          <li>
            <Link to="/quiz" className="nav-button">Quiz Mode</Link>
          </li>
          <li>
            <Link to="/stats" className="nav-button">Stats Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage; 