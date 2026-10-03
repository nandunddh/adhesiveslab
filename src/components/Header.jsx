import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ChevronDown, Menu, X, ArrowRight, FileText } from 'lucide-react';

export default function Header({ onOpenQuote, activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <a href="mailto:info@industrialadhesives.in" className="top-bar-item">
                <Mail />
                <span>info@industrialadhesives.in</span>
              </a>
              <div className="top-bar-divider" />
              <a href="tel:+919876543210" className="top-bar-item">
                <Phone />
                <span>+91 98765 43210</span>
              </a>
              <div className="top-bar-divider" />
              <div className="top-bar-item">
                <MapPin />
                <span>India</span>
              </div>
            </div>

            <div className="top-bar-right">
              <button 
                onClick={() => onOpenQuote("General Inquiry")}
                className="top-bar-link"
              >
                Request a Quote
              </button>
              <div className="top-bar-divider" />
              <button 
                onClick={() => handleNavClick("contact")}
                className="top-bar-link"
              >
                Contact Us
              </button>
              <div className="top-bar-divider" />
              <button 
                onClick={() => handleNavClick("finder")}
                className="top-bar-link"
                style={{ color: '#F26419', fontWeight: '700' }}
              >
                Adhesive Selector Tool
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="navbar">
        {/* Animated Background Layers */}
        <div className="navbar-bg-glow" />
        <div className="navbar-shimmer-line" />

        {/* Dynamic Reading Progress Bar */}
        <div className="scroll-progress-line" style={{ width: `${scrollProgress}%` }} />
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <a href="#" className="brand-logo" onClick={() => handleNavClick("hero")}>
              <div className="brand-badge">
                <span>IA</span>
              </div>
              <div className="brand-text">
                <span className="brand-name">Industrial &amp; Construction</span>
                <span className="brand-tagline">SOLUTIONS</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="nav-links">
              <li>
                <a 
                  href="#hero" 
                  className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}
                >
                  Home
                </a>
              </li>

              <li 
                style={{ position: 'relative' }}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <a 
                  href="#products" 
                  className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick("products"); }}
                >
                  Products <ChevronDown size={14} />
                </a>

                {productsDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '240px',
                    background: 'white',
                    boxShadow: '0 12px 30px rgba(11, 25, 44, 0.15)',
                    borderRadius: '8px',
                    padding: '8px 0',
                    border: '1px solid #E2E8F0',
                    zIndex: 200
                  }}>
                    {[
                      { id: 'epoxy', label: 'Epoxy Adhesives' },
                      { id: 'silicone', label: 'Silicone Sealants' },
                      { id: 'hotmelt', label: 'Hot Melt Adhesives' },
                      { id: 'instant', label: 'Instant Adhesives' },
                      { id: 'uv_curing', label: 'UV-Curing Adhesives' },
                      { id: 'pu_foam', label: 'PU Foam & MS Sealants' },
                    ].map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          handleNavClick(`catalog`);
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 18px',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: '#334155',
                          display: 'block',
                          transition: 'background 0.15s'
                        }}
                        onMouseEnter={(e) => { e.target.style.background = '#FFF4ED'; e.target.style.color = '#F26419'; }}
                        onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#334155'; }}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <a 
                  href="#industries" 
                  className={`nav-link ${activeSection === 'industries' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick("industries"); }}
                >
                  Industries
                </a>
              </li>

              <li>
                <a 
                  href="#finder" 
                  className={`nav-link ${activeSection === 'finder' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick("finder"); }}
                >
                  Product Finder
                </a>
              </li>

              <li>
                <a 
                  href="#about" 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick("about"); }}
                >
                  About Us
                </a>
              </li>

              <li>
                <a 
                  href="#contact" 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Nav Actions */}
            <div className="nav-actions">
              <button 
                onClick={() => onOpenQuote("Header Quote Button")}
                className="btn-primary"
                id="header-quote-btn"
              >
                <span className="quote-btn-desktop">Request a Quote</span>
                <span className="quote-btn-mobile">Get Quote</span>
                <ArrowRight size={15} className="quote-btn-arrow" />
              </button>

              {/* Mobile hamburger */}
              <button 
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div style={{
              padding: '16px 0',
              borderTop: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {['Home', 'Products', 'Industries', 'Product Finder', 'About Us', 'Contact'].map((item) => {
                const target = item === 'Home' ? 'hero' : item === 'Products' ? 'products' : item === 'Industries' ? 'industries' : item === 'Product Finder' ? 'finder' : item === 'About Us' ? 'about' : 'contact';
                return (
                  <button
                    key={item}
                    onClick={() => handleNavClick(target)}
                    style={{
                      textAlign: 'left',
                      padding: '10px 14px',
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#0F172A',
                      borderRadius: '6px',
                      background: '#F8FAFC'
                    }}
                  >
                    {item}
                  </button>
                );
              })}
              <button 
                onClick={() => {
                  onOpenQuote("Mobile Quote Button");
                  setMobileMenuOpen(false);
                }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
              >
                <span>Request a Quote</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
