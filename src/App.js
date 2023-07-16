
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  
  return (
<div className={darkMode ? "dark-mode" : "light-mode"}>
<div className="container">
        <span style={{ color: darkMode ? "#8c8c8c" : "#e68a00" }}><LightModeIcon></LightModeIcon></span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? " #00b3b3" : "#8c8c8c" }}><DarkModeIcon></DarkModeIcon></span>
      </div>
      
       <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/"  exact element={<Home/>} />
        <Route path="/blog"  exact element={<Blog/>} />
        <Route path="/about"  exact element={<About/>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
