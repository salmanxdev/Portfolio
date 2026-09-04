import "./Projects.css";

const projects = [
  {
    id: 1,
    image: "/images/janseva.png",
    title: "Empowering Communities Digitally",
    description:
      "Jan Seva is a unified platform designed to bring essential services, local sellers, and everyday opportunities closer to people.",
  },
  {
    id: 2,
    image: "/images/allynet.png",
    title: "Mentorship, Roadmaps & Growth",
    description:
      "ALLYNET connects students with experienced alumni and mentors, offering trusted career guidance and growth.",
  },
  {
    id: 3,
    image: "/images/krishimitra.png",
    title: "Empowering Farmers Through Technology",
    description:
      "Krishi Mitra provides AI-powered assistance, practical farming knowledge, and digital tools for farmers.",
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

                <div className="project-buttons">
                  <button className="know-more">
                    Know More
                  </button>

                  <button className="visit-btn">
                    Visit
                  </button>
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