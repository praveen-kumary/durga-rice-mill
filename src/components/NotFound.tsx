import { Home, Package, PhoneCall } from 'lucide-react';
import './NotFound.css';

interface NotFoundProps {
  onNavigate: (view: string, param?: string) => void;
  attemptedRoute?: string;
}

export default function NotFound({ onNavigate, attemptedRoute }: NotFoundProps) {
  return (
    <section className="notfound-section dark-section" role="region" aria-label="404 Page Not Found">
      <div className="container notfound-box">
        {/* Simple Pill Badge */}
        <div className="notfound-badge">
          <span className="notfound-dot" />
          <span>404 Error</span>
        </div>

        {/* Clean, well-proportioned title */}
        <h1 className="notfound-title">
          Page Not Found
        </h1>

        {/* Short, direct explanation */}
        <p className="notfound-text">
          The page or rice variety you are looking for
          {attemptedRoute ? <strong> &ldquo;{attemptedRoute}&rdquo; </strong> : ' '}
          doesn&rsquo;t exist or may have been moved.
        </p>

        {/* Two clean, balanced buttons */}
        <div className="notfound-actions">
          <a
            href="/"
            className="btn-gold notfound-btn"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            id="notfound-btn-home"
          >
            <Home size={15} />
            <span>Return to Home</span>
          </a>

          <a
            href="/products"
            className="btn-outline-gold notfound-btn"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('products');
            }}
            id="notfound-btn-products"
          >
            <Package size={15} />
            <span>Browse All 8 Varieties</span>
          </a>
        </div>

        {/* Understated help link */}
        <div className="notfound-help-row">
          <span>Need bulk booking or mandi pricing?</span>
          <a
            href="/contact"
            className="notfound-contact-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
          >
            <PhoneCall size={13} />
            <span>Contact Mill Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
