import React from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstitutionalVideoSection } from './components/InstitutionalVideoSection';
import { ServicesSection } from './components/ServicesSection';
import { BudgetEstimator } from './components/BudgetEstimator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactQuoteSection } from './components/ContactQuoteSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { ExitIntentModal } from './components/ExitIntentModal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <InstitutionalVideoSection />
        <ServicesSection />
        <BudgetEstimator />
        <WhyChooseUs />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactQuoteSection />
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements (WhatsApp, Instagram, Assistente RTX) */}
      <FloatingWidgets />

      {/* Exit Intent Modal */}
      <ExitIntentModal />
    </div>
  );
}
