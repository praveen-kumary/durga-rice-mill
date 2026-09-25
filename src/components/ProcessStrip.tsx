import './ProcessStrip.css';

const steps = [
  {
    num: '01',
    title: 'Paddy intake & sampling',
    desc: 'Every tractor and trucklot is weighed on certified digital scales, sampled, and tested for moisture (under 13%) at the plant gate.',
  },
  {
    num: '02',
    title: 'Pre-cleaning & de-stoning',
    desc: 'Rotary sieves, aspirators, and magnetic separators extract husk, straw, dust, and stones before de-shelling commences.',
  },
  {
    num: '03',
    title: 'Pneumatic hulling & water polishing',
    desc: 'Rubber roll shellers strip outer husk gently. Closed-loop water-mist polishers buff the grain for a brilliant natural pearl gloss without heat damage.',
  },
  {
    num: '04',
    title: 'Multi-stage optical colour sorting',
    desc: 'High-speed CCD cameras inspect every individual grain at 50,000 frames/sec, eliminating chalky, discolored, and black-tipped grains.',
  },
  {
    num: '05',
    title: 'Precision length grading',
    desc: 'Trieur cylinders separate whole long-head grains from broken fragments to ensure certified uniform grain length.',
  },
  {
    num: '06',
    title: 'Automatic bagging & batch-coded dispatch',
    desc: 'Electronic weigh-filling into 10kg, 25kg, and 50kg BOPP or Jute bags, industrial chain-stitched and batch-stamped for instant dispatch.',
  },
];

export default function ProcessStrip() {
  return (
    <section className="process-editorial-section light-section">
      <div className="container process-editorial-grid">
        {/* Sticky Left Column */}
        <div className="process-sticky-col">
          <div className="section-label light">Paddy to Bag</div>
          <h2 className="process-headline">
            Six controlled stages,<br />
            <span className="text-gold-italic">one continuous line.</span>
          </h2>
          <p className="process-sub-desc">
            Raw paddy enters our plant; graded, polished, and sealed wholesale bags leave.
            No outsourced steps. No handling compromises.
          </p>

          <div className="process-img-frame grain-overlay">
            <img
              src="/assets/durga-rice-mill-buhler-sortex-milling-plant.webp"
              alt="Buhler Sortex optical color sorter and automated milling line inside Durga Rice Mill Mouda facility"
              className="process-mill-img"
            />
            <div className="process-img-caption">
              <span>Buhler Sortex Optical Line</span>
              <small>Mouda Facility · Nagpur</small>
            </div>
          </div>
        </div>

        {/* Right Vertical Connected Timeline */}
        <div className="process-timeline-col">
          <ol className="timeline-list">
            {steps.map((step) => (
              <li key={step.num} className="timeline-item">
                <div className="timeline-badge-wrap">
                  <span className="timeline-num-badge">{step.num}</span>
                  <div className="timeline-connector-line" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-step-title">{step.title}</h3>
                  <p className="timeline-step-desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
