import React from 'react';
import { ShieldCheck, Settings, Users, Award, ArrowUpRight } from 'lucide-react';

const valueItems = [
  {
    icon: <ShieldCheck size={26} />,
    title: 'High Performance',
    description: 'Reliable bonding engineered for the most demanding industrial environments worldwide.',
    stat: '32 MPa',
    statLabel: 'Max Bond Strength',
    color: '#F26419',
  },
  {
    icon: <Settings size={26} />,
    title: 'Wide Product Range',
    description: 'Over 200+ formulations covering every substrate, process and environmental condition.',
    stat: '200+',
    statLabel: 'Product SKUs',
    color: '#2563EB',
  },
  {
    icon: <Users size={26} />,
    title: 'Expert Support',
    description: 'Dedicated application engineers for joint design, substrate testing and technical review.',
    stat: '15+',
    statLabel: 'Yrs. Experience',
    color: '#2D9E6B',
  },
  {
    icon: <Award size={26} />,
    title: 'Trusted Quality',
    description: 'Certified formulations compliant with REACH, RoHS and major international standards.',
    stat: '100%',
    statLabel: 'Certified',
    color: '#F26419',
  },
];

export default function ValueProps() {
  return (
    <section className="value-props-section">
      <div className="container">
        {/* Section header */}
        <div className="value-props-header">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">
            Built Around Your <span className="highlight-orange">Precision</span>
          </h2>
          <p className="value-props-subtitle">
            Every formulation, every consultation, every delivery — crafted for industrial excellence.
          </p>
        </div>

        {/* Cards grid */}
        <div className="value-props-grid">
          {valueItems.map((item, i) => (
            <div key={i} className="vp-card" style={{ '--vp-accent': item.color }}>
              {/* Top accent line */}
              <div className="vp-card-topline" />

              {/* Icon */}
              <div className="vp-card-icon" style={{ color: item.color, background: `${item.color}14` }}>
                {item.icon}
              </div>

              {/* Stat */}
              <div className="vp-card-stat" style={{ color: item.color }}>
                {item.stat}
                <span className="vp-card-stat-label">{item.statLabel}</span>
              </div>

              {/* Content */}
              <h3 className="vp-card-title">{item.title}</h3>
              <p className="vp-card-desc">{item.description}</p>

              {/* Arrow */}
              <div className="vp-card-arrow" style={{ color: item.color }}>
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
