import { siteInfo } from '../config/siteConfig';
import { Heart, Sparkles, ShoppingBag, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { products, Product } from '../config/products';

interface HeroProps {
  onShopNow: () => void;
  onProductClick?: (productId: string) => void;
}

export const Hero = ({ onShopNow, onProductClick }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get featured products for carousel
  const featuredProducts = products.filter((p) => p.featured);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || featuredProducts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProducts.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleProductClick = (product: Product) => {
    if (onProductClick) {
      onProductClick(product.id);
    }
    onShopNow(); // Also scroll to products section
  };

  if (featuredProducts.length === 0) {
    return null;
  }

  const currentProduct = featuredProducts[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className={`text-center md:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6">
              <div className="text-6xl md:text-7xl mb-4 inline-block" style={{ animation: 'float 3s ease-in-out infinite' }}>
                {siteInfo.logo}
              </div>
            </div>

            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'serif' }}
            >
              {siteInfo.brandName}
            </h2>

            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
              {siteInfo.tagline}
            </p>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {siteInfo.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Heart className="text-pink-600" size={24} />
                <span className="text-gray-800 font-semibold">Handcrafted</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Award className="text-purple-600" size={24} />
                <span className="text-gray-800 font-semibold">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <ShoppingBag className="text-indigo-600" size={24} />
                <span className="text-gray-800 font-semibold">Unique Designs</span>
              </div>
            </div>

            <button
              onClick={onShopNow}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-3 mx-auto md:mx-0"
            >
              <span>Explore Collection</span>
              <Sparkles className="group-hover:rotate-12 transition-transform duration-300" size={24} />
            </button>
          </div>

          {/* Right Side - Carousel */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Carousel Container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Product Image */}
                <div
                  onClick={() => handleProductClick(currentProduct)}
                  className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 cursor-pointer transform hover:scale-105 transition-transform duration-500 group"
                >
                  <img
                    src={currentProduct.images[0]}
                    alt={currentProduct.name}
                    className="w-full h-full object-contain p-4"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="text-white text-center">
                      <p className="font-bold text-lg mb-2">{currentProduct.name}</p>
                      <p className="text-sm">Click to view details</p>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{currentProduct.name}</h3>
                  <p className="text-purple-600 font-semibold text-xl">₹{currentProduct.price}</p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-all duration-300 z-10"
                  aria-label="Previous product"
                >
                  <ChevronLeft size={24} className="text-gray-800" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-all duration-300 z-10"
                  aria-label="Next product"
                >
                  <ChevronRight size={24} className="text-gray-800" />
                </button>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {featuredProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                        ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full shadow-xl flex items-center space-x-2 z-20">
                <Sparkles size={20} />
                <span className="font-bold text-sm">Premium Collection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};
