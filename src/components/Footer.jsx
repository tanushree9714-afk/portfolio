import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';
import './Footer.css';

const navLinks = [
  { href: '#hero',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#skills',       label: 'Skills' },
  { href: '#projects',     label: 'Projects' },
  { href: '#certificates', label: 'Certs' },
  { href: '#contact',      label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scroll = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="glow-line-footer" />
        <div className="footer-inner">
          <div className="footer-logo">&lt; Tanu Shree /&gt;</div>

          <nav className="footer-nav">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); scroll(l.href); }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            <a href="https://github.com"   target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:tanushree9714@gmail.com" className="footer-social-btn" aria-label="Email">
              <FiMail />
            </a>
          </div>

          <p className="footer-copy">
            © {year} <span>Tanu Shree</span>. Crafted with <FiCode style={{ display: 'inline', verticalAlign: 'middle' }} /> and ♥<br />
            B.Tech CSE • IK. Gujral Punjab Technical University
          </p>
        </div>
      </div>
    </footer>
  );
}
