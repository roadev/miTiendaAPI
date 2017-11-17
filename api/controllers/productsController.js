'use strict';

const mongoose = require('mongoose');
const product = mongoose.model('Products');

exports.list_all_products = (req, res) => {
  product.find({}, (err, product) => {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.create_a_product = (req, res) => {
  const new_product = new product(req.body);
  new_product.save((err, product) => {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.read_a_product = (req, res) => {
  product.findById(req.params.productId, (err, product) => {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update_a_product = (req, res) => {
  product.findOneAndUpdate(
    { id: req.params.productId },
    req.body,
    { new: true },
    (err, product) => {
      if (err)
        res.send(err);
      res.json(product);
    }
  );
};

exports.delete_a_product = (req, res) => {
  product.remove({
    id: req.params.productId
  }, (err, product) => {
    if (err)
      res.send(err);
    res.json({ message: 'product successfully deleted' });
  });
};
