'use client';

import { useCart } from '../context/CartContext';

export default function CartToggle({ onToggle }) {
    const { itemCount } = useCart();

    return (
        <button
            onClick={onToggle}
            className="fixed bottom-10 right-10 z-[500] group flex items-center justify-center"
        >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping group-hover:scale-125 transition-transform duration-700" />
            
            {/* Button Surface */}
            <div className="relative w-20 h-20 rounded-full bg-white group-hover:bg-gold transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden active:scale-90">
                <span className="text-3xl text-black group-hover:text-white transition-colors group-hover:scale-110 duration-500 translate-y-[-2px]">🛒</span>
                
                {/* Shine Effect */}
                <div className="absolute top-[-100%] left-[-100%] w-[50%] h-[300%] bg-white/40 rotate-[35deg] transition-all duration-1000 group-hover:translate-x-[500%] group-hover:translate-y-[100%]" />
            </div>

            {/* Item Count Badge */}
            {itemCount > 0 && (
                <div className="absolute -top-2 -right-2 min-w-8 h-8 px-2 bg-primary text-white rounded-full flex items-center justify-center text-[11px] font-bold shadow-2xl border-[3px] border-black animate-in zoom-in duration-500">
                    {itemCount}
                </div>
            )}
        </button>
    );
}
