// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { GitHubIcon, MailIcon } from './components/Icons';
import './App.css';

function Layout({ children }) {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav" id="navigation">
        <Link to="/portofolio/" className="nav-logo">
          <span className="dot" aria-hidden="true"></span>
          Sebastian
        </Link>
        <ul className="nav-links">
          <li><Link to="/portofolio/#projects">Projects</Link></li>
          <li>
            <a
              href="https://github.com/sebry4n"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <p className="footer-text">
            Built with <span className="heart" aria-label="love">♥</span> using React & Vite
          </p>
          <ul className="footer-links">
            <li>
              <a href="https://github.com/sebry4n" target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </li>
            <li>
              <a href="mailto:hello@example.com">
                <MailIcon /> Email
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/portofolio/" element={<HomePage />} />
          <Route path="/portofolio/project/:slug" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;