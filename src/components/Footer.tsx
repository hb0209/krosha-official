import { Heart } from 'lucide-react';
import { siteInfo, contactInfo } from '../config/siteConfig';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">{siteInfo.logo}</span>
              <h3 className="text-2xl font-bold">{siteInfo.brandName}</h3>
            </div>
            <p className="text-gray-400 mb-4">{siteInfo.tagline}</p>
            <p className="text-gray-400 text-sm">{siteInfo.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-pink-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-pink-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-pink-400 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  📞 {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-pink-400 transition-colors"
                >
                  ✉️ {contactInfo.email}
                </a>
              </li>
              {contactInfo.instagram && (
                <li>
                  <a
                    href={`https://instagram.com/${contactInfo.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                  >
                    📸 @{contactInfo.instagram}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} {siteInfo.brandName}. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={16} className="fill-pink-500 text-pink-500" />
              <span>in India</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
