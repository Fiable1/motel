import MenuSection from './MenuSection';

export default function page() {
  return (
    <div className="min-h-screen pt-48 pb-20">
      {/* Hero Banner Component (Today's Specials) */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-primary/50 rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass p-12 md:p-20 rounded-[40px] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <span className="text-[12rem] font-playfair italic">Specials</span>
            </div>
            
            <div className="max-w-2xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl animate-pulse">🌟</span>
                <span className="text-xs uppercase font-bold tracking-[0.5em] text-gold">Today's Highlight</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-playfair font-bold italic text-white mb-8 leading-tight">
                Stella Nova <br />
                <span className="text-gradient-gold">Chef's Selection</span>
              </h1>
              
              <p className="text-lg text-white/50 font-light font-outfit mb-12 max-w-lg leading-relaxed italic">
                Experience the finest culinary creations, handpicked daily for our distinguished guests.
              </p>
              
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/20 mb-1">Availability</span>
                  <span className="text-sm font-medium text-white/80 italic">Mon — Fri, 6AM - 11PM</span>
                </div>
                <div className="h-10 w-[1px] bg-white/10 hidden sm:block"></div>
                <button className="bg-white hover:bg-gold text-black hover:text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-[3px] text-xs transition-all duration-500 shadow-2xl active:scale-95">
                  Explore Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MenuSection category="specials" title="Today's Selection" />
    </div>
  );
}
