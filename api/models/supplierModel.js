'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');

/* connect to your database here */

const connection = mongoose.createConnection("mongodb://localhost/SuppliersDB");

/* define your CounterSchema here */

autoIncrement.initialize(connection);

const SupplierSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the supplier'
  },
  city: {
    type: String,
    Required: 'Kindly enter the city of the supplier'
  },
  phone: {
    type: String,
    Required: 'Kindly enter the phone of the supplier'
  },
  sector: {
    type: String,
    Required: 'Kindly enter the sector of the supplier'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});


SupplierSchema.plugin(autoIncrement.plugin, 'Suppliers');

module.exports = mongoose.model('Suppliers', SupplierSchema);
