import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import MockupProductGrid from './components/MockupProductGrid';
import BrandPartners from './components/BrandPartners';
import AdhesiveFinder from './components/AdhesiveFinder';
import StressSimulator from './components/StressSimulator';
import BondingVsMechanical from './components/BondingVsMechanical';
import ProductCatalog from './components/ProductCatalog';
import IndustrySolutions from './components/IndustrySolutions';
import CtaBanner from './components/CtaBanner';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FloatingHotline from './components/FloatingHotline';
import QuoteModal from './components/QuoteModal';
import ProductDetailModal from './components/ProductDetailModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCatalogCategory, setActiveCatalogCategory] = useState("all");
  const [activeSection, setActiveSection] = useState("hero");

  const handleOpenQuote = (subject = "") => {
    setQuotePrefill(subject);
    setQuoteModalOpen(true);
  };

  const handleSelectCategoryFromGrid = (catId) => {
    setActiveCatalogCategory(catId);
    const catalogEl = document.getElementById("catalog");
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Fixed Sticky Header with Dynamic Scroll Progress */}
      <Header 
        onOpenQuote={handleOpenQuote}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Landmark for SEO & Accessibility */}
      <main id="main-content" role="main">
        {/* Hero Section matching mockup with live pulse telemetry */}
        <Hero 
          onOpenQuote={handleOpenQuote}
          onExploreProducts={() => handleNavigate('products')}
        />

      {/* 4-Item Value Proposition Highlight Strip */}
      <ValueProps />

      {/* 6-Card Category Showcase (Matching Mockup) */}
      <MockupProductGrid 
        onSelectCategory={handleSelectCategoryFromGrid}
        onViewAll={() => handleNavigate('catalog')}
      />

      {/* Authorized Brand Standards Strip */}
      <BrandPartners />

      {/* WOW Section 1: Interactive Joint Stress & Bond Strength Simulator */}
      <StressSimulator 
        onOpenQuote={handleOpenQuote}
      />

      {/* WOW Section 2: Mechanical Fasteners vs Chemical Bonding Comparison */}
      <BondingVsMechanical 
        onOpenQuote={handleOpenQuote}
      />

      {/* Interactive Substrate & Adhesive Selector Tool */}
      <AdhesiveFinder 
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Detailed Technical Specification Catalog with Filters */}
      <ProductCatalog 
        selectedCategory={activeCatalogCategory}
        onSelectCategory={(catId) => setActiveCatalogCategory(catId)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Manufacturing Verticals & Industry Solutions */}
      <IndustrySolutions 
        onOpenQuote={handleOpenQuote}
      />

      {/* Need Help Choosing Banner (from Mockup) */}
      <CtaBanner 
        onOpenQuote={handleOpenQuote}
      />

      {/* About Us & Industrial Engineering Center */}
      <AboutSection />
      </main>

      {/* Footer (from Mockup) */}
      <Footer 
        onNavigate={handleNavigate}
      />

      {/* Floating Quick RFQ & Technical Hotline Widget */}
      <FloatingHotline 
        onOpenQuote={handleOpenQuote}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefillSubject={quotePrefill}
      />

      <ProductDetailModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
