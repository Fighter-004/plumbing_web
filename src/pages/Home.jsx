const Home = () => {
  const dialNumber = () => {
    window.location.href = 'tel:+255685848908';
  };

  return (
    <section>
      <div className="container hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">24/7 Emergency Plumbing</p>
            <h2>Welcome to Mdosi Plumbing Service</h2>
            <p>
              We provide fast, reliable, and professional plumbing services for homes, hotels, offices, and businesses across Zanzibar.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+255685848908" onClick={dialNumber}>Call Now</a>
              <a
                className="button button-secondary"
                href="https://wa.me/255685848908?text=Hello%20Mdosi"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <h3>Our Services</h3>
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
            <h2>Professional service that gives you peace of mind</h2>
            <p>High-quality, fast, and affordable plumbing services for customers across Zanzibar.</p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Fast Response</h3>
              <p>Emergency service available 24/7 to resolve urgent plumbing issues quickly.</p>
            </article>
            <article className="card">
              <h3>Skilled Team</h3>
              <p>Our technicians are experienced and deliver high-quality workmanship every time.</p>
            </article>
            <article className="card">
              <h3>Affordable Pricing</h3>
              <p>Competitive rates and great value for residential and commercial customers.</p>
            </article>
          </div>
        </section>

        <section className="section section-banner">
          <div>
            <h2>Emergency Service</h2>
            <p>Got a burst pipe, leak, or blocked drain? We respond quickly for homes, hotels, and businesses.</p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Team Preview</p>
            <h2>Our Skilled Team</h2>
            <p>Our team delivers fast, expert, and reliable plumbing services every time.</p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Suleiman Ussi Vuai</h3>
              <p>Mdosi — Founder & Lead Plumber, ensuring top-quality work on every job.</p>
            </article>
            <article className="card">
              <h3>Mustafa Ussi Vuai</h3>
              <p>Breeze — Assistant Manager overseeing operations and customer care.</p>
            </article>
            <article className="card">
              <h3>Muhamad (Villa)</h3>
              <p>Assistant Technician supporting installations, repairs, and maintenance.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Need Plumbing Services?</h2>
            <p>Send us a message or call now for emergency repairs or scheduled work.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+255685848908" onClick={dialNumber}>Call Now</a>
            <a className="button button-secondary" href="/contact">Contact Us</a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
