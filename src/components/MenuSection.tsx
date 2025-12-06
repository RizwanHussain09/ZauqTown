import { Flame, Star } from 'lucide-react';
import { useState } from 'react';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  spice: number;
  rating: number;
  prep: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Spicy Chicken Wings',
    description: 'Crispy wings tossed in our signature spicy sauce with a kick that will leave you wanting more. Marinated for 4 hours in our secret blend of 15+ spices.',
    price: 'Rs. 599',
    image: 'https://images.pexels.com/photos/5737452/pexels-photo-5737452.jpeg',
    category: 'Starters',
    spice: 4,
    rating: 4.8,
    prep: '12 mins',
  },
  {
    name: 'Cheese Fries',
    description: 'Golden crispy fries smothered in melted cheese, topped with fresh herbs and Zauq spice blend. Served with special mayo on the side.',
    price: 'Rs. 399',
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg',
    category: 'Starters',
    spice: 1,
    rating: 4.6,
    prep: '8 mins',
  },
  {
    name: 'Zauq Burger',
    description: 'Our signature burger crafted with a premium 200g beef patty, fresh lettuce, ripe tomatoes, crispy bacon, and our exclusive Zauq sauce. Toasted artisan buns.',
    price: 'Rs. 799',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    category: 'Main Course',
    spice: 2,
    rating: 4.9,
    prep: '15 mins',
  },
  {
    name: 'Fiery Paneer Wrap',
    description: 'Grilled paneer cubes with spicy marinade, fresh cucumber, bell peppers, and crispy lettuce wrapped in a soft whole wheat tortilla. Drizzled with chipotle mayo.',
    price: 'Rs. 699',
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
    category: 'Main Course',
    spice: 3,
    rating: 4.7,
    prep: '14 mins',
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'Warm 70% dark chocolate cake with a molten center, perfectly paired with premium vanilla ice cream and topped with edible gold dust for that extra elegance.',
    price: 'Rs. 499',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'Desserts',
    spice: 0,
    rating: 4.9,
    prep: '6 mins',
  },
  {
    name: 'Mango Falooda',
    description: 'Traditional Pakistani frozen dessert with fresh mango pulp, vermicelli noodles, sweet basil seeds, and condensed milk. A perfect cooling treat with authentic flavors.',
    price: 'Rs. 449',
    image: 'https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg',
    category: 'Desserts',
    spice: 0,
    rating: 4.8,
    prep: '4 mins',
  },
];

const categories = ['Starters', 'Main Course', 'Desserts'];

export default function MenuSection() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4 animate-fade-in">
            Our Menu
          </h2>
          <p className="text-[#f5f5f5]/80 text-lg max-w-2xl mx-auto">
            Discover our carefully crafted selection of dishes that bring bold flavors to your table
          </p>
        </div>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-16">
            <h3 className="text-3xl font-bold text-[#FFD700] mb-8 text-center border-b-2 border-[#FFD700]/30 pb-4 relative">
              <span className="bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] px-4">
                {category}
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems
                .filter((item) => item.category === category)
                .map((item, idx) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      animation: `fadeIn 0.6s ease-out ${catIndex * 0.1 + idx * 0.1}s backwards`,
                    }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] via-[#8B0000] to-[#FFD700] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
                    <div className="relative bg-[#1a1a1a] border-2 border-[#FFD700]/30 rounded-lg overflow-hidden group-hover:border-[#FFD700] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFD700]/20 transform group-hover:-translate-y-2 h-full">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={getOptimizedImageUrl(item.image, { width: 400, height: 224, quality: 80 })}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>

                        {item.spice > 0 && (
                          <div className="absolute top-4 right-4 flex gap-1 bg-[#8B0000]/80 backdrop-blur-sm px-3 py-2 rounded-full">
                            {[...Array(item.spice)].map((_, i) => (
                              <Flame key={i} className="text-[#FFD700] fill-[#FFD700]" size={16} />
                            ))}
                          </div>
                        )}

                        <div className="absolute bottom-4 left-4 bg-[#8B0000]/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                          <Star className="text-[#FFD700] fill-[#FFD700]" size={16} />
                          <span className="text-[#FFD700] font-bold text-sm">{item.rating}</span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3 gap-2">
                          <h4 className="text-xl font-bold text-[#f5f5f5] flex-1">
                            {item.name}
                          </h4>
                          <span className="text-2xl font-bold text-[#FFD700] whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>

                        <p className="text-[#f5f5f5]/70 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <div className="flex justify-between items-center py-3 border-t border-[#FFD700]/20 mb-4">
                          <span className="text-[#f5f5f5]/60 text-xs">Prep Time</span>
                          <span className="text-[#FFD700] font-semibold text-sm">{item.prep}</span>
                        </div>

                        <button className="w-full bg-[#8B0000] text-[#FFD700] py-2 border-2 border-[#FFD700] font-semibold transition-all duration-300 hover:bg-[#FFD700] hover:text-[#8B0000] transform hover:scale-105 active:scale-95">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
