'use client';

import { useState, useEffect } from 'react';
import { fetchMenu, submitOrder } from '../lib/api';
import MenuSection from './MenuSection';
import CartSidebar from './CartSidebar';
import CartToggle from './CartToggle';
import OrderModal from './OrderModal';
import { useCart } from '../context/CartContext';

export default function CategoryPage({ category, title, description }) {
    const [items, setItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const { dispatch } = useCart();

    useEffect(() => {
        async function loadData() {
            const data = await fetchMenu(category);
            if (data) setItems(data);
        }
        loadData();
    }, [category]);

    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsOrderModalOpen(true);
    };

    const handleOrderSubmit = async (formData) => {
        const cartItems = JSON.parse(localStorage.getItem('stella-nova-cart') || '[]');
        const orderData = { ...formData, items: cartItems };
        const result = await submitOrder(orderData);
        if (result.success) {
            alert(`Order placed successfully! Order ID: ${result.orderId}`);
            dispatch({ type: 'CLEAR_CART' });
            setIsOrderModalOpen(false);
        } else {
            alert('Error: ' + result.message);
        }
    };

    return (
        <div className="min-h-screen pt-48 pb-20 px-6">
            <CartToggle onToggle={() => setIsCartOpen(!isCartOpen)} />
            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onCheckout={handleCheckout}
            />
            <OrderModal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
                onSubmit={handleOrderSubmit}
            />

            <div className="flex flex-col items-center justify-center pt-24 pb-12 px-5 text-center fade-in animate-in fade-in slide-in-from-bottom-5 duration-700">
                <h1 className="text-5xl md:text-6xl font-bold font-playfair italic mb-6">
                    <span className="bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">{title}</span>
                </h1>
                <p className="text-sm md:text-base max-w-xl mx-auto text-white/50 leading-relaxed font-outfit font-light italic">
                    {description}
                </p>
            </div>

            <MenuSection title={title} items={items} />
        </div>
    );
}
