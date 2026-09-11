import { FiAward, FiBarChart2, FiBriefcase, FiUsers, FiCalendar, FiShield, FiCpu } from 'react-icons/fi';
import './Certificates.css';

const certs = [
  {
    title: 'Exploratory Data Analysis',
    issuer: 'FutureSkills Prime (NASSCOM IT-ITeS SSC)',
    date: 'Jul 2026',
    icon: <FiBarChart2 />,
    iconBg: 'rgba(79,142,247,0.15)',
    iconColor: '#4f8ef7',
    badge: { label: 'Data Analytics', variant: 'badge-blue' },
  },
  {
    title: 'Cyber Job Simulation',
    issuer: 'Deloitte (via Forage)',
    date: 'Aug 2026',
    icon: <FiShield />,
    iconBg: 'rgba(34,211,238,0.15)',
    iconColor: '#22d3ee',
    badge: { label: 'Cybersecurity', variant: 'badge-cyan' },
  },
  {
    title: 'Summer Training in Artificial Intelligence',
    issuer: 'IBM',
    date: 'Jul 2026',
    icon: <FiCpu />,
    iconBg: 'rgba(124,95,230,0.15)',
    iconColor: '#7c5fe6',
    badge: { label: 'AI / ML', variant: 'badge-purple' },
  },

];

const extras = [
  {
    title: 'Event Coordinator',
    subtitle: 'University Events',
    icon: <FiCalendar />,
    iconBg: 'rgba(79,142,247,0.12)',
    iconColor: '#4f8ef7',
    points: [
      'Planned and executed university-level events end-to-end',
      'Collaborated with faculty, teams & volunteers for smooth delivery',
    ],
  },
  {
    title: 'Class Representative (CR)',
    subtitle: 'Department of CSE',
    icon: <FiUsers />,
    iconBg: 'rgba(52,211,153,0.12)',
    iconColor: '#34d399',
    points: [
      'Primary contact between faculty and students for academic updates',
      'Facilitated teacher-student communication, resolved class issues',
    ],
  },
];

export default function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Recognition</span>
          <h2 className="section-title">Certifications & Activities</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Validated skills through industry programs and active campus leadership.
          </p>
        </div>

        {/* Certs */}
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-badge-icon" style={{ background: c.iconBg, color: c.iconColor }}>
                {c.icon}
              </div>
              <div className="cert-info">
                <div className="cert-title">{c.title}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className={`badge ${c.badge.variant}`}>{c.badge.label}</span>
                  <span className="cert-date"><FiAward size={10} style={{ marginRight: 4 }} />{c.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extracurricular */}
        <div className="extra-section">
          <div className="extra-title">
            <FiBriefcase />
            Extracurricular Activities
            <div className="extra-title-bar" />
          </div>

          <div className="extra-grid">
            {extras.map((e, i) => (
              <div className="extra-card" key={i}>
                <div className="extra-card-header">
                  <div className="extra-icon" style={{ background: e.iconBg, color: e.iconColor }}>
                    {e.icon}
                  </div>
                  <div>
                    <div className="extra-card-title">{e.title}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{e.subtitle}</div>
                  </div>
                </div>
                <ul className="extra-points">
                  {e.points.map((pt, j) => (
                    <li key={j}><span className="extra-dot" />{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
