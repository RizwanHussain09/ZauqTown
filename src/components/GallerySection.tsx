import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
    alt: 'Delicious Burger',
  },
  {
    url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    alt: 'Restaurant Interior',
  },
  {
    url: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    alt: 'Gourmet Meal',
  },
  {
    url: 'https://images.pexels.com/photos/5737452/pexels-photo-5737452.jpeg',
    alt: 'Chicken Wings',
  },
  {
    url: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg',
    alt: 'Cheese Fries',
  },
  {
    url: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    alt: 'Chocolate Dessert',
  },
  {
    url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
    alt: 'Wraps and Rolls',
  },
  {
    url: 'https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg',
    alt: 'Sweet Treats',
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#8B0000]/10 to-[#FFD700]/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2 animate-fade-in">
            Gallery
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#8B0000] to-[#FFD700] mx-auto mb-4"></div>
          <p className="text-[#f5f5f5]/80 text-lg max-w-2xl mx-auto">
            A visual feast of our culinary creations and ambiance
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#8B0000]/30 via-[#FFD700]/30 to-[#8B0000]/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg border-4 border-[#FFD700]/30 group-hover:border-[#FFD700] transition-all duration-300">
            <img
              src={getOptimizedImageUrl(galleryImages[currentIndex].url, { width: 1200, height: 600, quality: 80 })}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-[#FFD700] text-xl font-bold">
                {galleryImages[currentIndex].alt}
              </p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#8B0000] text-[#FFD700] p-3 rounded-full border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 hover:scale-125 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#FFD700]/40 z-20"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#8B0000] text-[#FFD700] p-3 rounded-full border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 hover:scale-125 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-[#FFD700]/40 z-20"
          >
            <ChevronRight size={28} />
          </button>

          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#FFD700] w-8 h-3'
                    : 'bg-[#FFD700]/30 w-3 h-3 hover:bg-[#FFD700]/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-48 overflow-hidden rounded-lg border-2 border-[#FFD700]/30 cursor-pointer group hover:border-[#FFD700] transition-all duration-300"
              onClick={() => setCurrentIndex(index)}
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.05}s backwards`,
              }}
            >
              <img
                src={getOptimizedImageUrl(image.url, { width: 300, height: 192, quality: 75 })}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
                index === currentIndex ? 'bg-[#FFD700]/40' : 'bg-[#8B0000]/0 group-hover:bg-[#8B0000]/40'
              }`}>
                {index === currentIndex && (
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
                    <ChevronRight className="text-[#8B0000]" size={24} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
