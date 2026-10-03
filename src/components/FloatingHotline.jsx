import React, { useState } from 'react';
import { MessageSquare, Phone, FileText, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

export default function FloatingHotline({ onOpenQuote, onNavigate }) {
  const [expanded, setExpanded] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello! I am reaching out to discuss industrial adhesive requirements.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="floating-hotline-container">
      {/* Expanded Quick Options */}
      {expanded && (
        <div className="hotline-menu">
          <div className="hotline-menu-header">
            <span className="hotline-badge">
              <span className="live-dot" />
              <span>Engineering Desk Online</span>
            </span>
            <p>Direct assistance for joint design and product selection.</p>
          </div>

          <div className="hotline-menu-items">
            <button onClick={handleWhatsApp} className="hotline-menu-btn whatsapp">
              <MessageSquare size={16} />
              <span>Connect on WhatsApp</span>
            </button>

            <button onClick={() => { onOpenQuote("Floating Hotline RFQ"); setExpanded(false); }} className="hotline-menu-btn rfq">
              <FileText size={16} />
              <span>Request Fast RFQ / Sample</span>
            </button>

            <a href="tel:+919876543210" className="hotline-menu-btn call">
              <Phone size={16} />
              <span>Direct Phone: +91 98765 43210</span>
            </a>

            <button onClick={() => { onNavigate("finder"); setExpanded(false); }} className="hotline-menu-btn tool">
              <Sparkles size={16} />
              <span>Substrate Selector Tool</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Pill Button */}
      <button 
        className="floating-hotline-pill"
        onClick={() => setExpanded(!expanded)}
        aria-label="Toggle technical inquiry desk"
      >
        <div className="pill-dot-wrap">
          <span className="live-dot" />
        </div>
        <span className="pill-text">Quick RFQ &amp; Technical Desk</span>
        {expanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
      </button>
    </div>
  );
}
