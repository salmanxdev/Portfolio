import React from 'react';
import { MessageSquare, Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  rating: number;
  badge: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Salman has consistently demonstrated exceptional technical leadership as our Web & Technical Team Lead at JNCT E-Cell. His work on event registration platforms like ComicPreneur and his ability to mentor juniors make him a standout engineer.",
      author: "E-Cell Faculty Advisor & Mentor",
      role: "Head of Entrepreneurship Development",
      organization: "JNCT E-Cell (LNCT Group)",
      rating: 5,
      badge: "Campus Leadership"
    },
    {
      quote: "During his AI/ML Internship at Kodacy, Salman displayed an impressive grasp of machine learning fundamentals, neural network structures, and conversational chatbot systems. He delivers clean, well-documented code with high enthusiasm.",
      author: "Technical Program Lead",
      role: "AI & Emerging Tech Directorate",
      organization: "Kodacy (AICTE & SPACE)",
      rating: 5,
      badge: "AI/ML Internship Mentor"
    },
    {
      quote: "Working alongside Salman on AllyNet has been remarkable. His knack for designing seamless database flows with Firebase and MongoDB while keeping the user experience snappy and modern is first-rate.",
      author: "Co-Founder & Collaborator",
      role: "Product Strategy Lead",
      organization: "AllyNet Startup Team",
      rating: 5,
      badge: "Startup Co-Builder"
    },
    {
      quote: "Salman stood out among thousands of applicants nationwide to rank in the Top 500 Campus Ambassadors for E-Cell IIT Bombay. His drive to bring technology and entrepreneurship together is truly commendable.",
      author: "Campus Relations Coordinator",
      role: "Student Ambassadorship Lead",
      organization: "E-Cell IIT Bombay",
      rating: 5,
      badge: "National Ambassadorship"
    }
  ];

  return (
    <section id="testimonials" style={{ background: 'rgba(13, 19, 23, 0.7)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} /> Endorsements & Feedback
          </div>
          <h2 className="section-title">
            What Mentors & <span className="text-gradient">Collaborators Say</span>
          </h2>
          <p className="section-subtitle">
            Feedback and recommendations from mentors, startup co-founders, and organization leads who have worked directly with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                background: 'rgba(19, 28, 34, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Quote Icon & Badge */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0, 210, 211, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)'
                  }}>
                    <Quote size={20} />
                  </div>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(0, 210, 211, 0.2)'
                  }}>
                    {t.badge}
                  </span>
                </div>

                {/* Star rating */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} size={15} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>

                {/* Quote text */}
                <p style={{
                  fontSize: '0.92rem',
                  color: '#cbd5e1',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                  fontStyle: 'italic'
                }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,210,211,0.2) 0%, rgba(139,92,246,0.3) 100%)',
                  border: '1px solid rgba(0,210,211,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: '#fff'
                }}>
                  {t.author.charAt(0)}
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                    {t.author}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', margin: 0 }}>
                    {t.role}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
                    {t.organization}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
