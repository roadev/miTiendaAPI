'use strict';

module.exports = (app) => {
	const supplier = require('../controllers/supplierController');
	// supplier Routes
	app.route('/suppliers')
		.get(supplier.list_all_suppliers)
		.post(supplier.create_a_supplier);

	app.route('/suppliers/:supplierId')
		.get(supplier.read_a_supplier)
		.put(supplier.update_a_supplier)
		.delete(supplier.delete_a_supplier);
};
