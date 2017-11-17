'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');

/* connect to your database here */

const connection = mongoose.createConnection("mongodb://localhost/SalesDB");

/* define your CounterSchema here */

autoIncrement.initialize(connection);

const SaleSchema = new Schema({
  amount: {
    type: Number,
    Required: 'Kindly enter the name of the sale'
  },
  items: Array,
  created_date: {
    type: Date,
    default: Date.now
  },
});


SaleSchema.plugin(autoIncrement.plugin, 'Sales');
// const Sale = mongoose.model('Sales', SaleSchema);

module.exports = mongoose.model('Sales', SaleSchema);
