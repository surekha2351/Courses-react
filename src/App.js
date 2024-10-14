import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Courses';
import Internships from './Internships';
import Contact from './Contact';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Assign a unique path for each component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/Internships" element={<Internships />} />
          <Route path="/Contact" element={<Contact />} />
          
          {/* Add more routes here if necessary */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
