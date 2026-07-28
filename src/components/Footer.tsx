import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Mail, Phone, ArrowUp, X, Sparkles, AlertCircle } from 'lucide-react';
import { IMAGES } from '../assets';

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const instagramPosts = [
    { id: 1, url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=150', text: 'Geometria Sagrada' },
    { id: 2, url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=150', text: 'Foco Interno' },
    { id: 3, url: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=150', text: 'Limpeza Fito' },
    { id: 4, url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=150', text: 'Chakras Equilíbrio' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Schema Markup for Local Business - SEO
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Akashaterapia - Harmonização Energética Integrada',
    'image': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600',
    'telephone': '+55-11-97767-6821',
    'email': 'contato@akashaterapia.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'São Paulo',
      'addressRegion': 'SP',
      'addressCountry': 'BR'
    },
    'description': 'A Akashaterapia oferece harmonização energética integrada através da Radiestesia Terapêutica, Radiônica, Fitoenergética, Astrologia e Numerologia, promovendo equilíbrio, consciência e prosperidade.',
    'priceRange': '$$',
    'openingHours': 'Mo-Fr 09:00-19:00'
  };

  return (
    <footer id="app-footer" className="bg-petroleo-dark border-t border-dourado/20 pt-20 pb-8 text-marfim relative overflow-hidden">
      {/* Embedded SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-dourado/10">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] text-dourado uppercase">
                Akashaterapia
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-salvia/80">
                Harmonização Energética
              </span>
            </div>
            
            <p className="font-sans text-xs text-salvia leading-relaxed max-w-sm">
              Harmonização energética integrada através da Radiestesia Terapêutica, Radiônica, Fitoenergética, Astrologia e Numerologia. Equilíbrio, consciência e bem-estar em nível sistêmico.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5511977676821"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-dourado/10 hover:border-dourado text-salvia hover:text-dourado flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
              <a
                href="https://instagram.com/akashaterapia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-dourado/10 hover:border-dourado text-salvia hover:text-dourado flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:contato@akashaterapia.com"
                className="w-10 h-10 rounded-full border border-dourado/10 hover:border-dourado text-salvia hover:text-dourado flex items-center justify-center transition-all"
                aria-label="E-mail"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-dourado uppercase">Links Rápidos</h4>
            <ul className="space-y-2.5 font-sans text-xs text-salvia">
              <li>
                <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="hover:text-marfim transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleLinkClick(e, '#sobre')} className="hover:text-marfim transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleLinkClick(e, '#servicos')} className="hover:text-marfim transition-colors">Terapias</a>
              </li>
              <li>
                <a href="#beneficios" onClick={(e) => handleLinkClick(e, '#beneficios')} className="hover:text-marfim transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#pets" onClick={(e) => handleLinkClick(e, '#pets')} className="hover:text-marfim transition-colors">Harmonização Pet</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Extra Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-dourado uppercase">Institucional</h4>
            <ul className="space-y-2.5 font-sans text-xs text-salvia">
              <li>
                <a href="#depoimentos" onClick={(e) => handleLinkClick(e, '#depoimentos')} className="hover:text-marfim transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => handleLinkClick(e, '#blog')} className="hover:text-marfim transition-colors">Diário de Consciência</a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')} className="hover:text-marfim transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <button onClick={() => setModalType('privacy')} className="hover:text-marfim transition-colors text-left cursor-pointer">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button onClick={() => setModalType('terms')} className="hover:text-marfim transition-colors text-left cursor-pointer">
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Instagram Feed Mockup */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-dourado uppercase">No Instagram</h4>
            <div className="grid grid-cols-4 gap-2">
              {instagramPosts.map((post) => (
                <a
                  href="https://instagram.com/akashaterapia"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={post.id}
                  className="relative group rounded-lg overflow-hidden aspect-square border border-dourado/10"
                >
                  <img
                    src={post.url}
                    alt={post.text}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-petroleo/70 opacity-0 group-hover:opacity-100 flex items-center justify-center p-1 transition-opacity duration-300">
                    <span className="text-[8px] text-marfim uppercase text-center font-semibold tracking-wider">Ver Post</span>
                  </div>
                </a>
              ))}
            </div>
            <p className="font-sans text-[10px] text-salvia italic">Siga @akashaterapia no Instagram para insights diários.</p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[10px] text-salvia">
          <p>© {new Date().getFullYear()} AKASHATERAPIA. Todos os direitos reservados. Harmonização Integrada.</p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Sparkles className="text-dourado" size={10} />
              Luxo Holístico Contemporâneo
            </span>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1 text-dourado hover:text-marfim transition-colors cursor-pointer uppercase tracking-widest font-bold"
            >
              Voltar ao Topo
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div onClick={() => setModalType(null)} className="absolute inset-0 bg-petroleo-dark/90" />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-marfim border border-dourado/30 p-8 rounded-2xl max-w-lg w-full relative z-10 text-petroleo shadow-2xl max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 text-salvia hover:text-petroleo p-1"
              >
                <X size={20} />
              </button>

              {modalType === 'privacy' ? (
                <>
                  <h3 className="font-serif text-2xl text-petroleo font-bold mb-4">Política de Privacidade</h3>
                  <div className="space-y-4 font-sans text-xs md:text-sm text-petroleo/80 leading-relaxed">
                    <p>
                      Na <strong>AKASHATERAPIA</strong>, privacidade e integridade são pilares inegociáveis. Garantimos que todas as informações de cunho pessoal (nome completo, datas de nascimento, assinaturas ou queixas energéticas pessoais e veterinárias) fornecidas para a realização das consultas e mesas radiônicas são tratadas em sigilo profissional absoluto.
                    </p>
                    <p>
                      Seus dados não são compartilhados, alugados ou vendidos a terceiros em hipótese alguma. Todas as informações coletadas pelo nosso formulário de agendamento têm por finalidade exclusiva gerar a mensagem de preenchimento para início de seu atendimento sob criptografia comercial em WhatsApp.
                    </p>
                    <p>
                      Em conformidade com as leis vigentes de proteção de dados, você poderá a qualquer momento solicitar a deleção integral de seus relatórios de diagnóstico passados dos nossos discos de backup.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-serif text-2xl text-petroleo font-bold mb-4">Termos de Uso</h3>
                  <div className="space-y-4 font-sans text-xs md:text-sm text-petroleo/80 leading-relaxed">
                    <p>
                      Os serviços prestados pela <strong>AKASHATERAPIA</strong> constituem terapias integrativas sutil-vibracionais e diagnósticos astrológicos e numerológicos personalizados.
                    </p>
                    <div className="p-3.5 bg-bege/30 rounded-xl border border-dourado/20 flex gap-2.5">
                      <AlertCircle className="text-dourado shrink-0" size={16} />
                      <p className="text-[11px] leading-snug">
                        <strong>Aviso Importante:</strong> Nossas terapias são tratamentos complementares e integrativos. Elas <strong>não substituem</strong> sob nenhuma hipótese consultas, diagnósticos ou tratamentos médicos, psiquiátricos ou de veterinária especializada convencional.
                      </p>
                    </div>
                    <p>
                      Os resultados obtidos variam para cada indivíduo, pois dependem de fatores biológicos, do estilo de vida atual do interagente e de seu nível de engajamento voluntário nas sugestões de rotina e fitoenergética descritas em relatório.
                    </p>
                  </div>
                </>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setModalType(null)}
                  className="bg-petroleo hover:bg-petroleo-light text-marfim px-5 py-2 rounded-full font-sans text-xs uppercase tracking-widest transition-colors font-semibold"
                >
                  Entendi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
