import { useState } from 'react';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const [highlightedProductId, setHighlightedProductId] = useState<string | undefined>();

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const handleShopNow = () => {
    handleNavigate('products');
  };

  const handleProductClick = (productId: string) => {
    setHighlightedProductId(productId);
    handleNavigate('products');
    // Clear highlight after animation
    setTimeout(() => {
      setHighlightedProductId(undefined);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero onShopNow={handleShopNow} onProductClick={handleProductClick} />
        <ProductsSection highlightedProductId={highlightedProductId} />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
