
import { MenuItem, SiteSettings, Review } from './types';

// Usando um logo placeholder que contrasta bem com fundo branco (letras pretas)
export const DEFAULT_LOGO = "https://ui-avatars.com/api/?name=Taverna+do+Morro&background=ffffff&color=000000&size=200&font-size=0.35&length=2&rounded=false&bold=true";

export const INITIAL_SETTINGS: SiteSettings = {
  heroTitle: "Taverna do Morro",
  heroSubtitle: "Onde a tradição encontra o requinte em cada detalhe.",
  aboutText: "Situada no coração de Luanda, a Taverna do Morro oferece uma experiência gastronómica única, combinando sabores tradicionais com um toque de modernidade. Nosso compromisso é com a excelência, desde a escolha dos ingredientes até ao serviço impecável.",
  address: "Av. 21 de Janeiro 230, Luanda",
  phone: "931 083 296",
  whatsapp: "931083296",
  openingHours: "Segunda a Domingo: 12:00 – 16:30",
  rating: "4.1",
  reviewCount: "733",
  logoUrl: DEFAULT_LOGO,
};

export const INITIAL_MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Lagosta Grelhada',
    description: 'Lagosta fresca da costa angolana, grelhada com manteiga de ervas e alho.',
    price: '18.500 Kz',
    category: 'Pratos Principais',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Carpaccio de Novilho',
    description: 'Finas fatias de novilho, rúcula, lascas de parmesão e redução de balsâmico.',
    price: '6.200 Kz',
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Arroz de Marisco Premium',
    description: 'Arroz caldoso com uma seleção dos melhores mariscos do dia.',
    price: '14.800 Kz',
    category: 'Pratos Principais',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Petit Gâteau de Chocolate',
    description: 'Bolo de chocolate quente com recheio cremoso e gelado de baunilha.',
    price: '4.500 Kz',
    category: 'Sobremesas',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Emanuel Daniel',
    rating: 5,
    comment: 'Ambiente fantástico e comida de extrema qualidade. O atendimento é verdadeiramente profissional.',
    date: 'Há 2 meses'
  },
  {
    id: '2',
    name: 'Del Jeffery',
    rating: 4,
    comment: 'A lagosta estava perfeita. Um dos melhores lugares para comer em Luanda.',
    date: 'Há 1 mês'
  },
  {
    id: '3',
    name: 'ODD MU',
    rating: 4,
    comment: 'Ótima experiência. Recomendo vivamente o arroz de marisco.',
    date: 'Há 3 semanas'
  }
];
