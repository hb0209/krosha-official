export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  productPurchased?: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't001',
    name: 'Priya Sharma',
    location: 'Mumbai',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Absolutely loved the mini bunny keychain! The quality is amazing and the attention to detail is incredible. Highly recommend Krosha for handmade gifts!',
    productPurchased: 'Mini Bunny Keychain',
    date: 'January 2026',
  },
  {
    id: 't002',
    name: 'Rahul Mehta',
    location: 'Delhi',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Ordered a custom bouquet for my wife and she was over the moon! Beautiful craftsmanship and quick delivery. Will definitely order again.',
    productPurchased: 'Luxe Rose Bouquet',
    date: 'December 2025',
  },
  {
    id: 't003',
    name: 'Sneha Patel',
    location: 'Bangalore',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'The bookmarks are so pretty! Got them as gifts for my book club friends and everyone loved them. Perfect quality and such cute designs.',
    productPurchased: 'Floral Bookmark Collection',
    date: 'January 2026',
  },
  {
    id: 't004',
    name: 'Amit Kumar',
    location: 'Pune',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Got the cactus set for my desk and I receive compliments every day! They are adorable and well-made. Great conversation starter!',
    productPurchased: 'Mini Cactus Set',
    date: 'December 2025',
  },
  {
    id: 't005',
    name: 'Nidhi Verma',
    location: 'Hyderabad',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Ordered a custom pet portrait of my dog and I cried when I saw it! Absolutely perfect representation. Worth every penny!',
    productPurchased: 'Custom Pet Portrait',
    date: 'November 2025',
  },
  {
    id: 't006',
    name: 'Rohan Singh',
    location: 'Chennai',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    text: 'Beautiful products and great service! The keychains are durable and the colors are vibrant. My niece loves her bunny keychain.',
    productPurchased: 'Daisy Chain Keyring',
    date: 'January 2026',
  },
];
