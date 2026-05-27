// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data';
import { icons, ArrowRight, GitHubIcon, MailIcon } from '../components/Icons';

function ProjectCard({ item, index }) {
  return (
    <Link
      to={`/portofolio/project/${item.slug}`}
      className="project-card"
      id={`project-${item.id}`}
    >
      <div className="card-header">
        <div className="card-icon">
          {icons[item.icon]}
        </div>
        <span className="card-number">0{index + 1}</span>
      </div>

      <h3 className="card-title">{item.title}</h3>

      <p className="card-description">{item.description}</p>

      <div className="card-tags">
        {item.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>

      <div className="card-footer">
        <span className="card-link">
          View Details <ArrowRight />
        </span>
      </div>
    </Link>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section" id="hero">
        <div className="hero-badge">
          <span className="status-dot" aria-hidden="true"></span>
          Open to Opportunities
        </div>

        <h1 className="hero-title">
          Engineering the <br />
          <span className="gradient-text">Future of Systems</span>
        </h1>

        <p className="hero-subtitle">
          Building at the intersection of embedded systems, artificial intelligence,
          and robotics — from autonomous drones to intelligent edge devices.
        </p>

        <div className="hero-cta-row">
          <a href="#projects" className="btn-primary" id="cta-projects">
            View My Work
            <ArrowRight />
          </a>
          <a
            href="https://github.com/sebry4n"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            id="cta-github"
          >
            <GitHubIcon />
            GitHub Profile
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-header">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <span className="section-count">{String(portfolioItems.length).padStart(2, '0')} projects</span>
        </div>

        <div className="projects-grid">
          {portfolioItems.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
