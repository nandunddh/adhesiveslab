import React, { useState } from 'react';
import { Search, ArrowRight, FileText, CheckCircle2, Gauge, Thermometer, Clock, Droplets, ShieldCheck } from 'lucide-react';
import { productsList } from '../data/products';

export default function ProductCatalog({ 
  selectedCategory, 
  onSelectCategory, 
  onSelectProduct, 
  onOpenQuote 
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "epoxy", label: "Epoxy Adhesives" },
    { id: "silicone", label: "Silicone Sealants" },
    { id: "hotmelt", label: "Hot Melt Adhesives" },
    { id: "instant", label: "Instant Adhesives" },
    { id: "uv_curing", label: "UV-Curing Adhesives" },
    { id: "pu_foam", label: "PU Foam & Sealants" }
  ];

  const filteredProducts = productsList.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.substrates.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="catalog-section" id="catalog">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <div className="section-label">Engineering Catalog</div>
            <h2 className="section-title">Technical Adhesive Specifications</h2>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="catalog-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`catalog-tab ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Row */}
        <div className="catalog-search-row">
          <div className="catalog-search-box">
            <Search size={18} style={{ color: '#64748B' }} />
            <input
              type="text"
              placeholder="Search by product name, brand, substrate (e.g., Magnet, Glass)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: '600' }}>
            Showing {filteredProducts.length} verified industrial formulations
          </div>
        </div>

        {/* Products Grid */}
        <div className="catalog-grid">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="product-detail-card">
              <div className="product-card-top">
                <span className="product-category-tag">{prod.category.replace('_', ' ')}</span>
                <span className="product-brand-tag">{prod.brand}</span>
              </div>

              <h3 className="product-card-title">{prod.name}</h3>
              <p className="product-card-desc">{prod.shortDesc}</p>

              {/* Spec Pills with Rich Icons */}
              <div className="spec-pills-grid">
                <div className="spec-item">
                  <span className="label">
                    <Gauge size={12} className="spec-icon" />
                    Shear Strength
                  </span>
                  <span className="val">{prod.shearStrength}</span>
                </div>
                <div className="spec-item">
                  <span className="label">
                    <Thermometer size={12} className="spec-icon" />
                    Temp Limit
                  </span>
                  <span className="val">{prod.temperatureRange}</span>
                </div>
                <div className="spec-item">
                  <span className="label">
                    <Clock size={12} className="spec-icon" />
                    Cure Speed
                  </span>
                  <span className="val">{prod.cureTime}</span>
                </div>
                <div className="spec-item">
                  <span className="label">
                    <Droplets size={12} className="spec-icon" />
                    Viscosity
                  </span>
                  <span className="val">{prod.viscosity}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="product-card-actions">
                <button 
                  onClick={() => onSelectProduct(prod)}
                  className="btn-outline"
                  style={{ padding: '8px 14px', fontSize: '0.8125rem' }}
                >
                  <FileText size={15} style={{ color: '#F26419' }} />
                  <span>View TDS</span>
                </button>

                <button 
                  onClick={() => onOpenQuote(`Inquiry for ${prod.name}`)}
                  className="btn-primary"
                  style={{ padding: '8px 14px', fontSize: '0.8125rem' }}
                >
                  <span>Request Quote</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
