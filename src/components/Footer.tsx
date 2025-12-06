import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t-2 border-[#FFD700]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={getOptimizedImageUrl('/486562747_665049279373512_7296266491230121737_n.jpg', { width: 48, height: 48, quality: 85 })}
                alt="Zauq Restaurant Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-[#FFD700] text-2xl font-bold">Zauq Town</span>
            </div>
            <p className="text-[#f5f5f5]/70 leading-relaxed">
              Making every bite unforgettable with bold flavors and authentic taste.
            </p>
          </div>

          <div>
            <h3 className="text-[#FFD700] text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[#f5f5f5]/70 hover:text-[#FFD700] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#f5f5f5]/70 hover:text-[#FFD700] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-[#f5f5f5]/70 hover:text-[#FFD700] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#f5f5f5]/70 hover:text-[#FFD700] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#f5f5f5]/70 hover:text-[#FFD700] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFD700] text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="text-[#FFD700] hover:text-[#8B0000]" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="text-[#FFD700] hover:text-[#8B0000]" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="text-[#FFD700] hover:text-[#8B0000]" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="text-[#FFD700] hover:text-[#8B0000]" size={20} />
              </a>
            </div>
            <p className="text-[#f5f5f5]/70 text-sm">
              Follow us for exclusive offers and updates!
            </p>
          </div>
        </div>

        <div className="border-t border-[#FFD700]/20 pt-8 text-center">
          <p className="text-[#f5f5f5]/60">
            &copy; {new Date().getFullYear()} Zauq Town Restaurant. All rights reserved.
          </p>
          <p className="text-[#f5f5f5]/40 text-sm mt-2">
            Made with passion for great food and unforgettable experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
