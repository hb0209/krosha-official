import { Product } from '../config/products';
import { contactInfo } from '../config/siteConfig';

export const generateWhatsAppLink = (product: Product): string => {
  const message = `Hello Krosha! 🧶

I'm interested in ordering this beautiful handcrafted item:

🛍️ *Product:* ${product.name}
📦 *Code:* ${product.code}
💰 *Price:* ₹${product.price}

Could you please confirm the availability and share the delivery details?

Thank you! 💕`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`;
};

export const openWhatsApp = (product: Product): void => {
  const link = generateWhatsAppLink(product);
  window.open(link, '_blank');
};

export const contactViaWhatsApp = (customMessage?: string): void => {
  const message = customMessage || 'Hello Krosha! 🧶 I have a question about your products.';
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`;
  window.open(link, '_blank');
};
