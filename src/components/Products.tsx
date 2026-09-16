import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Package,
  ShieldCheck,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';
import type { Product } from '../data/products';
import { products } from '../data/products';
import './Products.css';

/* ---- Editorial Product Card ---- */
interface ProductCardProps {
  product: Product;
  index: number;
  onClick: (id: string) => void;
  theme?: 'dark' | 'light';
}

export function ProductCard({ product, index, onClick, theme = 'dark' }: ProductCardProps) {
  const numStr = String(index + 1).padStart(2, '0');

  return (
    <article
      className={`editorial-prod-card ${theme}`}
      onClick={() => onClick(product.id)}
    >
      <div className="card-top-row">
        <span className="card-index">{numStr}</span>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span className="card-category-pill">{product.category}</span>
          <span
            className="card-category-pill"
            style={{
              background: theme === 'dark' ? 'rgba(212, 160, 23, 0.15)' : 'rgba(140, 106, 40, 0.1)',
              borderColor: theme === 'dark' ? 'rgba(212, 160, 23, 0.4)' : 'rgba(140, 106, 40, 0.25)',
              color: theme === 'dark' ? '#d4a017' : '#8c6a28',
              fontWeight: 700,
            }}
          >
            {product.netWeight}
          </span>
        </div>
      </div>

      <div className="card-thumb-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="card-thumb-img"
          loading="lazy"
        />
        <div className="card-hover-indicator">
          <span>View Details & Gallery</span>
          <ArrowRight size={14} />
        </div>
      </div>

      <div className="card-info-wrap">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: theme === 'dark' ? 'var(--gold, #d4a017)' : '#8c6a28', fontWeight: 600 }}>{product.brand}</span>
          {product.mrp && (
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: theme === 'dark' ? '#cbd5e1' : '#475569' }}>{product.mrp}</span>
          )}
        </div>
        <h3 className="card-prod-name">{product.name}</h3>
        <p className="card-prod-desc">{product.shortDesc}</p>

        <div className="card-spec-tags">
          <span className="spec-tag" style={{ fontWeight: 600, color: theme === 'dark' ? 'var(--gold, #d4a017)' : '#8c6a28' }}>{product.netWeight} Pack</span>
          {product.specs.grainLength && (
            <span className="spec-tag">{product.specs.grainLength}</span>
          )}
          {product.specs.brokenRatio && (
            <span className="spec-tag">{product.specs.brokenRatio}</span>
          )}
          {product.elongation && (
            <span className={`spec-tag ${theme === 'dark' ? 'text-gold' : ''}`} style={theme === 'light' ? { color: '#8c6a28', fontWeight: 600 } : undefined}>{product.elongation.ratio}</span>
          )}
        </div>

        <div className="card-action-link">
          <span>Explore specifications & gallery</span>
          <ChevronRight size={15} />
        </div>
      </div>
    </article>
  );
}

/* ---- Home Page Products Preview (Clean White & Warm Ivory Section like Product Page) ---- */
interface ProductsPreviewProps {
  onViewAll: () => void;
  onProductClick: (id: string) => void;
}

export function ProductsPreview({ onViewAll, onProductClick }: ProductsPreviewProps) {
  // Display all 7 branded rice bags on the home page
  const featured = products;

  return (
    <section className="products-preview-section light-section">
      <div className="container">
        <div className="products-preview-header">
          <div>
            <div className="section-label light">Our Bags & Varieties</div>
            <h2 className="products-preview-title">
              A grade for every kitchen, <span className="text-gold-italic">every contract.</span>
            </h2>
          </div>
          <button className="btn-outline-gold" onClick={onViewAll}>
            <span>View all {products.length} bag varieties</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="products-preview-grid">
          {featured.map((p, idx) => (
            <ProductCard
              key={p.id}
              product={p}
              index={idx}
              onClick={onProductClick}
              theme="light"
            />
          ))}
        </div>

        <div className="products-preview-footer">
          <p className="custom-pack-note">
            <Package size={16} className="text-gold" />
            <span>Direct mill dispatch available in 26kg and 30kg commercial sacks with custom private labeling options.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---- Full Dedicated Products Catalog Page ---- */
interface ProductsPageProps {
  onProductClick: (id: string) => void;
}

export function ProductsPage({ onProductClick }: ProductsPageProps) {
  const [selectedCat, setSelectedCat] = useState<string>('All Bags');

  const categories = [
    'All Bags',
    'Wada Kolam',
    'Biryani Special',
    'Marriage Special',
    'Jeera Rice',
  ];

  const filtered = selectedCat === 'All' || selectedCat === 'All Bags'
    ? products
    : products.filter(p => p.category.toLowerCase().includes(selectedCat.toLowerCase()) || p.brand.toLowerCase().includes(selectedCat.toLowerCase()));

  return (
    <div className="products-page page-view">
      {/* Catalog Header */}
      <section className="catalog-header dark-section">
        <div className="container">
          <div className="catalog-header-content">
            <div className="section-label">Wholesale Grain Catalog</div>
            <h1 className="catalog-title">
              Precision milled rice varieties.<br />
              <span className="text-gold-italic">Uniform from bag one to bag ten thousand.</span>
            </h1>
            <p className="catalog-subtitle">
              All varieties are de-husked, sortex cleaned, and moisture-controlled to under 13%
              for maximum shelf stability and consistent expansion in commercial kitchens.
            </p>

            {/* Filter Tabs */}
            <div className="category-tabs-bar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`cat-tab-btn ${selectedCat === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid (Warm Light Background) */}
      <section className="catalog-grid-section light-section">
        <div className="container">
          <div className="catalog-count-row">
            <p className="results-count">
              Showing <strong>{filtered.length}</strong> commercial rice varieties
            </p>
            <span className="dispatch-badge">
              <Sparkles size={14} /> Ready for FTL & LTL Dispatch
            </span>
          </div>

          <div className="catalog-cards-grid">
            {filtered.map((p, idx) => (
              <ProductCard
                key={p.id}
                product={p}
                index={idx}
                onClick={onProductClick}
                theme="light"
              />
            ))}
          </div>

          {/* Bulk Packaging Options Banner */}
          <div className="packaging-options-banner">
            <div className="pack-banner-item">
              <Package size={22} className="pack-icon" />
              <div>
                <h4>Standard 25kg & 50kg Bags</h4>
                <p>Heavy-duty woven polypropylene with internal moisture-lock barrier.</p>
              </div>
            </div>

            <div className="pack-banner-item">
              <Sparkles size={22} className="pack-icon" />
              <div>
                <h4>Premium BOPP Retail Packs</h4>
                <p>5kg, 10kg, and 25kg multi-color photographic private label bags.</p>
              </div>
            </div>

            <div className="pack-banner-item">
              <ShieldCheck size={22} className="pack-icon" />
              <div>
                <h4>Traditional Jute Bags</h4>
                <p>Natural breathable jute packaging for export and specialized institutional buyers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---- Product Detail Page with Multi-Image Gallery & Elongation Simulator ---- */
interface ProductDetailProps {
  productId: string;
  onBack: () => void;
  onProductClick: (id: string) => void;
  onContact: (varietyName?: string) => void;
}

export function ProductDetail({
  productId,
  onBack,
  onProductClick,
  onContact,
}: ProductDetailProps) {
  const product = products.find((p) => p.id === productId);

  // Gallery state: Active image index
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);

  if (!product) {
    return (
      <div className="product-detail-empty page-view dark-section">
        <div className="container" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
          <h2>Variety not found</h2>
          <button className="btn-gold" onClick={onBack} style={{ marginTop: 24 }}>
            <ArrowLeft size={16} /> Return to catalog
          </button>
        </div>
      </div>
    );
  }

  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : [product.image, '/assets/grain-macro.jpg', '/assets/hero-bags.jpg', '/assets/milling.jpg'];

  const related = products.filter((p) => p.id !== productId).slice(0, 3);

  return (
    <div className="product-detail-page page-view">
      {/* Top Breadcrumb & Return Bar */}
      <div className="detail-top-bar dark-section">
        <div className="container detail-top-flex">
          <button className="detail-back-btn" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back to all varieties</span>
          </button>
          <div className="detail-crop-year-tag">
            <Award size={14} className="text-gold" />
            <span>{product.cropYear}</span>
          </div>
        </div>
      </div>

      {/* Main Detail Showcase */}
      <section className="detail-main-section light-section">
        <div className="container detail-main-grid">
          {/* Visual Column with Multi-Image Gallery */}
          <div className="detail-visual-col">
            {/* Main Stage Image */}
            <div className="detail-main-image-frame">
              <img
                src={galleryImages[activeImgIdx]}
                alt={`${product.name} - View ${activeImgIdx + 1}`}
                className="detail-hero-img"
              />
              <div className="detail-img-badge">
                <span className="badge-tag">100% Sortex Cleaned</span>
              </div>
            </div>

            {/* Thumbnails Row (clean visual thumbs without text underneath) */}
            <div className="gallery-thumbs-row">
              {galleryImages.map((imgSrc, i) => (
                <button
                  key={i}
                  type="button"
                  className={`gallery-thumb-btn ${activeImgIdx === i ? 'active' : ''}`}
                  onClick={() => setActiveImgIdx(i)}
                  title={`View photo ${i + 1}`}
                >
                  <img src={imgSrc} alt={`${product.name} - Photo ${i + 1}`} />
                </button>
              ))}
            </div>

            {/* Quick Spec Cards */}
            <div className="detail-grain-features">
              <div className="grain-feat-card">
                <span className="feat-val">{product.netWeight}</span>
                <span className="feat-lbl">Net Bag Weight</span>
              </div>
              <div className="grain-feat-card">
                <span className="feat-val">{product.specs.grainLength || '5.2 mm'}</span>
                <span className="feat-lbl">Raw Grain Length</span>
              </div>
              <div className="grain-feat-card">
                <span className="feat-val">{product.specs.brokenRatio || '< 1.0%'}</span>
                <span className="feat-lbl">Broken Content</span>
              </div>
            </div>
          </div>

          {/* Information & Specs Column */}
          <div className="detail-info-col">
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span className="detail-cat-pill">{product.category}</span>
              <span className="detail-cat-pill" style={{ background: '#d4a017', color: '#111827', fontWeight: 700 }}>
                {product.netWeight} SACK
              </span>
              <span className="detail-cat-pill" style={{ background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.1)' }}>
                Brand: {product.brand}
              </span>
            </div>
            <h1 className="detail-title">{product.name}</h1>

            {product.mrp && (
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', margin: '14px 0 16px', background: 'rgba(212, 160, 23, 0.08)', padding: '12px 18px', borderRadius: '10px', border: '1px solid rgba(212, 160, 23, 0.3)', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Max Retail Price</span>
                  <strong style={{ fontSize: '1.25rem', color: '#0f172a' }}>{product.mrp}</strong>
                </div>
                {product.unitPrice && (
                  <div style={{ borderLeft: '1px solid rgba(0,0,0,0.12)', paddingLeft: '16px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Unit Sale Price</span>
                    <strong style={{ fontSize: '1.15rem', color: '#b45309' }}>{product.unitPrice}</strong>
                  </div>
                )}
                {product.specs.fssaiLic && (
                  <div style={{ borderLeft: '1px solid rgba(0,0,0,0.12)', paddingLeft: '16px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FSSAI Central Lic.</span>
                    <strong style={{ fontSize: '0.9rem', color: '#16a34a' }}>{product.specs.fssaiLic}</strong>
                  </div>
                )}
              </div>
            )}

            <p className="detail-description">{product.description}</p>

            {/* Commercial Applications Pills */}
            <div className="detail-use-tags">
              <span className="use-tags-lbl">Primary Commercial Uses:</span>
              <div className="use-pills-row">
                {product.commercialUses.map((use, i) => (
                  <span key={i} className="use-pill">
                    ✓ {use}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="detail-specs-table-wrap">
              <h3 className="specs-table-heading">Technical Grain Specifications</h3>
              <table className="editorial-specs-table">
                <tbody>
                  <tr>
                    <th>Brand & Lineage</th>
                    <td><strong>{product.brand}</strong> — {product.name}</td>
                  </tr>
                  <tr>
                    <th>Commercial Packaging</th>
                    <td><strong>{product.specs.packaging}</strong></td>
                  </tr>
                  <tr>
                    <th>Net Bag Weight</th>
                    <td><strong>{product.netWeight}</strong></td>
                  </tr>
                  {product.specs.mrp && (
                    <tr>
                      <th>Maximum Retail Price</th>
                      <td>{product.specs.mrp} ({product.specs.unitPrice})</td>
                    </tr>
                  )}
                  {product.specs.batchNo && (
                    <tr>
                      <th>Batch Identification</th>
                      <td>{product.specs.batchNo}</td>
                    </tr>
                  )}
                  {product.specs.fssaiLic && (
                    <tr>
                      <th>FSSAI License</th>
                      <td>{product.specs.fssaiLic} (Packed & Marketed by Durga Rice Mill)</td>
                    </tr>
                  )}
                  <tr>
                    <th>Harvest Crop Year</th>
                    <td><strong>{product.cropYear}</strong></td>
                  </tr>
                  <tr>
                    <th>Average Grain Length</th>
                    <td><strong>{product.specs.grainLength}</strong> (Raw milled kernel)</td>
                  </tr>
                  <tr>
                    <th>Post-Cook Elongation</th>
                    <td><strong>{product.elongation.cookedMm} mm</strong> ({product.elongation.ratio})</td>
                  </tr>
                  <tr>
                    <th>Broken Content Ratio</th>
                    <td><strong>{product.specs.brokenRatio}</strong> (Optical length graded)</td>
                  </tr>
                  <tr>
                    <th>Moisture Calibration</th>
                    <td>{product.specs.moisture} (Calibrated on dispatch)</td>
                  </tr>
                  <tr>
                    <th>Sortex Purity Level</th>
                    <td>{product.specs.purity}</td>
                  </tr>
                  <tr>
                    <th>Kett Whiteness Score</th>
                    <td>{product.specs.kettWhiteness}</td>
                  </tr>
                  <tr>
                    <th>Shelf Stability</th>
                    <td>{product.specs.shelfLife}</td>
                  </tr>
                  {product.specs.bestFor && (
                    <tr>
                      <th>Recommended Best For</th>
                      <td>{product.specs.bestFor}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Nutritional Matrix (per 100g) */}
            <div className="detail-nutrition-card">
              <h4 className="nutrition-heading">Nutritional Breakdown (per 100g serving)</h4>
              <div className="nutrition-stats-grid">
                <div className="nutri-item">
                  <span className="nutri-val">{product.nutrition.energyKcal}</span>
                  <span className="nutri-lbl">Energy (kcal)</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-val">{product.nutrition.carbsG}g</span>
                  <span className="nutri-lbl">Carbohydrates</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-val">{product.nutrition.proteinG}g</span>
                  <span className="nutri-lbl">Protein</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-val">{product.nutrition.dietaryFiberG}g</span>
                  <span className="nutri-lbl">Dietary Fiber</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-val">{product.nutrition.fatG}g</span>
                  <span className="nutri-lbl">Fat</span>
                </div>
              </div>
            </div>

            {/* Cooking & Culinary Guide */}
            <div className="cooking-guide-strip">
              <Flame size={18} className="text-gold flex-shrink-0" />
              <div className="cooking-guide-content">
                <strong>Kitchen Yield Standard:</strong> {product.cookingGuide.waterRatio} · {product.cookingGuide.cookTimeMins} cooking time · {product.cookingGuide.fluffiness}.
              </div>
            </div>

            {/* Quote Action Box */}
            <div className="detail-cta-box">
              <div>
                <p className="cta-box-title">Order Minimum: 5 Metric Tonnes (Truckload)</p>
                <p className="cta-box-desc">
                  Pre-populates your selected variety ({product.name}) in our interactive RFQ & truckload logistics calculator.
                </p>
              </div>
              <button
                className="btn-gold"
                onClick={() => onContact(product.name)}
              >
                <span>Request Quotation for {product.name}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="related-section dark-section">
        <div className="container">
          <div className="related-header">
            <div>
              <div className="section-label">Explore More</div>
              <h2>Other Signature Varieties</h2>
            </div>
            <button className="btn-outline-gold" onClick={onBack}>
              <span>View Full Catalog</span>
            </button>
          </div>

          <div className="products-preview-grid">
            {related.map((p, idx) => (
              <ProductCard
                key={p.id}
                product={p}
                index={idx}
                onClick={onProductClick}
                theme="dark"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
