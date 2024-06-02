var mongoose = require('mongoose'), Product = require('../models/productModels');

const uri = 'mongodb://localhost:27017/';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');

        const products = [
            { productId: 1, name: "Germinal 1", desc: "description germinal 1", price: 10 },
            { productId: 2, name: "Germinal 2", desc: "description germinal 2", price: 20 },
            { productId: 3, name: "Germinal 3", desc: "description germinal 3", price: 30 },
            { productId: 4, name: "Germinal 4", desc: "description germinal 4", price: 40 },
            { productId: 5, name: "Germinal 5", desc: "description germinal 5", price: 50 },
            { productId: 6, name: "Germinal 6", desc: "description germinal 6", price: 60 },
            { productId: 7, name: "Germinal 7", desc: "description germinal 7", price: 70 },
            { productId: 8, name: "Germinal 8", desc: "description germinal 8", price: 80 },
            { productId: 9, name: "Germinal 9", desc: "description germinal 9", price: 90 },
            { productId: 10, name: "Germinal 10", desc: "description germinal 10", price: 100 },
            { productId: 11, name: "Germinal 11", desc: "description germinal 11", price: 110 }
        ];

        return Product.insertMany(products);
    })
    .then(() => {
        console.log('Products added successfully');
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error:', err);
        mongoose.disconnect();
    });
