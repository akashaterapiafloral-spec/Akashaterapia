import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Clock, X, ArrowRight, MessageSquare, Check } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';
import LucideIcon from './LucideIcon';

interface ServicesProps {
  onScheduleService: (serviceName: string) => void;
}

export default function Services({ onScheduleService }: ServicesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'autoconhecimento', name: 'Autoconhecimento' },
    { id: 'harmonizacao', name: 'Harmonização' },
    { id: 'prosperidade', name: 'Prosperidade' },
    { id: 'ambientes-e-pets', name: 'Ambientes & Pets' },
  ];

  // Filtering logic
  const filteredServices = SERVICES.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'todos' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'autoconhecimento':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'harmonizacao':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'prosperidade':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'ambientes-e-pets':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'autoconhecimento': return 'Autoconhecimento';
      case 'harmonizacao': return 'Harmonização';
      case 'prosperidade': return 'Prosperidade';
      case 'ambientes-e-pets': return 'Ambientes & Pets';
      default: return category;
    }
  };

  const handleWhatsAppBooking = (serviceName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar o atendimento para o serviço "${serviceName}" na Akashaterapia.`);
    window.open(`https://wa.me/5511977676821?text=${message}`, '_blank');
  };

  return (
    <section id="servicos" className="py-24 bg-bege/10 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full border border-dourado/5 pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] rounded-full border border-dourado/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-dourado font-semibold block mb-3">CONHEÇA NOSSAS TERAPIAS</span>
          <h2 className="font-serif text-3xl md:text-5xl text-petroleo tracking-tight">
            Menu de Harmonização <span className="italic font-light text-dourado">Integrada</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-petroleo/75 mt-4 max-w-xl mx-auto">
            Escolha a terapia vibracional que mais se conecta ao seu momento de vida atual e permita-se reestabelecer seu fluxo natural.
          </p>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        {/* Search & Categories Bar */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between">
          
          {/* Categories Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-widest transition-all whitespace-nowrap border ${
                  selectedCategory === cat.id
                    ? 'bg-petroleo text-marfim border-petroleo'
                    : 'bg-marfim text-petroleo border-dourado/20 hover:border-dourado hover:bg-bege/30'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-salvia">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Buscar serviço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-marfim border border-dourado/20 text-petroleo rounded-full py-2.5 pl-11 pr-4 text-xs font-sans focus:outline-none focus:border-dourado focus:ring-1 focus:ring-dourado placeholder:text-salvia/60 transition-all"
            />
          </div>

        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                key={service.id}
                className="bg-marfim border border-dourado/10 rounded-2xl p-8 hover:shadow-xl hover:border-dourado/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-xl bg-bege/30 flex items-center justify-center mb-6 text-petroleo group-hover:bg-petroleo group-hover:text-marfim transition-colors duration-300">
                    <LucideIcon name={service.iconName} className="group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>

                  {/* Category Badge */}
                  <span className={`inline-block text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full border mb-4 font-sans ${getCategoryBadgeColor(service.category)}`}>
                    {getCategoryLabel(service.category)}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl text-petroleo mb-3 font-semibold group-hover:text-dourado transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="font-sans text-xs md:text-sm text-petroleo/75 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-dourado/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider text-dourado hover:text-petroleo font-semibold transition-colors group/btn"
                  >
                    Saiba Mais
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-marfim rounded-2xl border border-dashed border-dourado/20 max-w-md mx-auto">
            <p className="font-sans text-sm text-salvia">Nenhuma terapia encontrada com esses termos.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('todos'); }}
              className="mt-4 text-xs font-semibold text-dourado uppercase tracking-wider underline hover:text-petroleo"
            >
              Limpar filtros
            </button>
          </div>
        )}

      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalService(null)}
              className="absolute inset-0 bg-petroleo-dark"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-marfim border border-dourado/30 rounded-2xl shadow-2xl relative max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-6 right-6 text-salvia hover:text-petroleo p-1 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              {/* Header Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-petroleo flex items-center justify-center text-marfim">
                  <LucideIcon name={activeModalService.iconName} size={28} />
                </div>
                <div>
                  <span className={`inline-block text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full border mb-1.5 font-sans ${getCategoryBadgeColor(activeModalService.category)}`}>
                    {getCategoryLabel(activeModalService.category)}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-petroleo font-bold">
                    {activeModalService.title}
                  </h3>
                </div>
              </div>

              {/* Long Content */}
              <div className="space-y-4 mb-8">
                <h4 className="font-sans text-xs uppercase tracking-widest text-dourado font-bold">Como funciona</h4>
                <p className="font-sans text-sm md:text-base text-petroleo/80 leading-relaxed whitespace-pre-line">
                  {activeModalService.fullDescription}
                </p>
                
                {/* Deliverables/Duration */}
                {activeModalService.duration && (
                  <div className="mt-6 p-4 bg-bege/30 rounded-xl border border-dourado/10 flex items-center gap-3">
                    <Clock size={18} className="text-dourado shrink-0" />
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-salvia">Formato / Entrega</p>
                      <p className="font-sans text-xs md:text-sm text-petroleo font-medium">{activeModalService.duration}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-end pt-6 border-t border-dourado/10">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-6 py-3 border border-petroleo/20 hover:border-petroleo text-petroleo rounded-full font-sans text-xs uppercase tracking-widest transition-all text-center"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    handleWhatsAppBooking(activeModalService.title);
                    setActiveModalService(null);
                  }}
                  className="flex items-center justify-center gap-2 bg-dourado hover:bg-dourado-hover text-petroleo px-6 py-3 rounded-full font-sans text-xs uppercase tracking-widest transition-all font-semibold"
                >
                  <MessageSquare size={14} />
                  Agendar via WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
