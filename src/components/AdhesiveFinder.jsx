import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Sliders } from 'lucide-react';
import { substrateOptions, environmentOptions, productsList } from '../data/products';

export default function AdhesiveFinder({ onSelectProduct, onOpenQuote }) {
  const [substrateA, setSubstrateA] = useState("Metals (Steel, Copper, Neodymium)");
  const [substrateB, setSubstrateB] = useState("Ferrite Magnets");
  const [requirement, setRequirement] = useState("high_heat");

  // Dynamic selector matching logic
  const getRecommendation = () => {
    if (requirement === "high_heat") {
      return productsList.find(p => p.id === "epoxy-magnet-cure") || productsList[0];
    }
    if (requirement === "weather") {
      return productsList.find(p => p.id === "proseal-780-silicone") || productsList[2];
    }
    if (requirement === "instant_speed") {
      return productsList.find(p => p.id === "ultrafix-k85-bio") || productsList[6];
    }
    if (requirement === "optical_clarity") {
      return productsList.find(p => p.id === "opticure-lc2100-uv") || productsList[8];
    }
    if (requirement === "gap_filling") {
      return productsList.find(p => p.id === "durapolymer-pt33-ms") || productsList[9];
    }
    return productsList.find(p => p.id === "thermamelt-supra-120") || productsList[4];
  };

  const recommendedProduct = getRecommendation();

  return (
    <section className="finder-section bg-pattern-grid" id="finder">
      <div className="ambient-orb finder-orb" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="finder-wrapper">
          <div className="finder-header">
            <div className="finder-badge">
              <Sparkles size={14} />
              <span>Smart Adhesive Selector Tool</span>
            </div>
            <h2 className="section-title">Find The Exact Adhesive For Your Joint</h2>
            <p>
              Match your substrates, temperature thresholds, and production cycle times to find the optimal formulation.
            </p>
          </div>

          {/* Interactive Controls */}
          <div className="finder-controls-grid">
            <div className="finder-control-group">
              <label>Substrate 1 (Primary Material)</label>
              <select 
                className="finder-select"
                value={substrateA}
                onChange={(e) => setSubstrateA(e.target.value)}
              >
                {substrateOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="finder-control-group">
              <label>Substrate 2 (Secondary Material)</label>
              <select 
                className="finder-select"
                value={substrateB}
                onChange={(e) => setSubstrateB(e.target.value)}
              >
                {substrateOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="finder-control-group">
              <label>Key Operating Requirement</label>
              <select 
                className="finder-select"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
              >
                {environmentOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result Card */}
          <div className="finder-result-box">
            <div className="finder-result-thumb">
              <img 
                src={recommendedProduct.image} 
                alt={recommendedProduct.name} 
              />
            </div>

            <div className="finder-result-info">
              <div className="finder-result-tags">
                <span className="finder-tag orange">Recommended Match</span>
                <span className="finder-tag">{recommendedProduct.brand}</span>
                <span className="finder-tag">Temp: {recommendedProduct.temperatureRange}</span>
                <span className="finder-tag">Strength: {recommendedProduct.shearStrength}</span>
              </div>
              <h4>{recommendedProduct.name}</h4>
              <p>{recommendedProduct.shortDesc}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                onClick={() => onSelectProduct(recommendedProduct)}
                className="btn-primary"
                style={{ padding: '10px 18px', fontSize: '0.875rem' }}
              >
                <span>View Full TDS</span>
                <ArrowRight size={15} />
              </button>

              <button 
                onClick={() => onOpenQuote(`Sample request for ${recommendedProduct.name}`)}
                className="btn-white-outline"
                style={{ padding: '8px 18px', fontSize: '0.8125rem' }}
              >
                Request Free Sample
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
