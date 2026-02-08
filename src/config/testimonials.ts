export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  productPurchased?: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  productPurchased?: string;
  date: string;
}

// Helper function to get initials from name
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const testimonials: Testimonial[] = [
  {
    id: 't001',
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Absolutely in love with my Sunflower Granny Square Tote! The craftsmanship is exceptional and I get compliments everywhere I go. The quality is outstanding and it\'s so sturdy. Highly recommend!',
    productPurchased: 'Sunflower Granny Square Tote',
    date: 'January 2026',
  },
  {
    id: 't002',
    name: 'Rahul Mehta',
    location: 'Delhi',
    rating: 5,
    text: 'Ordered the Floral Embellished Tote for my wife and she was over the moon! The 3D flowers are stunning and the bag is so well-made. Beautiful craftsmanship and quick delivery. Will definitely order again!',
    productPurchased: 'Floral Embellished Tote',
    date: 'December 2025',
  },
  {
    id: 't003',
    name: 'Sneha Patel',
    location: 'Bangalore',
    rating: 5,
    text: 'The Daisy Appliqué Tote is absolutely gorgeous! The daisy details are so delicate and beautiful. Perfect size for everyday use and the quality is top-notch. My new favorite bag!',
    productPurchased: 'Daisy Appliqué Tote',
    date: 'January 2026',
  },
  {
    id: 't004',
    name: 'Amit Kumar',
    location: 'Pune',
    rating: 5,
    text: 'Got the Two-Tone Classic Tote and I receive compliments every day! The clean design is so elegant and versatile. Great quality and perfect for both casual and formal occasions.',
    productPurchased: 'Two-Tone Classic Tote',
    date: 'December 2025',
  },
  {
    id: 't005',
    name: 'Nidhi Verma',
    location: 'Hyderabad',
    rating: 5,
    text: 'The Magenta Circular Crossbody is a showstopper! The intricate patterns are mesmerizing and the quality is premium. It\'s become my go-to bag for special occasions. Worth every rupee!',
    productPurchased: 'Magenta Circular Crossbody',
    date: 'November 2025',
  },
  {
    id: 't006',
    name: 'Rohan Singh',
    location: 'Chennai',
    rating: 5,
    text: 'Beautiful bags and excellent service! The Evil Eye Circular Bag is unique and well-crafted. The colors are vibrant and the design is so eye-catching. My sister loved it as a gift!',
    productPurchased: 'Evil Eye Circular Bag',
    date: 'January 2026',
  },
];
