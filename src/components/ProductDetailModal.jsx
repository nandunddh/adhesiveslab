import React from 'react';
import { X, Check, ShieldCheck, Download, MessageSquare, ArrowRight, Layers } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello, I would like technical details and quote for: ${product.name} (${product.brand})`);
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
              <span className="product-category-tag">{product.category.replace('_', ' ')}</span>
              <span className="product-brand-tag">{product.brand}</span>
            </div>
            <h3>{product.name}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '20px', marginBottom: '24px' }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #E2E8F0' }}
            />
            <div>
              <h4 style={{ fontSize: '1rem', color: '#0B192C', marginBottom: '8px' }}>Product Overview</h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: '1.6' }}>
                {product.fullDesc}
              </p>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <h4 style={{ fontSize: '0.9375rem', color: '#0B192C', marginBottom: '10px' }}>Technical Parameters</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontSize: '0.8125rem' }}>
            <tbody>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700', color: '#334155', width: '35%' }}>Lap Shear Strength</td>
                <td style={{ padding: '8px 12px', color: '#0F172A', fontWeight: '600' }}>{product.shearStrength}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700', color: '#334155' }}>Temperature Resistance</td>
                <td style={{ padding: '8px 12px', color: '#0F172A', fontWeight: '600' }}>{product.temperatureRange}</td>
              </tr>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700', color: '#334155' }}>Cure Profile / Speed</td>
                <td style={{ padding: '8px 12px', color: '#0F172A', fontWeight: '600' }}>{product.cureTime}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700', color: '#334155' }}>Viscosity &amp; Handling</td>
                <td style={{ padding: '8px 12px', color: '#0F172A', fontWeight: '600' }}>{product.viscosity}</td>
              </tr>
              <tr style={{ background: '#F8FAFC' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700', color: '#334155' }}>Certifications &amp; Safety</td>
                <td style={{ padding: '8px 12px', color: '#0F172A', fontWeight: '600' }}>
                  {product.compliance.join(' • ')}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Substrates & Applications */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', color: '#0B192C', marginBottom: '8px' }}>Adheres To (Substrates):</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {product.substrates.map((sub, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#334155' }}>
                    <Check size={14} style={{ color: '#10B981' }} />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.875rem', color: '#0B192C', marginBottom: '8px' }}>Primary Applications:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {product.applications.map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: '#334155' }}>
                    <Layers size={14} style={{ color: '#F26419' }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="form-submit-row" style={{ paddingTop: '16px', borderTop: '1px solid #E2E8F0', marginTop: '16px' }}>
            <button 
              onClick={() => {
                onClose();
                onOpenQuote(`Formal Quote for ${product.name}`);
              }}
              className="btn-primary"
            >
              <span className="submit-btn-full">Request Quote / TDS</span>
              <span className="submit-btn-short">Request TDS</span>
              <ArrowRight size={16} />
            </button>

            <button 
              onClick={handleWhatsApp}
              className="whatsapp-direct-btn"
            >
              <MessageSquare size={16} />
              <span className="submit-btn-full">Inquire on WhatsApp</span>
              <span className="submit-btn-short">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
