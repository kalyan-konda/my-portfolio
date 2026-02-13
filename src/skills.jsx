import "./style.css";
import { Link } from "react-router-dom";
import resume from "./assets/KONDA_KALYAN_RESUME.pdf";

function Skills() {
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
          <Link to="/projects">Projects</Link>
          <Link to="/skills" className="active">
            Skills
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Content */}
      <div className="container">
        <div className="page-content" style={{ width: "100%" }}>
          <div className="page-header">
            <h1>Skills & Expertise</h1>
            <p>Technologies and tools I work with.</p>
          </div>

          <div className="skills-grid">
            <div className="skill-tag">HTML5</div>
            <div className="skill-tag">CSS3</div>
            <div className="skill-tag">JavaScript (ES6+)</div>
            <div className="skill-tag">React.js</div>
            <div className="skill-tag">Python</div>
            <div className="skill-tag">Bootstrap</div>
            <div className="skill-tag">Git & GitHub</div>
            <div className="skill-tag">SQL</div>
            <div className="skill-tag">Responsive Design</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
