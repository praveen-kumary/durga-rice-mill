import { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Package,
  ChevronRight,
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
        </div>
        <h3 className="card-prod-name">
          <a
            href={`/product/${product.id}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClick(product.id);
            }}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {product.name}
          </a>
        </h3>
        <p className="card-prod-desc">{product.shortDesc}</p>

        <a
          href={`/product/${product.id}`}
          className="card-action-link"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick(product.id);
          }}
        >
          <span>Explore specifications & gallery</span>
          <ChevronRight size={15} />
        </a>
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
          <a
            href="/products"
            className="btn-outline-gold"
            onClick={(e) => {
              e.preventDefault();
              onViewAll();
            }}
          >
            <span>View all {products.length} bag varieties</span>
            <ArrowRight size={15} />
          </a>
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
    'Steam Rice',
    'Broken Rice',
    'Biryani Special',
    'Marriage Special',
    'Jeera Rice',
  ];

  const filtered = selectedCat === 'All' || selectedCat === 'All Bags'
    ? products
    : products.filter(p =>
        p.category.toLowerCase().includes(selectedCat.toLowerCase()) ||
        p.brand.toLowerCase().includes(selectedCat.toLowerCase()) ||
        p.name.toLowerCase().includes(selectedCat.toLowerCase())
      );

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
          <a
            href="/products"
            className="btn-gold"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            style={{ marginTop: 24 }}
          >
            <ArrowLeft size={16} /> Return to catalog
          </a>
        </div>
      </div>
    );
  }

  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const related = products.filter((p) => p.id !== productId).slice(0, 3);

  return (
    <div className="product-detail-page page-view">
      {/* Top Breadcrumb & Return Bar */}
      <div className="detail-top-bar dark-section">
        <div className="container detail-top-flex">
          <a
            href="/products"
            className="detail-back-btn"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to all varieties</span>
          </a>
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

            {/* Quick Spec Cards - REAL DATA ONLY */}
            <div className="detail-grain-features">
              <div className="grain-feat-card">
                <span className="feat-val">{product.netWeight}</span>
                <span className="feat-lbl">Net Bag Weight</span>
              </div>
              <div className="grain-feat-card">
                <span className="feat-val">100% Sortex</span>
                <span className="feat-lbl">Buhler Cleaned</span>
              </div>
              <div className="grain-feat-card">
                <span className="feat-val">Direct Mill</span>
                <span className="feat-lbl">Mouda, Nagpur</span>
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

            <div className="detail-price-strip">
              <div className="detail-price-cell">
                <span className="price-cell-lbl">Commercial Supply</span>
                <strong className="price-cell-val main-mrp">Direct Mill Dispatch</strong>
              </div>
              <div className="detail-price-cell bordered">
                <span className="price-cell-lbl">Wholesale Quotation</span>
                <strong className="price-cell-val unit-price">Market Mandi Rate on Inquiry</strong>
              </div>
              {product.specs.fssaiLic && (
                <div className="detail-price-cell bordered">
                  <span className="price-cell-lbl">FSSAI Central Lic.</span>
                  <strong className="price-cell-val fssai-lic">{product.specs.fssaiLic}</strong>
                </div>
              )}
            </div>

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

            {/* Technical Specifications Matrix - REAL DATA ONLY */}
            <div className="detail-specs-table-wrap">
              <h3 className="specs-table-heading">Official Packaging & Mill Specifications</h3>
              <table className="editorial-specs-table">
                <tbody>
                  <tr>
                    <th>Brand & Lineage</th>
                    <td><strong>{product.brand}</strong> — {product.name}</td>
                  </tr>
                  <tr>
                    <th>Commercial Packaging</th>
                    <td><strong>{product.specs.packaging || `${product.netWeight} Commercial Sack`}</strong></td>
                  </tr>
                  <tr>
                    <th>Net Bag Weight</th>
                    <td><strong>{product.netWeight}</strong></td>
                  </tr>
                  <tr>
                    <th>Grading & Cleaning</th>
                    <td><strong>100% Optical Color Sorting (Buhler Technology)</strong></td>
                  </tr>
                  <tr>
                    <th>Milling Facility</th>
                    <td><strong>Durga Rice Mill</strong> — Mouda, Nagpur, Maharashtra</td>
                  </tr>
                  {product.specs.fssaiLic && (
                    <tr>
                      <th>FSSAI Central License</th>
                      <td><strong>{product.specs.fssaiLic}</strong> (Packed & Marketed by Durga Rice Mill)</td>
                    </tr>
                  )}
                  {product.specs.batchNo && (
                    <tr>
                      <th>Batch Identification</th>
                      <td>{product.specs.batchNo}</td>
                    </tr>
                  )}
                  <tr>
                    <th>Harvest / Milling Run</th>
                    <td><strong>{product.cropYear}</strong></td>
                  </tr>
                  <tr>
                    <th>Shelf Stability</th>
                    <td>24 Months in cool & dry aerated storage</td>
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

            {/* Quote Action Box */}
            <div className="detail-cta-box">
              <a
                href={`/contact?variety=${encodeURIComponent(product.name)}`}
                className="btn-gold"
                onClick={(e) => {
                  e.preventDefault();
                  onContact(product.name);
                }}
              >
                <span>Request Quotation for {product.name}</span>
                <ArrowRight size={16} />
              </a>
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
            <a
              href="/products"
              className="btn-outline-gold"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
            >
              <span>View Full Catalog</span>
            </a>
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
