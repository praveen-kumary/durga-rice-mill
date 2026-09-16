import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  onNavigate: (page: string, id?: string) => void;
}

// Inline Feather/Lucide SVG Icons for Social Media
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="social-svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="social-svg"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  const nav = (page: string, id?: string) => {
    onNavigate(page, id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-editorial">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-row" onClick={() => nav('home')}>
              <img src="/assets/durga-logo.png" alt="Durga Rice Mill" className="footer-logo-img" />
              <div className="footer-logo-text">
                <span className="brand-title">Durga</span>
                <span className="brand-gold">Rice Mill</span>
              </div>
            </div>

            <p className="footer-manifesto">
              Precision rice millers supplying distributors, wholesalers, and institutional buyers
              across India. Advanced optical sortex grading, clean water-mist polishing, and custom
              BOPP packaging under one roof in Mouda, Nagpur.
            </p>

            <div className="footer-cert-tags">
              <span className="footer-tag">FSSAI Certified</span>
              <span className="footer-tag">AGMARK Grade 1</span>
              <span className="footer-tag">ISO 22000 Standard</span>
            </div>

            {/* Social Media Links */}
            <div className="footer-social-section">
              <span className="footer-social-label">Follow Us:</span>
              <div className="footer-social-buttons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn instagram"
                  aria-label="Follow Durga Rice Mill on Instagram"
                  title="Follow on Instagram"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn facebook"
                  aria-label="Follow Durga Rice Mill on Facebook"
                  title="Follow on Facebook"
                >
                  <FacebookIcon size={16} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-link-list">
              <li><button onClick={() => nav('home')}>Home Overview</button></li>
              <li><button onClick={() => nav('about')}>About Our Mill</button></li>
              <li><button onClick={() => nav('products')}>All Rice Varieties</button></li>
              <li><button onClick={() => nav('contact')}>B2B RFQ Calculator</button></li>
            </ul>
          </div>

          {/* Varieties Quicklist Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Signature Grades</h4>
            <ul className="footer-link-list">
              <li><button onClick={() => nav('product', 'wada-kolam')}>Wada Kolam Rice</button></li>
              <li><button onClick={() => nav('product', 'sona-masoori')}>Golden Sona Masoori</button></li>
              <li><button onClick={() => nav('product', '1121-basmati')}>1121 Steam Basmati</button></li>
              <li><button onClick={() => nav('product', 'parboiled-rice')}>Commercial Parboiled</button></li>
              <li><button onClick={() => nav('product', 'broken-rice')}>Sortex Broken Rice</button></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Plant & Trade Desk</h4>
            <div className="footer-contact-items">
              <div className="f-contact-line">
                <MapPin size={16} className="f-icon" />
                <span>At. Post Aroli, Ta. Mouda,<br />Dist. Nagpur, MH — 441106</span>
              </div>
              <div className="f-contact-line">
                <Phone size={16} className="f-icon" />
                <div>
                  <a href="tel:+919422214567">+91 94222 14567</a> (Plant)<br />
                  <a href="tel:+917709696968">+91 77096 96968</a> (Sales)
                </div>
              </div>
              <div className="f-contact-line">
                <Mail size={16} className="f-icon" />
                <a href="mailto:durgarm@hotmail.com">durgarm@hotmail.com</a>
              </div>
            </div>

            <button className="footer-rfq-btn" onClick={() => nav('contact')}>
              <span>Request Price Quote</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span>&copy; {year} Durga Rice Mill. All rights reserved.</span>
            <span className="footer-dot">•</span>
            <span>Mouda, Nagpur (MH)</span>
          </div>

          <div className="footer-bottom-right">
            <span>GSTIN: Registered Producer</span>
            <span className="footer-dot">•</span>
            <div className="footer-bottom-socials">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-mini-social"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-mini-social"
                aria-label="Facebook"
                title="Facebook"
              >
                <FacebookIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
