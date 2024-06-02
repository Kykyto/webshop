'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get_list_product = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.get_product_by_id = async (req, res) => {
    try {
        const productId = parseInt(req.params.productId, 10);
        if (isNaN(productId)) {
            return res.status(400).send({ error: 'Invalid productId' });
        }
        const product = await Product.findOne({ productId: productId });
        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).send(err);
    }
};
