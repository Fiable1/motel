const menuData = {
    specials: [
        {
            id: "s1",
            name: "Stella Nova Burger Deluxe",
            price: 20000,
            description: "Juicy beef patty with bacon, cheese, lettuce, tomato, and our special sauce. Served with crispy fries.",
            image: "/images/burger.jpg",
            tag: "Special",
            labels: ["Popular", "Served with Fries"]
        },
        {
            id: "s2",
            name: "Garden Fresh Salad",
            price: 12000,
            description: "Mixed greens, cherry tomatoes, cucumber, red onion, and feta cheese with balsamic vinaigrette.",
            image: "/images/salad.jpg",
            tag: "Special",
            labels: ["Vegetarian", "Healthy", "Gluten-Free"]
        },
        {
            id: "s3",
            name: "Signature Cocktail",
            price: 15000,
            description: "Our bartender's special mix of premium spirits with fresh fruit and herbs.",
            image: "/images/cocktail.webp",
            tag: "Special",
            labels: ["Alcoholic", "House Special"]
        },
        {
            id: "s4",
            name: "Grilled Chicken",
            price: 18000,
            description: "Tender grilled chicken breast with herbs and spices, served with roasted vegetables.",
            image: "/images/chicken.webp",
            tag: "Special",
            labels: ["High Protein", "Healthy"]
        },
        {
            id: "s5",
            name: "Chocolate Cake",
            price: 8000,
            description: "Rich, moist chocolate cake with layers of chocolate ganache and buttercream frosting.",
            image: "/images/cake.jpg",
            tag: "Special",
            labels: ["Dessert", "Vegetarian"]
        }
    ],
    breakfast: [
        {
            id: "b1",
            name: "Sunrise Breakfast Platter",
            price: 18000,
            description: "Two eggs any style, bacon, sausage, roasted tomatoes, mushrooms, baked beans, and toast.",
            image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Chef's Choice",
            labels: ["Hearty", "Protein-rich"]
        },
        {
            id: "b2",
            name: "Continental Breakfast",
            price: 12000,
            description: "Fresh pastries, seasonal fruits, yogurt, and choice of coffee or tea.",
            image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Light Option",
            labels: ["Light", "Vegetarian"]
        },
        {
            id: "b3",
            name: "African Breakfast",
            price: 15000,
            description: "Mandazi, chapati, beans, sukuma wiki, and avocado with your choice of tea.",
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Local Favorite",
            labels: ["Local", "Vegetarian Option"]
        },
        {
            id: "b4",
            name: "Western Omelette",
            price: 14000,
            description: "Three-egg omelette with ham, bell peppers, onions, and cheese. Served with breakfast potatoes.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Gluten-Free", "High Protein"]
        },
        {
            id: "b5",
            name: "Eggs Benedict",
            price: 16000,
            description: "Poached eggs on English muffins with Canadian bacon and hollandaise sauce.",
            image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Classic", "Rich"]
        },
        {
            id: "b6",
            name: "Vegetarian Breakfast Bowl",
            price: 13000,
            description: "Scrambled eggs, black beans, avocado, salsa, and cheese on a bed of quinoa.",
            image: "https://images.unsplash.com/photo-1571638810996-0175f13c6bb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Gluten-Free", "Healthy"]
        },
        {
            id: "b7",
            name: "Classic Pancakes",
            price: 10000,
            description: "Stack of three fluffy buttermilk pancakes with maple syrup and butter.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Sweet"]
        },
        {
            id: "b8",
            name: "Belgian Waffle",
            price: 12000,
            description: "Crispy Belgian waffle topped with fresh berries and whipped cream.",
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Berry Delight"]
        },
        {
            id: "b9",
            name: "Banana Nut Pancakes",
            price: 13000,
            description: "Pancakes with mashed bananas and walnuts, topped with caramel sauce.",
            image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Nutty"]
        },
        {
            id: "b10",
            name: "Acai Bowl",
            price: 14000,
            description: "Blended acai topped with granola, banana, strawberries, and honey.",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegan", "Gluten-Free", "Superfood"]
        },
        {
            id: "b11",
            name: "Avocado Toast",
            price: 11000,
            description: "Smashed avocado on artisan bread with cherry tomatoes and microgreens.",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Healthy Fats"]
        },
        {
            id: "b12",
            name: "Yogurt Parfait",
            price: 9000,
            description: "Layers of Greek yogurt, granola, and mixed berries with a drizzle of honey.",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "High Protein"]
        },
        {
            id: "b13",
            name: "Fresh Brewed Coffee",
            price: 4000,
            description: "Locally sourced Rwandan coffee, freshly brewed. Free refills.",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Hot", "Local"]
        },
        {
            id: "b14",
            name: "Fresh Juice",
            price: 6000,
            description: "Choice of orange, watermelon, pineapple, or mixed fruit juice.",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Fresh", "Vitamin C"]
        },
        {
            id: "b15",
            name: "Breakfast Smoothies",
            price: 8000,
            description: "Choose from strawberry banana, green detox, or tropical mango smoothie.",
            image: "https://images.unsplash.com/photo-1564894809617-ef2c1c3cd677?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Energizing"]
        }
    ],
    lunch: [
        {
            id: "l1",
            name: "Club Sandwich",
            price: 16000,
            description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
            image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Popular",
            labels: ["Hearty", "With Fries"]
        },
        {
            id: "l2",
            name: "Vegetarian Wrap",
            price: 14000,
            description: "Hummus, roasted vegetables, avocado, and greens in a whole wheat wrap.",
            image: "https://images.unsplash.com/photo-1565299585323-38174c739b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Healthy"]
        },
        {
            id: "l3",
            name: "Steak Sandwich",
            price: 19000,
            description: "Grilled steak with caramelized onions, mushrooms, and provolone on ciabatta.",
            image: "https://images.unsplash.com/photo-1551504734-b464e32a163a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Protein-rich", "Hearty"]
        },
        {
            id: "l4",
            name: "Caesar Salad",
            price: 15000,
            description: "Crisp romaine, parmesan, croutons, and our homemade Caesar dressing.",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Classic",
            labels: ["Add Chicken +5,000", "Add Shrimp +7,000"]
        },
        {
            id: "l5",
            name: "African Quinoa Salad",
            price: 17000,
            description: "Quinoa with roasted sweet potatoes, avocado, mango, and citrus dressing.",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegan", "Gluten-Free"]
        },
        {
            id: "l6",
            name: "Grilled Chicken Salad",
            price: 18000,
            description: "Mixed greens with grilled chicken, nuts, berries, and balsamic vinaigrette.",
            image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["High Protein", "Gluten-Free"]
        },
        {
            id: "l7",
            name: "Grilled Tilapia",
            price: 22000,
            description: "Fresh tilapia from Lake Kivu, grilled with local spices and served with plantains and vegetables.",
            image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Local Favorite",
            labels: ["Local", "Gluten-Free"]
        },
        {
            id: "l8",
            name: "Beef Brochettes",
            price: 24000,
            description: "Traditional Rwandan beef skewers marinated in spices and grilled to perfection.",
            image: "https://images.unsplash.com/photo-1603360946369-dc9bbd814503?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Local Specialty", "With Ibirayi"]
        },
        {
            id: "l9",
            name: "Vegetable Curry",
            price: 18000,
            description: "Seasonal vegetables in a fragrant coconut curry sauce, served with rice.",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Vegan Option"]
        },
        {
            id: "l10",
            name: "Spaghetti Bolognese",
            price: 20000,
            description: "Classic spaghetti with rich meat sauce, parmesan, and garlic bread.",
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Hearty", "Family Favorite"]
        },
        {
            id: "l11",
            name: "Margherita Pizza",
            price: 18000,
            description: "Classic pizza with tomato sauce, fresh mozzarella, and basil.",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "12-inch"]
        },
        {
            id: "l12",
            name: "Chicken Alfredo Pasta",
            price: 22000,
            description: "Fettuccine pasta with grilled chicken and creamy Alfredo sauce.",
            image: "https://images.unsplash.com/photo-1613564834361-9436947217b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Rich", "Creamy"]
        },
        {
            id: "l13",
            name: "French Fries",
            price: 6000,
            description: "Crispy golden fries served with ketchup or mayonnaise.",
            image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Add Cheese +2,000"]
        },
        {
            id: "l14",
            name: "Grilled Vegetables",
            price: 8000,
            description: "Seasonal vegetables grilled with olive oil and herbs.",
            image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegan", "Gluten-Free"]
        },
        {
            id: "l15",
            name: "Ibirayi",
            price: 7000,
            description: "Traditional Rwandan fried potatoes with local spices.",
            image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Local", "Vegetarian"]
        }
    ],
    dinner: [
        {
            id: "d1",
            name: "Crispy Calamari",
            price: 18000,
            description: "Lightly battered and fried calamari served with lemon aioli and marinara sauce.",
            image: "https://images.unsplash.com/photo-1619894991209-32b8fb1d5ce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Popular",
            labels: ["Seafood", "Shareable"]
        },
        {
            id: "d2",
            name: "Stuffed Mushrooms",
            price: 15000,
            description: "Mushroom caps filled with herbed cream cheese and breadcrumbs, baked to perfection.",
            image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Baked"]
        },
        {
            id: "d3",
            name: "Beef Brochettes",
            price: 20000,
            description: "Traditional Rwandan beef skewers marinated in spices and grilled to perfection.",
            image: "https://images.unsplash.com/photo-1603360946369-dc9bbd814503?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Local Specialty", "Spicy"]
        },
        {
            id: "d4",
            name: "Filet Mignon",
            price: 38000,
            description: "8oz premium beef tenderloin with red wine reduction, roasted potatoes, and seasonal vegetables.",
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Chef's Special",
            labels: ["Premium Cut", "Gluten-Free"]
        },
        {
            id: "d5",
            name: "Grilled Tilapia",
            price: 25000,
            description: "Fresh tilapia from Lake Kivu, grilled with local spices and served with plantains and vegetables.",
            image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Local", "Gluten-Free"]
        },
        {
            id: "d6",
            name: "Herb-Crusted Chicken",
            price: 28000,
            description: "Chicken breast coated in herbed breadcrumbs, served with mashed potatoes and green beans.",
            image: "https://images.unsplash.com/photo-1555939595-93efb2f5c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Comfort Food", "Crispy"]
        },
        {
            id: "d7",
            name: "Spaghetti Bolognese",
            price: 22000,
            description: "Classic spaghetti with rich meat sauce, parmesan, and garlic bread.",
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Hearty", "Family Favorite"]
        },
        {
            id: "d8",
            name: "Chicken Alfredo",
            price: 26000,
            description: "Fettuccine pasta with grilled chicken and creamy Alfredo sauce.",
            image: "https://images.unsplash.com/photo-1613564834361-9436947217b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Rich", "Creamy"]
        },
        {
            id: "d9",
            name: "Seafood Linguine",
            price: 32000,
            description: "Linguine pasta with shrimp, scallops, and mussels in a white wine garlic sauce.",
            image: "https://images.unsplash.com/photo-1608755728592-2d6a3ee5b0a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Seafood", "Gourmet"]
        },
        {
            id: "d10",
            name: "Mushroom Risotto",
            price: 24000,
            description: "Creamy arborio rice with wild mushrooms, parmesan, and fresh herbs.",
            image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Chef's Recommendation",
            labels: ["Vegetarian", "Creamy"]
        },
        {
            id: "d11",
            name: "Vegetable Curry",
            price: 20000,
            description: "Seasonal vegetables in a fragrant coconut curry sauce, served with rice.",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegetarian", "Vegan Option"]
        },
        {
            id: "d12",
            name: "Stuffed Bell Peppers",
            price: 22000,
            description: "Bell peppers filled with quinoa, black beans, corn, and cheese, baked to perfection.",
            image: "https://images.unsplash.com/photo-1598866592122-6e8a58c4b311?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Vegan Option", "Gluten-Free"]
        },
        {
            id: "d13",
            name: "Chocolate Lava Cake",
            price: 12000,
            description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            tag: "Signature",
            labels: ["Chocolate", "Warm"]
        },
        {
            id: "d14",
            name: "Crème Brûlée",
            price: 10000,
            description: "Classic vanilla custard with a caramelized sugar top.",
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Creamy", "Classic"]
        },
        {
            id: "d15",
            name: "Fresh Fruit Platter",
            price: 9000,
            description: "Seasonal fresh fruits with a honey yogurt dip.",
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Healthy", "Refreshing"]
        }
    ],
    beverages: [
        {
            id: "v1",
            name: "Iced Tea",
            price: 3000,
            description: "Refreshing house-made iced tea with a hint of lemon.",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Cold", "Fresh"]
        },
        {
            id: "v2",
            name: "Espresso",
            price: 2500,
            description: "Strong, rich Italian-style espresso shot.",
            image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            labels: ["Hot", "Strong"]
        }
    ]
};

module.exports = menuData;
