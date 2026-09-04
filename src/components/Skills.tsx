import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Database, 
  Bot, 
  Wrench, 
  Terminal, 
  Sparkles
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: number; note: string; tag: string }[];
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      id: 'languages',
      name: 'Programming Languages',
      icon: <Code2 size={20} />,
      skills: [
        { name: 'Python', level: 90, note: 'AI/ML scripting, data analysis, automation', tag: 'Core' },
        { name: 'JavaScript (ES6+)', level: 92, note: 'Modern asynchronous web applications', tag: 'Core' },
        { name: 'TypeScript', level: 85, note: 'Type-safe scalable frontend & backend', tag: 'Web' },
        { name: 'Java', level: 82, note: 'OOP, data structures, backend logic', tag: 'Core' },
        { name: 'Kotlin', level: 70, note: 'Native Android app development (Basics)', tag: 'Mobile' },
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: <Layout size={20} />,
      skills: [
        { name: 'React.js', level: 92, note: 'Component architecture, hooks, state management', tag: 'Core' },
        { name: 'Tailwind CSS', level: 90, note: 'Modern utility-first styling & responsiveness', tag: 'Design' },
        { name: 'HTML5 & CSS3', level: 95, note: 'Semantic structures, CSS variables, keyframes', tag: 'Core' },
        { name: 'Responsive UI/UX', level: 88, note: 'Mobile-first layout across all devices', tag: 'Design' },
      ]
    },
    {
      id: 'backend',
      name: 'Backend & Cloud',
      icon: <Database size={20} />,
      skills: [
        { name: 'Firebase', level: 90, note: 'Firestore, Auth, Storage, Hosting, Security Rules', tag: 'Cloud' },
        { name: 'MongoDB', level: 85, note: 'NoSQL schema design, aggregation, Mongoose', tag: 'Database' },
        { name: 'Node.js & Express', level: 80, note: 'RESTful API endpoints, server architecture', tag: 'Backend' },
        { name: 'REST APIs', level: 88, note: 'Endpoint integration, JSON parsing, authentication', tag: 'API' },
      ]
    },
    {
      id: 'aiml',
      name: 'AI & Machine Learning',
      icon: <Bot size={20} />,
      skills: [
        { name: 'Conversational Chatbots', level: 88, note: 'Rule-based & AI-driven conversational bots', tag: 'AI' },
        { name: 'Neural Networks & Deep Learning', level: 82, note: 'Layer architectures, activation functions', tag: 'ML' },
        { name: 'Regression & Classification', level: 85, note: 'Supervised predictive modeling & metrics', tag: 'ML' },
        { name: 'Computer Vision & Detection', level: 80, note: 'Plant disease diagnosis & image pipelines', tag: 'Vision' },
      ]
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: <Wrench size={20} />,
      skills: [
        { name: 'Git & GitHub', level: 90, note: 'Version control, branch management, collaboration', tag: 'DevOps' },
        { name: 'Linux / Bash', level: 82, note: 'Command line scripting, server navigation', tag: 'OS' },
        { name: 'Android Studio', level: 80, note: 'Android SDK, XML UI, APK build pipelines', tag: 'Mobile' },
        { name: 'Figma', level: 85, note: 'UI/UX wireframing, high-fidelity prototypes', tag: 'Design' },
      ]
    }
  ];

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" style={{ background: 'var(--color-bg-dark)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Skills & Expertise
          </div>
          <h2 className="section-title">
            Technologies I Use to <span className="text-gradient">Build High-Impact Software</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical toolset across machine learning, full-stack web, and mobile engineering.
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '3rem'
        }}>
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: activeTab === 'all' ? '1px solid var(--color-accent)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: activeTab === 'all' ? 'rgba(0, 210, 211, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'all' ? 'var(--color-accent)' : '#94a3b8'
            }}
          >
            All Disciplines
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeTab === cat.id ? '1px solid var(--color-accent)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeTab === cat.id ? 'rgba(0, 210, 211, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: activeTab === cat.id ? 'var(--color-accent)' : '#94a3b8'
              }}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Categories Display */}
        <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'all' ? 'repeat(auto-fit, minmax(360px, 1fr))' : '1fr', gap: '2rem' }}>
          {filteredCategories.map((category) => (
            <div 
              key={category.id} 
              className="glass-card" 
              style={{
                background: 'rgba(19, 28, 34, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '1.75rem'
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(0, 210, 211, 0.12)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                    {category.name}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    {category.skills.length} core proficiencies
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.95rem' }}>
                          {skill.name}
                        </span>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          background: 'rgba(255,255,255,0.06)',
                          color: '#94a3b8',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {skill.tag}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        {skill.level}%
                      </span>
                    </div>

                    <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0 0 0.4rem 0' }}>
                      {skill.note}
                    </p>

                    {/* Progress Bar */}
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '999px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, var(--color-accent) 0%, #38ef7d 100%)',
                        borderRadius: '999px',
                        boxShadow: '0 0 8px rgba(0, 210, 211, 0.5)'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Tech Badges Row */}
        <div style={{
          marginTop: '3.5rem',
          padding: '1.5rem',
          borderRadius: '16px',
          background: 'rgba(19, 28, 34, 0.5)',
          border: '1px dashed rgba(0, 210, 211, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Terminal size={22} className="text-accent" />
            <div>
              <p style={{ margin: 0, fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                Continuous Learning & Framework Exploration
              </p>
              <p style={{ margin: 0, fontSize: '0.82rem', color: '#94a3b8' }}>
                Active researcher in LLM tool calling, GenAI agentic architectures, and distributed systems.
              </p>
            </div>
          </div>
          <a href="#projects" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>
            See Skills in Action →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Skills;
