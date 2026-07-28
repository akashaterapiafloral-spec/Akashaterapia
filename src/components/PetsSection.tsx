import { motion } from 'motion/react';
import { Heart, Shield, MessageSquare, CheckCircle } from 'lucide-react';
import { IMAGES } from '../assets';

interface PetsSectionProps {
  onScheduleClick: () => void;
}

export default function PetsSection({ onScheduleClick }: PetsSectionProps) {
  const petBenefits = [
    'Redução drástica de ansiedade de separação, fobias e estresse comportamental.',
    'Alívio complementar para dores crônicas, problemas articulares e letargia.',
    'Aceleração sutil da cicatrização pós-cirúrgica e fortalecimento imunitário.',
    'Harmonização conjunta com o campo vibracional do tutor e do lar.',
  ];

  return (
    <section id="pets" className="py-24 bg-bege/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] border border-dourado/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-dourado font-semibold block mb-3">ATENDIMENTO EXCLUSIVO</span>
          <h2 className="font-serif text-3xl md:text-5xl text-petroleo tracking-tight">
            Harmonização Energética <span className="italic font-light text-dourado">Pet</span>
          </h2>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copywriting */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-petroleo leading-tight">
              Seu companheiro também merece leveza, saúde e equilíbrio vibratório.
            </h3>
            
            <p className="font-sans text-sm md:text-base text-petroleo/80 leading-relaxed">
              Cães, gatos e outros animais de estimação possuem uma sensibilidade energética incomparável à nossa. Por amor incondicional aos tutores, eles atuam constantemente como verdadeiras <strong>"esponjas energéticas"</strong>, absorvendo estresses, medos, tensões e cargas emocionais acumuladas no ambiente familiar.
            </p>

            <p className="font-sans text-sm md:text-base text-petroleo/80 leading-relaxed">
              Essa sobrecarga silenciosa costuma manifestar-se por meio de distúrbios comportamentais (ansiedade de separação, agressividade, fobias a barulhos) ou diretamente como sintomas físicos e dermatológicos de fundo emocional.
            </p>

            <p className="font-sans text-sm md:text-base text-petroleo/80 leading-relaxed">
              Com a <strong>Harmonização Pet</strong>, realizamos um atendimento à distância não invasivo utilizando Radiestesia, gráficos radiônicos específicos para animais e Fitoenergética. Medimos e regulamos seus centros energéticos (chakras pet), trazendo serenidade, reestabelecendo o ânimo celular e devolvendo-lhes a paz de que necessitam para viver com qualidade.
            </p>

            {/* Bullets List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pb-6">
              {petBenefits.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <CheckCircle className="text-dourado shrink-0 mt-0.5" size={16} />
                  <span className="font-sans text-xs text-petroleo/80 leading-snug">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="pets-cta-whatsapp"
                onClick={onScheduleClick}
                className="flex items-center justify-center gap-2 bg-petroleo hover:bg-petroleo-light text-marfim px-8 py-4 rounded-full font-sans text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-petroleo/10 hover:shadow-xl hover:shadow-petroleo/20 active:scale-95"
              >
                <Heart size={14} className="text-dourado animate-pulse" />
                Agendar Atendimento Pet
              </button>
            </div>
          </div>

          {/* Right Side: Elegant dual image collage layout with gold borders */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-3 border border-dourado/20 rounded-[2.5rem] bg-bege/10 shadow-xl overflow-hidden"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-square border border-dourado/10">
                <img
                  src={IMAGES.petCollageImg}
                  alt="Seu pet merece o melhor cuidado - Collage de Harmonização Pet"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative floating micro shield badge */}
              <div className="absolute top-6 left-6 bg-marfim/95 backdrop-blur-md border border-dourado/30 text-petroleo px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                <Shield className="text-dourado" size={16} />
                <span className="font-sans text-[10px] uppercase tracking-wider font-bold">Seu pet merece o melhor cuidado</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-2 border border-dourado/20 rounded-[2rem] bg-bege/10 shadow-md"
            >
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/9]">
                <img
                  src={IMAGES.petsImg}
                  alt="Animais de estimação relaxando felizes em casa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petroleo/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
