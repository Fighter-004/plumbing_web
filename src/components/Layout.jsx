import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const phone = '255685848908';
  const text = 'Hello Mdosi';
  const appLink = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(text)}`;
  const webLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  const openWhatsAppPanel = (e) => {
    e.preventDefault();
    setShowWhatsAppOptions(true);
  };

  const closeWhatsAppOptions = () => {
    setShowWhatsAppOptions(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((current) => !current);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
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
          <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Open menu">
            ☰
          </button>
          <nav className="main-nav">
            <NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/services" onClick={closeMobileMenu}>Services</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
            <NavLink to="/team" onClick={closeMobileMenu}>Team</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
          </nav>
        </div>
      </header>

      {showMobileMenu && (
        <div className="mobile-nav-overlay" onClick={closeMobileMenu}>
          <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
            <NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/services" onClick={closeMobileMenu}>Services</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
            <NavLink to="/team" onClick={closeMobileMenu}>Team</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
          </div>
        </div>
      )}

      <main className="page-content">
        <Outlet />
      </main>

      <a
        className="whatsapp-float"
        href="#"
        onClick={openWhatsAppPanel}
        aria-label="Open WhatsApp chat"
      >
        💬 Chat WhatsApp
      </a>

      {showWhatsAppOptions && (
        <div className="whatsapp-options-overlay" onClick={closeWhatsAppOptions}>
          <div className="whatsapp-options-panel" onClick={(e) => e.stopPropagation()}>
            <div className="whatsapp-options-header">
              <div>
                <p className="eyebrow">WhatsApp Contact</p>
                <h3>Choose how to continue</h3>
                <p className="whatsapp-options-description">
                  If you're on your phone, open the WhatsApp app. Otherwise use WhatsApp Web.
                </p>
              </div>
            </div>
            <div className="whatsapp-options-row">
              <a
                className="whatsapp-option-card"
                href={appLink}
                aria-label="Open WhatsApp app"
              >
                <div className="whatsapp-option-icon">📱</div>
                <div>
                  <h4>WhatsApp App</h4>
                  <p>Open the native WhatsApp app on your phone.</p>
                </div>
              </a>
              <a
                className="whatsapp-option-card whatsapp-option-card-secondary"
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open WhatsApp Web"
              >
                <div className="whatsapp-option-icon">🌐</div>
                <div>
                  <h4>WhatsApp Web</h4>
                  <p>Continue using WhatsApp in your browser.</p>
                </div>
              </a>
            </div>
            <button className="whatsapp-options-close" onClick={closeWhatsAppOptions}>
              Cancel
            </button>
          </div>
        </div>
      )}

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
