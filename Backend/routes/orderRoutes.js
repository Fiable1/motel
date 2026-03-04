const express = require('express');
const router = express.Router();

// POST /api/orders
router.post('/', (req, res) => {
    const { name, phone, email, address, instructions, items } = req.body;

    // Basic validation
    if (!name || !phone || !address || !items || items.length === 0) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields (name, phone, address, and items)."
        });
    }

    // In a real app, you would save this to a database
    const orderId = `SN-${Math.floor(Math.random() * 1000000)}`;
    const orderDate = new Date().toISOString();

    console.log('New Order Received:', { orderId, orderDate, ...req.body });

    res.status(201).json({
        success: true,
        message: "Your order has been placed successfully!",
        orderId,
        orderDate
    });
});

module.exports = router;
