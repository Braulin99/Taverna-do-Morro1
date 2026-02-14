
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';
import { useAppContext } from '../context/AppContext';

const Reviews: React.FC = () => {
  const { settings } = useAppContext();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-yellow-600 uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Feedback</span>
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8">A Opinião dos Nossos Clientes</h1>
          <div className="w-32 h-px bg-yellow-600 mx-auto mb-10"></div>
          
          <div className="bg-[#0a0a0a] p-10 border border-white/5 rounded-sm inline-flex items-center gap-12">
            <div>
               <p className="text-6xl font-serif font-bold text-yellow-600 mb-2">{settings.rating}</p>
               <div className="flex gap-1 text-yellow-500">
                 {[...Array(4)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                 <Star size={20} className="opacity-40" />
               </div>
            </div>
            <div className="h-20 w-px bg-white/10"></div>
            <div className="text-left">
              <p className="text-xl font-bold uppercase tracking-widest">{settings.reviewCount} Críticas</p>
              <p className="text-gray-500 text-sm">Baseado nas últimas recomendações</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REVIEWS.map((review, idx) => (
            <div key={review.id} className={`bg-[#0a0a0a] p-12 border border-white/5 rounded-sm relative group hover:border-yellow-600/30 transition-all duration-500 ${idx % 2 === 1 ? 'md:-translate-y-8' : ''}`}>
              <div className="absolute top-8 right-8 text-yellow-600/10 group-hover:text-yellow-600/20 transition-colors">
                <Quote size={64} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 text-yellow-500 mb-8">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed italic mb-10 relative z-10">
                "{review.comment}"
              </p>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-tr from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center text-xl font-bold uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold uppercase tracking-widest">{review.name}</h4>
                  <span className="text-xs text-gray-600">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center p-16 bg-[#0a0a0a] border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
          <h2 className="text-4xl font-serif font-bold mb-8">Partilhe a Sua Experiência</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto italic">A sua opinião ajuda-nos a melhorar continuamente a qualidade do nosso serviço e cozinha.</p>
          <a
            href={`tel:${settings.phone}`}
            className="inline-block px-12 py-5 border-2 border-yellow-600 text-yellow-600 font-bold uppercase tracking-widest hover:bg-yellow-600 hover:text-white transition-all rounded-sm"
          >
            Deixar Comentário
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
