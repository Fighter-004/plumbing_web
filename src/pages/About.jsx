const About = () => {
  return (
    <section className="section about-page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About Us</p>
          <h2>Mdosi Plumbing Service - Trusted Plumbing in Zanzibar</h2>
          <p>Huduma za kitaalamu kwa nyumba, hoteli, migahawa, ofisi, na majengo ya biashara. Tunafanya kazi kwa haraka, kwa uadilifu, na kwa ubora wa juu.</p>
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
            <h2>Huduma za Mabomba kwa Uzoefu na Uadilifu</h2>
            <p>Kazi zetu zinazingatia uvumilivu, usalama, na matokeo ya kudumu. Tunasaidia wateja kupata suluhisho bora na kutumia teknolojia ya kisasa ya plumbing.</p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Customer Trust</h3>
              <p>Wateja wetu wanatupa alama ya juu kwa kuaminika, uwazi wa bei, na matokeo yenye tija.</p>
            </article>
            <article className="card">
              <h3>Professional Tools</h3>
              <p>Tunatumia vifaa vya kisasa vya plumbing kwa matengenezo ya bomba, uchunguzi wa uvujaji, na ufungaji.</p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
