import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Award, FlaskConical, Building2, Truck } from 'lucide-react';
import { clientStats } from '../data/industries';

const getStatIcon = (iconName) => {
  switch (iconName) {
    case 'Clock': return <Award size={22} />;
    case 'FlaskConical': return <FlaskConical size={22} />;
    case 'Building2': return <Building2 size={22} />;
    case 'Truck': return <Truck size={22} />;
    default: return <Award size={22} />;
  }
};

const contactItems = [
  { icon: <MapPin size={18} />, label: 'Industrial Hub', value: 'Plot 104, Industrial Growth Corridor, Phase II, Tech Park Road, Industrial Zone, India' },
  { icon: <Phone size={18} />, label: 'Direct Engineering Desk', value: '+91 98765 43210' },
  { icon: <Mail size={18} />, label: 'Email RFQs & Inquiries', value: 'info@industrialadhesives.in' },
  { icon: <Clock size={18} />, label: 'Operating Hours', value: 'Mon – Sat: 9:00 AM – 6:30 PM (IST)' },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        {/* ─── TOP: Header ─── */}
        <div className="about-top-header">
          <div className="section-label">About Us</div>
          <h2 className="section-title">
            Pioneering Industrial <span className="highlight-orange">Bonding</span> &amp; Sealing
          </h2>
        </div>
        <div className="section-gold-line" style={{ marginBottom: 48 }} />

        {/* ─── STATS BAND ─── */}
        <div className="about-stats-band">
          {clientStats.map((st, i) => (
            <div key={i} className="about-stat-item">
              <div className="about-stat-icon">{getStatIcon(st.icon)}</div>
              <div className="about-stat-num">{st.value}</div>
              <div className="about-stat-label">{st.label}</div>
            </div>
          ))}
        </div>

        {/* ─── BOTTOM GRID: text + contact ─── */}
        <div className="about-main-grid">

          {/* Left: text */}
          <div className="about-text-col">
            <h3 className="about-text-heading">
              Your Trusted Partner in Industrial Chemistry
            </h3>
            <p>
              <strong>Industrial &amp; Construction Solutions</strong> is a premier distributor 
              and application engineering partner. We deliver high-reliability adhesive, sealant 
              and potting solutions to automotive OEMs, electronics manufacturers and precision 
              engineering enterprises.
            </p>
            <p>
              Partnered with world-class international polymer and chemical manufacturers, our 
              team provides comprehensive inventory, on-site technical consultation, substrate 
              compatibility analysis and joint design testing.
            </p>

            <div className="about-feature-list">
              {[
                'In-house application testing lab',
                'ISO-aligned quality management',
                'Dispensing equipment supply & support',
                'Custom formulation sourcing',
              ].map((f, i) => (
                <div key={i} className="about-feature-item">
                  <div className="about-feature-dot" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact card */}
          <div className="about-contact-card" id="contact">
            <div className="about-contact-card-header">
              <span className="about-contact-eyebrow">REACH US</span>
              <h4>Engineering &amp; Distribution Center</h4>
            </div>

            <div className="about-contact-list">
              {contactItems.map((c, i) => (
                <div key={i} className="about-contact-item">
                  <div className="about-contact-icon">{c.icon}</div>
                  <div>
                    <div className="about-contact-label">{c.label}</div>
                    <div className="about-contact-value">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Industrial+Zone,India"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
