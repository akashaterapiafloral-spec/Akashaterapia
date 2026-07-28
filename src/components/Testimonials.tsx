import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="depoimentos" className="py-24 bg-marfim border-t border-b border-dourado/10 relative overflow-hidden">
      {/* Decorative large quotes sign in background */}
      <div className="absolute top-10 left-10 text-bege/20 pointer-events-none select-none">
        <Quote size={200} className="transform rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-dourado font-semibold block mb-3">CONEXÃO E RESULTADO</span>
          <h2 className="font-serif text-3xl md:text-5xl text-petroleo tracking-tight">
            Vozes de Quem Vivenciou <span className="italic font-light">a Transmutação</span>
          </h2>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        {/* Carousel Frame */}
        <div className="max-w-3xl mx-auto relative px-4 md:px-12 py-12 bg-bege/10 border border-dourado/20 rounded-3xl shadow-xl">
          <Quote className="text-dourado/30 absolute top-6 left-6" size={40} />
          
          <div className="min-h-[250px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* 5 Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-dourado fill-dourado" size={16} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-lg md:text-xl text-petroleo italic leading-relaxed mb-8 px-2 md:px-8">
                  "{TESTIMONIALS[activeIndex].text}"
                </p>

                {/* Service Badge */}
                <span className="inline-block text-[9px] uppercase tracking-widest bg-petroleo/10 text-petroleo border border-petroleo/10 px-3 py-1 rounded-full font-sans font-semibold mb-4">
                  {TESTIMONIALS[activeIndex].serviceName}
                </span>

                {/* Author Details */}
                <div>
                  <h4 className="font-sans text-sm md:text-base font-bold text-petroleo">{TESTIMONIALS[activeIndex].name}</h4>
                  <p className="font-sans text-xs text-petroleo/75 mt-0.5">{TESTIMONIALS[activeIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-marfim border border-dourado/20 text-petroleo flex items-center justify-center hover:bg-dourado hover:text-petroleo transition-all hover:scale-105 active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-4">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-marfim border border-dourado/20 text-petroleo flex items-center justify-center hover:bg-dourado hover:text-petroleo transition-all hover:scale-105 active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'bg-dourado w-6' : 'bg-salvia/30'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
