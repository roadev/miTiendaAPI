'use strict';

const mongoose = require('mongoose');
const sale = mongoose.model('Sales');



exports.list_all_sales = function(req, res) {
  sale.find({}, function(err, sale) {
    if (err)
      res.send(err);
    res.json(sale);
  });
};


exports.create_a_sale = function(req, res) {
  const new_sale = new sale(req.body);
  new_sale.save(function(err, sale) {
    if (err)
      res.send(err);
    res.json(sale);
  });
};

exports.read_a_sale = function(req, res) {
  sale.findById(req.params.saleId, function(err, sale) {
    if (err)
      res.send(err);
    res.json(sale);
  });
};

exports.update_a_sale = function(req, res) {
  sale.findOneAndUpdate({_id:req.params.saleId}, req.body, {new: true}, function(err, sale) {
    if (err)
      res.send(err);
    res.json(sale);
  });
};
// sale.remove({}).exec(function(){});
exports.delete_a_sale = function(req, res) {

  sale.remove({
    _id: req.params.saleId
  }, function(err, sale) {
    if (err)
      res.send(err);
    res.json({ message: 'sale successfully deleted' });
  });
};
