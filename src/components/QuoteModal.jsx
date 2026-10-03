import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, prefillSubject = "" }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "Epoxy Adhesives",
    substrates: "",
    volume: "1 - 50 kg / month",
    notes: prefillSubject ? `Requirement regarding: ${prefillSubject}` : ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation of submission
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Engineering Team,\n\nName: ${formData.name || 'Industrial Buyer'}\nCompany: ${formData.company || 'Not Specified'}\nPhone: ${formData.phone}\nCategory: ${formData.category}\nSubstrates: ${formData.substrates}\nVolume: ${formData.volume}\nDetails: ${formData.notes || prefillSubject || 'Requesting quotation and TDS'}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <h3>Request Technical Quote &amp; Samples</h3>
            <p style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: '2px' }}>
              Connect with our certified application engineering team
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <CheckCircle2 size={54} style={{ color: '#10B981', margin: '0 auto 16px auto' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#0B192C', marginBottom: '8px' }}>Thank You for Your RFQ!</h3>
              <p style={{ color: '#475569', fontSize: '0.9375rem', marginBottom: '24px' }}>
                One of our adhesive application engineers will review your substrate parameters and reach out within 2-4 business hours with pricing and TDS sheets.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button 
                  onClick={handleWhatsApp}
                  className="whatsapp-direct-btn"
                >
                  <MessageSquare size={16} />
                  <span>Connect Instantly on WhatsApp</span>
                </button>
                <button 
                  onClick={onClose}
                  className="btn-outline"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Company / Plant Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Precision Auto Components Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Official Email ID *</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Product Category</label>
                  <select
                    className="form-control"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option>Epoxy Adhesives (Single &amp; 2K)</option>
                    <option>Silicone Sealants (Weatherproof / RTV)</option>
                    <option>Hot Melt Adhesives (Pellets &amp; Sticks)</option>
                    <option>Instant Adhesives (High-Speed Cyanoacrylates)</option>
                    <option>UV-Curing Resins &amp; Gels</option>
                    <option>PU Foam &amp; MS Polymer Sealants</option>
                    <option>Anaerobic Threadlockers &amp; Retaining</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Estimated Monthly Volume</label>
                  <select
                    className="form-control"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  >
                    <option>Sample Trial Batch (1-5 units)</option>
                    <option>10 - 50 kg / liters</option>
                    <option>50 - 250 kg / liters</option>
                    <option>Bulk Container / Drum quantities</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Substrates to Bond &amp; Operating Environment</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Mild Steel to Neodymium Magnet, operating at 140°C"
                  value={formData.substrates}
                  onChange={(e) => setFormData({ ...formData, substrates: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Specific Inquiries / Notes</label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Tell us about your joint geometry, cure cycle requirements, or existing adhesive being replaced..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="form-submit-row">
                <button 
                  type="submit" 
                  className="btn-primary" 
                  id="submit-rfq-btn"
                >
                  <Send size={16} />
                  <span className="submit-btn-full">Submit RFQ to Engineering Team</span>
                  <span className="submit-btn-short">Submit RFQ</span>
                </button>

                <button 
                  type="button" 
                  onClick={handleWhatsApp}
                  className="whatsapp-direct-btn"
                  id="whatsapp-rfq-btn"
                >
                  <MessageSquare size={16} />
                  <span className="submit-btn-full">Send via WhatsApp</span>
                  <span className="submit-btn-short">WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
