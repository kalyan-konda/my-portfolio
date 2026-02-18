import "./style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import profileImg from "./assets/kalyan.jpeg";
import resume from "./assets/KONDA_KALYAN_RESUME.pdf";

function App() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="container">
        <div className="split-layout">
          {/* Profile Section */}
          <div className="profile-section">
            <img src={profileImg} alt="Kalyan Konda" className="profile-img" />
          </div>

          {/* Content Section */}
          <div className="content-section">
            <h1>Kalyan Konda</h1>

            <div className="bio">
              <h3>A Bit About Me</h3>

              <p className="bio-text">
                I am a Web Development student at Suthra Software Solutions,
                driven by a passion for building interactive and responsive web
                applications. I recently completed my Bachelor's degree in
                Information Technology from RVR&JC.
              </p>

              <p className="bio-text">
                My strengths lie in my adaptability and strong communication
                skills. I am a quick learner, currently focused on mastering
                modern web technologies. My goal is to secure a position in a
                reputable company where I can contribute effectively while
                continuously learning and growing as a developer.
              </p>
            </div>

            {/* Circle Navigation */}
            <div className="circle-nav-container">
              <a
                href={resume}
                className="nav-circle resume"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <Link to="/projects" className="nav-circle research">
                Projects
              </Link>
              <Link to="/skills" className="nav-circle personal">
                Skills
              </Link>
              <Link to="/contact" className="nav-circle outreach">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
