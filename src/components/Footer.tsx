import React from 'react';
import { Code2, ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{
      background: '#090e11',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '4.5rem 0 2rem 0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3.5rem'
        }} className="footer-grid">
          
          {/* Column 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--color-accent) 0%, #38ef7d 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0d1317',
                boxShadow: '0 0 15px rgba(0, 210, 211, 0.4)'
              }}>
                <Code2 size={22} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
                Mohammad Salman Khan
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.65, maxWidth: '380px', marginBottom: '1.5rem' }}>
              AI/ML Developer & Full-Stack Engineer passionate about scalable web architecture, smart farming AI, and civic intelligence solutions.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://github.com/salmanxdev"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href="mailto:salmanx.dev@gmail.com"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
              Navigation Links
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.6rem'
            }}>
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Status */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
              Direct Inquiries
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <Mail size={16} color="var(--color-accent)" />
                <a href="mailto:salmanx.dev@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  salmanx.dev@gmail.com
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <Phone size={16} color="var(--color-accent)" />
                <a href="tel:+917223828926" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  +91-7223828926
                </a>
              </div>
            </div>

            <div style={{
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              background: 'rgba(0, 210, 211, 0.08)',
              border: '1px solid rgba(0, 210, 211, 0.2)',
              fontSize: '0.8rem',
              color: 'var(--color-accent)'
            }}>
              ✨ Open for Full-Time Roles, Internships & Freelance Projects.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} Mohammad Salman Khan. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#cbd5e1',
              padding: '0.45rem 0.9rem',
              fontSize: '0.82rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 210, 211, 0.15)';
              e.currentTarget.style.color = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = '#cbd5e1';
            }}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
