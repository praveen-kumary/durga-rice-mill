import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  forceScrolled?: boolean;
}

const navItems = [
  { id: 'home', path: '/', label: 'Home' },
  { id: 'about', path: '/about', label: 'About Us' },
  { id: 'products', path: '/products', label: 'Products & Varieties' },
  { id: 'contact', path: '/contact', label: 'Contact & RFQ' },
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
          <a
            href="/"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              navigate('home');
            }}
          >
            <img src="/assets/durga-rice-mill-official-logo.webp" alt="Durga Rice Mill official emblem logo" />
            <div className="navbar-brand-text">
              <span className="brand-main">Durga</span>
              <span className="brand-sub">Rice Mill</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={`nav-link-btn ${currentPage === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.id);
                }}
              >
                {item.label}
              </a>
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

            <a
              href="/contact"
              className="btn-gold nav-quote-btn"
              onClick={(e) => {
                e.preventDefault();
                navigate('contact');
              }}
            >
              <span>Get Quote</span>
              <ArrowUpRight size={15} />
            </a>

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
          <a
            href="/"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              navigate('home');
            }}
          >
            <img src="/assets/durga-rice-mill-official-logo.webp" alt="Durga Rice Mill official emblem logo" />
            <div className="navbar-brand-text">
              <span className="brand-main">Durga</span>
              <span className="brand-sub">Rice Mill</span>
            </div>
          </a>
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
              <a
                href={item.path}
                className={`mobile-nav-btn ${currentPage === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-bottom">
          <div className="mobile-contact-info">
            <p className="mobile-mill-city">Facility: Mouda, Nagpur (NH-53)</p>
            <a href="tel:+919422214567" className="mobile-phone">+91 94222 14567</a>
          </div>
          <a
            href="/contact"
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={(e) => {
              e.preventDefault();
              navigate('contact');
            }}
          >
            Request B2B Quotation
          </a>
        </div>
      </div>
    </>
  );
}
