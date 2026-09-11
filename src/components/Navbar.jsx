import { useState, useEffect } from 'react';
import {
  FiHome, FiUser, FiCode, FiBriefcase,
  FiAward, FiMail, FiGithub, FiLinkedin, FiMenu, FiX
} from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { href: '#hero',           label: 'Home',        icon: <FiHome /> },
  { href: '#about',          label: 'About',       icon: <FiUser /> },
  { href: '#skills',         label: 'Skills',      icon: <FiCode /> },
  { href: '#projects',       label: 'Projects',    icon: <FiBriefcase /> },
  { href: '#certificates',   label: 'Certs',       icon: <FiAward /> },
  { href: '#contact',        label: 'Contact',     icon: <FiMail /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.slice(1));
      let current = 'hero';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = id;
      });
      setActive(`#${current}`);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#hero" className="navbar-logo" onClick={e => { e.preventDefault(); handleNav('#hero'); }}>
            <span className="logo-bracket">&lt;</span>
            TS
            <span className="logo-bracket">/&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'active' : ''}
                  onClick={e => { e.preventDefault(); handleNav(link.href); }}
                >
                  <span className="nav-icon">{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social + CTA */}
          <div className="navbar-cta">
            <div className="navbar-social">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
            <a href="mailto:tanushree9714@gmail.com" className="btn btn-primary" style={{padding:'8px 20px',fontSize:'0.8rem'}}>
              <FiMail size={13} /> Hire Me
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="menu-bar" />
            <span className="menu-bar" />
            <span className="menu-bar" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => { e.preventDefault(); handleNav(link.href); }}>
                {link.icon} {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
