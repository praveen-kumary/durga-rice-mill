import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  forceScrolled?: boolean;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products & Varieties' },
  { id: 'contact', label: 'Contact & RFQ' },
];

export default function Navbar({
  currentPage,
  onNavigate,
  forceScrolled = false,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isScrolled = forceScrolled || scrolled;

  const navigate = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <div className="navbar-logo" onClick={() => navigate('home')}>
            <img src="/assets/durga-logo.webp" alt="Durga Rice Mill" />
            <div className="navbar-brand-text">
              <span className="brand-main">Durga</span>
              <span className="brand-sub">Rice Mill</span>
            </div>
          </div>

          <nav className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link-btn ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => navigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="navbar-actions">
            <a
              href="tel:+919422214567"
              className="navbar-phone-link"
              title="Call Sales Office (+91 94222 14567)"
            >
              <span className="phone-dot" />
              <span className="phone-text">+91 94222 14567</span>
            </a>

            <button
              className="btn-gold nav-quote-btn"
              onClick={() => navigate('contact')}
            >
              <span>Get Quote</span>
              <ArrowUpRight size={15} />
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-top">
          <div className="navbar-logo" onClick={() => navigate('home')}>
            <img src="/assets/durga-logo.webp" alt="Durga Rice Mill" />
            <div className="navbar-brand-text">
              <span className="brand-main">Durga</span>
              <span className="brand-sub">Rice Mill</span>
            </div>
          </div>
          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`mobile-nav-btn ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => navigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-bottom">
          <div className="mobile-contact-info">
            <p className="mobile-mill-city">Facility: Mouda, Nagpur (NH-53)</p>
            <a href="tel:+919422214567" className="mobile-phone">+91 94222 14567</a>
          </div>
          <button
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => navigate('contact')}
          >
            Request B2B Quotation
          </button>
        </div>
      </div>
    </>
  );
}
