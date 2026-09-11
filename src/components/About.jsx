import { FiBookOpen, FiCpu, FiDatabase, FiCode, FiBriefcase, FiAward } from 'react-icons/fi';
import './About.css';

const education = [
  {
    period: '2023 – 2027',
    institution: 'I.K. Gujral Punjab Technical University',
    degree: 'B.Tech – Computer Science & Engineering',
    meta: [
      { label: 'CGPA: 8.0/10', variant: 'badge-blue' },
      { label: 'B.Tech CSE', variant: 'badge-purple' },
    ],
  },
  {
    period: '2023',
    institution: 'Sun Rise Sen Sec School, Basantpur',
    degree: '12th Class (Senior Secondary)',
    meta: [
      { label: '89%', variant: 'badge-green' },
    ],
  },
];

const cards = [
  {
    icon: <FiCpu />,
    bg: 'rgba(79,142,247,0.12)',
    color: '#4f8ef7',
    title: 'AI & Machine Learning',
    desc: 'Building intelligent models with Scikit-learn, YOLO, OpenCV & more.',
  },
  {
    icon: <FiCode />,
    bg: 'rgba(124,95,230,0.12)',
    color: '#7c5fe6',
    title: 'Full Stack Dev',
    desc: 'Python/Java backends + React/Next.js frontends with RESTful APIs.',
  },
  {
    icon: <FiDatabase />,
    bg: 'rgba(34,211,238,0.12)',
    color: '#22d3ee',
    title: 'Data Engineering',
    desc: 'PostgreSQL, PostGIS, Redis, MongoDB, Apache Kafka pipelines.',
  },
  {
    icon: <FiBriefcase />,
    bg: 'rgba(52,211,153,0.12)',
    color: '#34d399',
    title: 'Leadership',
    desc: 'Event Coordinator & Class Representative with strong teamwork skills.',
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          {/* Education Timeline */}
          <div className="about-left">
            <div className="edu-timeline">
              <div className="edu-timeline-line" />
              {education.map((edu, i) => (
                <div className="edu-item" key={i}>
                  <div className="edu-icon-wrap">
                    <FiBookOpen />
                  </div>
                  <div className="edu-content">
                    <div className="edu-period">{edu.period}</div>
                    <div className="edu-institution">{edu.institution}</div>
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-meta">
                      {edu.meta.map((m, j) => (
                        <span key={j} className={`badge ${m.variant}`}>{m.label}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About content + cards */}
          <div className="about-right">
            <div className="about-intro">
              <h3>
                Turning <span>complex problems</span> into elegant solutions
              </h3>
              <p>
                I&apos;m a second-year CSE student with a strong foundation in algorithms,
                data structures, and software engineering. I love building things that
                make a real difference—from AI-powered attendance systems to real-time
                disaster monitoring platforms.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m coordinating university events,
                mentoring peers, or exploring the latest advancements in AI/ML research.
              </p>
            </div>

            <div className="about-cards">
              {cards.map((c, i) => (
                <div className="about-card" key={i}>
                  <div className="about-card-icon" style={{ background: c.bg, color: c.color }}>
                    {c.icon}
                  </div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
