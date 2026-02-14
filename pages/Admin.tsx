
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Settings, Plus, Trash2, Edit2, LogOut, Check, X, Layout, FileText, ShoppingBag, CalendarCheck, Image } from 'lucide-react';
import { MenuItem } from '../types';

const Admin: React.FC = () => {
  const {
    isAuthenticated,
    login,
    logout,
    settings,
    updateSettings,
    menu,
    updateMenu,
    bookings
  } = useAppContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'settings' | 'menu' | 'bookings'>('settings');
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(email, password)) {
      alert('Credenciais incorretas!');
    }
  };

  const handleDeleteItem = (id: string) => {
    if (confirm('Tem a certeza que deseja apagar este prato?')) {
      updateMenu(menu.filter(item => item.id !== id));
    }
  };

  const handleSaveItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const item: MenuItem = {
      id: editingItem ? editingItem.id : Date.now().toString(),
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: formData.get('price') as string,
      category: formData.get('category') as any,
      image: formData.get('image') as string || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    };

    if (editingItem) {
      updateMenu(menu.map(m => m.id === editingItem.id ? item : m));
    } else {
      updateMenu([...menu, item]);
    }
    setEditingItem(null);
    setIsAdding(false);
  };

  const handleUpdateSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updateSettings({
      ...settings,
      heroTitle: formData.get('heroTitle') as string,
      heroSubtitle: formData.get('heroSubtitle') as string,
      aboutText: formData.get('aboutText') as string,
      address: formData.get('address') as string,
      phone: formData.get('phone') as string,
      whatsapp: formData.get('whatsapp') as string,
      logoUrl: formData.get('logoUrl') as string,
    });
    alert('Definições atualizadas!');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-6">
        <div className="max-w-md w-full bg-[#0a0a0a] border border-white/5 p-12 rounded-sm shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif font-bold mb-2">Painel de Controlo</h1>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Acesso Restrito</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">E-mail</label>
              <input
                type="email"
                className="w-full bg-black border border-white/10 px-4 py-4 focus:outline-none focus:border-yellow-600 transition-colors text-sm"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Palavra-passe</label>
              <input
                type="password"
                className="w-full bg-black border border-white/10 px-4 py-4 focus:outline-none focus:border-yellow-600 transition-colors text-sm"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full py-4 bg-yellow-600 text-white font-bold uppercase tracking-widest hover:bg-yellow-700 transition-all rounded-sm shadow-xl">
              Entrar
            </button>
            <div className="pt-6 text-center text-[10px] text-gray-600 uppercase tracking-widest">
              Demo: braulio@gmail.com / vendas
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-4">
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-sm mb-6">
              <h2 className="text-xl font-serif font-bold mb-4 uppercase tracking-widest">Admin</h2>
              <p className="text-gray-500 text-xs mb-8">Logado como braulio@gmail.com</p>
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm uppercase tracking-widest transition-all ${activeTab === 'settings' ? 'bg-yellow-600 text-white' : 'hover:bg-white/5 text-gray-400'}`}
                >
                  <Layout size={18} /> Conteúdo do Site
                </button>
                <button
                  onClick={() => setActiveTab('menu')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm uppercase tracking-widest transition-all ${activeTab === 'menu' ? 'bg-yellow-600 text-white' : 'hover:bg-white/5 text-gray-400'}`}
                >
                  <ShoppingBag size={18} /> Gerir Menu
                </button>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm uppercase tracking-widest transition-all ${activeTab === 'bookings' ? 'bg-yellow-600 text-white' : 'hover:bg-white/5 text-gray-400'}`}
                >
                  <CalendarCheck size={18} /> Reservas ({bookings.length})
                </button>
              </nav>
              <button
                onClick={logout}
                className="mt-12 flex items-center gap-2 text-red-500 text-xs uppercase tracking-[0.2em] font-bold hover:text-red-400 transition-colors"
              >
                <LogOut size={16} /> Terminar Sessão
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {activeTab === 'settings' && (
              <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-sm">
                <h3 className="text-2xl font-serif font-bold mb-8 uppercase tracking-widest flex items-center gap-3">
                  <FileText size={24} className="text-yellow-600" /> Editar Conteúdo Principal
                </h3>
                <form onSubmit={handleUpdateSettings} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                      <Image size={14} /> URL do Logo
                    </label>
                    <input name="logoUrl" defaultValue={settings.logoUrl} placeholder="https://exemplo.com/logo.png" className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                    <p className="text-[10px] text-gray-500 italic">Cole aqui o link da imagem do seu logo. Recomendamos uma imagem com fundo transparente (PNG).</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Título Hero</label>
                      <input name="heroTitle" defaultValue={settings.heroTitle} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Subtítulo Hero</label>
                      <input name="heroSubtitle" defaultValue={settings.heroSubtitle} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Sobre o Restaurante</label>
                    <textarea name="aboutText" rows={4} defaultValue={settings.aboutText} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Endereço</label>
                      <input name="address" defaultValue={settings.address} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Telefone</label>
                      <input name="phone" defaultValue={settings.phone} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">WhatsApp</label>
                      <input name="whatsapp" defaultValue={settings.whatsapp} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                    </div>
                  </div>
                  <button type="submit" className="px-8 py-4 bg-yellow-600 text-white font-bold uppercase tracking-widest hover:bg-yellow-700 transition-all">
                    Guardar Alterações
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'menu' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-serif font-bold uppercase tracking-widest">Gestão do Menu</h3>
                  <button
                    onClick={() => { setIsAdding(true); setEditingItem(null); }}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white text-xs uppercase font-bold tracking-widest rounded-sm hover:bg-green-700 transition-all"
                  >
                    <Plus size={16} /> Adicionar Prato
                  </button>
                </div>

                {(isAdding || editingItem) && (
                  <div className="bg-[#0a0a0a] border-2 border-yellow-600/30 p-10 rounded-sm mb-12 shadow-2xl">
                    <div className="flex justify-between items-center mb-8">
                      <h4 className="text-xl font-bold uppercase tracking-widest">{editingItem ? 'Editar Prato' : 'Novo Prato'}</h4>
                      <button onClick={() => { setIsAdding(false); setEditingItem(null); }} className="text-gray-500 hover:text-white"><X size={24}/></button>
                    </div>
                    <form onSubmit={handleSaveItem} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Nome do Prato</label>
                          <input required name="name" defaultValue={editingItem?.name} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Preço (ex: 12.000 Kz)</label>
                          <input required name="price" defaultValue={editingItem?.price} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Categoria</label>
                          <select name="category" defaultValue={editingItem?.category || 'Pratos Principais'} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none">
                            <option value="Entradas">Entradas</option>
                            <option value="Pratos Principais">Pratos Principais</option>
                            <option value="Sobremesas">Sobremesas</option>
                            <option value="Bebidas">Bebidas</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">URL da Imagem</label>
                          <input name="image" defaultValue={editingItem?.image} placeholder="Ex: https://..." className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                          <p className="text-[10px] text-gray-500 italic">Dica: No Google Imagens, clique com o botão direito e escolha "Copiar endereço da imagem" para que funcione corretamente.</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Descrição</label>
                        <textarea required name="description" rows={3} defaultValue={editingItem?.description} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-yellow-600 focus:outline-none" />
                      </div>
                      <button type="submit" className="w-full py-5 bg-green-600 text-white font-bold uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl">
                        {editingItem ? 'Guardar Alterações' : 'Adicionar ao Menu'}
                      </button>
                    </form>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menu.map(item => (
                    <div key={item.id} className="bg-[#0a0a0a] border border-white/5 p-6 rounded-sm flex gap-6 items-center group">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        referrerPolicy="no-referrer"
                        className="w-24 h-24 object-cover rounded-sm shadow-lg border border-white/5" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-lg truncate mb-1">{item.name}</h4>
                        <p className="text-yellow-600 text-sm font-bold mb-1">{item.price}</p>
                        <span className="text-[10px] uppercase font-bold text-gray-600 tracking-widest">{item.category}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => setEditingItem(item)} className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-full transition-colors"><Edit2 size={18} /></button>
                        <button onClick={() => handleDeleteItem(item.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-full transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-sm">
                <h3 className="text-2xl font-serif font-bold mb-8 uppercase tracking-widest">Reservas Efetuadas</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-gray-500">
                        <th className="py-4">Cliente</th>
                        <th className="py-4">Data/Hora</th>
                        <th className="py-4">Pessoas</th>
                        <th className="py-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {bookings.length > 0 ? (
                        bookings.map(booking => (
                          <tr key={booking.id} className="text-sm">
                            <td className="py-6">
                              <p className="font-bold">{booking.name}</p>
                              <p className="text-xs text-gray-500">{booking.phone}</p>
                            </td>
                            <td className="py-6 italic">
                              {booking.date} às {booking.time}
                            </td>
                            <td className="py-6">{booking.guests} Pessoas</td>
                            <td className="py-6 text-right">
                              <span className="px-3 py-1 bg-yellow-600/10 text-yellow-600 text-[10px] uppercase font-bold rounded-full border border-yellow-600/20">
                                {booking.status === 'pending' ? 'Pendente' : booking.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="py-20 text-center text-gray-600 uppercase tracking-widest italic">Nenhuma reserva encontrada.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
