import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

import janSevaImg from '../assets/Screenshot_2025_1001_133556 1.png';
import allynetImg from '../assets/Screenshot_2025_1001_133556 1 (1).png';
import krishiImg from '../assets/Screenshot 2026-05-01 195708 1.png';
import comicpreneurImg from '../assets/comicpreneur_preview.png';
import bazarioImg from '../assets/bazario_preview.png';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'aiml' | 'ecommerce';
  image: string;
  description: string;
  longDescription: string;
  tags: string[];
  keyFeatures: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'bazario',
      title: 'Bazario – Live Stream Commerce',
      subtitle: 'Next-gen multi-vendor e-commerce with real-time video shopping',
      category: 'ecommerce',
      image: bazarioImg,
      description: 'Interactive live commerce marketplace integrating Agora RTC video streaming, seller dashboards, in-app messaging, multi-category inventory, and streamlined order checkout.',
      longDescription: 'Bazario re-imagines online shopping by bringing real-time interactive video broadcasts directly to e-commerce. Buyers can view live merchant product demonstrations, interact via real-time comments, and place one-click orders, while merchants manage stores, products, and broadcast streams from dedicated dashboards.',
      tags: ['React.js', 'Agora RTC SDK', 'Firebase', 'Real-time Chat', 'Tailwind CSS', 'Vite'],
      keyFeatures: [
        'Interactive live video broadcast shopping powered by Agora RTC',
        'Real-time buyer-seller instant messaging and chat channels',
        'Comprehensive Seller & Admin dashboard with catalog management',
        'Dynamic search, category filters, cart, and instant order pipeline'
      ],
      liveUrl: 'https://bazario-1.web.app/',
      githubUrl: 'https://github.com/salmanxdev/Bazario_Web',
      status: 'Live & Featured'
    },
    {
      id: 'allynet',
      title: 'AllyNet – Mentorship & Alumni Network',
      subtitle: 'Next-gen student-alumni networking, career roadmaps & mentorship ecosystem',
      category: 'web',
      image: allynetImg,
      description: 'Comprehensive campus and alumni networking portal enabling 1-on-1 mentorship bookings, alumni career directory, collaborative feed, and student resource vaults.',
      longDescription: 'As Technical Founder, engineered the full-stack web platform for AllyNet to connect college students with experienced alumni mentors. Features include role-based authentication (Student, Alumni, Admin), verified mentor directory, appointment booking pipelines, interactive community discussion feeds, and digital academic resource sharing.',
      tags: ['React.js', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS', 'Vite', 'Full Stack'],
      keyFeatures: [
        'Dynamic verified alumni directory with mentorship scheduling',
        'Community discussion feed with media uploads and filters',
        'Curated career roadmaps and academic resource downloads',
        'Role-based permissions for students, alumni, and administrators'
      ],
      liveUrl: 'https://allynet-com.web.app/',
      githubUrl: 'https://github.com/Allynetcom/allynet',
      status: 'Startup Venture'
    },
    {
      id: 'comicpreneur',
      title: 'ComicPreneur – Event Platform',
      subtitle: 'Dynamic event registration, QR validation & real-time analytics',
      category: 'web',
      image: comicpreneurImg,
      description: 'High-performance event management and ticketing platform featuring real-time Firebase backend, role-based admin dashboard, and instant Excel export.',
      longDescription: 'ComicPreneur was created to handle hundreds of concurrent registrations seamlessly during college entrepreneurship summits. Built with React and Firebase, it features atomic transaction ticketing, instant notifications, automated confirmation passes, and advanced analytics exports for organizers.',
      tags: ['React.js', 'Firebase Firestore', 'Role-Based Auth', 'Excel Export API', 'Tailwind CSS'],
      keyFeatures: [
        'Real-time Firestore live attendee synchronisation and capacity locks',
        'Secure multi-role Admin Dashboard with live registration metrics',
        'One-click Excel (.xlsx) attendee data export for organizers',
        'Automated receipt and digital QR pass generation'
      ],
      liveUrl: 'https://comicpreneur-16.web.app/',
      githubUrl: 'https://github.com/salmanxdev/ComicPreneur',
      status: 'Live & In Use'
    },
    {
      id: 'krishi-mitra',
      title: 'Krishi-Mitra – Smart Farming Assistant',
      subtitle: 'AI-driven agricultural assistant & plant pathology detector',
      category: 'aiml',
      image: krishiImg,
      description: 'Intelligent agricultural platform equipped with live Weather API forecasting, conversational AI chatbot, and computer vision plant disease detection.',
      longDescription: 'Krishi-Mitra empowers rural and modern farmers by providing real-time agronomic insights in regional languages. It integrates a computer vision model to diagnose crop diseases from leaf photos and pairs users with an intelligent chatbot for instant remedy guidance alongside live hyper-local weather alerts.',
      tags: ['React.js', 'Computer Vision ML', 'AI Chatbot', 'Weather REST API', 'Full Stack'],
      keyFeatures: [
        'AI Computer Vision for instant plant leaf disease diagnosis',
        'Multilingual conversational assistant for localized farming queries',
        'Real-time hyper-local weather forecast radar integration',
        'Crop advisory database and farmer log management'
      ],
      liveUrl: 'https://krishi-mitr-web.vercel.app/',
      githubUrl: 'https://github.com/salmanxdev/krishi-mitra',
      status: 'Featured AI Project'
    },
    {
      id: 'jan-seva',
      title: 'Jan-Seva – Citizen Grievance Portal',
      subtitle: 'Unified civic complaint management, AI triage & government service portal',
      category: 'web',
      image: janSevaImg,
      description: 'Digital governance platform streamlining citizen complaint submissions, automated department triage, geo-tagged photo evidence, and transparent resolution tracking.',
      longDescription: 'Jan-Seva simplifies digital governance for municipal and district communities. It combines an automated AI triage chatbot to categorize citizen grievances with cloud document storage, GPS-tagged photo evidence, and real-time status tracking for transparent civic accountability.',
      tags: ['React.js', 'Firebase Auth', 'Cloud Storage', 'AI Chatbot', 'Tailwind CSS', 'REST APIs'],
      keyFeatures: [
        'Citizen grievance submission with GPS & photo evidence upload',
        'Automated AI chatbot assisting users in finding public services',
        'Live tracking pipeline with end-to-end resolution audit trail',
        'Secure cloud document vault for government verification'
      ],
      liveUrl: 'https://jan-seva-web.vercel.app/',
      githubUrl: 'https://github.com/salmanxdev/Jan-Seva-web',
      status: 'Civic Tech Innovation'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : activeFilter === 'web'
    ? projects.filter(p => p.category === 'web' || p.category === 'ecommerce')
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" style={{ background: 'rgba(13, 19, 23, 0.95)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} /> Portfolio & Showcase
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore 5 production-grade applications I've engineered — spanning live stream commerce, alumni mentorship ecosystems, event platforms, agricultural AI, and civic intelligence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {[
            { id: 'all', label: 'All Projects (5)' },
            { id: 'web', label: 'Web & Cloud' },
            { id: 'ecommerce', label: 'Live Commerce' },
            { id: 'aiml', label: 'AI/ML & Vision' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                padding: '0.55rem 1.3rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeFilter === tab.id ? '1px solid var(--color-accent)' : '1px solid rgba(255,255,255,0.1)',
                background: activeFilter === tab.id ? 'rgba(0, 210, 211, 0.15)' : 'rgba(255,255,255,0.03)',
                color: activeFilter === tab.id ? 'var(--color-accent)' : '#94a3b8'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '18px',
                padding: '1.25rem',
                background: 'rgba(19, 28, 34, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden'
              }}
            >
              {/* Project Image Preview with status badge */}
              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#090e11',
                height: '210px',
                marginBottom: '1.25rem'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                {/* Status pill on image */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  background: 'rgba(13, 19, 23, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(0, 210, 211, 0.3)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)'
                }}>
                  {project.status}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div style={{ marginBottom: '0.8rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 500, margin: 0 }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
                flex: 1
              }}>
                {project.description}
              </p>

              {/* Tech Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
                marginBottom: '1.5rem'
              }}>
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#cbd5e1',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '0.6rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-accent"
                  style={{ flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.82rem', whiteSpace: 'nowrap' }}
                >
                  Case Breakdown <ArrowUpRight size={14} />
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                  style={{
                    padding: '0.6rem 0.85rem',
                    color: 'var(--color-accent)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.82rem',
                    textDecoration: 'none'
                  }}
                  title="Visit Live Website"
                >
                  <ExternalLink size={15} /> <span>Live</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                  style={{
                    padding: '0.6rem 0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.82rem',
                    textDecoration: 'none'
                  }}
                  title="View GitHub Repository"
                >
                  <GithubIcon size={15} /> <span>Code</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(9, 14, 17, 0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#131c22',
              borderRadius: '20px',
              border: '1px solid rgba(0, 210, 211, 0.4)',
              padding: '2rem',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase' }}>
                  {selectedProject.category.toUpperCase()} PROJECT
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginTop: '0.2rem' }}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem'
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {selectedProject.longDescription}
            </p>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.8rem' }}>
              Architectural Highlights & Features
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
              {selectedProject.keyFeatures.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--color-accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent"
                style={{ flex: 1, minWidth: '160px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <ExternalLink size={16} /> Visit Live Website
              </a>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-glass"
                style={{ flex: 1, minWidth: '160px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <GithubIcon size={16} /> View GitHub Repo
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-glass"
                style={{ padding: '0.6rem 1.25rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

