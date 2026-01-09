import { banners } from '../config/siteConfig';
import { X } from 'lucide-react';
import { useState } from 'react';

export const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const activeBanner = banners.find((b) => b.active);

  if (!activeBanner || !isVisible) return null;

  return (
    <div className={`${activeBanner.bgColor || 'bg-pink-600'} text-white py-3 px-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <p className="text-sm md:text-base font-medium">{activeBanner.text}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:opacity-80 transition-opacity"
          aria-label="Close banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
