'use client';

import { useCart } from '../context/CartContext';

export default function CartSidebar({ isOpen, onClose, onCheckout }) {
    const { cart, total, dispatch } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] pointer-events-none">
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-auto transition-opacity duration-700" 
                onClick={onClose}
            />
            <div className="absolute top-0 right-0 h-full w-full max-w-[480px] bg-[#0d0d0f]/90 backdrop-blur-3xl border-l border-white/5 p-12 flex flex-col pointer-events-auto animate-in slide-in-from-right duration-700 font-outfit shadow-premium">
                {/* Header */}
                <div className="flex justify-between items-center mb-16">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-playfair font-bold italic text-white">Your Selection</h2>
                        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold mt-1">Gourmet Experience</span>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all duration-300 group"
                    >
                        <span className="text-3xl font-light group-hover:rotate-180 transition-transform duration-500">&times;</span>
                    </button>
                </div>

                {/* Items List */}
                <div className="flex-grow overflow-y-auto pr-6 no-scrollbar">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center opacity-30 italic space-y-6">
                            <span className="text-6xl text-gold/50">🍱</span>
                            <p className="text-sm tracking-[0.2em] uppercase font-bold text-white/40">The selection is empty</p>
                            <button onClick={onClose} className="text-xs text-gold underline underline-offset-8 decoration-gold/30 hover:decoration-gold transition-all uppercase tracking-widest px-4 py-2">Start Adding Delights</button>
                        </div>
                    ) : (
                        <div className="space-y-10">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-8 items-center group transition-all duration-500">
                                    <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/5 flex-shrink-0 relative">
                                        <img src={item.image} alt={item.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-white group-hover:text-gold transition-colors font-playfair italic text-xl leading-tight">{item.name}</h4>
                                            <span className="text-sm font-bold text-gold/80 font-outfit">{(item.price * item.quantity).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-[11px] text-white/20 tracking-[0.2em] uppercase font-bold">
                                                {item.price.toLocaleString()} <span className="mx-1 opacity-50">×</span> {item.quantity}
                                            </p>
                                            <button 
                                                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                                                className="text-[9px] uppercase tracking-widest font-bold text-primary/40 hover:text-primary transition-all duration-300 flex items-center gap-1.5"
                                            >
                                                <span>Discard</span>
                                                <span className="text-lg leading-none">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer / Total */}
                <div className="mt-16 pt-12 border-t border-white/5 bg-gradient-to-t from-black/20 to-transparent rounded-t-[40px]">
                    <div className="flex justify-between items-end mb-12">
                        <div className="flex flex-col">
                            <span className="text-white/20 uppercase tracking-[0.3em] font-bold text-[9px] mb-2">Total Amount Due</span>
                            <span className="text-4xl font-bold text-gold font-playfair italic tracking-tight">{total.toLocaleString()}</span>
                        </div>
                        <span className="text-sm font-outfit font-bold text-white/20 mb-2">RWF</span>
                    </div>
                    
                    <button
                        disabled={cart.length === 0}
                        onClick={onCheckout}
                        className="w-full bg-white hover:bg-gold text-black hover:text-white py-5 rounded-2xl font-bold transition-all duration-500 uppercase tracking-[0.4em] text-[11px] shadow-premium active:scale-95 disabled:opacity-5 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                        <span className="relative z-10">Proceed to Checkout</span>
                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gold transition-transform duration-500" />
                    </button>
                </div>
            </div>
        </div>
    );
}
