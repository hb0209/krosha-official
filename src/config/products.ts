import bagImage1 from '../assets/product/WhatsApp Image 2026-02-04 at 16.22.24.jpeg';
import bagImage2 from '../assets/product/WhatsApp Image 2026-02-04 at 16.22.24 (1).jpeg';
import bagImage3 from '../assets/product/WhatsApp Image 2026-02-04 at 16.22.24 (2).jpeg';
import bagImage4 from '../assets/product/WhatsApp Image 2026-02-04 at 16.22.24 (3).jpeg';
import bagImage5 from '../assets/product/WhatsApp Image 2026-02-04 at 16.22.24 (4).jpeg';
import bagImage6 from '../assets/product/WhatsApp Image 2026-02-04 at 16.22.24 (5).jpeg';
import bagImage7 from '../assets/product/WhatsApp Image 2026-02-04 at 16.22.24 (6).jpeg';
import bagImage8 from '../assets/product/WhatsApp Image 2026-02-08 at 17.36.13.jpeg';

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
  { id: 'all', name: 'All Bags', icon: '👜' },
  { id: 'tote', name: 'Tote Bags', icon: '🛍️' },
  { id: 'circular', name: 'Circular Bags', icon: '⭕' },
  { id: 'granny-square', name: 'Granny Square', icon: '🧶' },
  { id: 'floral', name: 'Floral Designs', icon: '🌸' },
  { id: 'premium', name: 'Premium Collection', icon: '✨' },
  { id: 'classic', name: 'Classic Styles', icon: '💼' },
];

export const products: Product[] = [
  {
    id: 'p001',
    name: 'Sunflower Granny Square Tote',
    code: 'KR-BAG-001',
    categories: ['tote', 'granny-square', 'floral', 'premium'],
    price: 1299,
    images: [bagImage1],
    rating: 5,
    description: 'Beautiful teal tote bag featuring intricate sunflower granny squares. Each square showcases a vibrant sunflower with brown center, orange petals, and white outer petals. Perfect for everyday use with sturdy crocheted straps and wooden button closure.',
    featured: true,
  },
  {
    id: 'p002',
    name: 'Floral Embellished Tote',
    code: 'KR-BAG-002',
    categories: ['tote', 'floral', 'premium'],
    price: 1499,
    images: [bagImage2],
    rating: 5,
    description: 'Elegant two-tone tote with natural beige upper and olive green base. Adorned with stunning 3D crocheted flowers in vibrant orange, yellow, and green. Features premium leather-like handles with gold hardware. A statement piece for the fashion-forward.',
    featured: true,
  },
  {
    id: 'p003',
    name: 'Two-Tone Classic Tote',
    code: 'KR-BAG-003',
    categories: ['tote', 'classic'],
    price: 1199,
    images: [bagImage3],
    rating: 5,
    description: 'Timeless cream and light blue two-tone tote bag with decorative diagonal stitch accents. Clean, minimalist design with integrated handles. Perfect for those who appreciate understated elegance and versatility.',
    featured: false,
  },
  {
    id: 'p004',
    name: 'Daisy Appliqué Tote',
    code: 'KR-BAG-004',
    categories: ['tote', 'floral', 'granny-square'],
    price: 1399,
    images: [bagImage4],
    rating: 5,
    description: 'Charming light brown granny square tote featuring delicate white daisy appliques with bright yellow centers. The alternating pattern creates a cheerful, whimsical design. Sturdy crocheted handles perfect for daily adventures.',
    featured: true,
  },
  {
    id: 'p005',
    name: 'Mustard Sage Granny Square Tote',
    code: 'KR-BAG-005',
    categories: ['tote', 'granny-square', 'floral'],
    price: 1299,
    images: [bagImage5],
    rating: 5,
    description: 'Vibrant mustard yellow and sage green granny square tote with daisy motifs. Each square alternates between warm mustard and cool sage tones, connected with crisp white seams. A bold, earthy design that stands out.',
    featured: false,
  },
  {
    id: 'p006',
    name: 'Magenta Circular Crossbody',
    code: 'KR-BAG-006',
    categories: ['circular', 'premium'],
    price: 1599,
    images: [bagImage6],
    rating: 5,
    description: 'Luxurious deep magenta circular bag with intricate concentric crochet patterns. Features shell stitches and decorative clusters creating a stunning radial design. Includes a long flat strap and wooden button closure. A premium statement piece.',
    featured: true,
  },
  {
    id: 'p007',
    name: 'Evil Eye Circular Bag',
    code: 'KR-BAG-007',
    categories: ['circular', 'premium'],
    price: 1499,
    images: [bagImage7],
    rating: 5,
    description: 'Unique dark blue circular bag featuring the iconic evil eye design in concentric circles of dark blue, white, turquoise, and black. Includes gold chain strap and decorative tassel. A protective and stylish accessory with cultural significance.',
    featured: true,
  },
  {
    id: 'p008',
    name: 'Crocodile Stitch Pattern Tote',
    code: 'KR-BAG-008',
    categories: ['tote', 'premium', 'classic'],
    price: 1199,
    images: [bagImage8],
    rating: 5,
    description: 'Stunning tote bag featuring the intricate crocodile stitch pattern that creates beautiful three-dimensional scales. Vibrant horizontal stripes in royal blue, turquoise, brown, green, and white create a bold, textured design. Features sturdy royal blue handles and exceptional craftsmanship. A unique statement piece that combines artistry with functionality.',
    featured: true,
  },
];
