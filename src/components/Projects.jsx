import { FiGithub, FiExternalLink, FiCamera, FiAlertTriangle, FiHeart, FiZap, FiServer } from 'react-icons/fi';
import { SiPython, SiOpencv, SiNextdotjs, SiPostgresql, SiRedis } from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    title: 'Smart Attendance System using YOLO',
    type: 'Academic Course Project • 2026',
    icon: <FiCamera />,
    iconBg: 'rgba(79,142,247,0.15)',
    iconColor: '#4f8ef7',
    glowColor: '#4f8ef7',
    badge: { label: 'AI / CV', variant: 'badge-blue' },
    desc: 'A real-time automated attendance system leveraging computer vision and deep learning for face detection during class sessions.',
    features: [
      'Real-time face detection with YOLOv8 + OpenCV for automated check-in',
      'Flask backend handling live video, attendance logging & session management',
      'One-click CSV export replacing manual roll-call entirely',
    ],
    stack: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'CSV/Pandas'],
    stackIcons: [<SiPython key="p" />, <SiOpencv key="o" />, <FiServer key="f" />],
    github: 'https://github.com',
  },
  {
    title: 'Disaster Information Fusion Platform',
    type: 'Academic Course Project • 2026',
    icon: <FiAlertTriangle />,
    iconBg: 'rgba(232,121,249,0.15)',
    iconColor: '#e879f9',
    glowColor: '#e879f9',
    badge: { label: 'Real-time', variant: 'badge-pink' },
    desc: 'An enterprise-grade real-time disaster monitoring platform that fuses multi-source data (IMD, USGS, satellite) into confidence-scored alerts.',
    features: [
      'Apache Kafka for high-volume disaster data streaming with low latency',
      'PostGIS geospatial data models for location-based alert querying',
      'Redis caching for scalable, low-latency incoming data processing',
    ],
    stack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL/PostGIS', 'Redis', 'Next.js'],
    stackIcons: [<FiServer key="j" />, <FiZap key="k" />, <SiPostgresql key="pg" />, <SiRedis key="r" />, <SiNextdotjs key="n" />],
    github: 'https://github.com',
  },
  {
    title: 'Mental Health & Social Happiness Predictor',
    type: 'Lead Developer • 2025',
    icon: <FiHeart />,
    iconBg: 'rgba(52,211,153,0.15)',
    iconColor: '#34d399',
    glowColor: '#34d399',
    badge: { label: 'ML', variant: 'badge-green' },
    desc: 'An AI-powered web application predicting happiness index from social media and lifestyle data using regression modeling.',
    features: [
      'Linear Regression model trained on social media & lifestyle habit data',
      'Interactive Streamlit app with real-time prediction capabilities',
      'Plotly visualizations for habit-happiness correlation exploration',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Streamlit', 'Plotly'],
    stackIcons: [<SiPython key="p" />],
    github: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Real-world applications built with modern tech stacks, from AI-powered systems to data platforms.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="card-glow" style={{ background: p.glowColor }} />

              <div className="project-header">
                <div className="project-icon" style={{ background: p.iconBg, color: p.iconColor }}>
                  {p.icon}
                </div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link-btn" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link-btn" aria-label="Live Demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="project-title">{p.title}</h3>
                <div className="project-meta">
                  <span className={`badge ${p.badge.variant}`}>{p.badge.label}</span>
                  <span className="project-type">{p.type}</span>
                </div>
              </div>

              <p className="project-desc">{p.desc}</p>

              <ul className="project-features">
                {p.features.map((f, j) => (
                  <li key={j}>
                    <span className="feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="project-stack">
                {p.stack.map((s, j) => (
                  <span className="stack-chip" key={j}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
