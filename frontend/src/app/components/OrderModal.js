'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function OrderModal({ isOpen, onClose, onSubmit }) {
    const { cart, total } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        instructions: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/95 z-[1100] flex justify-center items-center p-6 backdrop-blur-3xl animate-in fade-in duration-700 font-outfit">
            <div className="relative w-full max-w-2xl bg-[#0a0a0b] border border-white/5 rounded-[48px] overflow-hidden shadow-premium p-10 md:p-16 flex flex-col no-scrollbar max-h-[92vh] overflow-y-auto">
                {/* Background Decor */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

                <button onClick={onClose} className="absolute top-10 right-10 w-12 h-12 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all duration-500 text-3xl font-light">&times;</button>
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-white mb-3">Reservation</h2>
                    <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-gold/60">Complete Your Gourmet Order</p>
                </div>
                
                <div className="bg-white/2 rounded-[32px] p-8 mb-12 border border-white/5">
                    <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/30 mb-6 border-b border-white/5 pb-4">Order Summary</h3>
                    <div className="space-y-4 max-h-32 overflow-y-auto no-scrollbar mb-6 pr-2">
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center text-sm">
                                <span className="text-white/80 font-medium">{item.name} <span className="text-white/20 ml-2 font-light italic">x{item.quantity}</span></span>
                                <span className="text-white/40 font-bold font-outfit tracking-wider">{(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-end border-t border-white/5 pt-6">
                        <span className="text-[11px] uppercase font-bold tracking-widest text-gold">Total Selection</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-playfair font-bold italic text-white">{total.toLocaleString()}</span>
                            <span className="text-[10px] font-bold text-white/20">RWF</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group space-y-2">
                            <label htmlFor="name" className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-1 group-focus-within:text-gold transition-colors">Guest Name</label>
                            <input 
                                type="text" id="name" required 
                                className="w-full bg-white/2 border border-white/5 focus:border-gold/30 p-5 rounded-2xl outline-none transition-all focus:bg-white/5 placeholder:text-white/5 text-sm"
                                placeholder="Your full name"
                                value={formData.name} onChange={handleChange}
                            />
                        </div>
                        <div className="group space-y-2">
                            <label htmlFor="phone" className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-1 group-focus-within:text-gold transition-colors">Contact Phone</label>
                            <input 
                                type="tel" id="phone" required 
                                className="w-full bg-white/2 border border-white/5 focus:border-gold/30 p-5 rounded-2xl outline-none transition-all focus:bg-white/5 placeholder:text-white/5 text-sm"
                                placeholder="+250 78x xxx xxx"
                                value={formData.phone} onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                    <div className="group space-y-2">
                        <label htmlFor="address" className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-1 group-focus-within:text-gold transition-colors">Delivery Address / Room Number</label>
                        <textarea 
                            id="address" rows="2" required 
                            className="w-full bg-white/2 border border-white/5 focus:border-gold/30 p-5 rounded-2xl outline-none transition-all focus:bg-white/5 resize-none placeholder:text-white/5 text-sm"
                            placeholder="Please provide your precise location"
                            value={formData.address} onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="group space-y-2">
                        <label htmlFor="instructions" className="block text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 ml-1 group-focus-within:text-gold transition-colors">Additional Preferences</label>
                        <textarea 
                            id="instructions" rows="1" 
                            className="w-full bg-white/2 border border-white/5 focus:border-gold/30 p-5 rounded-2xl outline-none transition-all focus:bg-white/5 resize-none placeholder:text-white/5 text-sm"
                            placeholder="Allergies, door codes, etc."
                            value={formData.instructions} onChange={handleChange}
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full h-20 bg-white hover:bg-gold text-black hover:text-white rounded-2xl font-bold transition-all duration-700 uppercase tracking-[0.4em] text-[12px] shadow-2xl active:scale-[0.98] group relative overflow-hidden mt-6"
                    >
                        <span className="relative z-10">Confirm Gourmet Reservation</span>
                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gold transition-transform duration-700" />
                    </button>
                </form>
            </div>
        </div>
    );
}
