import './WhyUs.css';

const points = [
  {
    num: '01',
    title: 'Consistency you can resell',
    body: 'Same grain length, same polish, same moisture — lot after lot, so your retail buyers and hotel chefs never detect a change of batch.',
  },
  {
    num: '02',
    title: 'Own milling, zero middlemen',
    body: 'Procurement from 1,200+ local farmers, computerized milling, and automated packing run under one roof, keeping pricing tight and margin strong.',
  },
  {
    num: '03',
    title: 'Bulk-ready logistics',
    body: 'Full truckload (FTL) dispatch with NH-53 highway access. Batch-coded bags, weigh slips, and GST e-way documentation ready before loading.',
  },
  {
    num: '04',
    title: 'Custom bag specifications',
    body: 'Your bag size (10kg / 25kg / 50kg), your private label branding, your thread stitching spec — contract packaging delivered seamlessly.',
  },
];

export default function WhyUs() {
  return (
    <section className="why-editorial-section dark-section">
      <div className="container why-editorial-grid">
        <div className="why-left-col">
          <div className="section-label">Why Durga Rice Mill</div>
          <h2 className="why-headline">
            Buyers stay for the<br />
            <span className="text-gold-italic">repeatability.</span>
          </h2>
          <div className="hairline" />
          <p className="why-summary-text">
            In commodity rice trading, batch variation erodes reputation.
            We treat milling as precision engineering — locking moisture, broken ratios,
            and elongation curves so every dispatch matches the master sample.
          </p>
        </div>

        <div className="why-cards-grid">
          {points.map((p, idx) => (
            <div
              key={p.title}
              className={`why-editorial-card ${idx % 2 === 1 ? 'why-card-stagger' : ''}`}
            >
              <span className="why-card-index">{p.num}</span>
              <h3 className="why-card-title">{p.title}</h3>
              <p className="why-card-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
