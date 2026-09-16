import { Check } from 'lucide-react';
import './QualityCompliance.css';

const checks = [
  {
    title: 'Moisture & grain-length calibration at intake',
    desc: 'Every intake tractor and truck is sampled with mechanical probes and analyzed in our lab before unloading.',
  },
  {
    title: 'Retained batch samples for 12 months',
    desc: 'Our in-house QC laboratory seals and archives 500g from every dispatched truckload for audit verification.',
  },
  {
    title: 'Food-grade sanitary silo storage',
    desc: 'Aerated, pest-controlled grain storage silos prevent moisture re-absorption and biological infestation.',
  },
  {
    title: 'Inkjet batch code & tamper-evident stitching',
    desc: 'Every bag features traceable milling dates, machine codes, and high-tensile industrial stitching.',
  },
];

const badges = [
  {
    title: 'FSSAI Certified',
    code: 'Central Food Safety License',
    icon: '✦',
  },
  {
    title: 'AGMARK Grade 1',
    code: 'Agricultural Produce Standards',
    icon: '★',
  },
  {
    title: 'ISO 22000:2018',
    code: 'Food Safety Management',
    icon: '◈',
  },
  {
    title: 'APEDA Registered',
    code: 'Export Verification Standard',
    icon: '❖',
  },
];

export default function QualityCompliance() {
  return (
    <section className="quality-compliance-section light-section">
      <div className="container">
        <div className="quality-top-grid">
          <div className="quality-left-col">
            <div className="section-label light">Quality & Compliance</div>
            <h2 className="quality-headline">
              Checked before it leaves <br />
              <span className="text-gold-italic">the mill floor.</span>
            </h2>
            <p className="quality-subtext">
              We hold our milling line to pharmaceutical-level hygiene and agricultural grading standards.
              Zero adulteration, zero chemical additives, guaranteed.
            </p>
          </div>

          <div className="quality-checks-col">
            <ul className="checks-list">
              {checks.map((c, i) => (
                <li key={i} className="check-list-item">
                  <span className="check-dot-badge">
                    <Check size={14} />
                  </span>
                  <div>
                    <h4 className="check-item-title">{c.title}</h4>
                    <p className="check-item-desc">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Certification Badges */}
        <div className="cert-badges-grid">
          {badges.map((b) => (
            <div key={b.title} className="cert-badge-card">
              <span className="cert-badge-icon">{b.icon}</span>
              <h4 className="cert-badge-name">{b.title}</h4>
              <p className="cert-badge-code">{b.code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
