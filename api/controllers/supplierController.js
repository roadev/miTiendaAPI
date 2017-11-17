'use strict';

const mongoose = require('mongoose');
const supplier = mongoose.model('Suppliers');

exports.list_all_suppliers = (req, res) => {
  supplier.find({}, (err, supplier) => {
    if (err)
      res.send(err);
    res.json(supplier);
  });
};

exports.create_a_supplier = (req, res) => {
  const new_supplier = new supplier(req.body);
  new_supplier.save((err, supplier) => {
    if (err)
      res.send(err);
    res.json(supplier);
  });
};

exports.read_a_supplier = (req, res) => {
  supplier.findById(req.params.supplierId, (err, supplier) => {
    if (err)
      res.send(err);
    res.json(supplier);
  });
};

exports.update_a_supplier = (req, res) => {
  supplier.findOneAndUpdate(
    { _id: req.params.supplierId },
    req.body,
    { new: true },
    (err, supplier) => {
      if (err)
        res.send(err);
      res.json(supplier);
    }
  );
};
// supplier.remove({}).exec(function(){});
exports.delete_a_supplier = (req, res) => {
  supplier.remove({
    _id: req.params.supplierId
  }, (err, supplier) => {
    if (err)
      res.send(err);
    res.json({ message: 'supplier successfully deleted' });
  });
};
