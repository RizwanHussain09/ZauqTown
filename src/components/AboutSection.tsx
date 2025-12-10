import { Award, Heart, Users, ChefHat, TrendingUp, Zap } from 'lucide-react';
import { useState } from 'react';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { label: 'Happy Customers', value: '15K+', icon: Users },
    { label: 'Menu Items', value: '50+', icon: TrendingUp },
    { label: 'Years Experience', value: '5+', icon: ChefHat },
  ];

  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      desc: 'Only finest ingredients sourced fresh daily',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      desc: 'Passionate chefs crafting every dish',
    },
    {
      icon: Zap,
      title: 'Swift Service',
      desc: 'Fast-casual without compromising taste',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#8B0000]/10 to-[#FFD700]/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2 animate-fade-in">
              About Zauq Town
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#8B0000] to-[#FFD700] mb-8"></div>

            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab('story')}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeTab === 'story'
                    ? 'bg-[#8B0000] text-[#FFD700] border-2 border-[#FFD700]'
                    : 'bg-transparent text-[#FFD700] border-2 border-[#FFD700]/50 hover:border-[#FFD700]'
                }`}
              >
                Our Story
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeTab === 'values'
                    ? 'bg-[#8B0000] text-[#FFD700] border-2 border-[#FFD700]'
                    : 'bg-transparent text-[#FFD700] border-2 border-[#FFD700]/50 hover:border-[#FFD700]'
                }`}
              >
                Our Values
              </button>
            </div>

            {activeTab === 'story' && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-[#f5f5f5] text-lg leading-relaxed">
                  Welcome to Zauq Town Restaurant, where every dish tells a story of passion,
                  flavor, and authenticity. Located in the heart of Karachi, we've been serving
                  the community with exceptional fast-casual dining that never compromises on quality.
                </p>
                <p className="text-[#f5f5f5]/80 text-lg leading-relaxed">
                  Our chefs craft each meal with precision and love, using only the finest
                  ingredients to bring you bold, unforgettable flavors. From our signature
                  spicy creations to our comfort classics, every bite at Zauq Town is an
                  experience worth savoring.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-4 animate-fade-in">
                {values.map((value, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-[#8B0000]/10 border-l-4 border-[#FFD700] rounded">
                    <value.icon className="text-[#FFD700] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="text-[#FFD700] font-bold mb-1">{value.title}</h4>
                      <p className="text-[#f5f5f5]/70 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-[#8B0000]/20 border-2 border-[#FFD700]/30 rounded-lg hover:border-[#FFD700] transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20 transform hover:scale-105 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-[#FFD700] transition-all duration-300">
                    <stat.icon className="text-[#FFD700] group-hover:text-[#8B0000]" size={24} />
                  </div>
                  <p className="text-2xl font-bold text-[#FFD700]">{stat.value}</p>
                  <p className="text-[#f5f5f5]/60 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8B0000] to-[#FFD700] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 border-2 border-[#FFD700]/50 rounded-lg group-hover:border-[#FFD700] transition-all duration-500"></div>
              <img
                src={getOptimizedImageUrl('https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg', { width: 800, height: 500, quality: 80 })}
                alt="Restaurant Interior"
                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover border-2 border-[#FFD700]/30 group-hover:border-[#FFD700] transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#FFD700]/40 transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/40 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-[#FFD700] font-bold text-lg">Premium Ambiance</p>
                  <p className="text-[#f5f5f5]/80 text-sm">Modern meets Traditional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
