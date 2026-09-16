import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote:
      'The grade never drifts. We have been loading Wada Kolam from Durga Rice Mill every single month for 6 years, and our retail store buyers never complain of a batch shift.',
    author: 'Rajesh Agrawal',
    role: 'Managing Director · Agrawal Grain Traders',
    location: 'Pune & Western Maharashtra',
  },
  {
    quote:
      'Dispatch documentation and certified computerized weigh slips are ready before the truck is fully loaded. That operational speed saves us an entire turnaround day on every rake.',
    author: 'Sunil Verma',
    role: 'Head of Procurement · Central India Hospitality Supply',
    location: 'Indore & Jabalpur',
  },
  {
    quote:
      'They matched our custom 10kg and 25kg BOPP private label branding down to the precise thread stitching and batch barcoding. Zero bag leakage, zero client returns.',
    author: 'Kirit Patel',
    role: 'Supply Chain Director · Patel Mega Retail Stores',
    location: 'Ahmedabad & Surat',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-editorial-section dark-section">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-label">In Their Words</div>
          <h2 className="testimonials-headline">
            Endorsed by those who trade <span className="text-gold-italic">by the truckload.</span>
          </h2>
        </div>

        <div className="testimonials-cards-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <Quote size={32} className="testimonial-quote-icon" />
              <p className="testimonial-quote-text">&ldquo;{t.quote}&rdquo;</p>
              
              <div className="testimonial-footer">
                <div className="testimonial-hairline" />
                <h4 className="testimonial-author">{t.author}</h4>
                <p className="testimonial-role">{t.role}</p>
                <span className="testimonial-loc">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
