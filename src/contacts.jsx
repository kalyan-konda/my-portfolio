import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import resume from "./assets/KONDA_KALYAN_RESUME.pdf";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCommentSubmit = async () => {
    if (!comment.trim()) {
      alert("Please write a comment");
      return;
    }

    try {
      const res = await fetch(
        "https://my-portfolio-backend-9zsf.onrender.com/api/comment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comment }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("Comment sent successfully ✅");
        setComment("");
      } else {
        alert(data.msg || "Failed to send comment");
      }
    } catch (error) {
      alert("Backend not running ❌");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch("http://localhost:3000/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       alert("Message sent successfully ✅");
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       alert(data.msg || "Failed to send");
  //     }
  //   } catch (error) {
  //     alert("Backend not running ❌");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); //  START loading

    try {
      const res = await fetch(
        "https://my-portfolio-backend-9zsf.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.msg || "Failed to send");
      }
    } catch (error) {
      console.error(error);
      alert("Server is starting… please try again in a few seconds ⏳");
    } finally {
      setLoading(false); //  END loading
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   const { name, email, message } = formData;
  //
  //   const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  //   const body = encodeURIComponent(
  //     `Name: ${name}\nUser Email: ${email}\n\nMessage:\n${message}`,
  //   );
  //
  //   const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=kondak1904037@gmail.com&su=${subject}&body=${body}`;
  //
  //   window.open(gmailURL, "_blank");
  // };

  return (
    <>
      <div className="brand-left">
        <span className="brand-dot"></span>
        <span>Kalyan Konda</span>
        <span className="brand-subtitle">Web Development Student @ Suthra</span>
      </div>

      <header>
        <nav className="top-nav">
          <Link to="/">Home</Link>
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact" className="active">
            Contact
          </Link>
        </nav>
      </header>

      <div className="container">
        <div className="page-content">
          <div className="page-header">
            <h1>Get in Touch</h1>
            <p>Feel free to reach out for collaborations or just to say hi.</p>
          </div>

          <div className="form-grid">
            <div>
              <h3>Contact Form</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="How can I help you?"
                    required
                  />
                </div>

                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? "Sending… ⏳" : "Send Message"}
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                <strong>Email:</strong> kalyankonda1342@gmail.com
              </p>
              <p>
                <strong>Location:</strong> Guntur, India
              </p>

              <h3 style={{ marginTop: "2.5rem" }}>Leave a Comment</h3>

              <div className="form-group">
                <textarea
                  rows="4"
                  placeholder="Share your thoughts..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  style={{ width: "100%" }}
                />
              </div>

              <button
                type="button"
                className="btn-submit"
                style={{ marginTop: "1rem", width: "100%" }}
                onClick={handleCommentSubmit}
              >
                Send Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
