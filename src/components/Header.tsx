import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a1a1a]/98 via-[#1a1a1a]/95 to-[#1a1a1a]/90 backdrop-blur-lg border-b-2 border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FFD700] to-[#8B0000] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
              <img
                src={getOptimizedImageUrl('/486562747_665049279373512_7296266491230121737_n.jpg', { width: 48, height: 48, quality: 85 })}
                alt="Zauq Restaurant Logo"
                className="relative h-12 w-12 object-contain group-hover:drop-shadow-lg group-hover:drop-shadow-[#FFD700]"
              />
            </div>
            <span className="text-[#FFD700] text-2xl font-bold group-hover:text-white transition-all duration-300">Zauq Town</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 relative group">
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 relative group">
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#8B0000] text-[#FFD700] px-6 py-2 border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold shadow-lg hover:shadow-xl hover:shadow-[#FFD700]/40"
            >
              Order Now
            </button>
          </div>

          <button
            className="md:hidden text-[#FFD700]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t-2 border-[#FFD700]/30 bg-gradient-to-b from-transparent to-[#8B0000]/10 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 hover:pl-2 py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 hover:pl-2 py-2">About</button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 hover:pl-2 py-2">Menu</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 hover:pl-2 py-2">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#f5f5f5] hover:text-[#FFD700] transition-all duration-300 hover:pl-2 py-2">Contact</button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#8B0000] text-[#FFD700] px-6 py-3 border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 w-full font-semibold transform hover:scale-105 active:scale-95 mt-2"
            >
              Order Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
