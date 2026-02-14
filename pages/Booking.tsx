
import React, { useState } from 'react';
import { Calendar, Users, Clock, Phone, User, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Booking: React.FC = () => {
  const { addBooking } = useAppContext();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending' as const
    };
    addBooking(newBooking);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-6">
        <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
          <div className="flex justify-center">
            <CheckCircle2 size={80} className="text-yellow-600" />
          </div>
          <h2 className="text-5xl font-serif font-bold">Reserva Solicitada!</h2>
          <p className="text-gray-400 text-lg">
            Obrigado, {formData.name}. Recebemos o seu pedido de reserva para o dia {formData.date} às {formData.time}. Entraremos em contacto brevemente para confirmar.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full py-4 bg-yellow-600 text-white font-bold uppercase tracking-widest rounded-sm"
          >
            Fazer outra Reserva
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1920" alt="bg" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-600 uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Experiência</span>
            <h1 className="text-6xl font-serif font-bold mb-6 tracking-tight">Agende a Sua Mesa</h1>
            <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">Garante o seu lugar no restaurante mais exclusivo de Luanda. Experiência gastronómica de nível mundial.</p>
          </div>

          <div className="bg-[#0a0a0a] p-8 md:p-16 border border-white/5 rounded-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <User size={16} />
                    <label className="text-xs uppercase tracking-widest font-bold">Nome Completo</label>
                  </div>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black border-b border-white/10 focus:border-yellow-600 transition-colors py-4 text-white focus:outline-none"
                    placeholder="Introduza o seu nome"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Phone size={16} />
                    <label className="text-xs uppercase tracking-widest font-bold">Telemóvel</label>
                  </div>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black border-b border-white/10 focus:border-yellow-600 transition-colors py-4 text-white focus:outline-none"
                    placeholder="9XX XXX XXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Calendar size={16} />
                    <label className="text-xs uppercase tracking-widest font-bold">Data</label>
                  </div>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-black border-b border-white/10 focus:border-yellow-600 transition-colors py-4 text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Clock size={16} />
                    <label className="text-xs uppercase tracking-widest font-bold">Hora</label>
                  </div>
                  <input
                    required
                    type="time"
                    min="12:00"
                    max="16:30"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-black border-b border-white/10 focus:border-yellow-600 transition-colors py-4 text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <Users size={16} />
                    <label className="text-xs uppercase tracking-widest font-bold">Pessoas</label>
                  </div>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}
                    className="w-full bg-black border-b border-white/10 focus:border-yellow-600 transition-colors py-4 text-white focus:outline-none"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n} className="bg-black text-white">{n} {n === 1 ? 'Pessoa' : 'Pessoas'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-8">
                <button type="submit" className="w-full py-6 bg-yellow-600 text-white text-sm uppercase font-bold tracking-[0.3em] hover:bg-yellow-700 transition-all rounded-sm shadow-2xl transform hover:-translate-y-1">
                  Confirmar Pedido de Reserva
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 text-center text-sm text-gray-500 italic">
            * Para reservas superiores a 10 pessoas, por favor contacte-nos directamente por telefone.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
