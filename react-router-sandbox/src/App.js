import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import {Routes, Route, Link} from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About me</Link>
        <Link to="/contact" className="nav-item">Contact me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
