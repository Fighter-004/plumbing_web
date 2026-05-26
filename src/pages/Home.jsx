const Home = () => {
  return (
    <section>
      <div className="container hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">24/7 Emergency Plumbing</p>
            <h2>Mdosi Plumbing Service</h2>
            <p>
              Tunatoa huduma za mabomba za haraka, za kuaminika, na za kisasa kwa nyumba, hoteli, ofisi, na biashara Zanzibar.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+255685848908">Piga Sasa</a>
              <a className="button button-secondary" href="https://wa.me/255685848908" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <h3>Huduma Tunazotoa</h3>
              <ul>
                <li>Emergency Plumbing</li>
                <li>Pipe Installation & Repair</li>
                <li>Drain Cleaning & Unblocking</li>
                <li>Water Heater Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Why Choose Us</p>
            <h2>Huduma ya kitaalamu inayokuletea amani ya akili</h2>
            <p>Huduma za ubora, za haraka, na za bei nafuu kwa wateja wa Zanzibar. Tumejenga imani kwa kazi nzuri.</p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Fast Response</h3>
              <p>Huduma ya dharura inapatikana 24/7 kwa kutatua matatizo ya bomba kwa haraka.</p>
            </article>
            <article className="card">
              <h3>Skilled Team</h3>
              <p>Wataalamu wetu wana uzoefu wa miaka na wanafanya kazi kwa ubora kila mara.</p>
            </article>
            <article className="card">
              <h3>Affordable Pricing</h3>
              <p>Bei za mashindano na huduma za thamani kubwa kwa wateja wa ofisi, hoteli, na nyumba.</p>
            </article>
          </div>
        </section>

        <section className="section section-banner">
          <div>
            <h2>Huduma ya Dhahura</h2>
            <p>Got a burst pipe, leak, or blocked drain? Tunaweza kusaidia saa moja kwa nyumba, hoteli, na biashara.</p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Team Preview</p>
            <h2>Watendaji Wetu Mahiri</h2>
            <p>Timu yetu inakupa huduma ya haraka, ya ujuzi, na ya kibinadamu kila wakati.</p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Suleiman Ussi Vuai</h3>
              <p>Mdosi - Founder & Lead Plumber anayehakikisha kila kazi inakamilika kwa ubora.</p>
            </article>
            <article className="card">
              <h3>Mustafa Ussi Vuai</h3>
              <p>Breeze - Assistant Manager anayesimamia operesheni na huduma kwa wateja.</p>
            </article>
            <article className="card">
              <h3>Muhamad (Villa)</h3>
              <p>Assistant Technician anayesimamia ufungaji, matengenezo, na usahihishaji uwanjani.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Contact CTA</p>
            <h2>Unahitaji Huduma ya Mabomba?</h2>
            <p>Tuma ujumbe au piga simu sasa kwa huduma ya dharura na mipango ya ufungaji.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+255685848908">Piga Sasa</a>
            <a className="button button-secondary" href="/contact">Wasiliana</a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
