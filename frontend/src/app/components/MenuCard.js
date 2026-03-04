'use client';

import { useCart } from '../context/CartContext';

export default function MenuCard({ item }) {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    return (
        <div className="glass-card group flex flex-col h-full rounded-[32px] overflow-hidden">
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Tag */}
                {item.tag && (
                    <div className="absolute top-6 left-6 px-4 py-1.5 glass-card rounded-full border-gold/20 shadow-glow">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-[2px]">
                            {item.tag}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-8 pt-6">
                <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-xl font-playfair font-bold italic text-white group-hover:text-gold transition-colors duration-500 leading-tight">
                        {item.name}
                    </h3>
                    <div className="flex flex-col items-end">
                        <span className="text-lg font-bold text-gold tracking-tighter">
                            {item.price.toLocaleString()}
                        </span>
                        <span className="text-[8px] uppercase tracking-widest text-white/20 -mt-1 font-bold">RWF</span>
                    </div>
                </div>

                <p className="text-sm text-white/40 font-outfit font-light leading-relaxed mb-8 line-clamp-3">
                    {item.description}
                </p>

                {/* Labels */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {item.labels && item.labels.map((label, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-white/50 uppercase tracking-widest font-medium">
                            {label}
                        </span>
                    ))}
                </div>

                {/* Action Button */}
                <button 
                    onClick={handleAddToCart}
                    className="mt-auto group/btn relative overflow-hidden bg-white hover:bg-gold text-black hover:text-white px-8 py-4 rounded-2xl transition-all duration-500 shadow-xl active:scale-[0.98]"
                >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-[3px]">Add to Selection</span>
                        <span className="text-lg group-hover/btn:translate-x-1 transition-transform">+</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
