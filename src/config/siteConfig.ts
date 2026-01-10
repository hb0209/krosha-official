export interface Banner {
  id: string;
  text: string;
  active: boolean;
  type: 'offer' | 'trending' | 'announcement';
  bgColor?: string;
}

export interface ContactInfo {
  whatsapp: string;
  phone: string;
  email: string;
  instagram?: string;
  address?: string;
}

export const banners: Banner[] = [
  {
    id: 'b001',
    text: "Valentine's Special: 15% OFF on all Flower Bouquets 💐 Use code: LOVE2026",
    active: false,
    type: 'offer',
    bgColor: 'bg-pink-600',
  },
  {
    id: 'b002',
    text: '🔥 Trending Now: Mini Animal Keychains - Perfect Gift for Kids!',
    active: true,
    type: 'trending',
    bgColor: 'bg-purple-600',
  },
  {
    id: 'b003',
    text: '✨ New Arrivals: Luxe Collection - Handcrafted with Premium Yarn',
    active: false,
    type: 'announcement',
    bgColor: 'bg-blue-600',
  },
];

export const contactInfo: ContactInfo = {
  whatsapp: '919315741347',
  phone: '9315741347',
  email: 'executive.krosha@gmail.com',
  instagram: 'krosha.india',
  address: 'Handcrafted with love in India',
};

export const siteInfo = {
  brandName: 'Krosha',
  tagline: 'Handcrafted Crochet Creations',
  description: 'Premium handmade crochet products made with love. From adorable keychains to elegant bouquets, each piece is uniquely crafted for you.',
  logo: '🧶',
};
