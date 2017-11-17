'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');

/* connect to your database here */

const connection = mongoose.createConnection("mongodb://localhost/ProductsDB");

/* define your CounterSchema here */

autoIncrement.initialize(connection);

const ProductSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the product'
  },
  sku: {
    type: String,
    Required: 'Kindly enter the sku of the product'
  },
  supplier: {
    type: Number,
    Required: 'Kindly enter the supplier id of the product'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});


ProductSchema.plugin(autoIncrement.plugin, 'Products');

module.exports = mongoose.model('Products', ProductSchema);
