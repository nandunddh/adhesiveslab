import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, ExternalLink } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      {/* Top golden accent */}
      <div className="footer-top-accent" />

      <div className="container">

        {/* ─── Main grid ─── */}
        <div className="footer-main-grid">

          {/* Brand block */}
          <div className="footer-brand-col">
            <div className="brand-logo" style={{ marginBottom: 16 }}>
              <div className="brand-badge"><span>IA</span></div>
              <div className="brand-text">
                <span className="brand-name">Industrial &amp; Construction</span>
                <span className="brand-tagline">SOLUTIONS</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              High-performance adhesive &amp; sealing solutions for industrial, 
              automotive and construction applications across India.
            </p>
            {/* Social */}
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="YouTube">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77c1.56.42 7.82.42 7.82.42s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav-col">
            <div className="footer-col-heading">Navigation</div>
            <nav className="footer-nav-list">
              {[
                { label: 'Products', id: 'products' },
                { label: 'Industries', id: 'industries' },
                { label: 'About Us', id: 'about' },
                { label: 'Selector Tool', id: 'finder' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="footer-nav-link"
                  onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}
                >
                  <ArrowUpRight size={13} />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-contact-col">
            <div className="footer-col-heading">Contact Us</div>
            <div className="footer-contact-list">
              <a href="mailto:info@industrialadhesives.in" className="footer-contact-row">
                <Mail size={14} />
                <span>info@industrialadhesives.in</span>
              </a>
              <a href="tel:+919876543210" className="footer-contact-row">
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </a>
              <div className="footer-contact-row">
                <MapPin size={14} />
                <span>Industrial Zone, India</span>
              </div>
            </div>

            {/* Maps link */}
            <a
              href="https://maps.google.com/?q=Industrial+Zone,India"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-maps-btn"
            >
              <ExternalLink size={13} />
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Industrial &amp; Construction Solutions. All rights reserved.
          </div>
          <div className="footer-bottom-tags">
            <span>Industrial Adhesives</span>
            <span className="footer-dot">·</span>
            <span>Bonding Solutions</span>
            <span className="footer-dot">·</span>
            <span className="footer-tagline-gold">Stronger Together</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
