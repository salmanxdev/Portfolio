import React, { useState } from 'react';
import { 
  FileText, 
  ArrowRight, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Workflow, 
  Bot 
} from 'lucide-react';

interface CaseStudyData {
  id: string;
  title: string;
  badge: string;
  clientOrContext: string;
  timeline: string;
  problem: string;
  solution: string;
  architectureSteps: { step: string; title: string; desc: string; icon: React.ReactNode }[];
  impactMetrics: { value: string; label: string; sub: string }[];
  technologies: string[];
}

const CaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('jan-seva');

  const studies: Record<string, CaseStudyData> = {
    'jan-seva': {
      id: 'jan-seva',
      title: 'Jan-Seva: Scaling Citizen Grievance Redressal & Public Services',
      badge: 'Civic Tech & AI Redressal',
      clientOrContext: 'Civic Governance Platform',
      timeline: '2025 - 2026',
      problem: 'Citizens often face fragmented portals, manual paperwork, and zero transparency when reporting local community issues or applying for municipal services, leading to backlog and distrust.',
      solution: 'Architected a unified Web + Mobile platform with an automated conversational AI assistant to intake and classify complaints, store geo-tagged evidence in Firebase, and provide real-time status pipelines.',
      architectureSteps: [
        {
          step: '01',
          title: 'Intelligent AI Intake',
          desc: 'Citizen reports issue via smart conversational interface; NLP auto-classifies department and urgency.',
          icon: <Bot size={18} color="var(--color-accent)" />
        },
        {
          step: '02',
          title: 'Evidence & Geo-Tag Storage',
          desc: 'Media and GPS location are uploaded to Firebase Cloud Storage with strict access security rules.',
          icon: <Database size={18} color="#38ef7d" />
        },
        {
          step: '03',
          title: 'Administrative Action Pipeline',
          desc: 'Municipal officers view real-time triage dashboards, assign field staff, and update ticket states.',
          icon: <Workflow size={18} color="#a78bfa" />
        },
        {
          step: '04',
          title: 'Transparent Tracking & SMS Alerts',
          desc: 'Citizens track resolution stage live with full audit trail and resolution verification photos.',
          icon: <ShieldCheck size={18} color="#fbbf24" />
        }
      ],
      impactMetrics: [
        { value: '70%', label: 'Faster Triage', sub: 'Automated AI classification' },
        { value: '< 1.2s', label: 'Dashboard Latency', sub: 'Real-time sync performance' },
        { value: '100%', label: 'Traceability', sub: 'End-to-end audit trails' },
        { value: '24/7', label: 'Availability', sub: 'Continuous cloud uptime' }
      ],
      technologies: ['React.js', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'Conversational AI', 'Tailwind CSS']
    },
    'krishi-mitra': {
      id: 'krishi-mitra',
      title: 'Krishi-Mitra: AI-Driven Plant Pathology & Hyper-Local Agronomy',
      badge: 'AgTech & Computer Vision',
      clientOrContext: 'Smart Farming Assistance',
      timeline: '2025 - 2026',
      problem: 'Farmers in rural regions lack immediate access to agricultural experts, resulting in delayed plant disease diagnosis, improper pesticide usage, and major crop yield loss.',
      solution: 'Built an Android mobile application combining leaf-image computer vision disease detection, live Weather API forecasts, and an AI chatbot in regional vernacular.',
      architectureSteps: [
        {
          step: '01',
          title: 'Camera Leaf Capture',
          desc: 'Farmer captures photo of diseased crop leaf directly in Android camera interface.',
          icon: <Cpu size={18} color="var(--color-accent)" />
        },
        {
          step: '02',
          title: 'Computer Vision Inference',
          desc: 'ML vision pipeline evaluates symptoms and identifies pathological condition with confidence score.',
          icon: <Bot size={18} color="#38ef7d" />
        },
        {
          step: '03',
          title: 'AI Advisory & Chatbot',
          desc: 'Interactive assistant delivers remedy steps, chemical dosages, and preventive measures in native language.',
          icon: <Workflow size={18} color="#a78bfa" />
        },
        {
          step: '04',
          title: 'Weather & MongoDB Sync',
          desc: 'Real-time weather radar data combined with farm log records stored on MongoDB backend.',
          icon: <Database size={18} color="#fbbf24" />
        }
      ],
      impactMetrics: [
        { value: '92%+', label: 'Diagnosis Accuracy', sub: 'Tested across common crop leaves' },
        { value: 'Instant', label: 'Expert Advice', sub: 'Zero wait time for farmers' },
        { value: 'Multilingual', label: 'Support', sub: 'Regional dialect adaptability' },
        { value: 'Offline-ready', label: 'Cached Guides', sub: 'Optimized for low-bandwidth zones' }
      ],
      technologies: ['Android SDK', 'Java / Kotlin', 'Computer Vision ML', 'MongoDB', 'Weather REST API', 'AI Chatbot']
    },
    'comicpreneur': {
      id: 'comicpreneur',
      title: 'ComicPreneur: High-Concurrency Event Ticketing & Admin Dashboard',
      badge: 'Full-Stack Scalability',
      clientOrContext: 'College Summit & Tech Portals',
      timeline: '2024 - 2025',
      problem: 'College entrepreneurship summit registration crashed during rush hours due to static forms, lack of real-time seat lock, and manual spreadsheet consolidation.',
      solution: 'Built a dynamic React + Firebase event registration engine with real-time seat counter, instant QR pass generation, and 1-click Excel bulk report exports.',
      architectureSteps: [
        {
          step: '01',
          title: 'Instant Registration UI',
          desc: 'Lightweight, mobile-optimized form with real-time validation and input sanitation.',
          icon: <Zap size={18} color="var(--color-accent)" />
        },
        {
          step: '02',
          title: 'Firestore Concurrency Sync',
          desc: 'Atomic transactions prevent duplicate slot booking even during high traffic surges.',
          icon: <Database size={18} color="#38ef7d" />
        },
        {
          step: '03',
          title: 'Role-Based Admin Console',
          desc: 'Organizers monitor live entry rates, filter cohorts, and approve VIP tickets.',
          icon: <ShieldCheck size={18} color="#a78bfa" />
        },
        {
          step: '04',
          title: 'Automated Excel Export',
          desc: 'Dynamic spreadsheet generation engine for instant logistics and attendance check-in.',
          icon: <BarChart3 size={18} color="#fbbf24" />
        }
      ],
      impactMetrics: [
        { value: '1000+', label: 'Concurrent Users', sub: 'Zero latency lag or dropped sessions' },
        { value: '0', label: 'Overbookings', sub: 'Atomic transaction locks' },
        { value: '1-Click', label: 'Excel Export', sub: 'Saved 10+ hours manual entry' },
        { value: '100%', label: 'Uptime', sub: 'Firebase serverless backend' }
      ],
      technologies: ['React.js', 'Firebase Firestore', 'ExcelJS / SheetJS', 'Tailwind CSS', 'Vite']
    }
  };

  const current = studies[activeTab];

  return (
    <section id="case-study" style={{ background: 'rgba(13, 19, 23, 0.98)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <FileText size={14} /> Architectural Deep-Dive
          </div>
          <h2 className="section-title">
            Engineering <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            An in-depth look into the system design, architectural choices, and measurable impact behind my flagship projects.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {[
            { id: 'jan-seva', label: 'Jan-Seva Citizen Platform' },
            { id: 'krishi-mitra', label: 'Krishi-Mitra AI Farming' },
            { id: 'comicpreneur', label: 'ComicPreneur Event Scaler' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeTab === tab.id ? '1px solid var(--color-accent)' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === tab.id ? 'rgba(0, 210, 211, 0.18)' : 'rgba(19, 28, 34, 0.8)',
                color: activeTab === tab.id ? 'var(--color-accent)' : '#94a3b8'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Study Card Container */}
        <div
          className="glass-card"
          style={{
            background: 'rgba(19, 28, 34, 0.9)',
            border: '1px solid rgba(0, 210, 211, 0.3)',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          {/* Header Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-accent)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '0.2rem 0.6rem',
                background: 'rgba(0, 210, 211, 0.1)',
                borderRadius: '6px',
                border: '1px solid rgba(0, 210, 211, 0.2)'
              }}>
                {current.badge}
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginTop: '0.6rem' }}>
                {current.title}
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', color: '#94a3b8', fontSize: '0.88rem' }}>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>DOMAIN</span>
                <strong style={{ color: '#fff' }}>{current.clientOrContext}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>TIMELINE</span>
                <strong style={{ color: '#fff' }}>{current.timeline}</strong>
              </div>
            </div>
          </div>

          {/* Problem vs Solution Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }} className="case-problem-grid">
            <div style={{
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '14px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#f87171', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ⚠️ The Challenge & Problem
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                {current.problem}
              </p>
            </div>

            <div style={{
              background: 'rgba(56, 239, 125, 0.05)',
              border: '1px solid rgba(56, 239, 125, 0.2)',
              borderRadius: '14px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: '#38ef7d', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ✨ Engineered Solution
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                {current.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Workflow size={20} color="var(--color-accent)" /> End-to-End System Flow
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem'
            }} className="case-steps-grid">
              {current.architectureSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}>
                      STEP {step.step}
                    </span>
                    <div style={{ padding: '0.35rem', borderRadius: '6px', background: 'rgba(255,255,255,0.06)' }}>
                      {step.icon}
                    </div>
                  </div>
                  <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                    {step.title}
                  </h5>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Impact Metrics */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 210, 211, 0.1) 0%, rgba(139, 92, 246, 0.08) 100%)',
            border: '1px solid rgba(0, 210, 211, 0.25)',
            borderRadius: '16px',
            padding: '1.75rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
              📊 Impact & Performance Metrics
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem'
            }} className="case-metrics-grid">
              {current.impactMetrics.map((met, mIdx) => (
                <div key={mIdx}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                    {met.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginTop: '0.3rem' }}>
                    {met.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                    {met.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>Stack:</span>
              {current.technologies.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn btn-accent" style={{ fontSize: '0.88rem', padding: '0.55rem 1.25rem' }}>
              Discuss Architecture <ArrowRight size={15} />
            </a>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-problem-grid, .case-steps-grid, .case-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudy;
