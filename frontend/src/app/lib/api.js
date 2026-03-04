const API_BASE_URL = 'http://localhost:5000/api';

export const fetchMenu = async (category) => {
    try {
        const url = category ? `${API_BASE_URL}/menu/${category}` : `${API_BASE_URL}/menu`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch menu');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
};

export const submitOrder = async (orderData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return { success: false, message: 'Server connection error' };
    }
};
