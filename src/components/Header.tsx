import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { IMAGES } from '../assets';

interface HeaderProps {
  onScheduleClick: () => void;
}

export default function Header({ onScheduleClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Quem Sou', href: '#quem-sou' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Pets', href: '#pets' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        id="app-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-petroleo border-b border-dourado/25 shadow-lg flex items-center ${
          isScrolled
            ? 'h-16 lg:h-20 shadow-xl'
            : 'h-20 lg:h-24'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-3 h-full">
          {/* Brand Name */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex flex-col justify-center h-full group py-1 shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl xl:text-3xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-dourado uppercase drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)] whitespace-nowrap">
              Akashaterapia
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-salvia/80 -mt-0.5 whitespace-nowrap">
              Harmonização Energética
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-5 2xl:gap-7 shrink">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-[11px] xl:text-xs 2xl:text-sm uppercase tracking-wider text-marfim/85 hover:text-dourado transition-colors duration-200 relative group py-2 whitespace-nowrap px-1 xl:px-1.5"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dourado transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              id="header-cta"
              onClick={onScheduleClick}
              className="flex items-center gap-1.5 border border-dourado text-dourado hover:bg-dourado hover:text-petroleo px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full font-sans text-[11px] xl:text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-dourado/20"
            >
              <Phone size={13} className="shrink-0" />
              <span>Agendar Atendimento</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-marfim hover:text-dourado transition-colors p-1.5 rounded-lg border border-dourado/20"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-petroleo/98 z-40 lg:hidden flex flex-col justify-center px-10"
          >
            <div className="absolute top-6 right-6">
              <button
                id="close-mobile-drawer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-marfim hover:text-dourado p-2"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-2xl tracking-widest text-marfim hover:text-dourado transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-8 flex justify-center"
              >
                <button
                  id="mobile-drawer-cta"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onScheduleClick();
                  }}
                  className="flex items-center gap-2 bg-dourado hover:bg-dourado-hover text-petroleo px-8 py-4 rounded-full font-sans text-sm uppercase tracking-widest transition-all duration-300"
                >
                  <Phone size={16} />
                  Agendar Atendimento
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
