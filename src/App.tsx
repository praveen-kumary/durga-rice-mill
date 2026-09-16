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
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { products } from './data/products';

import './App.css';

export type Page =
  | { view: 'home' }
  | { view: 'about' }
  | { view: 'products' }
  | { view: 'product'; id: string }
  | { view: 'contact'; variety?: string }
  | { view: 'not-found'; attemptedRoute?: string };

function parseRouteFromHash(): Page {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  if (!hash || hash === 'home') {
    return { view: 'home' };
  }
  if (hash === 'about') {
    return { view: 'about' };
  }
  if (hash === 'products') {
    return { view: 'products' };
  }
  if (hash.startsWith('product/')) {
    const productId = hash.replace('product/', '').trim();
    if (products.some((p) => p.id === productId)) {
      return { view: 'product', id: productId };
    }
    return { view: 'not-found', attemptedRoute: hash };
  }
  if (hash.startsWith('contact')) {
    const queryIdx = hash.indexOf('?');
    if (queryIdx !== -1) {
      const params = new URLSearchParams(hash.slice(queryIdx + 1));
      const variety = params.get('variety') || undefined;
      return { view: 'contact', variety };
    }
    return { view: 'contact' };
  }
  if (hash === '404' || hash === 'not-found') {
    return { view: 'not-found', attemptedRoute: hash };
  }
  // Unknown route
  return { view: 'not-found', attemptedRoute: hash };
}

export default function App() {
  const [page, setPage] = useState<Page>(() => parseRouteFromHash());
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

  // Listen to browser hash changes & back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      setPage(parseRouteFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Dynamic SEO metadata (Title & Meta Description) updates
  useEffect(() => {
    let title = 'Durga Rice Mill — 20+ Years of Premium Rice Milling, Mouda, Nagpur';
    let desc =
      'Durga Rice Mill (Est. 2005, Mouda, Nagpur) — Leading commercial rice manufacturer producing White & White Lachkari Wada Kolam, Lazeez Biryani Rice, Ragul Bullet, and Meri Jaan Jeera Rice.';

    if (page.view === 'about') {
      title = 'About Our Mill & 20+ Years Heritage | Durga Rice Mill, Mouda';
      desc =
        'Established in 2005 in Aroli, Mouda, Nagpur, Durga Rice Mill produces over 250 metric tons per day of optical sortex-graded wholesale rice.';
    } else if (page.view === 'products') {
      title = 'Wholesale Rice Catalog (26kg & 30kg Bags) | Durga Rice Mill';
      desc =
        'Explore official 26kg and 30kg bags of White & White Lachkari Wada Kolam, Lazeez Biryani Rice, Ragul Bullet, and Meri Jaan Jeera Rice.';
    } else if (page.view === 'product' && 'id' in page) {
      const prod = products.find((p) => p.id === page.id);
      if (prod) {
        title = `${prod.name} — Specifications & Milling Grade | Durga Rice Mill`;
        desc = prod.description.slice(0, 160);
      }
    } else if (page.view === 'contact') {
      title = 'Commercial Mandi Inquiry & Mill Dispatch Desk | Durga Rice Mill';
      desc =
        'Contact Durga Rice Mill in Mouda, Nagpur for wholesale truckload quotes, APMC mandi shipments, and sample bags. Call +91 94222 14567.';
    } else if (page.view === 'not-found') {
      title = '404: Grain Not Found in the Silo | Durga Rice Mill';
      desc =
        'The requested rice variety or page could not be located in the Durga Rice Mill catalog. Browse all 7 official varieties or return to home.';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [page]);

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
    let newHash = '';
    if (view === 'product' && param) {
      newHash = `product/${param}`;
      setPage({ view: 'product', id: param });
    } else if (view === 'contact') {
      newHash = param ? `contact?variety=${encodeURIComponent(param)}` : 'contact';
      setPage({ view: 'contact', variety: param });
    } else if (view === 'not-found') {
      newHash = '404';
      setPage({ view: 'not-found', attemptedRoute: param });
    } else if (view === 'home') {
      newHash = '';
      setPage({ view: 'home' });
    } else {
      newHash = view;
      setPage({ view: view as Page['view'] } as Page);
    }

    if (window.location.hash.replace(/^#\/?/, '') !== newHash) {
      window.history.pushState(null, '', newHash ? `#${newHash}` : window.location.pathname);
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  };

  const currentView = page.view;

  return (
    <ErrorBoundary>
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

          {currentView === 'not-found' && (
            <NotFound
              onNavigate={navigate}
              attemptedRoute={'attemptedRoute' in page ? page.attemptedRoute : undefined}
            />
          )}
        </main>

        <Footer onNavigate={navigate} />
        <WhatsAppButton />
      </div>
    </ErrorBoundary>
  );
}
