import { Home, Package, PhoneCall, Search, ShieldCheck } from 'lucide-react';
import './NotFound.css';

interface NotFoundProps {
  onNavigate: (view: string, param?: string) => void;
  attemptedRoute?: string;
}

export default function NotFound({ onNavigate, attemptedRoute }: NotFoundProps) {
  return (
    <div className="notfound-container dark-section" role="region" aria-label="404 Page Not Found">
      <div className="notfound-bg-glow" aria-hidden="true" />
      <div className="notfound-grain-pattern" aria-hidden="true" />

      <div className="container notfound-content">
        {/* Visual Badge */}
        <div className="notfound-badge">
          <span className="notfound-badge-dot" />
          <span>Error 404 &bull; Missing Route</span>
        </div>

        {/* Big Stylized Number */}
        <div className="notfound-number-wrap">
          <span className="notfound-big-num">404</span>
          <div className="notfound-icon-orbit" aria-hidden="true">
            <Package size={28} className="notfound-floating-icon" />
          </div>
        </div>

        {/* Headings */}
        <h1 className="notfound-title">
          Grain Not Found <span className="text-gold">in the Silo</span>
        </h1>
        <p className="notfound-desc">
          The page or variety specification you requested
          {attemptedRoute ? <code className="notfound-route-tag"> &ldquo;{attemptedRoute}&rdquo; </code> : ' '}
          could not be found in our current catalog. It may have been relocated, renamed, or temporarily unavailable.
        </p>

        {/* Primary Action Buttons */}
        <div className="notfound-actions">
          <button
            type="button"
            className="btn-gold notfound-btn"
            onClick={() => onNavigate('home')}
            id="notfound-btn-home"
          >
            <Home size={16} />
            <span>Return to Home</span>
          </button>

          <button
            type="button"
            className="btn-outline-gold notfound-btn"
            onClick={() => onNavigate('products')}
            id="notfound-btn-products"
          >
            <Package size={16} />
            <span>Browse All 7 Varieties</span>
          </button>

          <button
            type="button"
            className="notfound-btn-ghost"
            onClick={() => onNavigate('contact')}
            id="notfound-btn-contact"
          >
            <PhoneCall size={15} />
            <span>Contact Desk</span>
          </button>
        </div>

        {/* Quick Discovery Directory */}
        <div className="notfound-quick-directory">
          <div className="directory-header">
            <Search size={14} className="text-gold" />
            <span>Or explore our popular milling varieties directly:</span>
          </div>
          <div className="directory-chips">
            <button
              type="button"
              className="dir-chip"
              onClick={() => onNavigate('product', 'white-and-white-gold')}
            >
              White &amp; White Gold (26kg)
            </button>
            <button
              type="button"
              className="dir-chip"
              onClick={() => onNavigate('product', 'lazeez-kolam-green')}
            >
              Lazeez Biryani Green (30kg)
            </button>
            <button
              type="button"
              className="dir-chip"
              onClick={() => onNavigate('product', 'ragul-bullet-colom')}
            >
              Ragul Bullet Marriage Special
            </button>
            <button
              type="button"
              className="dir-chip"
              onClick={() => onNavigate('product', 'meri-jaan-jeera')}
            >
              Meri Jaan Jeera Rice
            </button>
            <button
              type="button"
              className="dir-chip"
              onClick={() => onNavigate('about')}
            >
              About Our Mill (Est. 2005)
            </button>
          </div>
        </div>

        {/* Trust Footnote */}
        <div className="notfound-footer-note">
          <ShieldCheck size={14} className="text-gold" />
          <span>Durga Rice Mill &bull; Village Aroli, Mouda, Nagpur &bull; FSSAI Lic. 11517056000660</span>
        </div>
      </div>
    </div>
  );
}
