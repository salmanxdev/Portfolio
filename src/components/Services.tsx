import React from 'react';
import { 
  Globe, 
  Bot, 
  Smartphone, 
  Database, 
  Rocket, 
  Check, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { FigmaIcon } from './Icons';

const Services: React.FC = () => {
  const services = [
    {
      id: 'web-dev',
      title: 'Full-Stack Web Development',
      icon: <Globe size={26} color="var(--color-accent)" />,
      description: 'Building fast, responsive, and SEO-friendly modern web applications with React, TypeScript, and Tailwind CSS.',
      features: [
        'Custom interactive Single Page Apps (SPAs)',
        'Admin dashboards & analytics portals',
        'State management & fast rendering cycles',
        'Mobile-first responsive UX across all screen sizes'
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI/ML & Conversational Chatbots',
      icon: <Bot size={26} color="#38ef7d" />,
      description: 'Integrating intelligent machine learning capabilities, conversational AI assistants, and automated recommendation pipelines.',
      features: [
        'Custom conversational chatbots & support bots',
        'Supervised ML regression & classification models',
        'Computer vision & image classification engines',
        'Seamless LLM & external AI API integration'
      ]
    },
    {
      id: 'mobile-dev',
      title: 'Android Mobile App Development',
      icon: <Smartphone size={26} color="#a78bfa" />,
      description: 'Engineering native Android applications with Android Studio, Java/Kotlin, and cloud backend synchronization.',
      features: [
        'Native Android UI with smooth animations',
        'Weather, GPS, Camera, and sensor API integration',
        'Offline caching and resilient data sync',
        'Secure authentication & cloud media uploads'
      ]
    },
    {
      id: 'cloud-db',
      title: 'Backend & Database Architecture',
      icon: <Database size={26} color="#fbbf24" />,
      description: 'Designing robust database schemas, secure authentication rules, and RESTful API endpoints on Firebase and MongoDB.',
      features: [
        'Firebase Firestore & Authentication setup',
        'MongoDB NoSQL database design & aggregation',
        'Role-based access control & security rules',
        'Automated data exports (Excel, JSON, PDF)'
      ]
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design & Prototyping',
      icon: <FigmaIcon size={26} color="#f472b6" />,
      description: 'Crafting aesthetic, high-converting interfaces in Figma and transforming them into pixel-perfect frontend code.',
      features: [
        'Modern dark/light glassmorphic UI design',
        'Interactive wireframes and user flow mapping',
        'Reusable component design systems',
        'Accessibility and intuitive micro-interactions'
      ]
    },
    {
      id: 'mvp-consulting',
      title: 'Startup MVP & Tech Consultation',
      icon: <Rocket size={26} color="#38bdf8" />,
      description: 'Guiding early-stage founders, student startups, and hackathon teams from concept to deployed scalable MVP.',
      features: [
        'End-to-end technical stack selection',
        'Rapid MVP prototyping within tight timelines',
        'Deployment on Firebase, Vercel, or Netlify',
        'Codebase audits, refactoring & mentorship'
      ]
    }
  ];

  return (
    <section id="services" style={{ background: 'var(--color-bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} /> What I Offer
          </div>
          <h2 className="section-title">
            Services & <span className="text-gradient">Technical Solutions</span>
          </h2>
          <p className="section-subtitle">
            From intelligent AI integrations to production-grade full-stack web and mobile apps, here is how I can help bring your digital ideas to life.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((srv) => (
            <div
              key={srv.id}
              className="glass-card"
              style={{
                background: 'rgba(19, 28, 34, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  {srv.icon}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                  {srv.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {srv.description}
                </p>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Check size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="btn btn-outline"
                style={{
                  width: '100%',
                  fontSize: '0.88rem',
                  padding: '0.6rem 1rem',
                  marginTop: 'auto'
                }}
              >
                Request Service <ArrowRight size={15} />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
