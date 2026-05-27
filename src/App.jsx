// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { GitHubIcon, MailIcon, SunIcon, MoonIcon } from './components/Icons';
import './App.css';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('portfolio-theme');
    if (stored) return stored;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, toggle };
}

function Layout({ children }) {
  const { theme, toggle } = useTheme();

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav" id="navigation">
        <Link to="/portofolio/" className="nav-logo">
          <span className="dot" aria-hidden="true"></span>
          Sebastian Adirian Nugraha
        </Link>
        <div className="nav-right">
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
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            id="theme-toggle"
          >
            <span className={`theme-icon ${theme === 'light' ? 'active' : ''}`}>
              <SunIcon />
            </span>
            <span className={`theme-icon ${theme === 'dark' ? 'active' : ''}`}>
              <MoonIcon />
            </span>
          </button>
        </div>
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
              <a href="mailto:adiriansebastian@gmail.com">
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