
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Menu: React.FC = () => {
  const { menu } = useAppContext();
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Entradas', 'Pratos Principais', 'Sobremesas', 'Bebidas'];

  const filteredMenu = activeCategory === 'Todos'
    ? menu
    : menu.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-20">
        <span className="text-yellow-600 uppercase tracking-[0.3em] font-bold text-sm mb-4 block animate-fade-in">Gastronomia</span>
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8 animate-[slide-up_0.8s_ease-out]">O Nosso Menu</h1>
        <div className="w-32 h-px bg-yellow-600 mx-auto mb-12"></div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-widest transition-all pb-2 border-b-2 ${activeCategory === cat ? 'text-yellow-500 border-yellow-500 font-bold' : 'text-gray-500 border-transparent hover:text-gray-300'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <div key={item.id} className="group bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-yellow-600/30">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'; // Fallback image
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-yellow-600 font-bold">{item.category}</span>
                  <span className="text-yellow-500 font-bold">{item.price}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-yellow-500 transition-colors">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed italic line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500 uppercase tracking-widest">
            Não foram encontrados pratos nesta categoria.
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 mt-20 p-10 bg-[#0a0a0a] border border-white/5 text-center">
         <p className="text-gray-400 italic mb-6">Todos os nossos ingredientes são selecionados criteriosamente para garantir a máxima frescura.</p>
         <p className="text-sm text-yellow-600 font-bold uppercase tracking-widest">Peça também para Take-away pelo nosso telefone.</p>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Menu;
