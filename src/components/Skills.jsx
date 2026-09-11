import { useEffect, useRef, useState } from 'react';
import {
  SiPython, SiHtml5, SiCplusplus,
  SiScikitlearn, SiOpencv, SiPandas, SiNumpy, SiJupyter,
  SiSpringboot, SiNextdotjs,
  SiMysql, SiMongodb, SiPostgresql, SiRedis,
  SiGit, SiGithub,
} from 'react-icons/si';
import { FiCpu, FiDatabase, FiCode, FiLayers, FiTool, FiZap, FiServer, FiTerminal, FiMonitor } from 'react-icons/fi';
import './Skills.css';

const categories = [
  {
    title: 'Languages',
    icon: <FiCode />,
    bg: 'rgba(79,142,247,0.15)',
    color: '#4f8ef7',
    skills: [
      { name: 'Python',  icon: <SiPython     color="#3b82f6" /> },
      { name: 'Java',    icon: <FiTerminal   color="#f59e0b" /> },
      { name: 'SQL',     icon: <FiDatabase   color="#22d3ee" /> },
      { name: 'HTML',    icon: <SiHtml5      color="#f97316" /> },
      { name: 'CSS',     icon: <FiCode       color="#3b82f6" /> },
      { name: 'C++',     icon: <SiCplusplus  color="#7c5fe6" /> },
    ],
  },
  {
    title: 'AI / ML',
    icon: <FiCpu />,
    bg: 'rgba(124,95,230,0.15)',
    color: '#7c5fe6',
    skills: [
      { name: 'Scikit-Learn', icon: <SiScikitlearn color="#f97316" /> },
      { name: 'OpenCV',       icon: <SiOpencv      color="#34d399" /> },
      { name: 'YOLOv8',      icon: <FiCpu          color="#7c5fe6" /> },
      { name: 'Pandas',       icon: <SiPandas      color="#4f8ef7" /> },
      { name: 'NumPy',        icon: <SiNumpy       color="#4f8ef7" /> },
      { name: 'Matplotlib',   icon: <FiCpu         color="#e879f9" /> },
      { name: 'Seaborn',      icon: <FiCpu         color="#22d3ee" /> },
      { name: 'Jupyter',      icon: <SiJupyter     color="#f97316" /> },
    ],
  },
  {
    title: 'Frameworks & Platforms',
    icon: <FiLayers />,
    bg: 'rgba(34,211,238,0.15)',
    color: '#22d3ee',
    skills: [
      { name: 'Spring Boot',   icon: <SiSpringboot color="#34d399" /> },
      { name: 'Next.js',       icon: <SiNextdotjs  color="#f0f4ff" /> },
      { name: 'Apache Kafka',  icon: <FiZap        color="#e879f9" /> },
      { name: 'Flask',         icon: <FiServer     color="#f0f4ff" /> },
    ],
  },
  {
    title: 'Databases & ORM',
    icon: <FiDatabase />,
    bg: 'rgba(52,211,153,0.15)',
    color: '#34d399',
    skills: [
      { name: 'MySQL',       icon: <SiMysql      color="#22d3ee" /> },
      { name: 'MongoDB',     icon: <SiMongodb    color="#34d399" /> },
      { name: 'PostgreSQL',  icon: <SiPostgresql color="#4f8ef7" /> },
      { name: 'PostGIS',     icon: <FiDatabase   color="#22d3ee" /> },
      { name: 'Redis',       icon: <SiRedis      color="#f97316" /> },
    ],
  },
  {
    title: 'Developer Tools',
    icon: <FiTool />,
    bg: 'rgba(232,121,249,0.15)',
    color: '#e879f9',
    skills: [
      { name: 'Git',      icon: <SiGit     color="#f97316" /> },
      { name: 'GitHub',   icon: <SiGithub  color="#f0f4ff" /> },
      { name: 'VS Code',  icon: <FiMonitor color="#4f8ef7" /> },
    ],
  },
];

const bars = [
  { name: 'Python',           pct: 90, color: 'linear-gradient(90deg,#3b82f6,#4f8ef7)' },
  { name: 'Machine Learning', pct: 80, color: 'linear-gradient(90deg,#7c5fe6,#a78bfa)' },
  { name: 'Java',             pct: 75, color: 'linear-gradient(90deg,#f59e0b,#fbbf24)' },
  { name: 'Data Analysis',    pct: 85, color: 'linear-gradient(90deg,#22d3ee,#67e8f9)' },
  { name: 'SQL',              pct: 80, color: 'linear-gradient(90deg,#34d399,#6ee7b7)' },
  { name: 'Spring Boot',      pct: 70, color: 'linear-gradient(90deg,#34d399,#22d3ee)' },
];

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            A curated set of technologies I&apos;ve used to build real-world projects.
          </p>
        </div>

        <div className="skills-categories">
          {categories.map((cat, i) => (
            <div className="skill-category" key={i}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon" style={{ background: cat.bg, color: cat.color }}>
                  {cat.icon}
                </div>
                <span className="skill-cat-title">{cat.title}</span>
              </div>
              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <div className="skill-tag" key={j}>
                    {s.icon}
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="skill-bars">
          {bars.map((b, i) => (
            <div className="skill-bar-item" key={i}>
              <div className="skill-bar-top">
                <span className="skill-bar-name">{b.name}</span>
                <span className="skill-bar-pct">{b.pct}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: visible ? `${b.pct}%` : '0%',
                    background: b.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
