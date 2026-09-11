import { useState } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck, FiArrowRight } from 'react-icons/fi';
import './Contact.css';

const contactLinks = [
  {
    href: 'mailto:tanushree9714@gmail.com',
    icon: <FiMail />,
    iconBg: 'rgba(79,142,247,0.15)',
    iconColor: '#4f8ef7',
    label: 'Email',
    value: 'tanushree9714@gmail.com',
  },
  {
    href: 'tel:+917814483950',
    icon: <FiPhone />,
    iconBg: 'rgba(34,211,238,0.15)',
    iconColor: '#22d3ee',
    label: 'Phone',
    value: '+91 7814483950',
  },
  {
    href: 'https://github.com',
    icon: <FiGithub />,
    iconBg: 'rgba(52,211,153,0.15)',
    iconColor: '#34d399',
    label: 'GitHub',
    value: 'github.com/tanushree',
    external: true,
  },
  {
    href: 'https://linkedin.com',
    icon: <FiLinkedin />,
    iconBg: 'rgba(124,95,230,0.15)',
    iconColor: '#7c5fe6',
    label: 'LinkedIn',
    value: 'linkedin.com/in/tanushree',
    external: true,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Open to internships, collaborations, and exciting projects. Drop me a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left info */}
          <div className="contact-info">
            <h3>Ready to build <span>something great</span> together?</h3>
            <p>
              I&apos;m currently looking for internship and collaboration opportunities.
              Whether you have an interesting problem, a research project, or just want to say hi—
              my inbox is always open.
            </p>

            <div className="contact-links">
              {contactLinks.map((cl, i) => (
                <a
                  key={i}
                  href={cl.href}
                  className="contact-link-item"
                  target={cl.external ? '_blank' : undefined}
                  rel={cl.external ? 'noreferrer' : undefined}
                >
                  <div className="contact-link-icon" style={{ background: cl.iconBg, color: cl.iconColor }}>
                    {cl.icon}
                  </div>
                  <div className="contact-link-text">
                    <div className="contact-link-label">{cl.label}</div>
                    <div className="contact-link-value">{cl.value}</div>
                  </div>
                  <FiArrowRight className="contact-link-arrow" />
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="contact-form-wrap">
            <div className="contact-form-title">Send me a message</div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="form-control"
                  placeholder="Internship opportunity / Collaboration..."
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-control"
                  placeholder="Tell me about the opportunity or project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={`form-submit ${sent ? 'sent' : ''}`}>
                {sent ? (
                  <><FiCheck /> Message Sent!</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
