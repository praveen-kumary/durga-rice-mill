import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onExploreProducts: () => void;
  onContact?: () => void;
  onProductClick?: (id: string) => void;
}

interface BannerSlide {
  id: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 'brands',
    desktopImage: '/assets/banners/desktop/durga-rice-mill-wholesale-rice-bags-lineup.webp',
    mobileImage: '/assets/banners/mobile/durga-rice-mill-wholesale-rice-bags-lineup-mobile.webp',
    alt: 'Durga Rice Mill wholesale commercial branded rice bags lineup including Meri Jaan, White & White, Lazeez, and Raad Bullet at Mouda facility',
  },
  {
    id: 'mill',
    desktopImage: '/assets/banners/desktop/durga-rice-mill-processing-plant-paddy-harvest.webp',
    mobileImage: '/assets/banners/mobile/durga-rice-mill-processing-plant-paddy-harvest-mobile.webp',
    alt: 'Durga Rice Mill high-capacity grain processing silos, freshly harvested paddy sacks, and steamed fragrant white rice',
  },
  {
    id: 'harvest-sunset',
    desktopImage: '/assets/banners/desktop/durga-rice-mill-paddy-fields-milling-plant-sunset.webp',
    mobileImage: '/assets/banners/mobile/durga-rice-mill-paddy-fields-milling-plant-sunset-mobile.webp',
    alt: 'Durga Rice Mill modern grain milling plant and silos with surrounding green paddy fields, fresh harvested rice grains in wooden bowl and burlap sack at golden sunset',
  },
];

const popularVarieties = [
  { name: 'RNR Steam Rice (26kg)', id: 'white-and-white-gold' },
  { name: 'JSR Wada Kolam Broken (26kg)', id: 'white-and-white-ruby' },
  { name: 'JSR Wada Kolam Raw Broken (26kg)', id: 'white-and-white-emerald' },
  { name: 'Lazeez Green (30kg)', id: 'lazeez-kolam-green' },
  { name: 'Lazeez Gold (30kg)', id: 'lazeez-kolam-gold' },
  { name: 'Ragul Bullet (26kg)', id: 'ragul-bullet-colom' },
  { name: 'Jeera Raw Rice (Sizer) (26kg)', id: 'meri-jaan-jeera' },
  { name: 'Jeera Sambhar Rice (30kg)', id: 'meri-jaan-sambhar' },
];

const SLIDE_INTERVAL_MS = 4500; // Auto-slides every 4.5 seconds

export default function Hero({ onExploreProducts, onContact, onProductClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  // Preload banner images for instant, flicker-free transitions
  useEffect(() => {
    bannerSlides.forEach((slide) => {
      const imgDesktop = new Image();
      imgDesktop.src = slide.desktopImage;
      const imgMobile = new Image();
      imgMobile.src = slide.mobileImage;
    });
  }, []);

  // Auto-slide to next image continuously every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const selectSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      className="hero-fullscreen"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Full-Screen Background Image Slides with Smooth Crossfade & Responsive Picture */}
      <div className="hero-bg-carousel">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            data-slide={slide.id}
            className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <picture className="hero-bg-picture">
              <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              <img
                src={slide.desktopImage}
                alt={slide.alt}
                className="hero-bg-img"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </picture>
          </div>
        ))}
      </div>

      {/* 2. Film Grain & Luxury Dark Vignette Overlays */}
      <div className="hero-overlay-gradient" />
      <div className="hero-vignette" />
      <div className="grain-overlay" />

      {/* 3. Main Hero Content Container */}
      <div className="container hero-content-container">
        <div className="hero-content-inner">
          {/* Eyebrow (Clean, without plant chip or category text) */}
          <div className="hero-meta-row">
            <span className="section-label">Since 2005 · Bulk Rice Millers</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-fullscreen-title">
            Grain milled with
            <span className="hero-title-italic">uncommon care.</span>
          </h1>

          {/* Subtext description */}
          <p className="hero-fullscreen-desc">
            <span className="desc-desktop">
              Durga Rice Mill supplies precision-graded Wada Kolam, Sona Masoori, and Steam Basmati
              in 10kg to 50kg bulk bags to wholesalers, distributors, and institutional kitchens —
              sorted, polished, and bagged under one roof in Mouda, Nagpur.
            </span>
            <span className="desc-mobile">
              Wholesale Wada Kolam, Sona Masoori & Basmati in 10kg–50kg bulk bags from Mouda, Nagpur.
            </span>
          </p>

          {/* Quick Popular Variety Jump Tags */}
          <div className="hero-variety-tags">
            <span className="variety-tag-label">Signature Varieties:</span>
            <div className="variety-chips-wrap">
              {popularVarieties.map((v) => (
                <a
                  key={v.id}
                  href={`/product/${v.id}`}
                  className="variety-chip-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onProductClick) onProductClick(v.id);
                    else onExploreProducts();
                  }}
                  title={`View details for ${v.name}`}
                >
                  <span>{v.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons Row */}
          <div className="hero-btn-row">
            {onContact && (
              <a
                href="/contact"
                className="btn-gold hero-cta-primary"
                onClick={(e) => {
                  e.preventDefault();
                  onContact();
                }}
              >
                <span className="btn-text-desktop">Request B2B Quotation</span>
                <span className="btn-text-mobile">Get B2B Quote</span>
                <ArrowRight size={15} />
              </a>
            )}
            <a
              href="/products"
              className="btn-outline-gold hero-cta-secondary"
              onClick={(e) => {
                e.preventDefault();
                onExploreProducts();
              }}
            >
              <span className="btn-text-desktop">Explore All 8 Bag Varieties</span>
              <span className="btn-text-mobile">All 8 Varieties</span>
            </a>
          </div>

          {/* Trust Pillars */}
          <div className="hero-trust-strip">
            <div className="trust-item">
              <CheckCircle2 size={14} className="trust-icon" />
              <span className="trust-text-desktop">Full Batch Traceability</span>
              <span className="trust-text-mobile">Batch Traceable</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={14} className="trust-icon" />
              <span className="trust-text-desktop">Optical Sortex Graded</span>
              <span className="trust-text-mobile">Sortex Graded</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={14} className="trust-icon" />
              <span className="trust-text-desktop">FSSAI & AGMARK Assured</span>
              <span className="trust-text-mobile">FSSAI Assured</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Minimalist Luxury Slide Controls (Auto-cycling indicator bars + chevrons) */}
      <div className="hero-minimal-controls">
        <div className="container hero-controls-flex">
          <div className="hero-pagination-group">
            <span className="current-slide-num">0{currentSlide + 1}</span>
            <div className="hero-slide-bars">
              {bannerSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  className={`slide-bar-btn ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => selectSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span className="bar-track">
                    <span
                      key={`${idx}-${currentSlide}`}
                      className={`bar-fill ${currentSlide === idx ? 'animating' : currentSlide > idx ? 'completed' : ''}`}
                    />
                  </span>
                </button>
              ))}
            </div>
            <span className="total-slide-num">0{bannerSlides.length}</span>
          </div>

          <div className="hero-arrow-btns">
            <button
              className="hero-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous banner image"
              title="Previous Image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="hero-arrow-btn"
              onClick={nextSlide}
              aria-label="Next banner image"
              title="Next Image"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
