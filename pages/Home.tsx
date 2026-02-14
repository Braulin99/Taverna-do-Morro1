
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, MapPin, Phone } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { REVIEWS } from '../constants';

const Home: React.FC = () => {
  const { settings, menu } = useAppContext();
  const featuredItems = menu.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
            alt="Hero Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-[zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/20 backdrop-blur-sm border border-yellow-600/30 rounded-full mb-8 animate-fade-in">
             <Star size={14} className="text-yellow-500" fill="currentColor" />
             <span className="text-xs uppercase tracking-widest text-yellow-500 font-bold">
               {settings.rating} / 5 Avaliação ({settings.reviewCount} Críticas)
             </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 tracking-tight leading-none animate-[slide-up_1s_ease-out]">
            {settings.heroTitle}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light mb-12 animate-[slide-up_1.2s_ease-out]">
            {settings.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-[slide-up_1.4s_ease-out]">
            <Link to="/menu" className="w-full sm:w-auto px-10 py-5 bg-yellow-600 text-white font-bold uppercase tracking-widest hover:bg-yellow-700 transition-all transform hover:-translate-y-1 rounded-sm">
              Descobrir Menu
            </Link>
            <Link to="/reservas" className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/20 transition-all transform hover:-translate-y-1 rounded-sm">
              Reservar Mesa
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 border border-yellow-600/20 rounded-lg group-hover:border-yellow-600/40 transition-colors"></div>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
                alt="Restaurant Atmosphere"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8">
            <span className="text-yellow-600 uppercase tracking-[0.3em] font-bold text-sm">O Restaurante</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">Uma Atmosfera de <br/> Elegância e Conforto</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light italic">
              "{settings.aboutText}"
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-3xl font-serif font-bold text-yellow-600 mb-2">15+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Anos de História</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-yellow-600 mb-2">20k+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Clientes Felizes</p>
              </div>
            </div>
            <Link to="/contacto" className="mt-4 flex items-center gap-2 text-yellow-500 uppercase tracking-widest font-bold text-sm hover:gap-4 transition-all">
              Visite-nos hoje <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-yellow-600 uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Especialidades</span>
          <h2 className="text-5xl font-serif font-bold mb-4">Destaques da Cozinha</h2>
          <div className="w-24 h-px bg-yellow-600 mx-auto"></div>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden bg-black/40 border border-white/5 hover:border-yellow-600/30 transition-all duration-500 rounded-sm">
              <div className="h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold">{item.name}</h3>
                  <span className="text-yellow-500 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 italic">{item.description}</p>
                <Link to="/menu" className="text-xs uppercase tracking-widest border-b border-yellow-600 pb-1 hover:text-yellow-500 transition-colors">Ver Detalhes</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/menu" className="px-10 py-4 border border-yellow-600 text-yellow-600 uppercase tracking-widest font-bold text-sm hover:bg-yellow-600 hover:text-white transition-all">
            Ver Menu Completo
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <div className="text-left">
                <span className="text-yellow-600 uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Experiências</span>
                <h2 className="text-5xl font-serif font-bold">O Que Dizem Nossos Clientes</h2>
              </div>
              <Link to="/avaliacoes" className="text-yellow-500 font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                Ler Todas <ArrowRight size={18} />
              </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {REVIEWS.map((review) => (
               <div key={review.id} className="p-10 bg-[#0a0a0a] border border-white/5 rounded-sm relative group">
                 <div className="flex gap-1 text-yellow-500 mb-6">
                   {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-gray-400 italic mb-8 relative z-10">"{review.comment}"</p>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-yellow-600/20 rounded-full flex items-center justify-center text-yellow-600 font-bold uppercase">
                     {review.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold text-white text-sm uppercase tracking-wider">{review.name}</h4>
                     <span className="text-xs text-gray-600">{review.date}</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-yellow-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Interessado numa mesa para esta noite?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex items-center gap-4">
              <Phone className="w-10 h-10" />
              <div className="text-left">
                <p className="text-xs uppercase font-bold tracking-widest opacity-80">Ligue agora</p>
                <p className="text-2xl font-bold">{settings.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-10 h-10" />
              <div className="text-left">
                <p className="text-xs uppercase font-bold tracking-widest opacity-80">Onde estamos</p>
                <p className="text-2xl font-bold">Av. 21 de Janeiro 230</p>
              </div>
            </div>
          </div>
          <Link to="/reservas" className="mt-12 inline-block px-12 py-5 bg-white text-yellow-600 font-bold uppercase tracking-widest rounded-sm hover:bg-black hover:text-white transition-all shadow-xl">
            Fazer Reserva Online
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
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

export default Home;
