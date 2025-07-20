import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Hi, I'm Arpitha Majee 🌟</h1>
        <p>Final Year B.Tech IT • Full Stack Developer (MERN)</p>
      </header>

      <section className="section about">
        <h2>🎓 Education</h2>
        <p>MCKV Institute of Engineering</p>
        <p>CGPA: 9.0 (till 6th semester)</p>
      </section>

      <section className="section skills">
        <h2>🚀 Skills</h2>
        <div className="skill-list">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>JavaScript</span>
          <span>C++</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      <section className="section projects">
        <h2>🛠 Projects</h2>
        <div className="card">
          <h3>🎉 Event Management System</h3>
          <p>Login/signup, admin panel, event booking using MERN stack.</p>
        </div>
        <div className="card">
          <h3>💎 Jewellery eCommerce Website</h3>
          <p>Product listing, cart system, and UI using React and CSS.</p>
        </div>
      </section>

      <section className="section contact">
        <h2>📫 Contact</h2>
        <p>Email: <a href="mailto:majeearpitha@gmail.com">majeearpitha@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/arpitha-majee-831b82347/" target="_blank">linkedin.com/in/arpitha-majee-831b82347/</a></p>
        <p>GitHub: <a href="https://github.com/Arpitha-0110" target="_blank">github.com/Arpitha-0110</a></p>
      </section>

      <footer>
        <p>© 2025 Arpitha Majee • Made with 💙 in React</p>
      </footer>
    </div>
  );
}

export default App;
