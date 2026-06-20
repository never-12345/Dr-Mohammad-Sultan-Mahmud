import { motion } from 'framer-motion';
import {
  MapPin, Mail, GraduationCap, BrainCircuit, BookOpen,
  ExternalLink, Sparkles, Newspaper,
} from 'lucide-react';
import { profileData, newsItems } from '../data/content';
import { Link } from 'react-router-dom';

/* ─── tiny animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});
const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});


export function Home() {
  return (
    /* ── outermost wrapper – two-column at lg ── */
    <div className="home-grid">

      {/* ════════════════════════════════════════════════
          LEFT SIDEBAR
      ════════════════════════════════════════════════ */}
      <motion.aside className="sidebar-card" {...fadeRight(0)}>

        {/* rainbow top stripe */}
        <div className="sidebar-stripe" />

        {/* ── photo + name ── */}
        <div className="sidebar-hero">
          <div className="photo-frame">
            <img src="/sir-2.0.png" alt={profileData.name} className="photo-img" />
            {/* glow ring */}
            <div className="photo-glow" />
          </div>

          <div className="sidebar-identity">
            <h2 className="sidebar-name">{profileData.name}</h2>
            <span className="sidebar-badge">
              <Sparkles size={10} className="animate-pulse opacity-70" />
              {profileData.title}
            </span>
            <a href={`mailto:${profileData.email}`} className="sidebar-email">
              <Mail size={11} />
              <span>{profileData.email}</span>
            </a>
          </div>
        </div>

        <div className="sidebar-divider" />

        {/* ── education ── */}
        <section className="sidebar-section">
          <h3 className="section-label">
            <GraduationCap size={11} className="text-indigo-500" />
            Education
          </h3>
          <ol className="edu-list">
            {profileData.degrees?.map((d, i) => (
              <li key={i} className="edu-item">
                <span className="edu-dot" />
                <div>
                  <p className="edu-degree">{d.degree}</p>
                  <p className="edu-meta">{d.institution} &middot; {d.year}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="sidebar-divider" />

        {/* ── research interests ── */}
        <section className="sidebar-section">
          <h3 className="section-label">
            <BrainCircuit size={11} className="text-indigo-500" />
            Research Interests
          </h3>
          <div className="tag-cloud">
            {profileData.researchInterests?.map((t, i) => (
              <span key={i} className="tag tag-research">{t}</span>
            ))}
          </div>
        </section>

        {/* ── teaching focus ── */}
        <section className="sidebar-section">
          <h3 className="section-label">
            <BookOpen size={11} className="text-indigo-500" />
            Teaching Focus
          </h3>
          <div className="tag-cloud">
            {profileData.teachingInterests?.map((t, i) => (
              <span key={i} className="tag tag-teaching">{t}</span>
            ))}
          </div>
        </section>
      </motion.aside>

      {/* ════════════════════════════════════════════════
          RIGHT MAIN COLUMN
      ════════════════════════════════════════════════ */}
      <main className="main-col">

        {/* ── hero ── */}
        <motion.section className="hero-section" {...fadeUp(0.05)}>
          <div>
            <p className="hero-eyebrow">Associate Professor · Computer Science</p>
            <h1 className="hero-title">
              Dr. Mohammad{' '}
              <span className="gradient-text">Sultan Mahmud</span>
            </h1>
            <p className="hero-sub">
              Researcher in Big Data Mining, Distributed Computing &amp; Ensemble Learning.
              Publishing in <em>Information Fusion</em>, <em>IEEE TBD</em> &amp; <em>Journal of Big Data</em>.
            </p>
          </div>

          {/* affiliations */}
          <div className="affil-grid">
            {profileData.affiliations.map((a, i) => (
              <div key={i} className="affil-card">
                <div className="affil-icon">
                  <GraduationCap size={15} />
                </div>
                <div className="affil-body">
                  <span className="affil-uni">{a.university}</span>
                  <span className="affil-addr">
                    <MapPin size={9} /> {a.address}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── about me strip ── */}
        <motion.section className="about-strip" {...fadeUp(0.12)}>
          <div className="about-accent" />
          <div className="about-body">
            <h3 className="about-heading">About</h3>
            <p className="about-text line-clamp-3">{profileData.bio}</p>
          </div>
        </motion.section>

        {/* ── single-panel bottom row ── */}
        <div className="panels-row">

          {/* NEWS */}
          <motion.section className="panel panel-news" {...fadeUp(0.18)}>
            <div className="panel-header">
              <span className="panel-title">
                <Newspaper size={13} className="text-indigo-500" />
                News &amp; Events
              </span>
              <Link to="/news" className="panel-link">
                All <ExternalLink size={10} />
              </Link>
            </div>
            <ol className="news-list">
              {newsItems.slice(0, 3).map((n, i) => (
                <li key={i} className="news-item">
                  <span className="news-date">{n.date}</span>
                  <p className="news-content">{n.content}</p>
                </li>
              ))}
            </ol>
          </motion.section>

        </div>
      </main>
    </div>
  );
}
