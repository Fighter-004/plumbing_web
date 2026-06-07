const About = () => {
  return (
    <section className="section about-page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About Us</p>
          <h2>Mdosi Plumbing Service - Trusted Plumbing in Zanzibar</h2>
          <p>Professional plumbing services for homes, hotels, restaurants, offices, and commercial buildings. We work quickly, honestly, and with high-quality standards.</p>
        </div>

        <div className="about-grid">
          <div>
            <article className="card">
              <h3>Our Mission</h3>
              <p>To provide reliable, affordable, and professional plumbing services that improve comfort and safety for every customer.</p>
            </article>
            <article className="card">
              <h3>Our Vision</h3>
              <p>To become the most trusted plumbing service in Tanzania through quality work, fast response, and satisfied customers.</p>
            </article>
          </div>

          <div className="feature-box">
            <h3>Why Choose Us</h3>
            <ul>
              <li>Fast Response in Zanzibar</li>
              <li>Experienced & Professional Team</li>
              <li>Affordable Pricing</li>
              <li>Quality Materials & Workmanship</li>
              <li>24/7 Emergency Support</li>
            </ul>
          </div>
        </div>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Company Experience</p>
            <h2>Experienced and Trustworthy Plumbing Services</h2>
            <p>Our work focuses on durability, safety, and long-lasting results. We help customers find the best solutions using modern plumbing technologies.</p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Customer Trust</h3>
              <p>Our customers rate us highly for reliability, transparent pricing, and effective results.</p>
            </article>
            <article className="card">
              <h3>Professional Tools</h3>
              <p>We use modern plumbing equipment for repairs, leak detection, and installations.</p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
