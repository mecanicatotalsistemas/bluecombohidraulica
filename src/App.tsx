import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PurchaseNotification from './components/PurchaseNotification';
import ExitIntentPopup from './components/ExitIntentPopup';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CoursesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <PurchaseNotification />
      <ExitIntentPopup />
    </div>
  );
}

export default App;