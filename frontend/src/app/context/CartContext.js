'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            };
        case 'INITIALIZE_CART':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    useEffect(() => {
        const savedCart = localStorage.getItem('stella-nova-cart');
        if (savedCart) {
            dispatch({ type: 'INITIALIZE_CART', payload: JSON.parse(savedCart) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('stella-nova-cart', JSON.stringify(state.items));
    }, [state.items]);

    const total = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart: state.items, total, itemCount, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
