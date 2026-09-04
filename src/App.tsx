import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CaseStudy from './components/CaseStudy';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-text-light)' }}>
      {/* 1. Header Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* 2. Skills Section */}
        <Skills />

        {/* 3. Projects Section */}
        <Projects />

        {/* 4. Experience / Freelance Work */}
        <Experience />

        {/* 5. Case Study Section */}
        <CaseStudy />

        {/* 6. Services Section */}
        <Services />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default App;
