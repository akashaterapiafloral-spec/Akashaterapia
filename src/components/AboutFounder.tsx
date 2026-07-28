import { motion } from 'motion/react';
import { Compass, Palette, Sparkles, Feather } from 'lucide-react';
import { IMAGES } from '../assets';

export default function AboutFounder() {
  return (
    <section id="quem-sou" className="py-20 md:py-28 bg-petroleo text-marfim border-t border-dourado/20 relative overflow-hidden">
      {/* Soft background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dourado/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-salvia/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-dourado font-semibold block mb-3 flex items-center justify-center gap-2">
            <Feather size={14} className="text-dourado" />
            <span>Fundadora & Terapeuta Integrativa</span>
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-marfim tracking-tight">
            Quem Conduz a <span className="text-dourado italic font-light">Akashaterapia</span>
          </h2>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group max-w-sm w-full"
            >
              {/* Outer Golden Fine Border Ring */}
              <div className="absolute -inset-3 rounded-2xl border border-dourado/30 pointer-events-none transition-all duration-500 group-hover:border-dourado/60" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-2xl overflow-hidden bg-petroleo-dark border border-dourado/40 shadow-2xl">
                <img
                  src={IMAGES.yveValenteImg}
                  alt="Yve Valente - Fundadora da Akashaterapia e Designeria.Art"
                  className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Discrete Label Badge */}
                <div className="bg-petroleo-dark/95 border-t border-dourado/30 p-3 text-center relative z-10">
                  <h4 className="font-serif font-bold text-dourado text-base tracking-wide">Yve Valente</h4>
                  <p className="font-sans text-[11px] text-salvia uppercase tracking-wider">Terapias Energéticas & Comunicação Consciente</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Description Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-marfim/90 font-sans text-sm md:text-base leading-relaxed"
            >
              {/* First Paragraph */}
              <div className="bg-petroleo-dark/50 border-l-2 border-dourado p-6 rounded-r-2xl shadow-md">
                <div className="flex items-center gap-2 text-dourado mb-3 font-serif font-medium text-lg">
                  <Sparkles size={18} />
                  <span>Jornada Terapeuta & Propósito</span>
                </div>
                <p className="text-marfim/90 font-light text-justify">
                  Meu nome é <strong className="text-dourado font-semibold">Yve Valente</strong>. Sou terapeuta integrativa e fundadora da <strong className="text-marfim">Akashaterapia</strong>, onde dedico meu trabalho à promoção do equilíbrio, do autoconhecimento e da transformação pessoal por meio da Radiestesia e Radiônica, Fitoenergética, Terapia Floral, Astrologia, Toques Conscienciais e outras Terapias Energéticas Integrativas. Acredito que cada pessoa possui um potencial único de cura e expansão quando corpo, mente, emoções e energia são harmonizados.
                </p>
              </div>

              {/* Second Paragraph */}
              <div className="bg-petroleo-dark/50 border-l-2 border-salvia p-6 rounded-r-2xl shadow-md">
                <div className="flex items-center gap-2 text-salvia mb-3 font-serif font-medium text-lg">
                  <Palette size={18} />
                  <span>Designeria.Art & Comunicação Consciente</span>
                </div>
                <p className="text-marfim/90 font-light text-justify">
                  Também sou web designer e social media, fundadora da <strong className="text-dourado font-semibold">Designeria.Art</strong>, unindo criatividade, estratégia e sensibilidade para desenvolver identidades visuais e experiências digitais com propósito. Minha missão é contribuir para a transformação de pessoas e projetos, seja por meio da harmonização energética ou da comunicação consciente.
                </p>
              </div>

              {/* Pillars / Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-petroleo-dark/80 border border-dourado/20 p-3.5 rounded-xl">
                  <Compass className="text-dourado shrink-0" size={20} />
                  <div>
                    <span className="block font-serif text-sm text-dourado font-semibold">Visão Holística</span>
                    <span className="block font-sans text-xs text-salvia">Corpo, mente e energia harmonizados</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-petroleo-dark/80 border border-dourado/20 p-3.5 rounded-xl">
                  <Sparkles className="text-salvia shrink-0" size={20} />
                  <div>
                    <span className="block font-serif text-sm text-salvia font-semibold">Sensibilidade & Estratégia</span>
                    <span className="block font-sans text-xs text-marfim/70">Transformando pessoas e projetos</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
