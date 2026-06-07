const Contact = () => {
  return (
    <section className="section contact-page">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Get in touch for plumbing services in Zanzibar</h2>
          <p>By phone or WhatsApp — we handle emergencies, installations, and maintenance.</p>
          <div className="contact-details">
            <div>
              <h3>Phone / WhatsApp</h3>
              <p><a href="tel:+255685848908">+255 685 848 908</a></p>
            </div>
            <div>
              <h3>Location</h3>
              <p>Zanzibar, Tanzania</p>
            </div>
            <div>
              <h3>Email</h3>
              <p><a href="mailto:info@mdosiplumbing.com">info@mdosiplumbing.com</a></p>
            </div>
          </div>
          <div className="section-banner">
            <h3>Emergency Service</h3>
            <p>24/7 emergency response for burst pipes, leaks, and blocked drains.</p>
          </div>
        </div>
        <div className="contact-card">
          <h3>Send a Message</h3>
          <form>
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="Your name" />
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="Phone or WhatsApp" />
            <label htmlFor="location">Location</label>
            <input id="location" type="text" placeholder="Where are you located?" />
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Write your message here"></textarea>
            <button type="submit" className="button button-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
