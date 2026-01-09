import { siteInfo } from '../config/siteConfig';
import { Heart, Sparkles, Gift } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export const Hero = ({ onShopNow }: HeroProps) => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-6xl md:text-8xl mb-6 animate-bounce">🧶</div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to {siteInfo.brandName}
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            {siteInfo.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6 my-12">
            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-md">
              <Heart className="text-pink-600" size={24} />
              <span className="text-gray-700 font-medium">Handmade with Love</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-md">
              <Sparkles className="text-purple-600" size={24} />
              <span className="text-gray-700 font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-md">
              <Gift className="text-blue-600" size={24} />
              <span className="text-gray-700 font-medium">Perfect Gifts</span>
            </div>
          </div>

          <button
            onClick={onShopNow}
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};
