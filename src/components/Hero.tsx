import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  Bot, 
  Code 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import salmanProfile from '../assets/salman_profile.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" style={{ paddingTop: '8rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glows */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(0,210,211,0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Hero Content */}
          <div>
            {/* Status Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              background: 'rgba(0, 210, 211, 0.1)',
              border: '1px solid rgba(0, 210, 211, 0.3)',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--color-accent)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#38ef7d',
                boxShadow: '0 0 10px #38ef7d',
                display: 'inline-block'
              }}></span>
              Available for Opportunities & Collaborations
            </div>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>
              Hello, I am
            </h2>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              marginBottom: '1.2rem',
              color: '#ffffff'
            }}>
              Mohammad <span className="text-gradient">Salman Khan</span>
            </h1>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)'
              }}>
                [ AI/ML Developer & Full-Stack Engineer ]
              </span>
            </div>

            <p style={{
              fontSize: '1.05rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '580px'
            }}>
              Passionate about engineering scalable digital products and intelligent systems. 
              Experienced in building full-stack web and Android applications with <strong>React, Firebase, MongoDB</strong>, and integrating cutting-edge <strong>Machine Learning & Chatbots</strong>.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-accent">
                Explore My Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Connect
              </a>
              <a 
                href="mailto:salmanx.dev@gmail.com" 
                className="btn btn-glass"
                title="Email Salman"
              >
                <Mail size={16} /> salmanx.dev@gmail.com
              </a>
            </div>

            {/* Quick Metrics / Highlights Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }} className="hero-stats">
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}>
                  Top 500
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  IIT Bombay E-Cell Ambassador
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38ef7d', fontFamily: 'var(--font-mono)' }}>
                  Team Lead
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Web & Tech @ E-Cell JNCT
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>
                  Founder
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Technical Founder @ AllyNet
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Artistic Frame Backdrop */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              borderRadius: '24px',
              padding: '12px',
              background: 'linear-gradient(145deg, rgba(0, 210, 211, 0.3) 0%, rgba(26, 38, 46, 0.8) 50%, rgba(139, 92, 246, 0.25) 100%)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0, 210, 211, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}>
              
              {/* Image container */}
              <div style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#0d1317',
              }}>
                <img 
                  src={salmanProfile} 
                  alt="Mohammad Salman Khan - AI/ML & Web Developer" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                />

                {/* Gradient overlay at bottom */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '80px',
                  background: 'linear-gradient(to top, rgba(13, 19, 23, 0.95), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
                      Mohammad Salman Khan
                    </p>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-accent)' }}>
                      E-Cell JNCT, Bhopal • AIML '28
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a 
                      href="https://github.com/salmanxdev" 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff'
                      }}
                      title="GitHub"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(0,210,211,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent)'
                      }}
                      title="LinkedIn"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Right */}
              <div 
                className="animate-float" 
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  background: 'rgba(19, 28, 34, 0.92)',
                  border: '1px solid rgba(0, 210, 211, 0.4)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: 'rgba(0, 210, 211, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)'
                }}>
                  <Bot size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Specialization</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>AI & Chatbots</div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Left */}
              <div 
                className="animate-float-delayed" 
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '-20px',
                  background: 'rgba(19, 28, 34, 0.92)',
                  border: '1px solid rgba(56, 239, 125, 0.4)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: 'rgba(56, 239, 125, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38ef7d'
                }}>
                  <Code size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Stack</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>React • Firebase • Mongo</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-stats {
            justify-content: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid .btn {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
