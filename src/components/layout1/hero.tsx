import "./hero.css";
import heroImg from "../../assets/hero.avif";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <p className="hero-greeting">
            Hi, I am Salman
          </p>

          <h1 className="hero-title">
            A WEB DEVELOPER
          </h1>

          <p className="hero-description">
            Secure Systems | Smooth UI/UX | Premium Websites <br />
            Fast Performance | Responsive Design | Clean Code <br />
            Modern Design | Scalable Apps | User-Focused UI
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">

            <div className="floating-card card-1">
              Salaries Disbursed
            </div>

            <div className="floating-card card-2">
              Taxes Paid
            </div>

            <div className="floating-card card-3">
              Reimbursements Settled
            </div>

            <img
              src={heroImg}
              alt="Salman"
              className="hero-image"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;