const team = [
  {
    name: 'Suleiman Ussi Vuai (Mdosi)',
    role: 'Founder & Lead Plumber',
    bio: 'Anaongoza mradi, kuhakikisha ubora, na kusimamia huduma zote za mabomba kwa wateja.'
  },
  {
    name: 'Mustafa Ussi Vuai (Breeze)',
    role: 'Assistant Manager',
    bio: 'Anaisaidia operesheni za kila siku, huduma kwa wateja, na usimamizi wa timu.'
  },
  {
    name: 'Muhamad (Villa)',
    role: 'Assistant Technician',
    bio: 'Mtaalamu wa ufungaji na matengenezo shambani, anasaidia kazi za uwanja kila siku.'
  }
];

const Team = () => {
  return (
    <section className="section team-page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Team</p>
          <h2>Watu wa Kuaminiwa wa Mdosi Plumbing</h2>
          <p>Timuzetu inashirikiana kwa umoja, ujuzi, na umakini kuhakikisha huduma za plumbing zinakamilika kwa wakati.</p>
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
