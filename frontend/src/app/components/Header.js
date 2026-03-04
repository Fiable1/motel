'use client';

import { useCart } from '../context/CartContext';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/5">
            <div className="flex flex-col group cursor-pointer">
                <h1 className="text-2xl md:text-3xl font-playfair font-bold italic tracking-tight text-white group-hover:text-gold transition-colors duration-500">
                    Stella Nova
                </h1>
                <div className="flex items-center gap-2">
                    <div className="h-[1px] w-4 bg-gold/50" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold/80">Motel & Restaurant</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="hidden sm:flex items-center gap-2 bg-white hover:bg-gold text-black hover:text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[2px] transition-all duration-500 shadow-xl active:scale-95 group">
                    <span>Plan Visit</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </header>
    );
}
