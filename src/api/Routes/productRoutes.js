'use strict';

module.exports = function(app) {
    const products = require('../controllers/productController');

    app.route('/products')
        .get(products.get_list_product);

    app.route('/products/:productId')
        .get(products.get_product_by_id);
};
