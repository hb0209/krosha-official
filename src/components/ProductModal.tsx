import { Product } from '../config/products';
import { X, Star, MessageCircle, Tag } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { categories } from '../config/products';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} size={20} className="fill-yellow-400 text-yellow-400" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <Star key="half" size={20} className="fill-yellow-400 text-yellow-400 opacity-50" />
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={20} className="text-gray-300" />);
    }

    return stars;
  };

  const getCategoryNames = () => {
    return product.categories
      .map((catId) => categories.find((c) => c.id === catId)?.name)
      .filter(Boolean);
  };

  const handleBuyNow = () => {
    openWhatsApp(product);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl bg-white aspect-square">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.images.slice(1).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-lg overflow-hidden bg-white border border-gray-100"
                    >
                      <img src={img} alt={`${product.name} ${idx + 2}`} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-gray-600 text-sm">({product.rating})</span>
                </div>

                <p className="text-gray-600 text-sm mb-4">Product Code: {product.code}</p>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="flex items-center space-x-2 flex-wrap mb-6">
                  <Tag size={18} className="text-gray-600" />
                  {getCategoryNames().map((cat, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="border-t border-b border-gray-200 py-6 mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-pink-600">₹{product.price}</span>
                    <span className="text-gray-600 text-sm">(incl. of all taxes)</span>
                  </div>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-colors shadow-lg"
                >
                  <MessageCircle size={24} />
                  <span className="text-lg">Order via WhatsApp</span>
                </button>

                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> Click "Order via WhatsApp" to send us a message with
                    your order details. We'll respond promptly with availability and delivery
                    information.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm text-gray-700">
                <p className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>100% Handmade with premium quality yarn</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Customization available on request</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Carefully packaged with love</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Pan-India delivery available</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
