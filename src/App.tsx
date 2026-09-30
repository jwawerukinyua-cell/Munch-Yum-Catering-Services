import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MenuHighlights } from './components/MenuHighlights';
import { QuoteCalculator } from './components/QuoteCalculator';
import { AboutFounder } from './components/AboutFounder';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ConsultationModal } from './components/ConsultationModal';
import { StickyContactBar } from './components/StickyContactBar';
import { Footer } from './components/Footer';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<{
    eventType?: string;
    guests?: number;
    style?: string;
  }>({});

  const handleOpenConsultation = () => {
    setModalInitialData({});
    setIsConsultationOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setModalInitialData({
      eventType: serviceName,
    });
    setIsConsultationOpen(true);
  };

  const handleOpenConsultationWithData = (data: {
    eventType: string;
    guests: number;
    style: string;
  }) => {
    setModalInitialData(data);
    setIsConsultationOpen(true);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121110] text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950 overflow-x-clip w-full max-w-full">
      {/* Sticky Top Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* 1. Hero Section with high-conversion CTAs & Social Proof */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreMenu={handleExploreMenu}
        />

        {/* 2. Services Offered Cards */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. Menu Highlights / Interactive Gallery Grid */}
        <MenuHighlights onOpenConsultation={handleOpenConsultation} />

        {/* 4. Interactive Custom Quote & Menu Estimator */}
        <QuoteCalculator
          onOpenConsultationWithData={handleOpenConsultationWithData}
        />

        {/* 5. About the Founder: Chef Kabura Karanja */}
        <AboutFounder />

        {/* 6. Social Proof / Client Testimonials */}
        <TestimonialsSection />

        {/* 7. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer with full info, operating hours & official social links */}
      <Footer />

      {/* Floating & Sticky Contact Bars (Mobile thumb bar + Desktop WhatsApp bubble) */}
      <StickyContactBar onOpenConsultation={handleOpenConsultation} />

      {/* Consultation & Custom Quote Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialData={modalInitialData}
      />
    </div>
  );
}
