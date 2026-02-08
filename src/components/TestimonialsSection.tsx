import { Star, Quote } from 'lucide-react';
import { testimonials, getInitials } from '../config/testimonials';

export const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} size={18} className="fill-yellow-400 text-yellow-400" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <Star key="half" size={18} className="fill-yellow-400 text-yellow-400 opacity-50" />
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={18} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Happy Customers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear what our customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-white">
                  {getInitials(testimonial.name)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-pink-200" size={32} />
                <p className="text-gray-700 leading-relaxed mb-4 relative z-10 pl-6">
                  {testimonial.text}
                </p>
              </div>

              {testimonial.productPurchased && (
                <div className="bg-pink-50 rounded-lg px-3 py-2 mt-4">
                  <p className="text-xs text-pink-800 font-medium">
                    Purchased: {testimonial.productPurchased}
                  </p>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-3">{testimonial.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Happy Customers!
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Every bag is handcrafted with love and care. Experience the joy of owning a unique,
            premium crochet bag that combines artistry with functionality.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <Star className="fill-yellow-400 text-yellow-400" size={20} />
              <span className="font-bold">5.0/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👜</span>
              <span className="font-bold">300+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✨</span>
              <span className="font-bold">Premium Handcrafted Bags</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
