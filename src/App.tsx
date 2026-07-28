/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutFounder from './components/AboutFounder';
import Services from './components/Services';
import Benefits from './components/Benefits';
import PetsSection from './components/PetsSection';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const scrollToSection = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleScheduleClick = () => {
    scrollToSection('#contato');
  };

  const handleExploreServicesClick = () => {
    scrollToSection('#servicos');
  };

  const handleScheduleSpecificService = (serviceName: string) => {
    scrollToSection('#contato');
    // Pre-fill selector or set state if needed
    const selectElem = document.getElementById('form-service') as HTMLSelectElement;
    if (selectElem) {
      selectElem.value = serviceName;
      // Trigger native change event if needed
      const event = new Event('change', { bubbles: true });
      selectElem.dispatchEvent(event);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-dourado selection:text-marfim">
      
      {/* Premium Sticky Header */}
      <Header onScheduleClick={handleScheduleClick} />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero 
          onScheduleClick={handleScheduleClick} 
          onExploreServicesClick={handleExploreServicesClick} 
        />

        {/* 2. Sobre Nós */}
        <About />

        {/* 2.1 Quem Sou / Yve Valente */}
        <AboutFounder />

        {/* 3. Serviços */}
        <Services onScheduleService={handleScheduleSpecificService} />

        {/* 4. Benefícios */}
        <Benefits />

        {/* 5. Atendimento Pets */}
        <PetsSection onScheduleClick={handleScheduleClick} />

        {/* 6. Depoimentos */}
        <Testimonials />

        {/* 7. Blog da Consciência */}
        <Blog />

        {/* 8. Perguntas Frequentes */}
        <FAQ />

        {/* 9. CTA Final / Contato */}
        <ContactForm />

      </main>

      {/* 10. Footer with Schema Markup & Instagram Feed Mockup */}
      <Footer />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppWidget />

    </div>
  );
}

