'use strict';

const mongoose = require('mongoose');
const sale = mongoose.model('Sales');

exports.list_all_sales = (req, res) => {
  sale.find({}, (err, sale) => {
    if (err)
      res.send(err);
    res.json(sale);
  });
};

exports.create_a_sale = (req, res) => {
  const new_sale = new sale(req.body);
  new_sale.save((err, sale) => {
    if (err)
      res.send(err);
    res.json(sale);
  });
};

exports.read_a_sale = (req, res) => {
  sale.findById(req.params.saleId, (err, sale) => {
    if (err)
      res.send(err);
    res.json(sale);
  });
};

exports.update_a_sale = (req, res) => {
  sale.findOneAndUpdate(
    { id: req.params.saleId},
    req.body,
    { new: true },
    (err, sale) => {
      if (err)
        res.send(err);
      res.json(sale);
    }
  );
};

exports.delete_a_sale = (req, res) => {

  sale.remove({
    _id: req.params.saleId
  }, (err, sale) => {
    if (err)
      res.send(err);
    res.json({ message: 'sale successfully deleted' });
  });
};
