import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Phone, Sparkles } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show a small notification toast after 4 seconds to prompt interaction
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartChat = () => {
    const message = encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e agendar um atendimento na Akashaterapia.');
    window.open(`https://wa.me/5511977676821?text=${message}`, '_blank');
    setIsOpen(false);
    setShowNotification(false);
  };

  return (
    <div id="whatsapp-widget-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-marfim border border-dourado/30 text-petroleo p-4 rounded-2xl shadow-xl max-w-xs flex items-start gap-3 relative mr-2"
          >
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 text-salvia hover:text-petroleo p-0.5"
            >
              <X size={12} />
            </button>
            <div className="w-8 h-8 rounded-full bg-dourado/10 flex items-center justify-center text-dourado shrink-0 mt-0.5">
              <Sparkles size={14} className="animate-pulse" />
            </div>
            <div>
              <p className="font-serif text-xs font-bold">Deseja harmonizar sua energia?</p>
              <p className="font-sans text-[10px] text-salvia mt-1 leading-normal">
                Fale agora com nosso especialista no WhatsApp para um direcionamento personalizado.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Panel Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-petroleo border border-dourado/30 text-marfim p-6 rounded-3xl shadow-2xl max-w-[320px] w-full relative mb-2 mr-2"
          >
            {/* Header */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-salvia hover:text-marfim p-1"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-dourado flex items-center justify-center bg-petroleo-dark text-dourado">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold tracking-wide">Akashaterapia</h4>
                <p className="font-sans text-[9px] uppercase tracking-widest text-salvia">Online e pronto para te acolher</p>
              </div>
            </div>

            {/* Bubble Message */}
            <div className="bg-marfim/5 rounded-2xl p-4 mb-5 border border-dourado/10">
              <p className="font-sans text-xs text-marfim/90 leading-relaxed">
                Olá! Seja muito bem-vindo(a) à Akashaterapia. 🤍
              </p>
              <p className="font-sans text-xs text-marfim/90 leading-relaxed mt-2">
                Como podemos auxiliar no seu processo de equilíbrio energético e consciência hoje?
              </p>
            </div>

            {/* CTA button */}
            <button
              onClick={handleStartChat}
              className="w-full flex items-center justify-center gap-2 bg-dourado hover:bg-dourado-hover text-petroleo py-3 rounded-full font-sans text-xs uppercase tracking-widest transition-all font-semibold shadow-lg shadow-dourado/10 cursor-pointer"
            >
              <Phone size={14} />
              Iniciar Atendimento
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Core Floating Button */}
      <motion.button
        id="whatsapp-floating-button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-dourado text-petroleo hover:bg-dourado-hover shadow-2xl flex items-center justify-center relative cursor-pointer group"
        aria-label="Atendimento via WhatsApp"
      >
        {/* Pulsing ring outer */}
        <span className="absolute inset-0 rounded-full border-2 border-dourado animate-ping opacity-30 pointer-events-none" />
        
        {isOpen ? (
          <X size={24} className="transition-transform group-hover:rotate-90 duration-300" />
        ) : (
          <MessageSquare size={24} className="transition-transform group-hover:scale-110 duration-300" />
        )}
      </motion.button>

    </div>
  );
}
