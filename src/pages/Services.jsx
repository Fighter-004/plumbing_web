const services = [
  {
    icon: '🚨',
    title: 'Emergency Plumbing',
    description: 'Emergency response for burst pipes, leaks, or blocked drains.'
  },
  {
    icon: '🔧',
    title: 'Pipe Installation',
    description: 'Installation and repair of piping for homes, offices, hotels, and businesses.'
  },
  {
    icon: '🛁',
    title: 'Bathroom Plumbing',
    description: 'Installations and repairs for toilets, showers, sinks, and bathroom plumbing systems.'
  },
  {
    icon: '🍽️',
    title: 'Kitchen Plumbing',
    description: 'Sink installation, kitchen piping, and kitchen water system services.'
  },
  {
    icon: '🔍',
    title: 'Leak Detection',
    description: 'Detection of hidden leaks, pressure issues, and pipe faults.'
  },
  {
    icon: '🚰',
    title: 'Drain Cleaning',
    description: 'Cleaning and unblocking drains, sinks, and sewer lines.'
  },
  {
    icon: '♨️',
    title: 'Water Heater Services',
    description: 'Installation, maintenance, and repairs for water heaters.'
  },
  {
    icon: '🏢',
    title: 'Commercial Plumbing',
    description: 'Commercial plumbing services for hotels, restaurants, offices, and large businesses.'
  },
  {
    icon: '⚙️',
    title: 'Pump Installation',
    description: 'Pump installation, tank setups, and water pressure system installation.'
  },
  {
    icon: '🛠️',
    title: 'Plumbing Maintenance',
    description: 'Routine inspections, maintenance, and preventive plumbing repairs.'
  }
];

const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Our Services</h2>
          <p>We provide a wide range of professional plumbing services to meet your needs.</p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="card service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
