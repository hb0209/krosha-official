# Krosha - Handcrafted Crochet Creations

A beautiful, fully responsive product listing website for your crochet business. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Product Catalog**: Browse through all your handcrafted crochet products with beautiful imagery
- **Category Filtering**: Filter products by categories (Small Items, Luxe Collection, Customizable, Keychains, Bookmarks, Flowers)
- **WhatsApp Integration**: Direct "Buy Now" buttons that open WhatsApp with pre-filled product details
- **Customer Testimonials**: Showcase happy customer reviews and ratings
- **Contact Section**: Multiple ways for customers to reach you
- **Announcement Banner**: Display special offers, trending items, or announcements
- **Mobile-First Design**: Fully responsive and optimized for all devices
- **Config-Driven**: All products, testimonials, and site info managed through config files

## Getting Started

### Installation

1. Extract the project files
2. Open terminal in the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

```bash
npm run dev
```

The website will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Adding New Products

To add a new product, edit `src/config/products.ts`:

```typescript
{
  id: 'p013',  // Unique ID
  name: 'Your Product Name',
  code: 'KR-PROD-013',  // Product code
  categories: ['small', 'keychains'],  // Can have multiple categories
  price: 299,
  images: [
    'https://your-image-url.com/image.jpg',
  ],
  rating: 5,
  description: 'Your product description',
  featured: true,  // Optional: mark as featured
}
```

### Product Categories

Available categories: `small`, `premium`, `customizable`, `keychains`, `bookie`, `flowers`

A single product can belong to multiple categories for better visibility.

## Adding Customer Testimonials

Edit `src/config/testimonials.ts`:

```typescript
{
  id: 't007',
  name: 'Customer Name',
  location: 'City',
  image: 'https://image-url.com/customer.jpg',
  rating: 5,
  text: 'Customer review text here...',
  productPurchased: 'Product Name',
  date: 'Month Year',
}
```

## Updating Site Information

Edit `src/config/siteConfig.ts`:

### Contact Information
```typescript
export const contactInfo: ContactInfo = {
  whatsapp: '919876543210',  // Your WhatsApp number with country code
  email: 'hello@krosha.in',
  instagram: 'krosha_crochet',
  facebook: 'kroshacrochet',
  address: 'Handcrafted with love in India',
};
```

### Announcement Banners
```typescript
export const banners: Banner[] = [
  {
    id: 'b001',
    text: "Your announcement text here",
    active: true,  // Set to true to show this banner
    type: 'offer',  // offer, trending, or announcement
    bgColor: 'bg-pink-600',
  },
];
```

## Deployment

### Deploying to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploying to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect the settings
6. Click "Deploy"

### Deploying to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Folder Structure

```
src/
├── components/          # React components
│   ├── Banner.tsx       # Announcement banner
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── ProductCard.tsx  # Product card component
│   ├── ProductModal.tsx # Product detail modal
│   ├── ProductsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── config/              # Configuration files
│   ├── products.ts      # Products list
│   ├── testimonials.ts  # Customer testimonials
│   └── siteConfig.ts    # Site info, banners, contact
├── utils/
│   └── whatsapp.ts      # WhatsApp integration
├── App.tsx              # Main app component
└── index.css            # Global styles
```

## Customization Tips

### Changing Colors

Edit the Tailwind classes in components. Main colors used:
- Primary: `pink-600`, `pink-700`
- Accent: `purple-600`, `blue-600`
- Success: `green-600`

### Adding More Product Images

Each product can have multiple images. Add more URLs to the `images` array:

```typescript
images: [
  'https://image1.jpg',
  'https://image2.jpg',
  'https://image3.jpg',
],
```

### Updating WhatsApp Number

Edit the `whatsapp` field in `src/config/siteConfig.ts`. Format: country code + number (no spaces or special characters).

Example: `'919876543210'` for +91 9876543210

## Support

For any questions or issues, feel free to modify the code to fit your needs. All components are well-organized and easy to customize.

---

Made with ❤️ for Krosha
