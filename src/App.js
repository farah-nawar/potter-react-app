// src/App.js
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './Components/Books';
import Characters from './Components/Characters';
import Spells from './Components/Spells';
import Houses from './Components/Houses';
import HousePage from './Components/SingleHousePage'; 
import Character from './Components/SingleCharPage';
import Book from './Components/SingleBookPage';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Potter World</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/characters">Characters</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/spells">Spells</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/houses">Houses</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="background">
        <Routes>
          <Route path="/" element={
            <div className="blur">
              <div className="welcome-text">Welcome to Potter World</div>
            </div>
          } />
          <Route path="/characters" element={<Characters />} />
          <Route path="/books" element={<Books />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/houses/:houseIndex" element={<HousePage />} />
          <Route path="/characters/:characterIndex" element={<Character />} />
          <Route path="/characters/:bookIndex" element={<Book />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
