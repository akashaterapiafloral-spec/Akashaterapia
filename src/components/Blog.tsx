import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    'todos',
    'Radiestesia',
    'Radiônica',
    'Prosperidade',
    'Astrologia',
    'Numerologia',
    'Fitoenergética',
    'Bem-estar'
  ];

  const filteredPosts = activeCategory === 'todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Akashaterapia - ${title}`,
        url: window.location.href
      }).catch(console.error);
    } else {
      alert('Link copiado com sucesso para compartilhamento!');
    }
  };

  return (
    <section id="blog" className="py-24 bg-bege/10 relative overflow-hidden">
      {/* Decorative fine gold line geometry */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-dashed border-dourado/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-dourado font-semibold block mb-3">CONSCIÊNCIA & INFORMAÇÃO</span>
          <h2 className="font-serif text-3xl md:text-5xl text-petroleo tracking-tight">
            Diário da <span className="italic font-light text-dourado">Consciência Integrativa</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-petroleo/75 mt-4 max-w-xl mx-auto">
            Explore reflexões profundas, artigos de física sutil, saberes astrológicos e técnicas de fitoenergética para expandir seu bem-estar.
          </p>
          <div className="w-16 h-[1px] bg-dourado mx-auto mt-6" />
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none justify-start lg:justify-center -mx-6 px-6 lg:mx-0 lg:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-sans text-[11px] uppercase tracking-widest transition-all whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-petroleo text-marfim border-petroleo'
                  : 'bg-marfim text-petroleo border-dourado/10 hover:border-dourado hover:bg-bege/30'
              }`}
            >
              {cat === 'todos' ? 'Todos os artigos' : cat}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={post.id}
              className="bg-marfim border border-dourado/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-dourado/30 transition-all duration-300 flex flex-col md:flex-row group"
            >
              {/* Image Frame */}
              <div className="md:w-2/5 relative overflow-hidden aspect-[4/3] md:aspect-auto">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petroleo/40 to-transparent" />
                
                {/* Category Badge over image */}
                <span className="absolute top-4 left-4 bg-marfim/95 backdrop-blur-sm border border-dourado/20 text-petroleo px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-semibold font-sans shadow-md">
                  {post.category}
                </span>
              </div>

              {/* Text Frame */}
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  {/* Meta tags */}
                  <div className="flex items-center gap-4 text-[10px] text-petroleo/70 uppercase tracking-wider font-sans mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-petroleo font-bold mb-3 group-hover:text-dourado transition-colors">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans text-xs md:text-sm text-petroleo/75 leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                {/* Read Button */}
                <button
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider text-dourado hover:text-petroleo font-semibold transition-colors mt-auto group/btn"
                >
                  Ler Artigo Completo
                  <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Post Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-petroleo-dark"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-marfim border border-dourado/30 rounded-3xl shadow-2xl relative max-w-3xl w-full max-h-[85vh] overflow-y-auto z-10"
            >
              {/* Cover Image */}
              <div className="h-64 md:h-80 relative">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marfim via-transparent to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 bg-petroleo/80 backdrop-blur-md text-marfim hover:text-dourado p-2 rounded-full transition-colors"
                  aria-label="Fechar artigo"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content Core */}
              <div className="p-8 md:p-12 -mt-10 relative z-10">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-petroleo/75 uppercase tracking-wider font-sans mb-4">
                  <span className="bg-dourado/10 text-dourado border border-dourado/20 px-3 py-1 rounded-full font-semibold">
                    {selectedPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {selectedPost.readTime}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-serif text-3xl md:text-4xl text-petroleo font-bold mb-8 leading-tight">
                  {selectedPost.title}
                </h3>

                {/* Decorative divide lines */}
                <div className="flex items-center gap-2 text-dourado/40 mb-8">
                  <Sparkles size={16} />
                  <div className="h-[1px] bg-dourado/20 w-full" />
                </div>

                {/* Article Body */}
                <div className="font-sans text-sm md:text-base text-petroleo/85 leading-relaxed space-y-6">
                  {selectedPost.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Share bar */}
                <div className="mt-12 pt-8 border-t border-dourado/10 flex items-center justify-between">
                  <p className="font-serif italic text-xs md:text-sm text-petroleo/70">"Que a expansão da consciência traga sabedoria ao seu caminhar."</p>
                  
                  <button
                    onClick={() => handleShare(selectedPost.title)}
                    className="flex items-center gap-2 text-xs uppercase tracking-wider font-sans font-bold text-dourado hover:text-petroleo transition-colors"
                  >
                    <Share2 size={14} />
                    Compartilhar
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
