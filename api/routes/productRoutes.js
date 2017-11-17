'use strict';

module.exports = (app) => {
	const product = require('../controllers/productController');
	// product Routes
	app.route('/products')
		.get(product.list_all_products)
		.post(product.create_a_product);

	app.route('/products/:productId')
		.get(product.read_a_product)
		.put(product.update_a_product)
		.delete(product.delete_a_product);
};
