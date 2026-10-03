import React from 'react';
import { ArrowRight, Headphones, CheckCircle2, Sparkles, Timer, FlaskConical } from 'lucide-react';

const perks = [
  { icon: <FlaskConical size={16} />, text: 'Free substrate testing' },
  { icon: <Timer size={16} />, text: '24-hour response SLA' },
  { icon: <Sparkles size={16} />, text: 'Joint design audit included' },
];

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="cta-section">
      <div className="cta-bg-pattern" />

      <div className="container">
        <div className="cta-inner">

          {/* Left: Text block */}
          <div className="cta-left">
            {/* Eyebrow */}
            <div className="cta-eyebrow">
              <CheckCircle2 size={13} />
              <span>FREE APPLICATION AUDIT &amp; SUBSTRATE TESTING</span>
            </div>

            {/* Title */}
            <h2 className="cta-title">
              <Headphones size={32} className="cta-title-icon" />
              Need the right adhesive<br />for your application?
            </h2>

            {/* Subtitle */}
            <p className="cta-subtitle">
              Our application engineers review your joint design, test substrates, 
              and recommend the exact solution — at zero cost.
            </p>

            {/* Perks */}
            <div className="cta-perks">
              {perks.map((p, i) => (
                <div key={i} className="cta-perk">
                  <div className="cta-perk-icon">{p.icon}</div>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Card */}
          <div className="cta-right">
            <div className="cta-card">
              <div className="cta-card-label">GET STARTED TODAY</div>
              <div className="cta-card-title">Send a Technical Enquiry</div>
              <p className="cta-card-sub">
                Describe your bonding challenge and we'll get back within 24 hours with a solution.
              </p>

              <button
                onClick={() => onOpenQuote('CTA Banner Enquiry')}
                className="btn-cta-gold"
                id="banner-send-enquiry-btn"
              >
                <span>Send Technical Enquiry</span>
                <ArrowRight size={18} />
              </button>

              <div className="cta-card-note">
                <CheckCircle2 size={13} />
                No obligation · Engineers respond in 24h
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
