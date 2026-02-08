import { Product } from '../config/products';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} size={16} className="fill-yellow-400 text-yellow-400" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <Star key="half" size={16} className="fill-yellow-400 text-yellow-400 opacity-50" />
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 group border border-gray-100"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-4"
        />
        {product.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
            ⭐ Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3 font-mono">{product.code}</p>

        <div className="flex items-center space-x-1 mb-3">{renderStars(product.rating)}</div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">₹{product.price}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(product);
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-2.5 rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <ShoppingCart size={18} />
            <span className="text-sm font-semibold">View</span>
          </button>
        </div>
      </div>
    </div>
  );
};
