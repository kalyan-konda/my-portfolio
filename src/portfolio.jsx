import "./style.css";
import profileImg from "./kalyan.jpeg";
import resumeBuilder from "./resume bulider.png";
import homeImg from "./home.png";
import agingImg from "./aging.png";

function App() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#comments-section">Comments</a>
      </nav>

      {/* Header */}
      <header>
        <div className="container">
          <h1>Kalyan Konda</h1>
          <p><strong>Web Development Student</strong></p>
        </div>
      </header>

      <div className="container">

        {/* About Section */}
        <section id="about">
          <h2>About Me</h2>

          <div className="about-content">
            <img src={profileImg} alt="Kalyan Konda" />

            <div>
              <h3>I'm Kalyan Konda</h3>
              <p>
                Web Development Student <br />
                Email: kalyankonda1342@gmail.com
              </p>

              <p>
                I am from Guntur. I have completed my Bachelor's degree in
                INFORMATION TECHNOLOGY (IT) from RVR&JC. I am currently learning
                web development at Suthra Software Solutions. My strengths are
                that I am hardworking and self-motivated with strong
                communication skills. I am a quick learner.
              </p>

              <blockquote>
                "The only way to do great work is to love what you do." – Steve Jobs
              </blockquote>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>GitHub</li>
            <li>Bootstrap</li>
            <li>React JS</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>

          <div className="project-card">
            <img src={resumeBuilder} alt="Resume Builder" width="250" />
            <div className="project-info">
              <h3>Online Resume Builder</h3>
              <p>
                Built a user-friendly online platform allowing users to create
                resumes with customizable templates.
              </p>
            </div>
          </div>

          <div className="project-card">
            <img src={homeImg} alt="Home Automation" width="250" />
            <div className="project-info">
              <h3>Home Automation with Virtual Voice Assistant</h3>
              <p>
                Developed a smart home automation system using voice commands.
              </p>
            </div>
          </div>

          <div className="project-card">
            <img src={agingImg} alt="Aging Face" width="250" />
            <div className="project-info">
              <h3>Research on Aging Face Recognition</h3>
              <p>
                Conducted research using Local Pattern Selection (LPS) and
                compared it with BIF and LCB + PCS.
              </p>
            </div>
          </div>

          {/* Table */}
          <h3>Project Details Overview</h3>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Portfolio</td>
                <td>HTML</td>
              </tr>
              <tr>
                <td>Online Resume Builder</td>
                <td>HTML, CSS, JavaScript, DBMS</td>
              </tr>
              <tr>
                <td>Home Automation</td>
                <td>IoT, Arduino, Python</td>
              </tr>
              <tr>
                <td>Aging Face Recognition</td>
                <td>Python, ML, Image Processing</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Comments & Contact */}
        <section>
          <div className="grid-2">

            <div id="comments-section">
              <h2>Comments</h2>
              <label>Share your thoughts:</label>
              <textarea rows="8" placeholder="Your feedback helps me improve..." />
              <button>Send</button>
            </div>

            <div id="contact">
              <h2>Contact Me</h2>
              <form>
                <label>Name:</label>
                <input type="text" />

                <label>Email:</label>
                <input type="email" />

                <label>Phone No:</label>
                <input type="tel" />

                <label>Message:</label>
                <textarea rows="4" />

                <button type="submit">Submit</button>
              </form>
            </div>

          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Kalyan Portfolio</p>
      </footer>
    </>
  );
}

export default App;
