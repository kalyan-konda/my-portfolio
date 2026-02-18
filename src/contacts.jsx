import "./style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import resume from "./assets/KONDA_KALYAN_RESUME.pdf";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Invalid email format";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      setLoading(false);
      return;
    }

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

      if (!res.ok) {
        throw new Error(data.msg || "Request failed");
      }

      setSuccessMsg("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccessMsg(""), 5000);
    } catch (error) {
      console.error(error);
      if (error.message && error.message !== "Failed to fetch") {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("Server is starting… please try again in a few seconds ⏳");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="page-content">
          <div className="page-header">
            <h1>Get in Touch</h1>
            <p>Feel free to reach out for collaborations or just to say hi.</p>
          </div>

          <div className="form-grid">
            <div>
              <h3>Contact Form</h3>

              {successMsg && <div className="success-msg">{successMsg}</div>}
              {errorMsg && <div className="error-msg">{errorMsg}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="How can I help you?"
                    autoComplete="off"
                    required
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-submit">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
