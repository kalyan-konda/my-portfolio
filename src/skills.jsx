import "./style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import resume from "./assets/KONDA_KALYAN_RESUME.pdf";

function Skills() {
  return (
    <>
      <Navbar />

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
