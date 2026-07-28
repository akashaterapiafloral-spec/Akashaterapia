import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import { SERVICES } from '../data';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e WhatsApp).');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending, then trigger WhatsApp redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const serviceText = selectedService ? `Serviço desejado: ${selectedService}.` : 'Gostaria de agendar um atendimento geral.';
      const msgText = message ? ` Mensagem: ${message}` : '';
      
      const text = `Olá Akashaterapia! Meu nome é ${name}. Desejo agendar uma sessão. ${serviceText} Meu e-mail: ${email}. WhatsApp: ${phone}.${msgText}`;
      const encodedText = encodeURIComponent(text);
      
      // Delay redirect slightly so user sees success message
      setTimeout(() => {
        window.open(`https://wa.me/5511977676821?text=${encodedText}`, '_blank');
      }, 1500);

    }, 1200);
  };

  return (
    <section id="contato" className="py-24 bg-petroleo text-marfim relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-dourado/5 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full border border-dourado/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Info and Text */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-dourado font-semibold block mb-3">INICIE SUA JORNADA</span>
              <h2 className="font-serif text-3xl md:text-5xl text-marfim tracking-tight leading-tight">
                Permita-se viver com mais <span className="italic font-light text-dourado">equilíbrio</span>, clareza e prosperidade.
              </h2>
              <div className="w-16 h-[1px] bg-dourado mt-6" />
            </div>

            <p className="font-sans text-xs md:text-sm text-salvia leading-relaxed">
              Dê o primeiro passo rumo à harmonização do seu campo vibracional, da sua casa ou do seu pet. Preencha os campos ao lado para solicitar o agendamento de sua terapia ou sanar dúvidas específicas.
            </p>

            {/* Quick Contact Links */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-salvia">WhatsApp de Atendimento</p>
                  <a href="https://wa.me/5511977676821" target="_blank" rel="noopener noreferrer" className="font-sans text-xs md:text-sm text-marfim hover:text-dourado transition-colors">
                    +55 (11) 97767-6821
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-salvia">E-mail Corporativo</p>
                  <a href="mailto:contato@akashaterapia.com" className="font-sans text-xs md:text-sm text-marfim hover:text-dourado transition-colors">
                    contato@akashaterapia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-salvia">Horário de Atendimento</p>
                  <p className="font-sans text-xs md:text-sm text-marfim">
                    Segunda a Sexta, das 09h às 19h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Elegant Form */}
          <div className="lg:col-span-7 bg-marfim/5 border border-dourado/20 p-8 md:p-10 rounded-3xl backdrop-blur-md shadow-2xl">
            <h3 className="font-serif text-2xl text-marfim mb-6">Solicitar Harmonização</h3>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="form-name" className="font-sans text-[11px] uppercase tracking-widest text-salvia mb-1.5 font-semibold">
                        Seu nome *
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Ana Silva"
                        required
                        className="bg-marfim/10 border border-dourado/20 text-marfim rounded-lg px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-dourado placeholder:text-salvia/40 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="form-email" className="font-sans text-[11px] uppercase tracking-widest text-salvia mb-1.5 font-semibold">
                        Seu e-mail *
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: ana@exemplo.com"
                        required
                        className="bg-marfim/10 border border-dourado/20 text-marfim rounded-lg px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-dourado placeholder:text-salvia/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone/WhatsApp */}
                    <div className="flex flex-col">
                      <label htmlFor="form-phone" className="font-sans text-[11px] uppercase tracking-widest text-salvia mb-1.5 font-semibold">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ex: (11) 99999-9999"
                        required
                        className="bg-marfim/10 border border-dourado/20 text-marfim rounded-lg px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-dourado placeholder:text-salvia/40 transition-colors"
                      />
                    </div>

                    {/* Service Select */}
                    <div className="flex flex-col">
                      <label htmlFor="form-service" className="font-sans text-[11px] uppercase tracking-widest text-salvia mb-1.5 font-semibold">
                        Terapia desejada
                      </label>
                      <select
                        id="form-service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="bg-petroleo border border-dourado/20 text-marfim rounded-lg px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-dourado transition-colors"
                      >
                        <option value="">Selecione um atendimento...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="form-message" className="font-sans text-[11px] uppercase tracking-widest text-salvia mb-1.5 font-semibold">
                      Sua mensagem ou queixa principal (opcional)
                    </label>
                    <textarea
                      id="form-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Fale brevemente o que você está sentindo ou as queixas do ambiente/animal..."
                      rows={4}
                      className="bg-marfim/10 border border-dourado/20 text-marfim rounded-lg px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-dourado placeholder:text-salvia/40 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-dourado hover:bg-dourado-hover disabled:bg-dourado/50 text-petroleo py-3.5 rounded-full font-sans text-xs uppercase tracking-widest transition-all font-semibold active:scale-95 cursor-pointer shadow-lg shadow-dourado/10"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-petroleo border-t-transparent rounded-full animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Enviar & Agendar via WhatsApp
                        </>
                      )}
                    </button>
                    <span className="block text-center text-[10px] text-salvia mt-3">
                      * Seus dados serão pré-processados e transferidos com segurança ao WhatsApp comercial.
                    </span>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-dourado/25 border border-dourado rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="text-dourado" size={32} />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-marfim font-bold">Solicitação Pré-agendada!</h4>
                    <p className="font-sans text-xs md:text-sm text-salvia mt-2 max-w-sm mx-auto">
                      Perfeito, {name}! Suas informações foram formatadas com sucesso. Estamos abrindo o seu WhatsApp para concluir o atendimento.
                    </p>
                  </div>
                  <div className="w-8 h-8 border-2 border-dourado border-t-transparent rounded-full animate-spin mx-auto mt-4" />
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-sans uppercase tracking-widest text-dourado underline hover:text-marfim mt-6"
                  >
                    Voltar para o formulário
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
