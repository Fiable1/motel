const express = require('express');
const router = express.Router();
const menuData = require('../data/menuData');

// GET /api/menu
router.get('/', (req, res) => {
    res.json(menuData);
});

// GET /api/menu/:category
router.get('/:category', (req, res) => {
    const category = req.params.category.toLowerCase();

    if (menuData[category]) {
        res.json(menuData[category]);
    } else {
        res.status(404).json({ message: "Category not found" });
    }
});

module.exports = router;
