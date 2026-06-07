const team = [
  {
    name: 'Suleiman Ussi Vuai (Mdosi)',
    role: 'Founder & Lead Plumber',
    bio: 'Leads projects, ensures quality, and oversees all plumbing services for customers.'
  },
  {
    name: 'Mustafa Ussi Vuai (Breeze)',
    role: 'Assistant Manager',
    bio: 'Supports daily operations, customer service, and team supervision.'
  },
  {
    name: 'Muhamad (Villa)',
    role: 'Assistant Technician',
    bio: 'Assists with installations and repairs, handling field operations and maintenance.'
  }
];

const Team = () => {
  return (
    <section className="section team-page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Team</p>
          <h2>Mdosi Plumbing — Trusted Team</h2>
          <p>Our team works together with skill and care to deliver reliable plumbing services on time.</p>
        </div>

        <div className="card-grid">
          {team.map((member) => (
            <article key={member.name} className="card team-card">
              <div className="team-avatar">{member.name.split(' ')[0].slice(0, 1)}</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
