import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'your_access_key_here' || accessKey.trim() === '') {
      setIsSubmitting(false);
      setErrorMessage(
        'Please add your free access key to the .env file (VITE_WEB3FORMS_ACCESS_KEY). Get one instantly at https://web3forms.com.'
      );
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          from_name: `${formData.name} via Portfolio`,
          botcheck: ''
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 7000);
      } else {
        setErrorMessage(data.message || 'Failed to send message. Please try again or email directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Network error occurred. Please verify your connection or email directly at salmanx.dev@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--color-bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} /> Get In Touch
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Extraordinary Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a project in mind, an internship or freelance opportunity, or just want to discuss AI & tech — my inbox is always open.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem' }} className="contact-grid">
          
          {/* Left Contact Info Cards */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
              Direct Contact Information
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Feel free to reach out via email, phone, or connect on LinkedIn and GitHub. I typically respond within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              
              {/* Email Card */}
              <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 210, 211, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Official Email</div>
                    <a href="mailto:salmanx.dev@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>
                      salmanx.dev@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('salmanx.dev@gmail.com', 'email')}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '0.45rem',
                    color: copiedEmail ? '#38ef7d' : '#cbd5e1',
                    cursor: 'pointer'
                  }}
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(56, 239, 125, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38ef7d'
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Direct Phone / WhatsApp</div>
                    <a href="tel:+917223828926" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}>
                      +91-7223828926
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+917223828926', 'phone')}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '0.45rem',
                    color: copiedPhone ? '#38ef7d' : '#cbd5e1',
                    cursor: 'pointer'
                  }}
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a78bfa'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Location & Base</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>
                    Bhopal, Madhya Pradesh, India
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    JNCT / LNCT Campus
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.75rem', fontWeight: 600 }}>
                CONNECT ON SOCIAL NETWORKS
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href="https://github.com/salmanxdev"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
                >
                  <GithubIcon size={16} /> GitHub Profile
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem', color: 'var(--color-accent)' }}
                >
                  <LinkedinIcon size={16} /> LinkedIn Profile
                </a>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div
            className="glass-card"
            style={{
              background: 'rgba(19, 28, 34, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2.5rem'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
              Fill out the form below and I will get back to you promptly.
            </p>

            {isSent && (
              <div style={{
                padding: '1rem',
                borderRadius: '10px',
                background: 'rgba(56, 239, 125, 0.15)',
                border: '1px solid rgba(56, 239, 125, 0.4)',
                color: '#38ef7d',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Check size={18} style={{ flexShrink: 0 }} /> Thank you! Your message has been sent directly to my email.
              </div>
            )}

            {errorMessage && (
              <div style={{
                padding: '1rem',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#f87171',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                lineHeight: 1.5
              }}>
                <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'var(--font-main)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'var(--font-main)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Project Inquiry / Internship / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    fontFamily: 'var(--font-main)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project, goals, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    fontFamily: 'var(--font-main)',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-accent"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  fontSize: '0.95rem',
                  opacity: isSubmitting ? 0.75 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending Message...</span>
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
