
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Entradas' | 'Pratos Principais' | 'Sobremesas' | 'Bebidas';
  image: string;
}

export interface SiteSettings {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  address: string;
  phone: string;
  whatsapp: string;
  openingHours: string;
  rating: string;
  reviewCount: string;
  logoUrl: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}
