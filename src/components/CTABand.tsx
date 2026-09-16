import { ArrowRight, PhoneCall } from 'lucide-react';
import './CTABand.css';

interface CTABandProps {
  onContact: () => void;
}

export default function CTABand({ onContact }: CTABandProps) {
  return (
    <section className="cta-band-editorial">
      <div className="cta-glow-overlay" />
      <div className="container cta-band-inner">
        <div className="cta-copy-col">
          <div className="section-label">Direct Mill Procurement</div>
          <h2 className="cta-headline">
            Ready to discuss grades, volume, or <span className="text-gold-italic">private labeling?</span>
          </h2>
          <p className="cta-sub-text">
            Connect directly with our Mouda plant sales desk for immediate spot quotations, 
            sample parcels, or full truckload dispatch schedules across India.
          </p>
        </div>

        <div className="cta-actions-col">
          <button className="btn-gold" onClick={onContact}>
            <span>Request Wholesale RFQ</span>
            <ArrowRight size={16} />
          </button>

          <a href="tel:+919422214567" className="btn-outline-gold">
            <PhoneCall size={15} />
            <span>Call +91 94222 14567</span>
          </a>
        </div>
      </div>
    </section>
  );
}
