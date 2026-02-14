
import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, SiteSettings, Booking } from '../types';
import { INITIAL_MENU, INITIAL_SETTINGS } from '../constants';

interface AppContextType {
  settings: SiteSettings;
  menu: MenuItem[];
  bookings: Booking[];
  isAuthenticated: boolean;
  updateSettings: (newSettings: SiteSettings) => void;
  updateMenu: (newMenu: MenuItem[]) => void;
  addBooking: (booking: Booking) => void;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('taverna_settings');
    // Mescla as configurações salvas com as iniciais para garantir que novos campos (como logoUrl) existam
    return saved ? { ...INITIAL_SETTINGS, ...JSON.parse(saved) } : INITIAL_SETTINGS;
  });

  const [menu, setMenu] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('taverna_menu_v2');
    return saved ? JSON.parse(saved) : INITIAL_MENU;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('taverna_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('taverna_auth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('taverna_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('taverna_menu_v2', JSON.stringify(menu));
  }, [menu]);

  useEffect(() => {
    localStorage.setItem('taverna_bookings', JSON.stringify(bookings));
  }, [bookings]);

  const updateSettings = (newSettings: SiteSettings) => setSettings(newSettings);
  const updateMenu = (newMenu: MenuItem[]) => setMenu(newMenu);
  const addBooking = (booking: Booking) => setBookings([...bookings, booking]);

  const login = (email: string, pass: string) => {
    if (email === 'braulio@gmail.com' && pass === 'vendas') {
      setIsAuthenticated(true);
      localStorage.setItem('taverna_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('taverna_auth');
  };

  return (
    <AppContext.Provider value={{
      settings,
      menu,
      bookings,
      isAuthenticated,
      updateSettings,
      updateMenu,
      addBooking,
      login,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
