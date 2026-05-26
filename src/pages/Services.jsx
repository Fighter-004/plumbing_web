const services = [
  {
    icon: '🚨',
    title: 'Emergency Plumbing',
    description: 'Huduma ya dharura kwa bomba lililovunjika, uvujaji, au mifereji iliyoziba.'
  },
  {
    icon: '🔧',
    title: 'Pipe Installation',
    description: 'Ufungaji na ukarabati wa mabomba kwa nyumba, ofisi, hoteli na biashara.'
  },
  {
    icon: '🛁',
    title: 'Bathroom Plumbing',
    description: 'Ufunga choo, bafu, miguu ya maji, na miradi ya mabafu.'
  },
  {
    icon: '🍽️',
    title: 'Kitchen Plumbing',
    description: 'Ufunga sinki, bomba la jikoni, na miundo ya maji ya jikoni.'
  },
  {
    icon: '🔍',
    title: 'Leak Detection',
    description: 'Uchunguzi wa uvujaji wa bomba, shinikizo, na matatizo yaliyofichwa.'
  },
  {
    icon: '🚰',
    title: 'Drain Cleaning',
    description: 'Usafi wa mifereji, choo cha mkononi na mifereji ya maji taka.'
  },
  {
    icon: '♨️',
    title: 'Water Heater Services',
    description: 'Ufungaji, matengenezo, na hatua za kurekebisha maji moto.'
  },
  {
    icon: '🏢',
    title: 'Commercial Plumbing',
    description: 'Huduma kwa hoteli, migahawa, ofisi, na biashara kubwa Zanzibar.'
  },
  {
    icon: '⚙️',
    title: 'Pump Installation',
    description: 'Ufungaji wa pampu, miundo ya tanki, na mifumo ya shinikizo la maji.'
  },
  {
    icon: '🛠️',
    title: 'Plumbing Maintenance',
    description: 'Ukaguzi wa kawaida, matengenezo, na kuzuia hitilafu za bomba.'
  }
];

const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Huduma Zetu za Plumbing</h2>
          <p>Huduma kamili za plumbing kwa nyumba, hoteli, ofisi, na biashara Zanzibar.</p>
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
