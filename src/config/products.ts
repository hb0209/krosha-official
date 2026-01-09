import productImage1 from '../assets/product/product-1.png';
import productImage2 from '../assets/product/product-2.png';
import productImage3 from '../assets/product/product-3.png';
import productImage4 from '../assets/product/product-4.png';

export interface Product {
  id: string;
  name: string;
  code: string;
  categories: string[];
  price: number;
  images: string[];
  rating: number;
  description: string;
  featured?: boolean;
}

export const categories = [
  { id: 'all', name: 'All Products', icon: '🧶' },
  { id: 'small', name: 'Small Items', icon: '🎀' },
  { id: 'premium', name: 'Luxe Collection', icon: '✨' },
  { id: 'customizable', name: 'Customizable', icon: '🎨' },
  { id: 'keychains', name: 'Keychains', icon: '🔑' },
  { id: 'bookie', name: 'Bookmarks', icon: '📖' },
  { id: 'flowers', name: 'Flowers', icon: '🌸' },
];

export const products: Product[] = [
  {
    id: 'p001',
    name: 'Adorable Mini Bunny',
    code: 'KR-BUNNY-001',
    categories: ['small', 'keychains'],
    price: 299,
    images: [productImage1],
    rating: 5,
    description: 'Cute handmade crochet bunny perfect as a keychain or desk companion',
    featured: true,
  },
  {
    id: 'p002',
    name: 'Luxe Rose Bouquet',
    code: 'KR-ROSE-002',
    categories: ['premium', 'flowers'],
    price: 1299,
    images: [productImage2],
    rating: 5,
    description: 'Elegant handcrafted rose bouquet that lasts forever',
    featured: true,
  },
  {
    id: 'p003',
    name: 'Custom Name Bookmark',
    code: 'KR-BOOK-003',
    categories: ['bookie', 'customizable'],
    price: 199,
    images: [productImage3],
    rating: 4.5,
    description: 'Personalized crochet bookmark with custom name or initials',
  },
  {
    id: 'p004',
    name: 'Mini Cactus Set',
    code: 'KR-CACT-004',
    categories: ['small', 'premium'],
    price: 599,
    images: [productImage4],
    rating: 5,
    description: 'Set of 3 adorable mini cactus plants that never need watering',
    featured: true,
  },
  {
    id: 'p005',
    name: 'Daisy Chain Keyring',
    code: 'KR-DAISY-005',
    categories: ['keychains', 'flowers', 'small'],
    price: 249,
    images: [productImage1],
    rating: 4.5,
    description: 'Delicate daisy flower keychain in vibrant colors',
  },
  {
    id: 'p006',
    name: 'Premium Amigurumi Bear',
    code: 'KR-BEAR-006',
    categories: ['premium', 'customizable'],
    price: 999,
    images: [productImage2],
    rating: 5,
    description: 'Luxurious handcrafted teddy bear with premium yarn',
  },
  {
    id: 'p007',
    name: 'Floral Bookmark Collection',
    code: 'KR-BOOK-007',
    categories: ['bookie', 'flowers'],
    price: 349,
    images: [productImage3],
    rating: 4.5,
    description: 'Set of 2 beautiful flower-themed bookmarks',
  },
  {
    id: 'p008',
    name: 'Mini Animal Keychains',
    code: 'KR-ANIM-008',
    categories: ['small', 'keychains'],
    price: 199,
    images: [productImage4],
    rating: 5,
    description: 'Cute mini animal keychains - choose your favorite',
  },
  {
    id: 'p009',
    name: 'Sunflower Bouquet',
    code: 'KR-SUN-009',
    categories: ['flowers', 'premium'],
    price: 1099,
    images: [productImage1],
    rating: 5,
    description: 'Bright and cheerful sunflower arrangement',
    featured: true,
  },
  {
    id: 'p010',
    name: 'Custom Pet Portrait',
    code: 'KR-PET-010',
    categories: ['customizable', 'premium'],
    price: 1499,
    images: [productImage2],
    rating: 5,
    description: 'Personalized crochet version of your beloved pet',
  },
  {
    id: 'p011',
    name: 'Rainbow Heart Keychain',
    code: 'KR-HEART-011',
    categories: ['keychains', 'small'],
    price: 179,
    images: [productImage3],
    rating: 4.5,
    description: 'Colorful heart-shaped keychain with rainbow colors',
  },
  {
    id: 'p012',
    name: 'Elegant Tulip Set',
    code: 'KR-TUL-012',
    categories: ['flowers', 'premium', 'customizable'],
    price: 899,
    images: [productImage4],
    rating: 5,
    description: 'Beautiful set of 5 handcrafted tulips in custom colors',
  },
];
