import { motion } from 'motion/react';
import { BENEFITS } from '../data';
import LucideIcon from './LucideIcon';

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-marfim border-t border-b border-dourado/10 relative overflow-hidden">
      {/* Dynamic geometry backdrop */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-full border-l border-r border-dourado/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-dourado font-semibold block mb-3">CONQUISTE O ALINHAMENTO</span>
          <h2 className="font-serif text-3xl md:text-5xl text-petroleo tracking-tight">
            Benefícios de Viver em <span className="italic font-light">Sintonia</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-petroleo/75 mt-4 max-w-xl mx-auto">
            A harmonização integrada atua de dentro para fora, manifestando-se como transformações práticas no seu corpo, mente, negócios e relações.
          </p>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              key={benefit.id}
              className="bg-bege/10 border border-dourado/10 hover:border-dourado/30 p-8 rounded-2xl transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-petroleo flex items-center justify-center text-marfim group-hover:bg-dourado group-hover:text-petroleo transition-colors duration-300 shrink-0">
                  <LucideIcon name={benefit.iconName} size={22} className="group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-petroleo mb-2 font-semibold group-hover:text-dourado transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-petroleo/75 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
