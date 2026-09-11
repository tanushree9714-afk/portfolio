import { useState, useEffect } from 'react';
import {
  FiDownload, FiMail, FiGithub, FiLinkedin,
  FiCode, FiCpu, FiDatabase, FiLayers
} from 'react-icons/fi';
import { SiPython } from 'react-icons/si';
import './Hero.css';

const roles = [
  'AI/ML Developer',
  'Full Stack Dev',
  'Data Scientist',
  'Problem Solver',
];

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 8,
  duration: Math.random() * 10 + 8,
  color: ['#4f8ef7', '#7c5fe6', '#22d3ee', '#34d399'][Math.floor(Math.random() * 4)],
}));

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />

      {/* Animated circuit lines */}
      <div className="hero-circuit">
        {[1,2,3,4].map(i => <div key={i} className="circuit-line" />)}
      </div>

      {/* Floating particles */}
      <div className="hero-particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              bottom: '-10px',
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-content">
            <div className="hero-intro-tag">
              <span className="intro-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-name">
              Hi, I&apos;m<br />
              <span className="hero-name-gradient">Tanu Shree</span>
            </h1>

            <div className="hero-title-row">
              <p className="hero-role">
                {displayed}
                <span className="typing-cursor" />
              </p>
            </div>

            <p className="hero-desc">
              A passionate <strong>CSE student</strong> at IK. Gujral Punjab Technical University
              (CGPA: 8.0/10) building intelligent systems with <strong>Python, Java</strong> &amp;
              modern AI/ML frameworks. I turn data into decisions and ideas into products.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8.0</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <FiLayers size={15} /> View Projects
              </a>
              <a href="mailto:tanushree9714@gmail.com" className="btn btn-outline">
                <FiMail size={15} /> Get In Touch
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '12px 16px' }}>
                <FiGithub size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '12px 16px' }}>
                <FiLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT - Avatar Visual */}
          <div className="hero-visual">
            <div className="avatar-container">
              <div className="avatar-ring-2" />
              <div className="avatar-ring" />
              <div className="orbit-dot" />
              <div className="orbit-dot-2" />

              <div className="avatar-main">
                <div className="avatar-code-bg">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="code-line" style={{ width: `${40 + Math.random() * 50}%` }} />
                  ))}
                </div>
                <span className="avatar-initials">TS</span>
              </div>

              {/* Floating tech badges */}
              <div className="tech-badge tech-badge-1" style={{ color: '#3b82f6' }}>
                <SiPython color="#3b82f6" /> Python
              </div>
              <div className="tech-badge tech-badge-2" style={{ color: '#61dafb' }}>
                <FiCode color="#61dafb" /> React
              </div>
              <div className="tech-badge tech-badge-3" style={{ color: '#22d3ee' }}>
                <FiCpu color="#22d3ee" /> AI / ML
              </div>
              <div className="tech-badge tech-badge-4" style={{ color: '#34d399' }}>
                <FiDatabase color="#34d399" /> SQL
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
