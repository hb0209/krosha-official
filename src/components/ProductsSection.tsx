import { useState, useEffect, useRef } from 'react';
import { products, categories, Product } from '../config/products';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';

interface ProductsSectionProps {
  highlightedProductId?: string;
}

export const ProductsSection = ({ highlightedProductId }: ProductsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const highlightedRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.categories.includes(selectedCategory));

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  // Scroll to highlighted product when it changes
  useEffect(() => {
    if (highlightedProductId && highlightedRef.current) {
      setTimeout(() => {
        highlightedRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        // Add highlight animation
        highlightedRef.current?.classList.add('animate-pulse');
        setTimeout(() => {
          highlightedRef.current?.classList.remove('animate-pulse');
        }, 2000);
      }, 300);
    }
  }, [highlightedProductId]);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
            Our Bag Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our exquisite handcrafted crochet bags, each uniquely designed and crafted with premium yarn and meticulous attention to detail
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl transform scale-110'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200 hover:border-purple-300'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  ref={product.id === highlightedProductId ? highlightedRef : null}
                  className={`animate-slideUp transition-all duration-500 ${product.id === highlightedProductId
                    ? 'ring-4 ring-purple-500 ring-offset-4 rounded-2xl scale-105 z-10'
                    : ''
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} onClick={handleProductClick} />
                </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
