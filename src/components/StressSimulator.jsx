import React, { useState } from 'react';
import { Activity, ShieldCheck, Flame, Gauge, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export default function StressSimulator({ onOpenQuote }) {
  const [load, setLoad] = useState(25); // in MPa
  const [activeJoint, setActiveJoint] = useState('motor');

  const jointConfigs = {
    motor: {
      title: "BLDC Motor Magnet-to-Yoke Bond",
      materials: "Neodymium Rare-Earth Magnet + Mild Steel Rotor",
      temperature: "Up to 180°C",
      shearLimit: 32,
      recommended: "Magnet Bonding Heat Cure Epoxy",
      benefit: "Eliminates mechanical retaining sleeves; zero centrifugal slip at 15,000 RPM."
    },
    automotive: {
      title: "Lightweight EV Chassis Structural Joint",
      materials: "Carbon Fiber Composite + 6061 Aluminum",
      temperature: "Up to 120°C",
      shearLimit: 35,
      recommended: "ApexBond Structural Epoxy 2K",
      benefit: "Prevents galvanic corrosion between dissimilar materials and cuts joint weight by 40%."
    },
    electronics: {
      title: "Optical Lens & Sensor Encapsulation",
      materials: "Borosilicate Glass + Polycarbonate Housing",
      temperature: "Up to 110°C",
      shearLimit: 22,
      recommended: "OptiCure LC 2100 UV Gel",
      benefit: "Instant 3-second curing with 100% optical clarity and zero thermal expansion stress."
    },
    facade: {
      title: "Architectural Curtain Wall Weather Seal",
      materials: "Anodized Aluminum + Structural Architectural Glass",
      temperature: "-40°C to +150°C",
      shearLimit: 20,
      recommended: "ProSeal 780 Weather Silicone",
      benefit: "Accommodates ±50% dynamic building sway without cohesive adhesive tear."
    }
  };

  const currentJoint = jointConfigs[activeJoint];
  const safetyFactor = ((currentJoint.shearLimit / (load || 1))).toFixed(1);
  const stressPercentage = Math.min(100, Math.round((load / currentJoint.shearLimit) * 100));

  return (
    <section className="simulator-section bg-pattern-dark" id="simulator">
      <div className="ambient-orb sim-orb-1" />
      <div className="ambient-orb sim-orb-2" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header-row" style={{ textAlign: 'center', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{ maxWidth: '750px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Interactive Engineering Lab</div>
            <h2 className="sim-main-heading">Joint Stress &amp; Load Distribution Simulator</h2>
            <p className="sim-main-subheading">
              See why engineered polymer bonding replaces mechanical rivets and spot welding. Test simulated shear loads and view real-time stress dissipation.
            </p>
          </div>
        </div>

        {/* Simulator Dashboard */}
        <div className="sim-dashboard">
          {/* Top Joint Selector Tabs */}
          <div className="sim-tabs">
            {Object.keys(jointConfigs).map((key) => (
              <button
                key={key}
                className={`sim-tab ${activeJoint === key ? 'active' : ''}`}
                onClick={() => setActiveJoint(key)}
              >
                <Activity size={16} />
                <span>{jointConfigs[key].title}</span>
              </button>
            ))}
          </div>

          <div className="sim-main-grid">
            {/* Left: Dynamic Stress Heatmap & Joint Cross-Section */}
            <div className="sim-visual-col">
              <div className="sim-visual-card">
                <div className="sim-visual-header">
                  <div className="sim-live-indicator">
                    <span className="live-dot" />
                    <span>Real-Time Finite Element Simulation</span>
                  </div>
                  <span className="sim-badge">Dynamic Shear: {load} MPa</span>
                </div>

                {/* Simulated Joint Cross Section SVG */}
                <div className="sim-svg-wrapper">
                  <svg viewBox="0 0 500 240" className="sim-svg">
                    <defs>
                      {/* Gradient for Substrate 1 */}
                      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="50%" stopColor="#64748B" />
                        <stop offset="100%" stopColor="#334155" />
                      </linearGradient>

                      {/* Dynamic Stress Heatmap Gradient for Adhesive Bond Line */}
                      <linearGradient id="stressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F26419" />
                        <stop offset={`${stressPercentage}%`} stopColor={stressPercentage > 85 ? "#EF4444" : stressPercentage > 60 ? "#F97316" : "#10B981"} />
                        <stop offset="100%" stopColor="#F26419" />
                      </linearGradient>

                      {/* Glow Filter */}
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>

                      {/* Text Drop Shadow Filter */}
                      <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#050B14" floodOpacity="0.95" />
                      </filter>
                    </defs>

                    {/* Top Substrate */}
                    <rect x="40" y="28" width="420" height="46" rx="6" fill="url(#metalGrad)" stroke="#94A3B8" strokeWidth="1.5" />
                    <text x="58" y="56" fill="#F8FAFC" fontSize="12.5" fontWeight="700">SUBSTRATE A (Upper Component)</text>
                    <text x="442" y="56" fill="#38BDF8" fontSize="11" fontWeight="700" textAnchor="end">Tensile Pull →</text>

                    {/* Bottom Substrate */}
                    <rect x="40" y="128" width="420" height="46" rx="6" fill="url(#metalGrad)" stroke="#94A3B8" strokeWidth="1.5" />
                    <text x="58" y="156" fill="#F8FAFC" fontSize="12.5" fontWeight="700">SUBSTRATE B (Base Component)</text>
                    <text x="442" y="156" fill="#F97316" fontSize="11" fontWeight="700" textAnchor="end">← Opposing Shear</text>

                    {/* Stress Flux Lines (Rendered behind adhesive layer to prevent text collision) */}
                    {Array.from({ length: 9 }).map((_, i) => (
                      <line
                        key={i}
                        x1={70 + i * 45}
                        y1="74"
                        x2={70 + i * 45}
                        y2="128"
                        stroke={stressPercentage > 85 ? "#EF4444" : stressPercentage > 60 ? "#F97316" : "#10B981"}
                        strokeWidth="2"
                        strokeDasharray="4 3"
                        opacity="0.8"
                      />
                    ))}

                    {/* Adhesive Bond Layer with Dynamic Glowing Heatmap */}
                    <g filter="url(#glow)">
                      <rect 
                        x="40" 
                        y="86" 
                        width="420" 
                        height="30" 
                        rx="5" 
                        fill="url(#stressGrad)" 
                        opacity="0.96"
                      />
                    </g>
                    {/* Centered bond layer text with crisp shadow (no dark patch) */}
                    <text 
                      x="250" 
                      y="105" 
                      fill="#FFFFFF" 
                      fontSize="11" 
                      fontWeight="800" 
                      letterSpacing="0.8" 
                      textAnchor="middle"
                      filter="url(#textShadow)"
                    >
                      ADHESIVE BOND LAYER: UNIFORM LOAD DISPERSION
                    </text>

                    {/* Mechanical Rivet Comparison Callout */}
                    <rect x="40" y="192" width="420" height="34" rx="6" fill="rgba(11,25,44,0.75)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                    <text x="250" y="213" fill="#94A3B8" fontSize="9.5" fontWeight="500" textAnchor="middle">
                      ⚠️ Rivets create 450% stress spikes at drill holes. Polymer bond distributes 100% uniformly.
                    </text>
                  </svg>
                </div>

                {/* Slider Controls */}
                <div className="sim-slider-container">
                  <div className="slider-header">
                    <span className="slider-title">Adjust Applied Joint Load</span>
                    <span className="slider-value">{load} MPa ({Math.round(load * 145)} PSI)</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    value={load}
                    onChange={(e) => setLoad(Number(e.target.value))}
                    className="sim-slider"
                  />
                  <div className="slider-legend">
                    <span>5 MPa (Standard Duty)</span>
                    <span>20 MPa (Heavy Industrial)</span>
                    <span>35 MPa (Structural Max)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Readout & Recommendation */}
            <div className="sim-stats-col">
              <div className="sim-stats-card">
                <div className="sim-card-tag">Engineering Analysis</div>
                <h3 className="sim-joint-title">{currentJoint.title}</h3>
                
                <div className="sim-metrics-grid">
                  <div className="sim-metric-box">
                    <span className="metric-label">Stress Ratio</span>
                    <span className="metric-number" style={{ color: stressPercentage > 85 ? '#EF4444' : '#10B981' }}>
                      {stressPercentage}%
                    </span>
                    <span className="metric-sub">of Ultimate Shear Limit</span>
                  </div>

                  <div className="sim-metric-box">
                    <span className="metric-label">Safety Factor</span>
                    <span className="metric-number" style={{ color: '#F26419' }}>
                      {safetyFactor}x
                    </span>
                    <span className="metric-sub">Structural Margin</span>
                  </div>
                </div>

                <div className="sim-detail-list">
                  <div className="sim-detail-item">
                    <strong>Joint Substrates:</strong>
                    <span>{currentJoint.materials}</span>
                  </div>
                  <div className="sim-detail-item">
                    <strong>Thermal Threshold:</strong>
                    <span>{currentJoint.temperature}</span>
                  </div>
                  <div className="sim-detail-item">
                    <strong>Key Advantage:</strong>
                    <span>{currentJoint.benefit}</span>
                  </div>
                </div>

                {/* Recommended Product Box */}
                <div className="sim-product-recommendation">
                  <div>
                    <span className="rec-badge">Recommended Formulation</span>
                    <h4 className="rec-title">{currentJoint.recommended}</h4>
                  </div>
                  <button 
                    onClick={() => onOpenQuote(`Inquiry from Simulator: ${currentJoint.title} using ${currentJoint.recommended}`)}
                    className="btn-primary"
                    style={{ padding: '10px 18px', fontSize: '0.875rem' }}
                  >
                    <span>Request Technical Sample</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
