import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(13, 19, 23, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
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
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
              Salman<span style={{ color: 'var(--color-accent)' }}>.dev</span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#cbd5e1',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-actions">
          <a
            href="mailto:salmanx.dev@gmail.com"
            className="btn btn-accent"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
          >
            Hire Me <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          style={{
            display: 'block',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem',
            cursor: 'pointer',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(13, 19, 23, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: '#e2e8f0',
                fontSize: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a
              href="mailto:salmanx.dev@gmail.com"
              className="btn btn-accent"
              style={{ flex: 1, textAlign: 'center' }}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}

      {/* In-component Responsive Media Queries */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-menu { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
