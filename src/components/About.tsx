import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets';

export default function About() {
  const coreValues = [
    {
      icon: <Target className="text-dourado" size={24} />,
      title: 'Missão',
      desc: 'Promover equilíbrio, harmonização e bem-estar através de métodos integrativos e energéticos de alta sobriedade, auxiliando pessoas, ambientes e animais a alcançarem saúde, consciência e prosperidade.',
    },
    {
      icon: <Eye className="text-dourado" size={24} />,
      title: 'Visão',
      desc: 'Ser referência absoluta em terapias integrativas contemporâneas, elevando o padrão do atendimento holístico por meio de práticas profissionais, seguras, éticas e com resultados comprovados.',
    },
    {
      icon: <ShieldCheck className="text-dourado" size={24} />,
      title: 'Valores',
      desc: 'Profissionalismo, acolhimento incondicional, sabedoria ancestral, ética terapêutica, respeito à individualidade biológica-energética e compromisso com o bem-estar sistêmico.',
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-marfim border-t border-dourado/10 relative overflow-hidden">
      {/* Decorative fine gold line circle */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] border border-dourado/5 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-dourado font-semibold block mb-3">CONHEÇA A ESSÊNCIA</span>
          <h2 className="font-serif text-3xl md:text-5xl text-petroleo tracking-tight">
            Equilíbrio Energético Sutil, <br />
            <span className="italic font-light">Resultados Reais</span>
          </h2>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        {/* Brand narrative and image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left: Custom framed crystals image showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative space-y-4"
            >
              {/* Premium Floating Seal */}
              <div className="absolute -top-6 -left-6 w-16 h-16 overflow-hidden rounded-full border-2 border-dourado/60 shadow-2xl bg-petroleo-dark flex items-center justify-center z-20 hidden md:flex">
                <Sparkles className="w-7 h-7 text-dourado animate-pulse" />
              </div>

              {/* Main Selenite Crystal Tower Image */}
              <div className="p-3 border border-dourado/20 rounded-2xl bg-bege/10 shadow-xl">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                  <img
                    src={IMAGES.seleniteCrystalImg}
                    alt="Torre de Selenita de Quartzo Terapêutica"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-petroleo/5 mix-blend-multiply" />
                </div>
              </div>

              {/* Secondary Crystal Image */}
              <div className="p-2 border border-dourado/20 rounded-xl bg-bege/10 shadow-md">
                <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
                  <img
                    src={IMAGES.crystalsImg}
                    alt="Cristais de Quartzo Terapêuticos"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="bg-petroleo/90 backdrop-blur-md border border-dourado/30 text-marfim p-5 rounded-xl shadow-xl">
                <p className="font-serif italic text-base md:text-lg text-dourado">"A energia se move onde a atenção se foca."</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-salvia mt-1.5">— Sabedoria Sistêmica</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Narrative text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h3 className="font-serif text-2xl md:text-3xl text-petroleo mb-6">
              A Integração de Saberes para a Harmonia da Vida
            </h3>
            <div className="space-y-6 text-petroleo/80 font-sans text-sm md:text-base leading-relaxed">
              <p>
                A <strong>Akashaterapia</strong> foi concebida para aproximar o ser humano de sua verdadeira essência vibratória. Nós entendemos que a saúde plena e a prosperidade não ocorrem apenas pela ausência de sintomas físicos, mas sim pelo livre fluxo e equilíbrio harmônico dos nossos corpos sutis, da nossa mente e das energias que nos cercam.
              </p>
              <p>
                Com total sobriedade e amparados pela <strong>Radiestesia Científica e Terapêutica</strong> e pela <strong>Radiônica</strong>, investigamos as causas raízes invisíveis dos bloqueios de vida — sejam eles emocionais, herdados de seu sistema familiar ou decorrentes de influências telúricas e eletromagnéticas do próprio lar.
              </p>
              <p>
                Evitamos narrativas místicas exageradas ou promessas superficiais. No lugar disso, entregamos diagnósticos claros, orientações práticas, relatórios aprofundados de trânsitos astrológicos e numerológicos, além de tratamentos vibracionais sérios estruturados em conhecimentos milenares e contemporâneos.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-bege/40 flex items-center justify-center border border-dourado/20">
                <Heart className="text-dourado animate-pulse" size={20} />
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-petroleo font-bold">Acolhimento Premium</p>
                <p className="font-sans text-xs text-petroleo/75">Sessões individuais focadas 100% no seu campo energético.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={value.title}
              className="bg-bege/20 hover:bg-bege/30 border border-dourado/10 p-8 rounded-2xl transition-all duration-300 group hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-petroleo flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h4 className="font-serif text-xl text-petroleo mb-3 font-semibold">{value.title}</h4>
              <p className="font-sans text-xs md:text-sm text-petroleo/75 leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
