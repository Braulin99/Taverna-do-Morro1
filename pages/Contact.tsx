
import React from 'react';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Contact: React.FC = () => {
  const { settings } = useAppContext();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${settings.whatsapp}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${settings.phone}`;
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-yellow-600 uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Contacto</span>
          <h1 className="text-6xl font-serif font-bold mb-8">Onde Estamos</h1>
          <div className="w-32 h-px bg-yellow-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-sm flex flex-col items-center text-center group hover:border-yellow-600/30 transition-all">
                <div className="w-12 h-12 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Localização</h3>
                <p className="text-gray-400 text-sm italic">{settings.address}<br/>Luanda, Angola</p>
              </div>

              <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-sm flex flex-col items-center text-center group hover:border-yellow-600/30 transition-all">
                <div className="w-12 h-12 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Telefone</h3>
                <p className="text-gray-400 text-sm">{settings.phone}</p>
                <button onClick={handleCall} className="mt-4 text-xs font-bold text-yellow-600 uppercase hover:underline">Ligar Agora</button>
              </div>

              <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-sm flex flex-col items-center text-center group hover:border-yellow-600/30 transition-all">
                <div className="w-12 h-12 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Horário</h3>
                <p className="text-gray-400 text-sm">{settings.openingHours}</p>
              </div>

              <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-sm flex flex-col items-center text-center group hover:border-yellow-600/30 transition-all">
                <div className="w-12 h-12 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-all">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Redes Sociais</h3>
                <button onClick={handleWhatsApp} className="mt-2 px-6 py-2 bg-green-600/10 text-green-500 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-green-600 hover:text-white transition-all">
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="relative h-96 w-full rounded-sm overflow-hidden border border-white/5">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.123456789!2d13.234567!3d-8.890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f23456789%3A0x123456789abc!2sAv.%2021%20de%20Janeiro%20230%2C%20Luanda!5e0!3m2!1spt-PT!2sao!4v1234567890123"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#0a0a0a] p-10 md:p-16 border border-white/5 rounded-sm shadow-2xl">
            <h3 className="text-3xl font-serif font-bold mb-8 text-center uppercase tracking-widest">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => {e.preventDefault(); alert('Mensagem enviada com sucesso!');}}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Nome</label>
                  <input type="text" className="w-full bg-black border border-white/10 px-4 py-4 focus:outline-none focus:border-yellow-600 transition-colors" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">E-mail</label>
                  <input type="email" className="w-full bg-black border border-white/10 px-4 py-4 focus:outline-none focus:border-yellow-600 transition-colors" placeholder="seu@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Assunto</label>
                <input type="text" className="w-full bg-black border border-white/10 px-4 py-4 focus:outline-none focus:border-yellow-600 transition-colors" placeholder="Como podemos ajudar?" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Mensagem</label>
                <textarea rows={6} className="w-full bg-black border border-white/10 px-4 py-4 focus:outline-none focus:border-yellow-600 transition-colors" placeholder="Escreva sua mensagem aqui..." required></textarea>
              </div>
              <button className="w-full py-5 bg-yellow-600 text-white font-bold uppercase tracking-[0.2em] hover:bg-yellow-700 transition-all rounded-sm shadow-xl">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
