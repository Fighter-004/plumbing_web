import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  const openWhatsApp = (e) => {
    e.preventDefault();
    const phone = '255685848908';
    const text = 'Hello Mdosi';
    const appLink = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(text)}`;
    const webLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // Try opening native app first, then fall back to web link
    window.location.href = appLink;
    setTimeout(() => {
      window.location.href = webLink;
    }, 600);
  };

  return (
    <div className="app-shell min-h-screen bg-slate-50">
      <header className="topbar">
        <div className="container nav-inner">
          <div className="brand-group">
            <img src="/logo.jpeg" alt="Mdosi Plumbing Service" className="nav-logo" />
            <div>
              <p className="eyebrow">Mdosi Plumbing Service</p>
              <h1>Plumbing Experts Zanzibar</h1>
            </div>
          </div>
          <nav className="main-nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <a
            className="button button-primary nav-button"
            href="#"
            onClick={openWhatsApp}
            aria-label="Chat with Mdosi on WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <a
        className="whatsapp-float"
        href="#"
        onClick={openWhatsApp}
        aria-label="Open WhatsApp chat"
      >
        💬 Chat WhatsApp
      </a>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p>“Reliable Plumbing, Quality Service.”</p>
            <span>Mdosi Plumbing Service — Zanzibar</span>
          </div>
          <span>24/7 emergency support • +255 685 848 908</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
