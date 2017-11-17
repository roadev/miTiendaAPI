'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');

/* connect to your database here */

const connection = mongoose.createConnection("mongodb://localhost/Blogdb");

/* define your CounterSchema here */

autoIncrement.initialize(connection);

const PostSchema = new Schema({
  title: {
    type: String,
    Required: 'Kindly enter the name of the post'
  },
  tags: Array,
  created_date: {
    type: Date,
    default: Date.now
  },
});


PostSchema.plugin(autoIncrement.plugin, 'Posts');
// const Post = mongoose.model('Posts', PostSchema);

module.exports = mongoose.model('Posts', PostSchema);
