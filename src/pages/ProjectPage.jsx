// src/pages/ProjectPage.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from '../data';
import {
  icons,
  ArrowLeft,
  ArrowRight,
  ExternalLinkIcon,
  CalendarIcon,
  UserIcon,
  CheckIcon,
  ChevronLeft,
  ChevronRight,
  CloseIcon,
  PlayIcon,
} from '../components/Icons';

function ProjectPage() {
  const { slug } = useParams();
  const project = portfolioItems.find((p) => p.slug === slug);
  const galleryRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, lightboxIndex]);

  const navigateLightbox = useCallback(
    (direction) => {
      if (!project) return;
      const total = project.media.length;
      setLightboxIndex((prev) => (prev + direction + total) % total);
    },
    [project]
  );

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.offsetWidth * 0.8;
      galleryRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Find next/prev projects for navigation
  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="project-page">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/portofolio/" className="btn-primary">
            <ArrowLeft /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      {/* Back Navigation */}
      <Link to="/portofolio/" className="back-link" id="back-to-home">
        <ArrowLeft />
        <span>Back to Portfolio</span>
      </Link>

      {/* Project Header */}
      <header className="project-hero" id="project-hero">
        <div className="project-hero-top">
          <div className="project-icon-large">
            {icons[project.icon]}
          </div>
          <div className="project-meta-badges">
            <span className="meta-badge" id="project-role">
              <UserIcon />
              {project.role}
            </span>
            <span className="meta-badge" id="project-duration">
              <CalendarIcon />
              {project.duration}
            </span>
          </div>
        </div>

        <h1 className="project-title">{project.title}</h1>

        <div className="project-tags-row">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </header>

      {/* Media Gallery */}
      {project.media && project.media.length > 0 && (
        <section className="gallery-section" id="project-gallery">
          <div className="gallery-wrapper">
            {project.media.length > 1 && (
              <button
                className="gallery-nav gallery-nav-left"
                onClick={() => scrollGallery(-1)}
                aria-label="Scroll gallery left"
              >
                <ChevronLeft />
              </button>
            )}

            <div className="gallery-track" ref={galleryRef}>
              {project.media.map((item, i) => (
                <div
                  key={i}
                  className={`gallery-item ${item.type === 'video' ? 'gallery-item-video' : ''}`}
                  onClick={() => item.type === 'image' && openLightbox(i)}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="gallery-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="video-container">
                      <video
                        src={item.src}
                        controls
                        preload="metadata"
                        className="gallery-video"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {item.caption && (
                    <p className="gallery-caption">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>

            {project.media.length > 1 && (
              <button
                className="gallery-nav gallery-nav-right"
                onClick={() => scrollGallery(1)}
                aria-label="Scroll gallery right"
              >
                <ChevronRight />
              </button>
            )}
          </div>
        </section>
      )}

      {/* Project Content */}
      <div className="project-content">
        <div className="project-body">
          {/* Description */}
          <section className="content-section" id="project-description">
            <h2 className="content-section-title">About This Project</h2>
            <div className="content-text">
              {project.longDescription.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <section className="content-section" id="project-highlights">
              <h2 className="content-section-title">Key Highlights</h2>
              <ul className="highlights-list">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="highlight-item">
                    <span className="highlight-icon">
                      <CheckIcon />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CTA */}
          <div className="project-cta">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="project-github-link"
            >
              <ExternalLinkIcon />
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <nav className="project-nav" id="project-navigation">
        {prevProject ? (
          <Link
            to={`/portofolio/project/${prevProject.slug}`}
            className="project-nav-link project-nav-prev"
          >
            <ArrowLeft />
            <div className="project-nav-info">
              <span className="project-nav-label">Previous Project</span>
              <span className="project-nav-title">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/portofolio/project/${nextProject.slug}`}
            className="project-nav-link project-nav-next"
          >
            <div className="project-nav-info" style={{ textAlign: 'right' }}>
              <span className="project-nav-label">Next Project</span>
              <span className="project-nav-title">{nextProject.title}</span>
            </div>
            <ArrowRight />
          </Link>
        ) : (
          <div />
        )}
      </nav>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <CloseIcon />
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {project.media.length > 1 && (
              <button
                className="lightbox-nav lightbox-nav-left"
                onClick={() => navigateLightbox(-1)}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>
            )}

            {project.media[lightboxIndex].type === 'image' ? (
              <img
                src={project.media[lightboxIndex].src}
                alt={project.media[lightboxIndex].caption}
                className="lightbox-image"
              />
            ) : (
              <video
                src={project.media[lightboxIndex].src}
                controls
                autoPlay
                className="lightbox-video"
              >
                Your browser does not support the video tag.
              </video>
            )}

            {project.media.length > 1 && (
              <button
                className="lightbox-nav lightbox-nav-right"
                onClick={() => navigateLightbox(1)}
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            )}

            {project.media[lightboxIndex].caption && (
              <p className="lightbox-caption">
                {project.media[lightboxIndex].caption}
              </p>
            )}

            {project.media.length > 1 && (
              <div className="lightbox-dots">
                {project.media.map((_, i) => (
                  <button
                    key={i}
                    className={`lightbox-dot ${i === lightboxIndex ? 'active' : ''}`}
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
