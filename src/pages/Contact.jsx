import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>Get in touch.</p>
      </div>

      <form className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="What is your full name?"
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

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder=" How Can I help you? "
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">
          {" "}
          Send message
        </button>
      </form>
    </>
  );
};

export default Contact;
