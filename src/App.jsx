// src/App.jsx
import React from 'react';
import { portfolioItems } from './data';
import './App.css'; // You can add your styling here

function App() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>My Engineering Portfolio</h1>
        <p>Showcasing projects in embedded systems, AI programming, and robotics.</p>
      </header>

      <main className="grid-container">
        {portfolioItems.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            <div className="tags">
              {item.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn">
              View Project
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;