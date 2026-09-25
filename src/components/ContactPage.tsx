import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Navigation,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { products } from '../data/products';
import './ContactPage.css';

interface ContactPageProps {
  initialVariety?: string;
}

const transitHubs = [
  { city: 'Nagpur APMC Mandi', transit: '1 – 2 Hours', route: 'Outer Ring Road' },
  { city: 'Vashi APMC (Navi Mumbai)', transit: '18 – 22 Hours', route: 'Samruddhi / NH-53' },
  { city: 'Pune Market Yard', transit: '16 – 20 Hours', route: 'NH-60 Expressway' },
  { city: 'Indore Mandi (MP)', transit: '12 – 14 Hours', route: 'NH-47 Direct' },
  { city: 'Surat & Ahmedabad', transit: '20 – 24 Hours', route: 'Western Freight Corridor' },
  { city: 'Raipur (Chhattisgarh)', transit: '6 – 8 Hours', route: 'NH-53 Eastern Link' },
  { city: 'Hyderabad (Telangana)', transit: '10 – 12 Hours', route: 'NH-44 Corridor' },
];

export default function ContactPage({ initialVariety }: ContactPageProps) {
  // Web3Forms Access Key for Durga Rice Mill
  const WEB3FORMS_ACCESS_KEY = 'eb2461a4-34a3-4b58-b475-9633d7b088cc';

  // Form State
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    variety: initialVariety || products[0].name,
    tonnage: '25 MT (1 FTL Heavy Truckload)',
    packaging: '50 kg (Jute/PP Commercial Sack)',
    destination: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Wholesale Quotation Request: ${form.tonnage} of ${form.variety} - ${form.name} (${form.company})`,
          from_name: 'Durga Rice Mill Web Portal',
          buyer_name: form.name,
          trading_company: form.company,
          phone_whatsapp: form.phone,
          email: form.email || 'Not provided',
          rice_variety: form.variety,
          required_volume: form.tonnage,
          packaging_type: form.packaging,
          destination_siding: form.destination,
          notes_specifications: form.notes || 'None provided',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Transmission failed. Please verify your details and try again.');
      }
    } catch (err) {
      console.error('Web3Forms submission error:', err);
      setErrorMessage('Network connection interrupted. Please try again or message our sales desk directly on WhatsApp at +91 94222 14567.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page page-view">
      {/* 1. Header (Dark Section) */}
      <section className="contact-editorial-header dark-section">
        <div className="container">
          <div className="contact-header-content">
            <div className="section-label">Sales & Trade Enquiries</div>
            <h1 className="contact-main-title">
              Tell us the grade and <br />
              <span className="text-gold-italic">the tonnage.</span>
            </h1>
            <p className="contact-subtitle">
              Whether you are locking a 50 MT distributor contract or requesting private label retail packs,
              our sales desk in Mouda provides immediate landed price quotations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Price Request & Logistics (Light Section) */}
      <section className="contact-main-body light-section">
        <div className="container contact-main-grid">
          {/* Left Column: Inquiry Form & Transit Schedules */}
          <div className="contact-forms-col">
            {/* Inquiry Form */}
            <div className="inquiry-form-card">
              {submitted ? (
                <div className="form-success-state">
                  <CheckCircle2 size={54} className="success-icon" />
                  <h2>Official RFQ Dispatched to Mill Desk</h2>
                  <p>
                    Thank you, <strong>{form.name || 'Valued Trader'}</strong>. Your inquiry for{' '}
                    <strong>{form.tonnage} of {form.variety}</strong> ({form.packaging})
                    has been delivered directly to our sales desk at <strong>durgarm@hotmail.com</strong>.
                  </p>

                  <p className="success-sub">
                    Our Commercial Director will contact you on <strong>{form.phone || 'your phone'}</strong> with
                    firm landed pricing, GST weigh slips, and delivery window within 2 business hours.
                  </p>

                  <div className="success-actions-row">
                    <a
                      href={`https://wa.me/919422214567?text=${encodeURIComponent(
                        `Hello Durga Rice Mill, I have submitted a wholesale price request on your website.\n\n*Name:* ${form.name}\n*Company:* ${form.company}\n*Variety:* ${form.variety}\n*Tonnage:* ${form.tonnage}\n*Packaging:* ${form.packaging}\n*Destination:* ${form.destination}\n*Phone:* ${form.phone}${form.notes ? `\n*Notes:* ${form.notes}` : ''}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                    >
                      <MessageSquare size={16} />
                      <span>Also Send on WhatsApp (+91 94222 14567)</span>
                    </a>

                    <button
                      className="btn-dark-pill"
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMessage(null);
                        setForm({
                          name: '',
                          company: '',
                          phone: '',
                          email: '',
                          variety: products[0].name,
                          tonnage: '25 MT (1 FTL Heavy Truckload)',
                          packaging: '50 kg (Jute/PP Commercial Sack)',
                          destination: '',
                          notes: '',
                        });
                      }}
                    >
                      Submit another quotation request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rfq-form">
                  <h3 className="rfq-form-title">Submit Wholesale Price Request</h3>
                  <p className="rfq-form-desc">
                    Direct mill dispatch ex-Mouda, Nagpur. Configure your order parameters below for official landed rates.
                  </p>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Rice Variety *</label>
                      <select
                        value={form.variety}
                        onChange={(e) => setForm({ ...form, variety: e.target.value })}
                        className="form-input"
                      >
                        {products.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Required Tonnage / Volume *</label>
                      <select
                        value={form.tonnage}
                        onChange={(e) => setForm({ ...form, tonnage: e.target.value })}
                        className="form-input"
                      >
                        <option value="5 MT (Sample / LTL Trucklot)">5 MT (Sample / LTL Trucklot)</option>
                        <option value="15 MT (Medium Wholesale Lot)">15 MT (Medium Wholesale Lot)</option>
                        <option value="25 MT (1 FTL Heavy Truckload)">25 MT (1 FTL Heavy Truckload)</option>
                        <option value="50 MT (2 Dedicated FTL Trucks)">50 MT (2 Dedicated FTL Trucks)</option>
                        <option value="100 MT+ (Rake / Multi-Truck Consignment)">100 MT+ (Rake / Multi-Truck Consignment)</option>
                        <option value="Long-term Monthly Milling Contract">Long-term Monthly Milling Contract</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Packaging Preference</label>
                      <select
                        value={form.packaging}
                        onChange={(e) => setForm({ ...form, packaging: e.target.value })}
                        className="form-input"
                      >
                        <option value="50 kg (Jute/PP Commercial Sack)">50 kg (Jute/PP Commercial Sack)</option>
                        <option value="25 kg (BOPP / Laminated PP Bag)">25 kg (BOPP / Laminated PP Bag)</option>
                        <option value="10 kg (Retail Stand-up Sacks)">10 kg (Retail Stand-up Sacks)</option>
                        <option value="Custom Private Label Bags">Custom Private Label Bags</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Destination City / Railway Siding *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pune, Indore, Ahmedabad, Vashi APMC"
                        value={form.destination}
                        onChange={(e) => setForm({ ...form, destination: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label>Company / Trading Firm *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Agrawal Grain Traders"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94220 00000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="trade@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Specific Notes / Private Label Stitching / Target Date</label>
                    <textarea
                      rows={3}
                      placeholder="Mention custom brand printing, payment terms, or delivery deadline..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  {errorMessage && (
                    <div className="form-error-alert" role="alert">
                      <AlertCircle size={18} style={{ flexShrink: 0 }} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-gold form-submit-btn"
                    disabled={submitting}
                    style={{ opacity: submitting ? 0.75 : 1, cursor: submitting ? 'wait' : 'pointer' }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Transmitting Request to Mill...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request for Official Mill Quotation</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Freight Transit Time Table */}
            <div className="transit-schedule-card">
              <div className="transit-header">
                <Navigation size={20} className="text-gold" />
                <div>
                  <h4>Direct Highway Dispatch Schedules (Ex-Mouda Plant)</h4>
                  <p>Dedicated freight trucks dispatched within 6 hours of confirmation</p>
                </div>
              </div>

              <div className="transit-table-wrap">
                <table className="transit-table">
                  <thead>
                    <tr>
                      <th>Major Trading Hub</th>
                      <th>Transit Time</th>
                      <th>Logistics Corridor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transitHubs.map((hub) => (
                      <tr key={hub.city}>
                        <td><strong>{hub.city}</strong></td>
                        <td><span className="transit-badge">{hub.transit}</span></td>
                        <td>{hub.route}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Plant Credentials & Contacts */}
          <div className="contact-details-col">
            <div className="plant-credential-card">
              <h3 className="cred-card-heading">Durga Rice Mill Facility</h3>
              <p className="cred-card-sub">Central India Processing Plant & Sales Office</p>

              <div className="cred-item">
                <MapPin size={20} className="cred-icon" />
                <div>
                  <strong>Mill Address</strong>
                  <p>
                    At. Post Aroli, Taluka Mouda,<br />
                    District Nagpur, Maharashtra — 441106<br />
                    <span className="highway-tag">Direct Access to National Highway 53</span>
                  </p>
                </div>
              </div>

              <div className="cred-item">
                <Phone size={20} className="cred-icon" />
                <div>
                  <strong>Venkateshwar Rao</strong>
                  <span className="cred-role">Plant Director & Operations</span>
                  <a href="tel:+919422214567" className="cred-link">+91 94222 14567</a>
                </div>
              </div>

              <div className="cred-item">
                <Phone size={20} className="cred-icon" />
                <div>
                  <strong>Nitish Kumar</strong>
                  <span className="cred-role">Commercial & Wholesale Sales</span>
                  <a href="tel:+917709696968" className="cred-link">+91 77096 96968</a>
                </div>
              </div>

              <div className="cred-item">
                <Mail size={20} className="cred-icon" />
                <div>
                  <strong>Official Email</strong>
                  <a href="mailto:durgarm@hotmail.com" className="cred-link">durgarm@hotmail.com</a>
                </div>
              </div>

              <div className="cred-item">
                <MessageSquare size={20} className="cred-icon" />
                <div>
                  <strong>Direct WhatsApp Trading Desk</strong>
                  <a
                    href="https://wa.me/919422214567?text=Hello%20Durga%20Rice%20Mill,%20I%20am%20interested%20in%20rice%20quotations"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-btn"
                  >
                    <span>Chat on WhatsApp (+91 94222 14567)</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              <div className="regulatory-bar">
                <div className="reg-pill">FSSAI Certified</div>
                <div className="reg-pill">GST Registered</div>
                <div className="reg-pill">AGMARK Grade 1</div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="contact-map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d79.08!3d21.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE2JzQ4LjAiTiA3OcKwMDQnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Durga Rice Mill Mouda Location"
                className="map-iframe"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
