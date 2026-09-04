import React from 'react';
import { GraduationCap, Award, Compass, Cpu, CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/about_img.png';

const About: React.FC = () => {
  const highlights = [
    {
      title: 'B.Tech in AI & Machine Learning',
      desc: 'Pursuing 2024 - 2028 with focus on Deep Learning, NLP, and intelligent architectures.',
      icon: <GraduationCap size={22} className="text-accent" />
    },
    {
      title: 'Leadership & Team Lead',
      desc: 'Leading the Web & Technical Team at JNCT E-Cell, driving digital products and event portals.',
      icon: <Award size={22} className="text-accent" />
    },
    {
      title: 'Startup & Innovation Builder',
      desc: 'Technical Founder of AllyNet and active participant in startup ecosystems like Spark Tank.',
      icon: <Compass size={22} className="text-accent" />
    },
    {
      title: 'Production-Ready Architecture',
      desc: 'Expertise in full-stack web, Android development, Firebase cloud, and MongoDB pipelines.',
      icon: <Cpu size={22} className="text-accent" />
    }
  ];

  return (
    <section id="about" style={{ background: 'rgba(13, 19, 23, 0.6)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">
            Engineering Intelligent Systems & <span className="text-gradient">Modern Web Experiences</span>
          </h2>
          <p className="section-subtitle">
            A developer who bridges the gap between deep machine learning intelligence and intuitive, production-grade applications.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '3.5rem', alignItems: 'center' }} className="about-grid">
          
          {/* Left visual side */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'var(--color-bg-card)',
              position: 'relative'
            }}>
              <img 
                src={aboutImg} 
                alt="Salman Khan Workspace" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(13,19,23,0.85) 0%, rgba(13,19,23,0.1) 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem'
              }}>
                <div>
                  <div style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Philosophy
                  </div>
                  <p style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>
                    "Turning vision into scalable, AI-powered digital realities."
                  </p>
                </div>
              </div>
            </div>

            {/* Float Card */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              maxWidth: '240px',
              padding: '1rem',
              border: '1px solid rgba(0, 210, 211, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <CheckCircle2 size={18} color="var(--color-accent)" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>Problem Solver</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                Committed to writing clean, maintainable, and high-performance code.
              </p>
            </div>
          </div>

          {/* Right Details side */}
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.2rem', color: '#fff' }}>
              Building the Next Generation of <span className="text-accent">AI-Enabled Apps</span>
            </h3>
            
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              I am Mohammad Salman Khan, an aspiring AI/ML developer and full-stack software engineer based in Bhopal, India. Currently pursuing my B.Tech in Artificial Intelligence & Machine Learning (graduating 2028), I lead the Web & Technical team at JNCT E-Cell and serve as the Technical Founder of AllyNet.
            </p>

            <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              My technical journey spans developing civic grievance platforms, AI smart farming tools, event ticketing backends with Firebase, and deploying conversational AI models with neural networks.
            </p>

            {/* Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem', marginBottom: '2.5rem' }} className="about-cards-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.2rem' }}>
                  <div style={{ marginBottom: '0.6rem' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-accent">
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View Portfolio
              </a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
