import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-marfim border-t border-b border-dourado/10 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full border border-dourado/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-dourado font-semibold block mb-3">RESPOSTAS DIRETAS</span>
          <h2 className="font-serif text-3xl md:text-5xl text-petroleo tracking-tight">
            Perguntas <span className="italic font-light text-dourado">Frequentes</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-petroleo/75 mt-4 max-w-xl mx-auto">
            Esclareça suas principais dúvidas sobre o funcionamento da radiestesia, a dinâmica dos atendimentos à distância e a seriedade dos nossos processos.
          </p>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? 'border-dourado bg-bege/20 shadow-md'
                    : 'border-dourado/10 bg-bege/5 hover:border-dourado/30 hover:bg-bege/10'
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`shrink-0 transition-colors ${isOpen ? 'text-dourado' : 'text-salvia'}`} size={18} />
                    <span className="font-serif text-sm md:text-base font-semibold text-petroleo leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Chevron Icon wrapper */}
                  <div className={`w-8 h-8 rounded-full border border-dourado/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-petroleo text-marfim border-petroleo' : 'text-petroleo'
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-dourado/10">
                        <p className="font-sans text-xs md:text-sm text-petroleo/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic prompt for more questions */}
        <div className="text-center mt-12">
          <p className="font-sans text-xs text-petroleo/75">
            Ainda possui alguma pergunta específica? <a href="#contato" className="text-dourado hover:text-petroleo underline font-semibold transition-colors">Fale com nosso especialista</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
