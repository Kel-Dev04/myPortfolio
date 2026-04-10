import { useRef, useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

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
    setStatus("");

    const servuceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("Config carregada:", { servuceId, templateId, publicKey });

    if (!servuceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing.");
      setStatus("❌ Email service is not configured.");
      setLoading(false);
      return;
    }

    emailjs.sendForm(servuceId, templateId, formRef.current, publicKey).then(
      () => {
        setStatus("✅ Message sent with success!");
        formRef.current.reset();
        setLoading(false);
      },
      (error) => {
        console.error("Erro:", error);
        setStatus("❌ Error to Send. Try again.");
        setLoading(false);
      },
    );
  };
  console.log(emailjs);

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
