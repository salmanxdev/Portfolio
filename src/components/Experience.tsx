import React from 'react';
import { Briefcase, Award, Calendar, MapPin, CheckCircle, Rocket } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Technical Founder',
      company: 'AllyNet',
      period: '2024 - Present',
      location: 'Bhopal, India',
      type: 'Startup Venture',
      icon: <Rocket size={20} color="var(--color-accent)" />,
      badge: 'Core Leadership',
      description: 'Architecting platform infrastructure, scalable backend APIs, database schemas, and leading technical product iterations from zero to production.',
      highlights: [
        'Designed modular full-stack web and backend architecture with high scalability.',
        'Integrated cloud databases, authentication workflows, and modern API security protocols.',
        'Spearheaded MVP development and iterative user feedback implementation.'
      ]
    },
    {
      role: 'AI/ML Intern',
      company: 'Kodacy (AICTE & SPACE Approved)',
      period: 'Internship',
      location: 'Remote',
      type: 'AI & Research',
      icon: <Briefcase size={20} color="#38ef7d" />,
      badge: 'Machine Learning',
      description: 'Worked extensively with machine learning algorithms, deep neural network layers, predictive regression modeling, and custom chatbot architectures.',
      highlights: [
        'Engineered regression and classification pipelines for predictive data modeling.',
        'Developed conversational chatbot systems utilizing natural language techniques.',
        'Collaborated on AICTE & SPACE affiliated research problem statements.'
      ]
    },
    {
      role: 'Team Lead – Web & Technical',
      company: 'JNCT E-Cell (LNCT Group of Colleges)',
      period: '2024 - Present',
      location: 'Bhopal, MP',
      type: 'Leadership & Dev',
      icon: <Award size={20} color="#a78bfa" />,
      badge: 'Official Team Lead',
      description: 'Directing the digital infrastructure and technical development for JNCT E-Cell, managing summit portals, online registrations, and mentoring aspiring developers.',
      highlights: [
        'Built event management platforms supporting high concurrent attendee traffic.',
        'Led UI/UX redesigns and implemented automated data export & ticketing systems.',
        'Recognized as Team Lead across campus entrepreneurship initiatives.'
      ]
    },
    {
      role: 'Campus Ambassador',
      company: 'E-Cell IIT Bombay',
      period: 'Ambassadorship',
      location: 'IIT Bombay / Pan-India',
      type: 'National Recognition',
      icon: <Award size={20} color="#fbbf24" />,
      badge: 'Top 500 Nationwide',
      description: 'Selected into the prestigious Top 500 Campus Ambassadors across India, orchestrating entrepreneurship outreach and startup initiatives.',
      highlights: [
        'Organized and drove student participation for national-level innovation challenges.',
        'Promoted entrepreneurial thinking and digital technology adoption.',
        'Earned national ranking among thousands of applicant ambassadors.'
      ]
    }
  ];

  return (
    <section id="experience" style={{ background: 'var(--color-bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} /> Journey & Experience
          </div>
          <h2 className="section-title">
            Professional Experience & <span className="text-gradient">Leadership</span>
          </h2>
          <p className="section-subtitle">
            A track record of technical leadership, startup founding, AI internship training, and national-level entrepreneurship ambassadorship.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          
          {/* Central spine line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '30px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--color-accent), #38ef7d, #8b5cf6, transparent)',
            zIndex: 0
          }} className="timeline-spine"></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start'
                }}
                className="timeline-item"
              >
                {/* Node marker */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'rgba(19, 28, 34, 0.95)',
                  border: '2px solid rgba(0, 210, 211, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 15px rgba(0, 210, 211, 0.25)',
                  zIndex: 2
                }}>
                  {exp.icon}
                </div>

                {/* Content Card */}
                <div
                  className="glass-card"
                  style={{
                    flex: 1,
                    background: 'rgba(19, 28, 34, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '1.75rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                          {exp.role}
                        </h3>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          background: 'rgba(0, 210, 211, 0.15)',
                          color: 'var(--color-accent)',
                          border: '1px solid rgba(0, 210, 211, 0.3)'
                        }}>
                          {exp.badge}
                        </span>
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#cbd5e1', marginTop: '0.25rem' }}>
                        {exp.company}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={14} color="var(--color-accent)" /> {exp.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={14} color="var(--color-accent)" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle size={15} color="var(--color-accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.86rem', color: '#cbd5e1' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 650px) {
          .timeline-spine {
            left: 20px !important;
          }
          .timeline-item {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
