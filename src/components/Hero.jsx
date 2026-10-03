import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, PhoneCall, Play, Pause, ShieldCheck, Zap,
  FlaskConical, Award, Sparkles, CheckCircle2, Activity,
  ChevronRight, Flame, Layers
} from 'lucide-react';

const SPECIMENS = [
  {
    id: 'epoxy',
    title: 'Structural Epoxy 2000',
    subtitle: 'Dual-Component High-Shear Polymer',
    image: '/images/epoxy.jpg',
    strength: '32.4 MPa',
    cureTime: '15 Mins',
    tempRange: '-50°C to +200°C',
    category: 'Structural Bonding',
    badge: 'AEROSPACE GRADE'
  },
  {
    id: 'dispensing',
    title: 'Robotic Dispense Pro',
    subtitle: 'Automated Precision Application',
    image: '/images/hero.jpg',
    strength: '28.6 MPa',
    cureTime: 'Continuous',
    tempRange: '-40°C to +180°C',
    category: 'Automation Line',
    badge: 'ROBOTIC COMPLIANT'
  },
  {
    id: 'uv',
    title: 'UV OptiCure Ultra',
    subtitle: 'Instant Photopolymer Sealant',
    image: '/images/uv_curing.jpg',
    strength: '24.1 MPa',
    cureTime: '<10 Sec',
    tempRange: '-30°C to +150°C',
    category: 'Optical & Electronics',
    badge: 'INSTANT FLASH CURE'
  },
  {
    id: 'silicone',
    title: 'SilicoMax High-Temp',
    subtitle: 'Industrial Gasketing Elastomer',
    image: '/images/silicone.jpg',
    strength: '19.8 MPa',
    cureTime: 'Flexible',
    tempRange: '-65°C to +260°C',
    category: 'Thermal Sealing',
    badge: 'EXTREME THERMAL'
  }
];

const STANDARD_PHRASES = [
  'Aerospace & Automotive Grade',
  'Extreme Thermal Stability',
  'High-Shear Structural Bond',
  'Automated Robotic Dispense'
];

function useTypewriter(phrases, typeSpeed = 20, deleteSpeed = 10, pauseDuration = 5000) {
  const [text, setText] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[index % phrases.length];

    if (!isDeleting) {
      if (text.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (text.length > 1) {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, deleteSpeed);
      } else {
        const nextIdx = (index + 1) % phrases.length;
        setIsDeleting(false);
        setIndex(nextIdx);
        setText(phrases[nextIdx].substring(0, 1));
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases, typeSpeed, deleteSpeed, pauseDuration]);

  return text;
}

export default function Hero({ onOpenQuote, onExploreProducts }) {
  const [activeSpecimenIndex, setActiveSpecimenIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  // Typewriter instance for Standard specification pill
  const typedStandard = useTypewriter(STANDARD_PHRASES, 20, 10, 5000);

  // Auto-rotate animated showcase specimens every 4.5s
  useEffect(() => {
    const specimenTimer = setInterval(() => {
      handleSpecimenChange((activeSpecimenIndex + 1) % SPECIMENS.length);
    }, 4500);
    return () => clearInterval(specimenTimer);
  }, [activeSpecimenIndex]);

  const handleSpecimenChange = (index) => {
    if (index === activeSpecimenIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveSpecimenIndex(index);
      setIsFading(false);
    }, 240);
  };

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const currentSpecimen = SPECIMENS[activeSpecimenIndex];

  return (
    <section className="hero-cinematic-section" id="hero">
      {/* ── Background Video Layer ────────────────────────────────────── */}
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-background-video"
          src="/videos/hero-industrial.mp4"
          poster="/images/hero.jpg"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Luxury Vignette & Dark Architectural Gradient Overlay */}
        <div className="hero-video-overlay" />
        <div className="hero-mesh-grid" />
        <div className="hero-ambient-glow hero-glow-gold" />
        <div className="hero-ambient-glow hero-glow-blue" />
      </div>

      <div className="container hero-cinematic-container">
        {/* ── Top Bar / Live Telemetry Pill ──────────────────────────── */}
        <div className="hero-telemetry-strip">
          <div className="telemetry-pill">
            <span className="telemetry-beacon" />
            <span className="telemetry-title">ADVANCED ADHESIVES LAB</span>
            <span className="telemetry-divider">/</span>
            <span className="telemetry-badge">ISO 9001:2015 CERTIFIED</span>
            <span className="telemetry-divider">/</span>
            <span className="telemetry-status">ENGINEERING DESK ONLINE</span>
          </div>

          <button
            onClick={toggleVideoPlayback}
            className="video-toggle-btn"
            title={isVideoPlaying ? "Pause Background Cinematic" : "Play Background Cinematic"}
            aria-label="Toggle background video"
          >
            {isVideoPlaying ? <Pause size={13} /> : <Play size={13} />}
            <span>{isVideoPlaying ? "PAUSE CINEMATIC" : "PLAY CINEMATIC"}</span>
          </button>
        </div>

        {/* ── Main Two-Column Hero Stage ───────────────────────────────── */}
        <div className="hero-cinematic-grid">

          {/* ══ Column 1: Left Content & Animated Typography ══════════════ */}
          <div className="hero-content-col">
            <div className="hero-tag-wrap">
              <span className="hero-pill-tag">
                <Sparkles size={14} className="gold-spark" />
                <span>Next-Gen Industrial Polymer Technology</span>
              </span>
            </div>

            <h1 className="hero-cinematic-h1">
              The Architecture of<br />
              <span className="hero-gold-block">Unbreakable Bonds.</span>
            </h1>

            {/* Redesigned Specification Pill */}
            <div className="hero-spec-pill">
              <div className="spec-pill-top">

                <div className="spec-pill-tag">
                  <ShieldCheck size={12} className="spec-shield-icon" />
                  <span>CERTIFIED</span>
                </div>
              </div>
              <div className="spec-pill-divider" />
              <div className="spec-pill-content">
                <span className="spec-pill-typing">
                  {typedStandard}
                  <span className="spec-pill-cursor">_</span>
                </span>
              </div>
            </div>

            <p className="hero-cinematic-description">
              High-performance structural epoxies, instant-cure cyanoacrylates,
              and thermal elastomeric sealants engineered to withstand extreme pressures,
              vibrations, and chemical exposure across aerospace, automotive, and heavy industry.
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-action-cluster">
              <button
                className="btn-cinematic-primary"
                onClick={() => onOpenQuote('Hero Engineering Quote')}
                id="hero-quote-btn"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight size={18} className="btn-arrow" />
              </button>

              <button
                className="btn-cinematic-secondary"
                onClick={onExploreProducts}
                id="hero-explore-btn"
              >
                <Layers size={17} />
                <span>Explore 200+ Products</span>
              </button>
            </div>

            {/* Direct Support Pill */}
            <div className="hero-hotline-strip">
              <div className="hotline-icon">
                <PhoneCall size={14} />
              </div>
              <span className="hotline-text">
                Speak directly with an adhesives engineer:
              </span>
              <a href="tel:+919845012345" className="hotline-link">
                +91 98450 12345
              </a>
            </div>
          </div>

          {/* ══ Column 2: Right Interactive Animated Image Stage ══════════ */}
          <div className="hero-stage-col">
            <div className="specimen-hologram-card">
              {/* Corner HUD Reticles */}
              <span className="hud-corner hud-tl" />
              <span className="hud-corner hud-tr" />
              <span className="hud-corner hud-bl" />
              <span className="hud-corner hud-br" />

              {/* Hologram Card Header */}
              <div className="specimen-card-header">
                <div className="specimen-header-left">
                  <span className="live-radar-dot" />
                  <span className="specimen-tech-id">SPECIMEN // 0{activeSpecimenIndex + 1}</span>
                </div>
                <span className="specimen-badge-pill">{currentSpecimen.badge}</span>
              </div>

              {/* Animated Image Container */}
              <div className="specimen-image-viewport">
                <img
                  src={currentSpecimen.image}
                  alt={currentSpecimen.title}
                  className={`specimen-image ${isFading ? 'fading' : 'active'}`}
                  fetchPriority="high"
                />
                <div className="specimen-scanline" />
                <div className="specimen-overlay-gradient" />

                {/* Floating Animated Badge 1: Peak Strength */}
                <div className="floating-hud-badge badge-strength">
                  <div className="floating-badge-icon">
                    <Zap size={14} />
                  </div>
                  <div className="floating-badge-data">
                    <span className="floating-data-val">{currentSpecimen.strength}</span>
                    <span className="floating-data-label">Peak Tensile Bond</span>
                  </div>
                </div>

                {/* Floating Animated Badge 2: Quick Spec */}
                <div className="floating-hud-badge badge-cure">
                  <div className="floating-badge-icon">
                    <Activity size={14} />
                  </div>
                  <div className="floating-badge-data">
                    <span className="floating-data-val">{currentSpecimen.cureTime}</span>
                    <span className="floating-data-label">Cure Speed</span>
                  </div>
                </div>
              </div>

              {/* Specimen Live Info Panel */}
              <div className="specimen-info-panel">
                <div className="specimen-title-row">
                  <div>
                    <h3 className="specimen-title">{currentSpecimen.title}</h3>
                    <p className="specimen-subtitle">{currentSpecimen.subtitle}</p>
                  </div>
                  <div className="specimen-temp-box">
                    <span className="temp-label">THERMAL LIMIT</span>
                    <span className="temp-value">{currentSpecimen.tempRange}</span>
                  </div>
                </div>

                {/* Progress bar for auto-rotation */}
                <div className="specimen-progress-track">
                  <div className="specimen-progress-fill" key={activeSpecimenIndex} />
                </div>

                {/* Interactive Specimen Selector Pills */}
                <div className="specimen-selector-grid">
                  {SPECIMENS.map((spec, idx) => (
                    <button
                      key={spec.id}
                      onClick={() => handleSpecimenChange(idx)}
                      className={`specimen-tab-btn ${idx === activeSpecimenIndex ? 'selected' : ''}`}
                    >
                      <span className="tab-idx">0{idx + 1}</span>
                      <span className="tab-label">{spec.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Metrics Strip ────────────────────────────────────── */}
        <div className="hero-metrics-band">
          <div className="hero-metric-tile">
            <div className="metric-tile-icon">
              <Award size={20} />
            </div>
            <div className="metric-tile-content">
              <div className="metric-tile-num">15+ Years</div>
              <div className="metric-tile-label">Industrial Engineering Leadership</div>
            </div>
          </div>

          <div className="hero-metric-tile">
            <div className="metric-tile-icon">
              <FlaskConical size={20} />
            </div>
            <div className="metric-tile-content">
              <div className="metric-tile-num">200+ Formulations</div>
              <div className="metric-tile-label">Ready for Rapid Dispatch</div>
            </div>
          </div>

          <div className="hero-metric-tile">
            <div className="metric-tile-icon">
              <ShieldCheck size={20} />
            </div>
            <div className="metric-tile-content">
              <div className="metric-tile-num">32.4 MPa</div>
              <div className="metric-tile-label">Lap Shear Strength Verified</div>
            </div>
          </div>

          <div className="hero-metric-tile">
            <div className="metric-tile-icon">
              <CheckCircle2 size={20} />
            </div>
            <div className="metric-tile-content">
              <div className="metric-tile-num">500+ Plants</div>
              <div className="metric-tile-label">Standardized on Industrial Polymers</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
