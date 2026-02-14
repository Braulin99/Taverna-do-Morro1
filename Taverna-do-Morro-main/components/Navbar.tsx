
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { settings } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservas', path: '/reservas' },
    { name: 'Avaliações', path: '/avaliacoes' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isOpen ? 'bg-black/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          {/* Container do Logo com fundo BRANCO para contraste máximo */}
          <div className="relative bg-white p-2 rounded-md shadow-lg group-hover:scale-105 transition-transform duration-300">
             <img 
              src={settings.logoUrl} 
              alt="Taverna do Morro" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                   target.parentElement.innerHTML = '<div class="h-12 w-12 flex items-center justify-center font-serif font-bold text-black text-xs text-center leading-tight">TM</div>';
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif font-bold tracking-tight text-white group-hover:text-yellow-500 transition-colors uppercase leading-none">
              Taverna do Morro
            </span>
            <div className="flex items-center gap-1 text-[10px] text-yellow-500 mt-1 uppercase tracking-widest pl-0.5">
               <Star size={10} fill="currentColor" />
               <span className="font-bold">{settings.rating} ({settings.reviewCount} críticas)</span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative group/link ${location.pathname === link.path ? 'text-yellow-500 font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-yellow-600 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
            </Link>
          ))}
          <Link
            to="/admin"
            className="px-6 py-2 border border-yellow-600/50 text-yellow-500 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-yellow-600 hover:text-white transition-all rounded-sm"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white focus:outline-none p-2 rounded-full hover:bg-white/5 transition-colors">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-2xl transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[100vh] border-t border-white/10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-10 gap-8 items-center h-screen justify-start pt-20">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-serif uppercase tracking-[0.3em] transition-all duration-300 ${location.pathname === link.path ? 'text-yellow-500 font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs text-center px-8 py-4 bg-yellow-600 text-white text-xs uppercase font-bold tracking-[0.2em] rounded-sm shadow-xl"
          >
            Painel Administrativo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
