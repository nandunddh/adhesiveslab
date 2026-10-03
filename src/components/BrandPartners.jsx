import React from 'react';
import { Award, ChevronRight } from 'lucide-react';

const brands = [
  { name: 'APEXBOND', sub: 'Structural Epoxies', color: '#F26419' },
  { name: 'PROSEAL', sub: 'Engineered Silicones', color: '#2563EB' },
  { name: 'THERMAMELT', sub: 'Polyolefin Hot Melts', color: '#2D9E6B' },
  { name: 'ULTRAFIX', sub: 'Instant Cyanoacrylates', color: '#C0392B' },
  { name: 'OPTICURE', sub: 'UV Photo-Curing Gels', color: '#7C3AED' },
];

export default function BrandPartners() {
  return (
    <section className="brands-section">
      {/* Top gold line */}
      <div className="brands-gold-line" />

      <div className="container">
        <div className="brands-inner">

          {/* Label column */}
          <div className="brands-label-col">
            <div className="brands-label-eyebrow">TECHNOLOGY SERIES</div>
            <div className="brands-label-text">
              Industry-leading formulations &amp; certified standards
            </div>
          </div>

          {/* Divider */}
          <div className="brands-divider-v" />

          {/* Brands list */}
          <div className="brands-list">
            {brands.map((b, i) => (
              <div key={i} className="brand-pill">
                <div className="brand-pill-dot" style={{ background: b.color }} />
                <div className="brand-pill-content">
                  <span className="brand-pill-name">{b.name}</span>
                  <span className="brand-pill-sub">{b.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="brands-cta">
            <a href="#catalog" className="brands-see-all">
              All Products <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="brands-gold-line" />
    </section>
  );
}
