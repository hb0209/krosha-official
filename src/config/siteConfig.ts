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
    text: '✨ New Collection: Handcrafted Crochet Bags - Limited Edition Designs',
    active: true,
    type: 'announcement',
    bgColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
  },
  {
    id: 'b002',
    text: '🔥 Trending: Granny Square Tote Bags - Perfect for Every Occasion',
    active: false,
    type: 'trending',
    bgColor: 'bg-gradient-to-r from-teal-600 to-blue-600',
  },
  {
    id: 'b003',
    text: '💼 Premium Quality: Each Bag Handcrafted with Love & Premium Yarn',
    active: false,
    type: 'announcement',
    bgColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
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
  tagline: 'Handcrafted Crochet Bags',
  description: 'Premium handmade crochet bags crafted with love. Each unique piece combines artistry and functionality, perfect for your everyday style.',
  logo: '👜',
};
