import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left">
          <img
            src="/images/about-image.jpg"
            alt="About"
            className="about-main-image"
          />

          <div className="about-side-image">
            <img
              src="/images/html-image.jpg"
              alt="HTML"
            />
          </div>
        </div>

        <div className="about-right">
          <span className="about-tag">About Me</span>

          <h2 className="about-title">
            Turning Vision Into <br />
            Scalable Solutions.
          </h2>

          <p className="about-text">
            Designs and develops scalable web applications with
            integrated AI capabilities. Specializes in
            performance-driven solutions, secure payment
            integrations, and modern system architecture.
            Focused on delivering efficient, production-ready
            products for real-world use.
          </p>

          <div className="skills">
            <div className="skill">
              <span>01.</span>
              <p>React.js</p>
            </div>

            <div className="skill">
              <span>02.</span>
              <p>Node.js</p>
            </div>

            <div className="skill">
              <span>03.</span>
              <p>HTML5</p>
            </div>

            <div className="skill">
              <span>04.</span>
              <p>MongoDB</p>
            </div>
          </div>

          <button className="about-btn">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;