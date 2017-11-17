'use strict';

module.exports = (app) => {
	const sale = require('../controllers/saleController');
	// sale Routes
	app.route('/sales')
		.get(sale.list_all_sales)
		.post(sale.create_a_sale);

	app.route('/sales/:saleId')
		.get(sale.read_a_sale)
		.put(sale.update_a_sale)
		.delete(sale.delete_a_sale);
};
