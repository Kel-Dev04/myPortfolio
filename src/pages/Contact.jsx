import { useRef, useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import.meta.env.SERVICE_key;

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextareaChange = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(" ");

    emailjs
      .sendForm(
        import.meta.env.SERVICE_ID,
        import.meta.env.TEMPLATE_ID,
        formRef.current,
        import.meta.env.PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("✅ Message sending with sucess! ");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("Erro:", error.text);
          setStatus("❌ Erro to Send. Try again. ");
          setLoading(false);
        },
      );
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-header">
        <h2>
          Contact <span> Me </span>
        </h2>
        <p>Get in touch and let's build something great.</p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <div className="form-grid">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="input-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input type="tel" id="phone" name="phone" placeholder="+1..." />
          </div>
          <div className="input-group">
            <label htmlFor="preference">Reply via</label>
            <select name="preference" id="preference" className="custom-select">
              <option value="Email">Email</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="How can I help you?"
            required
            onInput={handleTextareaChange}
          ></textarea>
        </div>

        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "sending..." : "send Message"}
        </button>

        {status && (
          <p
            className={[
              "status-msg",
              status.includes("✅") ? "success" : "error",
            ].join(" ")}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
