import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { productCategories } from '../data/products';

export default function MockupProductGrid({ onSelectCategory, onViewAll }) {
  return (
    <section className="products-section" id="products">
      <div className="container">

        {/* Section header */}
        <div className="products-header">
          <div>
            <div className="section-label">Our Products</div>
            <h2 className="section-title">
              Precision Adhesive <span className="highlight-orange">Solutions</span>
            </h2>
            <p className="products-subtitle">
              Formulated for the world's toughest bonding challenges — one solution for every application.
            </p>
          </div>
          <button onClick={onViewAll} className="btn-outline" id="view-all-products-btn">
            <span>Full Catalog</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className="section-gold-line" style={{ marginBottom: 40 }} />

        {/* Product grid */}
        <div className="six-card-grid">
          {productCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`category-card ${idx === 0 ? 'category-card--featured' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {/* Image */}
              <div className="category-card-image-wrap">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="category-card-image"
                  loading="lazy"
                />
                {/* Gradient overlay on image */}
                <div className="category-card-image-overlay" />
                <span className="category-card-badge">{cat.count} Products</span>
                {idx === 0 && <span className="category-card-featured-tag">BESTSELLER</span>}
              </div>

              {/* Body */}
              <div className="category-card-body">
                <div className="category-card-icon-row">
                  <Layers size={14} />
                  <span className="category-card-type">ADHESIVE</span>
                </div>
                <h3 className="category-card-title">{cat.name}</h3>
                <p className="category-card-desc">{cat.tagline}</p>

                <div className="category-card-footer">
                  <span className="category-card-cta">
                    Explore Range
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
