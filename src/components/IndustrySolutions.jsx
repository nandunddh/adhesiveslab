import React from 'react';
import { Car, Cpu, Factory, Building2, PackageCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { industriesData } from '../data/industries';

const iconMap = {
  Car: <Car size={28} />,
  Cpu: <Cpu size={28} />,
  Factory: <Factory size={28} />,
  Building2: <Building2 size={28} />,
  PackageCheck: <PackageCheck size={28} />,
};

const colorSet = ['#F26419', '#2563EB', '#2D9E6B', '#C0392B', '#7C3AED'];

export default function IndustrySolutions({ onOpenQuote }) {
  return (
    <section className="industry-section" id="industries">
      <div className="container">

        {/* Header */}
        <div className="industry-header">
          <div>
            <div className="section-label">Industries We Serve</div>
            <h2 className="section-title">
              Engineered For <span className="highlight-orange">Critical</span> Environments
            </h2>
          </div>
          <p className="industry-header-sub">
            Every sector demands a specific performance profile.<br />
            We deliver precisely that.
          </p>
        </div>

        {/* Divider */}
        <div className="section-gold-line" style={{ marginBottom: 40 }} />

        {/* Grid */}
        <div className="industry-grid">
          {industriesData.map((ind, i) => {
            const color = colorSet[i % colorSet.length];
            return (
              <div key={ind.id} className="industry-card" style={{ '--ind-color': color }}>
                {/* Color stripe */}
                <div className="industry-card-stripe" style={{ background: color }} />

                {/* Icon */}
                <div className="industry-icon-box" style={{ background: `${color}14`, color }}>
                  {iconMap[ind.icon] || <Factory size={28} />}
                </div>

                {/* Title & desc */}
                <h4 className="industry-card-title">{ind.title}</h4>
                <p className="industry-card-desc">{ind.description}</p>

                {/* Checklist */}
                <ul className="industry-checklist">
                  {ind.solutions.map((sol, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} style={{ color }} />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>

                {/* Stat badge */}
                <div className="industry-stat-badge" style={{ color, borderColor: `${color}30`, background: `${color}08` }}>
                  {ind.stats}
                </div>

                {/* Hover arrow */}
                <div className="industry-card-arrow" style={{ color }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <div className="industry-bottom-cta">
          <p>Don't see your industry? Our engineers can develop a custom solution for you.</p>
          <button
            onClick={() => onOpenQuote('Industry Custom Enquiry')}
            className="btn-primary"
            id="industry-custom-enquiry-btn"
          >
            Request Custom Solution
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
