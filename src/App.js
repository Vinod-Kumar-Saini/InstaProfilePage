import { useState } from "react";
import React from "react";
import "./App.css";
import img1 from './images/p1.jpg';
import img2 from './images/p2.jpg';
import img3 from './images/p3.jpg';
import img4 from './images/p4.jpg';
import img5 from './images/p5.jpg';
import img6 from './images/p6.jpg';
import img7 from './images/p7.jpg';
import img8 from './images/p8.jpg';
import img9 from './images/p9.jpg';
const App = () => {
  

   const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <button className="toggle-theme-btn" onClick={toggleTheme}>
        Theme
      </button>

      <div className="profile-header">
        <div className="profile-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRCJwrRvDSZ9xjXJP04Dlq2sq7tCYKrf2kw&s" alt="Profile" />
        </div>
        <div className="profile-info">
          <div className="profile-top">
            <h2 className="username">Vinod.designs</h2>
            <button className="btn follow">Follow</button>
            <button className="btn message">Message</button>
          </div>
          <div className="profile-stats">
            <div><strong>120</strong> posts</div>
            <div><strong>10.5k</strong> followers</div>
            <div><strong>500</strong> following</div>
          </div>
          <div className="profile-bio">
            <p className="name"><b>Vinod </b></p>
            <p className="profession">UI/UX Designer & Creative Director</p>
            <p> Creating beautiful digital experiences </p> 
             
              <p>📍 San Francisco, CA</p>
             

            <a href="#" className="bio-link">⛓️‍💥 www.vinoddesigns.com</a>
          </div>
        </div>
      </div>

      <div className="profile-posts">
      <img src={img9} alt="img"></img>
       <img src={img1} alt ="imag" ></img>
        <img src={img2} alt ="imag" ></img>
        <img src={img3} alt ="imag" ></img>
        <img src={img4} alt ="imag" ></img>
        <img src={img5} alt ="imag" ></img>
        <img src={img6} alt ="imag" ></img>
        <img src={img7} alt ="imag" ></img>
        <img src={img8} alt ="imag" ></img>
        
        
        



      </div>



    </div>
  );
};

export default App;

