import { useEffect, useRef, useState } from 'react';
import './StatsStrip.css';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, value]);

  return (
    <span ref={ref} className="stat-number-val">
      {display}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 120, suffix: '+', label: 'Tonnes milled daily' },
  { value: 20, suffix: '+ yrs', label: 'In the grain trade' },
  { value: 340, suffix: '+', label: 'Distributors served' },
  { value: 12, suffix: '', label: 'States delivered to' },
];

export default function StatsStrip() {
  return (
    <section className="stats-editorial-strip">
      <div className="container stats-editorial-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-editorial-card">
            <p className="stat-display-num">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="stat-display-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
