const Contact = () => {
  return (
    <section className="section contact-page">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Wasiliana nasi kwa huduma ya plumbing Zanzibar</h2>
          <p>Mtandao, simu, au WhatsApp - tunaweza kusaidia huduma ya dharura, ufungaji, na matengenezo.</p>
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
            <p>24/7 service kwa mabomba yaliyovujika, bomba lililovunjika, au mifereji iliyoziba.</p>
          </div>
        </div>
        <div className="contact-card">
          <h3>Tuma Ujumbe</h3>
          <form>
            <label htmlFor="name">Jina Kamili</label>
            <input id="name" type="text" placeholder="Jina lako" />
            <label htmlFor="phone">Nambari ya Simu</label>
            <input id="phone" type="tel" placeholder="Simu au WhatsApp" />
            <label htmlFor="location">Mahali</label>
            <input id="location" type="text" placeholder="Mahali ulipo" />
            <label htmlFor="message">Ujumbe</label>
            <textarea id="message" rows="5" placeholder="Andika hapa ujumbe wako"></textarea>
            <button type="submit" className="button button-primary">Tuma Ujumbe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
