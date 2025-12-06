import { Flame } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#8B0000]/80 to-[#1a1a1a]/95"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8B0000]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 inline-block animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFD700] to-[#8B0000] rounded-full opacity-30 blur-lg"></div>
            <img
              src="/486562747_665049279373512_7296266491230121737_n.jpg"
              alt="Zauq Restaurant Logo"
              className="relative h-32 w-32 object-contain"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#FFD700] mb-4 tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Zauq Town
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-[#8B0000] via-[#FFD700] to-[#8B0000] mx-auto mb-6"></div>

        <p className="text-xl md:text-2xl text-[#f5f5f5] mb-2 font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Restaurant
        </p>
        <p className="text-2xl md:text-3xl text-[#FFD700] mb-6 font-bold animate-fade-in flex items-center justify-center gap-2" style={{ animationDelay: '0.4s' }}>
          <Flame className="text-[#FFD700] fill-[#FFD700]" size={28} />
          The Taste You Like!
          <Flame className="text-[#FFD700] fill-[#FFD700]" size={28} />
        </p>

        <p className="text-lg md:text-xl text-[#f5f5f5]/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Zauq is here to make every bite unforgettable — more juicy, more spicy, more YOU
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => scrollToSection('menu')}
            className="group relative bg-[#8B0000] text-[#FFD700] px-8 py-4 text-lg font-bold border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 transform hover:scale-110 active:scale-95 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Flame className="text-[#FFD700] group-hover:text-[#8B0000] fill-current" size={20} />
              View Menu
            </span>
            <div className="absolute inset-0 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative bg-transparent text-[#FFD700] px-8 py-4 text-lg font-bold border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 transform hover:scale-110 active:scale-95 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Order Now
              <Flame className="text-[#FFD700] group-hover:text-[#8B0000] fill-current" size={20} />
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#FFD700] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
