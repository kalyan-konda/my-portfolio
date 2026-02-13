import "./style.css";
import { Link } from "react-router-dom";
import resumeImg from "./assets/resume bulider.png";
import homeImg from "./assets/home.png";
import agingImg from "./assets/aging (1).png";
import resume from "./assets/KONDA_KALYAN_RESUME.pdf";

function Projects() {
  return (
    <>
      {/* Brand */}
      <div className="brand-left">
        <span className="brand-dot"></span>
        <span>Kalyan Konda</span>
        <span className="brand-subtitle">
          Web Development Student @ Suthra
        </span>
      </div>

      {/* Header */}
      <header>
        <nav className="top-nav">
          <Link to="/">Home</Link>
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <Link to="/projects" className="active">
            Projects
          </Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Content */}
      <div className="container">
        <div style={{ width: "100%" }}>
          <div className="page-header">
            <h1>Selected Projects</h1>
            <p>A collection of my work in web development and research.</p>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <img
                src={resumeImg}
                alt="Resume Builder"
                className="project-img"
              />
              <div className="project-info">
                <h3>Online Resume Builder</h3>
                <p>
                  A user-friendly platform allowing users to create professional
                  resumes with customizable templates. Built using HTML, CSS,
                  and JavaScript.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <img
                src={homeImg}
                alt="Home Automation"
                className="project-img"
              />
              <div className="project-info">
                <h3>Home Automation System</h3>
                <p>
                  IoT-based smart home system integrated with a virtual voice
                  assistant for remote appliance control using Arduino and
                  Python.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <img
                src={agingImg}
                alt="Aging Face Research"
                className="project-img"
              />
              <div className="project-info">
                <h3>Face Aging Research</h3>
                <p>
                  Academic research on aging face recognition using Local
                  Pattern Selection (LPS) compared with Bio-Inspired Features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
