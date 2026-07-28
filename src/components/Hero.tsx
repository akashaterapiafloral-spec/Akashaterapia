import { motion } from 'motion/react';
import { Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { IMAGES } from '../assets';

interface HeroProps {
  onScheduleClick: () => void;
  onExploreServicesClick: () => void;
}

export default function Hero({ onScheduleClick, onExploreServicesClick }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-marfim overflow-hidden pt-40 md:pt-48 lg:pt-56 pb-16">
      {/* Delicate background energy wave vectors & gold grids */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A86A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Abstract geometric gold circles behind content */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full border border-dourado/10 pointer-events-none animate-[spin_120s_linear_infinite]" />
      <div className="absolute bottom-10 left-[-5%] w-[300px] h-[300px] rounded-full border border-dourado/10 pointer-events-none animate-[spin_80s_linear_infinite_reverse]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column - Information */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-bege/40 border border-dourado/20 px-4 py-2 rounded-full mb-6 w-fit"
          >
            <div className="w-5 h-5 rounded-full overflow-hidden border border-dourado/40 flex items-center justify-center bg-petroleo">
              <img
                src={IMAGES.logo}
                alt="Akashaterapia Icon"
                className="w-full h-full object-cover scale-[1.5] translate-y-[-8%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-petroleo font-medium">
              Harmonização Energética • Consciência • Prosperidade
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-petroleo tracking-tight leading-[1.1] mb-6"
          >
            Energia em <span className="italic font-light text-dourado">Equilíbrio</span>.<br />
            Vida em Harmonia.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-sm md:text-base text-petroleo/80 leading-relaxed max-w-xl mb-10"
          >
            Radiestesia, Radiônica, Astrologia e Terapias Integrativas sob o conceito de <strong>Harmonização e Alinhamento</strong>. Tratamentos profundos e personalizados para reestabelecer o fluxo vital de pessoas, ambientes e animais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <button
              id="hero-cta-primary"
              onClick={onScheduleClick}
              className="flex items-center justify-center gap-2 bg-petroleo hover:bg-petroleo-light text-marfim px-8 py-4 rounded-full font-sans text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-petroleo/10 hover:shadow-xl hover:shadow-petroleo/20 active:scale-95"
            >
              <Calendar size={14} />
              Agendar Atendimento
            </button>

            <button
              id="hero-cta-secondary"
              onClick={onExploreServicesClick}
              className="flex items-center justify-center gap-2 border border-petroleo/20 hover:border-dourado hover:bg-bege/30 text-petroleo px-8 py-4 rounded-full font-sans text-xs uppercase tracking-widest transition-all duration-300 active:scale-95"
            >
              Conhecer Serviços
              <ChevronRight size={14} />
            </button>
          </motion.div>

          {/* Micro metrics lines strictly respecting literal design limits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 pt-8 border-t border-dourado/20 grid grid-cols-3 gap-6 max-w-md"
          >
            <div>
              <p className="font-serif text-2xl font-bold text-petroleo">16+</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-petroleo/80 mt-1">Terapias Únicas</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-petroleo">100%</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-petroleo/80 mt-1">Personalizado</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-petroleo">Atendimento</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-petroleo/80 mt-1">Apenas Online</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Premium image frame with fine-gold-lines */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative w-full max-w-sm md:max-w-md aspect-[3/4] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border border-dourado/30 shadow-2xl bg-bege/20 p-2"
          >
            <div className="relative w-full h-full rounded-t-[9.5rem] rounded-b-[1.5rem] overflow-hidden">
              <img
                src={IMAGES.heroBg}
                alt="Akashaterapia Studio de Luxo Holístico"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petroleo/30 via-transparent to-transparent" />
            </div>

            {/* Sacred geometry circular dial overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dourado/20 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-dashed border-dourado/10 rounded-full pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
