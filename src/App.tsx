import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import { AboutSnippet, AboutPage } from './components/About';
import { ProductsPreview, ProductsPage, ProductDetail } from './components/Products';
import ProcessStrip from './components/ProcessStrip';
import WhyUs from './components/WhyUs';
import QualityCompliance from './components/QualityCompliance';
import Testimonials from './components/Testimonials';
import CTABand from './components/CTABand';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import './App.css';

type Page =
  | { view: 'home' }
  | { view: 'about' }
  | { view: 'products' }
  | { view: 'product'; id: string }
  | { view: 'contact'; variety?: string };

export default function App() {
  const [page, setPage] = useState<Page>({ view: 'home' });
  const lenisRef = useRef<Lenis | null>(null);

  // Lenis Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Guarantee that every page navigation resets scroll position to the very top immediately
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [page]);

  const navigate = (view: string, param?: string) => {
    if (view === 'product' && param) {
      setPage({ view: 'product', id: param });
    } else if (view === 'contact') {
      setPage({ view: 'contact', variety: param });
    } else {
      setPage({ view: view as Page['view'] } as Page);
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  };

  const currentView = page.view;

  return (
    <div className="app-container">
      <Navbar
        currentPage={currentView === 'product' ? 'products' : currentView}
        onNavigate={navigate}
        forceScrolled={currentView !== 'home'}
      />

      <main>
        {currentView === 'home' && (
          <div className="page-view">
            {/* 1. Hero (Dark) */}
            <Hero
              onExploreProducts={() => navigate('products')}
              onContact={() => navigate('contact')}
              onProductClick={(id) => navigate('product', id)}
            />

            {/* 2. Count-Up Stats Strip (Dark Surface) */}
            <StatsStrip />

            {/* 3. About Snippet (Light Warm Ivory) */}
            <AboutSnippet onLearnMore={() => navigate('about')} />

            {/* 4. Products Preview (Dark Forest) */}
            <ProductsPreview
              onViewAll={() => navigate('products')}
              onProductClick={(id) => navigate('product', id)}
            />

            {/* 5. Sticky Process Timeline (Light Warm Ivory) */}
            <ProcessStrip />

            {/* 6. Why Us Repeatability (Dark Forest) */}
            <WhyUs />

            {/* 7. Quality & Compliance Lab Checks (Light Warm Ivory) */}
            <QualityCompliance />

            {/* 8. Industry Testimonials (Dark Forest) */}
            <Testimonials />

            {/* 9. Direct Mill CTA Band (Dark Luxury) */}
            <CTABand onContact={() => navigate('contact')} />
          </div>
        )}

        {currentView === 'about' && <AboutPage />}

        {currentView === 'products' && (
          <ProductsPage onProductClick={(id) => navigate('product', id)} />
        )}

        {currentView === 'product' && 'id' in page && (
          <ProductDetail
            productId={page.id}
            onBack={() => navigate('products')}
            onProductClick={(id) => navigate('product', id)}
            onContact={(varietyName) => navigate('contact', varietyName)}
          />
        )}

        {currentView === 'contact' && (
          <ContactPage
            initialVariety={'variety' in page ? page.variety : undefined}
          />
        )}
      </main>

      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}
