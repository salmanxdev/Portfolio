import "./projects.css";
import janSevaImg from "../../assets/Screenshot_2025_1001_133556 1.png";
import allynetImg from "../../assets/Screenshot_2025_1001_133556 1 (1).png";
import krishiImg from "../../assets/Screenshot 2026-05-01 195708 1.png";
import comicpreneurImg from "../../assets/comicpreneur_preview.png";
import bazarioImg from "../../assets/bazario_preview.png";
import vanikaImg from "../../assets/vanika_preview.png";

const projects = [
  {
    id: 1,
    image: comicpreneurImg,
    title: "ComicPreneur – Event Ticketing Platform",
    description: "High-performance event registration platform featuring QR tickets and real-time admin metrics.",
    liveUrl: "https://comicpreneur-16.web.app/",
    githubUrl: "https://github.com/salmanxdev/ComicPreneur",
  },
  {
    id: 2,
    image: vanikaImg,
    title: "Vanika – Tree Survival Protocol",
    description: "Decentralized ecological platform tracking sapling survival with low-cost QR tagging and geofenced audit logs.",
    liveUrl: "https://vanika-theta.vercel.app/",
    githubUrl: "https://github.com/thewebcreatorAnshul/vanika",
  },
  {
    id: 3,
    image: allynetImg,
    title: "AllyNet – Mentorship & Alumni Network",
    description: "Comprehensive platform connecting students with alumni mentors, roadmaps, and career growth.",
    liveUrl: "https://allynet-com.web.app/",
    githubUrl: "https://github.com/Allynetcom/allynet",
  },
  {
    id: 4,
    image: bazarioImg,
    title: "Bazario – Live Stream Commerce",
    description: "Next-gen multi-vendor e-commerce with real-time video shopping powered by Agora RTC.",
    liveUrl: "https://bazario-1.web.app/",
    githubUrl: "https://github.com/salmanxdev/Bazario_Web",
  },
  {
    id: 5,
    image: janSevaImg,
    title: "Jan-Seva – Citizen Grievance Portal",
    description: "Unified civic complaint management, automated AI department triage, and transparent tracking.",
    liveUrl: "https://jan-seva-web.vercel.app/",
    githubUrl: "https://github.com/salmanxdev/Jan-Seva-web",
  },
  {
    id: 6,
    image: krishiImg,
    title: "Krishi-Mitra – Smart Farming Assistant",
    description: "Smart farming app featuring AI plant disease detection, weather forecasts, and agronomic assistance.",
    liveUrl: "https://krishi-mitr-web.vercel.app/",
    githubUrl: "https://github.com/salmanxdev/krishi-mitra",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span></span>
          <h2>Projects.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-buttons" style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="visit-btn"
                    style={{ textDecoration: 'none', textAlign: 'center' }}
                  >
                    Visit Live
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="know-more"
                    style={{ textDecoration: 'none', textAlign: 'center' }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;