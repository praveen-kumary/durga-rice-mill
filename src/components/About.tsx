import { ArrowRight, ShieldCheck, Truck, Gem, Users, Award, Microscope, Check } from 'lucide-react';
import './About.css';

/* ---- Home page snippet (Light Section) ---- */
interface AboutSnippetProps {
  onLearnMore: () => void;
}

export function AboutSnippet({ onLearnMore }: AboutSnippetProps) {
  return (
    <section className="about-snippet light-section">
      <div className="container about-grid">
        <div className="about-image-frame grain-overlay">
          <img
            src="/assets/mill-facility-tower.png"
            alt="Durga Rice Mill high-tech grain elevators and 4-acre modern milling facility in Mouda, Nagpur"
            className="about-snippet-img"
          />
          <div className="about-img-badge">
            <span className="badge-year">2005</span>
            <span className="badge-text">Mouda Milling Complex · NH-53</span>
          </div>
        </div>

        <div className="about-copy-col">
          <div className="section-label light">
            Heritage & Infrastructure
          </div>

          <h2 className="about-snippet-title">
            Rooted in Vidarbha's soil, engineered for <span className="text-gold-italic">repeatable grade.</span>
          </h2>

          <p className="about-lead-text">
            For over 20 years, Durga Rice Mill has bridged the fertile paddy growers of Nagpur and Bhandara
            with the country's most discerning distributors. Our facility in Mouda operates on a simple principle:
            <strong> no batch variance.</strong>
          </p>

          <div className="about-feature-list">
            <div className="about-feat-item">
              <span className="feat-check"><Check size={14} /></span>
              <div>
                <h4>Direct Farmer Procurement</h4>
                <p>Over 1,200 regional growers with fair-price weighment at the plant gate.</p>
              </div>
            </div>

            <div className="about-feat-item">
              <span className="feat-check"><Check size={14} /></span>
              <div>
                <h4>Multi-Stage Sortex Cleaning</h4>
                <p>High-resolution optical color cameras eject discoloration, chalky, and broken grains.</p>
              </div>
            </div>

            <div className="about-feat-item">
              <span className="feat-check"><Check size={14} /></span>
              <div>
                <h4>NH-53 Strategic Logistics Hub</h4>
                <p>Truckload direct dispatch to Maharashtra, MP, Chhattisgarh, and Gujarat within 24h.</p>
              </div>
            </div>
          </div>

          <div className="about-btn-wrap">
            <button className="btn-dark-pill" onClick={onLearnMore}>
              <span>Read our complete story</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Full Dedicated About Page ---- */
export function AboutPage() {
  const stats = [
    { value: '20+', label: 'Years in Operation' },
    { value: '120 MT', label: 'Daily Milling Capacity' },
    { value: '1,200+', label: 'Partner Farmers' },
    { value: '99.8%', label: 'Sortex Grain Purity' },
  ];

  return (
    <div className="about-page page-view">
      {/* 1. Header Hero */}
      <section className="about-hero-header dark-section">
        <div className="container">
          <div className="about-header-inner">
            <div className="section-label">Our Story & Heritage</div>
            <h1 className="about-header-title">
              Purity from the field.<br />
              <span className="text-gold-italic">Precision on the floor.</span>
            </h1>
            <p className="about-header-desc">
              Located on National Highway 53 in Mouda, Nagpur, Durga Rice Mill is one of Central India's
              foremost processing facilities, delivering consistent wholesale rice to over 340 distributors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Heritage Section (Light) */}
      <section className="about-story-section light-section">
        <div className="container about-story-grid">
          <div className="story-copy">
            <div className="section-label light">Genesis</div>
            <h2>From local paddy mandi to state-of-the-art milling</h2>
            <p>
              Founded in 2005 in Mouda, Nagpur, Durga Rice Mill began with a single milling unit
              and a steadfast commitment to transparent weights and unadulterated grain. 
              Surrounded by the rich black cotton soil of the Kanhan and Wainganga river basins, 
              we identified Vidarbha's signature Wada Kolam and Sona Masoori varieties as staples that 
              deserved national recognition.
            </p>
            <p>
              Over the last two decades, we have continuously modernized our machinery, 
              introducing pneumatic rubber roll de-shellers, closed-loop water mist polishers, 
              and optical color sorters to ensure our rice matches international standards.
            </p>
            <p>
              Today, Durga Rice Mill operates as a trusted partner to wholesalers, retail brands,
              and institutional kitchens that require millions of kilograms of grain each year without
              a single percentage drift in moisture or broken ratio.
            </p>
          </div>

          <div className="story-visual grain-overlay">
            <img
              src="/assets/harvest.jpg"
              alt="Harvested paddy fields in Vidarbha"
              className="story-img"
            />
            <div className="story-badge">
              <span className="story-badge-title">Wainganga Basin</span>
              <span className="story-badge-desc">Vidarbha's Premier Rice Belt</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technology & Infrastructure (Dark) */}
      <section className="about-tech-section dark-section">
        <div className="container">
          <div className="about-tech-header">
            <div className="section-label">Infrastructure</div>
            <h2>Machinery engineered for zero deviation</h2>
            <p>
              Our 4-acre plant in Mouda operates automated lines that protect grain structure
              and preserve natural nutritional aroma.
            </p>
          </div>

          <div className="tech-cards-grid">
            <div className="tech-card">
              <span className="tech-num">01</span>
              <Microscope size={28} className="tech-icon" />
              <h3>In-House Lab QA</h3>
              <p>
                Every tractor lot is sampled at the gate for moisture (under 13%), grain elongation, 
                and foreign matter before unloading into silos.
              </p>
            </div>

            <div className="tech-card">
              <span className="tech-num">02</span>
              <Gem size={28} className="tech-icon" />
              <h3>Optical Sortex Cameras</h3>
              <p>
                Multi-channel optical sensors inspect individual grains at 50,000 frames/sec, 
                discharging discolored, chalky, or black tips instantly.
              </p>
            </div>

            <div className="tech-card">
              <span className="tech-num">03</span>
              <Award size={28} className="tech-icon" />
              <h3>Water-Mist Polishers</h3>
              <p>
                Cold water atomization polishing removes superficial bran dust without chemical additives, 
                producing a natural silk sheen and longer shelf life.
              </p>
            </div>

            <div className="tech-card">
              <span className="tech-num">04</span>
              <Truck size={28} className="tech-icon" />
              <h3>Automated Bagging & Dispatch</h3>
              <p>
                Electronic weigh-filling into 10kg, 25kg, and 50kg BOPP and Jute bags with heavy-duty
                chain stitching and inkjet batch tracking.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="about-inline-stats">
            {stats.map((s) => (
              <div key={s.label} className="inline-stat">
                <span className="inline-stat-val">{s.value}</span>
                <span className="inline-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values & Certifications (Light) */}
      <section className="about-values-section light-section">
        <div className="container">
          <div className="about-values-top">
            <div>
              <div className="section-label light">Core Values</div>
              <h2>How we conduct business</h2>
            </div>
            <p className="values-top-desc">
              Two decades of sustained distributor loyalty is earned through strict commercial
              ethics and operational transparency.
            </p>
          </div>

          <div className="values-editorial-grid">
            {[
              {
                icon: <ShieldCheck size={24} />,
                title: 'No Grade Drift',
                desc: 'The sample you approve in January is identical to the container loaded in November. We lock grain parameters permanently.',
              },
              {
                icon: <Users size={24} />,
                title: 'Fair Farmer Relations',
                desc: 'Prompt digital payments and transparent computerized weighbridges build generational trust with 1,200+ local farming families.',
              },
              {
                icon: <Gem size={24} />,
                title: 'Zero Chemical Bleaching',
                desc: 'Our white rice gains its pearl finish strictly through friction and water-mist conditioning — 100% food safe.',
              },
              {
                icon: <Truck size={24} />,
                title: 'Priority Freight Logistics',
                desc: 'Direct highway connectivity ensures dedicated truckloads are on the road within 6 hours of order finalization.',
              },
            ].map((item) => (
              <div key={item.title} className="val-card">
                <div className="val-icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
