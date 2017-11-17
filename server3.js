const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const mongoose = require('mongoose');
const Product = require('./api/models/productModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ProductsDB');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/productRoutes');
routes(app);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

app.listen(port);

console.log('product list RESTful API server started on: ' + port);
