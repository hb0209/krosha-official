import { Mail, MessageCircle, Instagram, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../config/siteConfig';
import { contactViaWhatsApp } from '../utils/whatsapp';

export const ContactSection = () => {
  const handleWhatsAppClick = () => {
    contactViaWhatsApp();
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question about our bags or want to place a custom order? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-start space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                >
                  <div className="bg-green-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600 text-sm">
                      Chat with us for instant responses
                    </p>
                  </div>
                </button>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start space-x-4 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group"
                >
                  <div className="bg-purple-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600 text-sm">{contactInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start space-x-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                >
                  <div className="bg-blue-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm">{contactInfo.email}</p>
                  </div>
                </a>

                {contactInfo.instagram && (
                  <a
                    href={`https://instagram.com/${contactInfo.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors group"
                  >
                    <div className="bg-pink-600 text-white p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <Instagram size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Instagram</p>
                      <p className="text-gray-600 text-sm">@{contactInfo.instagram}</p>
                    </div>
                  </a>
                )}

                {contactInfo.address && (
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-gray-600 text-white p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600 text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Krosha?</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">✨</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Premium Quality</h4>
                    <p className="text-gray-600 text-sm">
                      We use only the finest quality yarn and materials for all our creations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💝</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Handmade with Love</h4>
                    <p className="text-gray-600 text-sm">
                      Each piece is carefully crafted by hand with attention to every detail
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎨</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Customizable</h4>
                    <p className="text-gray-600 text-sm">
                      Want something unique? We can customize colors, sizes, and designs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🚚</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pan-India Delivery</h4>
                    <p className="text-gray-600 text-sm">
                      We deliver across India with careful packaging to ensure safe arrival
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                    <p className="text-gray-600 text-sm">
                      We respond to all WhatsApp inquiries within a few hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎁</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Unique Designs</h4>
                    <p className="text-gray-600 text-sm">
                      Each bag is a unique piece of art, perfect for expressing your personal style
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Order Your Perfect Crochet Bag?
            </h3>
            <p className="text-gray-600 mb-6">
              Click below to start a conversation on WhatsApp and let's find the perfect bag for you!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-3"
            >
              <MessageCircle size={24} />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
