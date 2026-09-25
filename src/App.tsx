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

function parseRoute(): Page {
  // Gracefully migrate legacy hash routes (e.g., /#about, /#products, /#product/xyz) to clean path URLs
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  if (hash) {
    let cleanMigratedPath = '/';
    if (hash === 'about') cleanMigratedPath = '/about';
    else if (hash === 'products') cleanMigratedPath = '/products';
    else if (hash.startsWith('product/')) cleanMigratedPath = `/${hash}`;
    else if (hash.startsWith('contact')) cleanMigratedPath = `/${hash}`;
    else if (hash === '404' || hash === 'not-found') cleanMigratedPath = '/404';

    window.history.replaceState(null, '', cleanMigratedPath);
  }

  // Parse clean pathname
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
  const search = window.location.search;

  if (!path || path === 'home') {
    return { view: 'home' };
  }
  if (path === 'about') {
    return { view: 'about' };
  }
  if (path === 'products') {
    return { view: 'products' };
  }
  if (path.startsWith('product/')) {
    const productId = path.replace('product/', '').trim();
    if (products.some((p) => p.id === productId)) {
      return { view: 'product', id: productId };
    }
    return { view: 'not-found', attemptedRoute: `/${path}` };
  }
  if (path === 'contact') {
    const params = new URLSearchParams(search);
    const variety = params.get('variety') || undefined;
    return { view: 'contact', variety };
  }
  if (path === '404' || path === 'not-found') {
    return { view: 'not-found', attemptedRoute: `/${path}` };
  }

  // Unknown route -> 404
  return { view: 'not-found', attemptedRoute: `/${path}` };
}

export default function App() {
  const [page, setPage] = useState<Page>(() => parseRoute());
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

  // Listen to browser Back / Forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      setPage(parseRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Comprehensive SEO updates on every route change: Title, Canonical, Meta Descriptions, OG, Twitter & JSON-LD
  useEffect(() => {
    const origin = 'https://durgaricemill.com';
    let title = 'Durga Rice Mill — 20+ Years of Premium Rice Milling, Mouda, Nagpur';
    let desc =
      'Durga Rice Mill (Est. 2005, Mouda, Nagpur) — Leading commercial rice manufacturer producing RNR Steam Rice, JSR Lachkari Wada Kolam, Lazeez Biryani Rice, Ragul Bullet, and Jeera Raw Rice (Sizer).';
    let canonical = `${origin}/`;
    let ogImage = `${origin}/assets/durga-rice-mill-processing-facility-silos-mouda.webp`;
    let currentProd: typeof products[0] | undefined;

    if (page.view === 'about') {
      title = 'About Our Mill & 20+ Years Heritage | Durga Rice Mill, Mouda';
      desc =
        'Established in 2005 in Aroli, Mouda, Nagpur, Durga Rice Mill produces over 250 metric tons per day of optical sortex-graded wholesale rice across Maharashtra and India.';
      canonical = `${origin}/about`;
    } else if (page.view === 'products') {
      title = 'Wholesale Rice Catalog (26kg & 30kg Bags) | Durga Rice Mill';
      desc =
        'Explore official 26kg and 30kg commercial sacks of RNR Steam Rice, JSR Lachkari Wada Kolam Broken Rice, Lazeez Biryani Rice, Ragul Bullet, and Jeera Raw Rice (Sizer).';
      canonical = `${origin}/products`;
    } else if (page.view === 'product' && 'id' in page) {
      currentProd = products.find((p) => p.id === page.id);
      if (currentProd) {
        title = `${currentProd.name} — Specifications & Milling Grade | Durga Rice Mill`;
        desc = currentProd.description.slice(0, 160);
        canonical = `${origin}/product/${currentProd.id}`;
        ogImage = `${origin}${currentProd.image}`;
      }
    } else if (page.view === 'contact') {
      title = 'Commercial Mandi Inquiry & Mill Dispatch Desk | Durga Rice Mill';
      desc =
        'Contact Durga Rice Mill in Mouda, Nagpur for wholesale truckload quotes, APMC mandi shipments, and sample bags. Call +91 94222 14567 or submit an online RFQ.';
      canonical = `${origin}/contact`;
    } else if (page.view === 'not-found') {
      title = '404: Page Not Found | Durga Rice Mill';
      desc =
        'The requested rice variety or page could not be located in the Durga Rice Mill catalog. Browse all 8 official varieties or return to home.';
      canonical = `${origin}/404`;
    }

    // Set page title
    document.title = title;

    // Helper to set or create meta tags
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let elem = document.querySelector(selector);
      if (!elem) {
        elem = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
          if (name) elem.setAttribute('name', name);
        } else if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
          if (prop) elem.setAttribute('property', prop);
        }
        document.head.appendChild(elem);
      }
      elem.setAttribute(attr, value);
    };

    setMetaTag('meta[name="description"]', 'content', desc);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', desc);
    setMetaTag('meta[property="og:url"]', 'content', canonical);
    setMetaTag('meta[property="og:image"]', 'content', ogImage);
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', desc);
    setMetaTag('meta[name="twitter:url"]', 'content', canonical);
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage);

    // Canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Dynamic Product Schema (JSON-LD) for rich search snippets
    let productSchemaScript = document.getElementById('schema-product-ld');
    if (currentProd) {
      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': currentProd.name,
        'image': `${origin}${currentProd.image}`,
        'description': currentProd.description,
        'brand': {
          '@type': 'Brand',
          'name': currentProd.brand,
        },
        'category': currentProd.category,
        'offers': {
          '@type': 'Offer',
          'url': canonical,
          'priceCurrency': 'INR',
          'price': currentProd.mrp ? currentProd.mrp.replace(/[^0-9]/g, '') : '2080',
          'itemCondition': 'https://schema.org/NewCondition',
          'availability': 'https://schema.org/InStock',
          'seller': {
            '@type': 'Organization',
            'name': 'Durga Rice Mill',
          },
        },
      };

      if (!productSchemaScript) {
        productSchemaScript = document.createElement('script');
        productSchemaScript.id = 'schema-product-ld';
        productSchemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(productSchemaScript);
      }
      productSchemaScript.textContent = JSON.stringify(productSchema);
    } else if (productSchemaScript) {
      productSchemaScript.remove();
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
    let targetPath = '/';
    if (view === 'product' && param) {
      targetPath = `/product/${param}`;
      setPage({ view: 'product', id: param });
    } else if (view === 'contact') {
      targetPath = param ? `/contact?variety=${encodeURIComponent(param)}` : '/contact';
      setPage({ view: 'contact', variety: param });
    } else if (view === 'not-found') {
      targetPath = '/404';
      setPage({ view: 'not-found', attemptedRoute: param });
    } else if (view === 'home') {
      targetPath = '/';
      setPage({ view: 'home' });
    } else {
      targetPath = `/${view}`;
      setPage({ view: view as Page['view'] } as Page);
    }

    const currentUrl = window.location.pathname + window.location.search;
    if (currentUrl !== targetPath) {
      window.history.pushState(null, '', targetPath);
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
