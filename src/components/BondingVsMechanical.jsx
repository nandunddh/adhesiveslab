import React, { useState } from 'react';
import { XCircle, CheckCircle2, Zap, Scale, ShieldAlert, Sparkles } from 'lucide-react';

export default function BondingVsMechanical({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('bonding');

  return (
    <section className="comparison-section bg-pattern-dots" id="comparison">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header-row" style={{ textAlign: 'center', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ maxWidth: '780px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Engineering Comparison</div>
            <h2 className="section-title">Why Leading Manufacturers Replace Fasteners With Adhesives</h2>
            <p style={{ color: '#64748B', marginTop: '10px', fontSize: '1rem' }}>
              Eliminate drilled stress holes, stop galvanic corrosion, and reduce overall assembly weight by up to 35%.
            </p>
          </div>
        </div>

        <div className="comparison-grid">
          {/* Card 1: Traditional Fasteners */}
          <div className="comparison-card mechanical">
            <div className="comparison-card-header">
              <div className="comp-icon-box red">
                <XCircle size={24} />
              </div>
              <div>
                <h3>Mechanical Fasteners</h3>
                <span>Welding, Rivets, Bolts &amp; Screws</span>
              </div>
            </div>

            <ul className="comp-list">
              <li>
                <XCircle size={18} className="red-icon" />
                <div>
                  <strong>Localized Stress Concentration</strong>
                  <p>Drilling holes creates micro-cracks and focal stress points that cause premature fatigue failure.</p>
                </div>
              </li>
              <li>
                <XCircle size={18} className="red-icon" />
                <div>
                  <strong>Galvanic Corrosion</strong>
                  <p>Contact between steel bolts and aluminum panels creates rapid electrolytic oxidization.</p>
                </div>
              </li>
              <li>
                <XCircle size={18} className="red-icon" />
                <div>
                  <strong>Vibration Loosening</strong>
                  <p>Repetitive cyclic shock shakes threaded bolts loose, requiring constant inspection and torque retightening.</p>
                </div>
              </li>
              <li>
                <XCircle size={18} className="red-icon" />
                <div>
                  <strong>No Environmental Seal</strong>
                  <p>Requires separate secondary gaskets and silicone seals to prevent liquid or gas ingress.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 2: Engineered Adhesives (Glowing Hero Card) */}
          <div className="comparison-card chemical highlight">
            <div className="best-choice-badge">
              <Sparkles size={13} />
              <span>Modern Engineering Choice</span>
            </div>

            <div className="comparison-card-header">
              <div className="comp-icon-box orange">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3>Engineered Polymer Bonding</h3>
                <span>Structural Epoxies, MS Polymers &amp; Light-Cure</span>
              </div>
            </div>

            <ul className="comp-list">
              <li>
                <CheckCircle2 size={18} className="green-icon" />
                <div>
                  <strong>100% Uniform Stress Dissipation</strong>
                  <p>Distributes load across the entire surface area for up to 300% higher dynamic fatigue endurance.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="green-icon" />
                <div>
                  <strong>Dissimilar Material Joins</strong>
                  <p>Bond composite carbon fiber to aluminum or glass to metal with zero risk of galvanic corrosion.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="green-icon" />
                <div>
                  <strong>Built-in Vibration Dampening &amp; Sealing</strong>
                  <p>Polymer matrix absorbs acoustic noise, dampens mechanical vibration, and forms an airtight barrier.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="green-icon" />
                <div>
                  <strong>Up to 35% Weight Reduction</strong>
                  <p>Eliminates heavy brackets, weld flanges, and hardware to streamline production cycle times.</p>
                </div>
              </li>
            </ul>

            <button 
              onClick={() => onOpenQuote("Consultation on replacing mechanical fasteners with adhesives")}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}
            >
              <span>Convert Your Joint Design — Talk to an Engineer</span>
              <Zap size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
