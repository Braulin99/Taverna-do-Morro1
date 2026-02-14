
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Footer: React.FC = () => {
  const { settings } = useAppContext();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 group">
             {/* Container do Logo com fundo BRANCO */}
            <div className="bg-white p-2 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              <img 
                src={settings.logoUrl} 
                alt="Taverna do Morro" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.style.display = 'none';
                   if (target.parentElement) {
                      target.parentElement.innerHTML = '<div class="h-16 w-16 flex items-center justify-center font-serif font-bold text-black text-sm text-center">TM</div>';
                   }
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white uppercase tracking-wider leading-none mb-1">Taverna</h3>
              <h3 className="text-xl font-serif font-bold text-yellow-600 uppercase tracking-wider leading-none">do Morro</h3>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed italic font-light">
            "Uma herança de sabor e tradição no coração de Luanda. Oferecemos o melhor da gastronomia angolana e internacional num ambiente sofisticado."
          </p>
          <div className="flex gap-5">
            <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"><Instagram size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"><Facebook size={20} /></a>
            <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"><MessageSquare size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600 mb-8">Informações</h4>
          <ul className="flex flex-col gap-6 text-sm text-gray-400">
            <li className="flex items-start gap-4 group">
              <MapPin size={20} className="text-yellow-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-gray-200 transition-colors leading-relaxed">{settings.address}</span>
            </li>
            <li className="flex items-center gap-4 group">
              <Phone size={20} className="text-yellow-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-gray-200 transition-colors">{settings.phone}</span>
            </li>
            <li className="flex items-center gap-4 group">
              <Clock size={20} className="text-yellow-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-gray-200 transition-colors">{settings.openingHours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600 mb-8">Navegação</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-yellow-500 hover:pl-2 transition-all duration-300 flex items-center gap-2"><span>&mdash;</span> Início</Link></li>
            <li><Link to="/menu" className="hover:text-yellow-500 hover:pl-2 transition-all duration-300 flex items-center gap-2"><span>&mdash;</span> O Nosso Menu</Link></li>
            <li><Link to="/reservas" className="hover:text-yellow-500 hover:pl-2 transition-all duration-300 flex items-center gap-2"><span>&mdash;</span> Reservar Mesa</Link></li>
            <li><Link to="/avaliacoes" className="hover:text-yellow-500 hover:pl-2 transition-all duration-300 flex items-center gap-2"><span>&mdash;</span> Avaliações</Link></li>
            <li><Link to="/contacto" className="hover:text-yellow-500 hover:pl-2 transition-all duration-300 flex items-center gap-2"><span>&mdash;</span> Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600 mb-8">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-6 font-light">Subscreva para receber convites para eventos exclusivos e novos pratos.</p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="O seu melhor e-mail"
              className="bg-white/5 border border-white/10 px-5 py-4 rounded-sm text-sm w-full focus:outline-none focus:border-yellow-600 transition-colors"
            />
            <button className="w-full bg-yellow-600 text-white py-4 text-xs uppercase font-bold tracking-[0.2em] hover:bg-yellow-700 transition-all shadow-lg rounded-sm">
              Subscrever
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-600">
        <p>&copy; {new Date().getFullYear()} Taverna do Morro. Luxo e Tradição em Luanda.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-yellow-600 transition-colors">Termos e Condições</a>
          <a href="#" className="hover:text-yellow-600 transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
