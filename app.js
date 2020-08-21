const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const productRouter = require('./routes/product');

const app = express();

app.use(parser.json());


mongoose.connect('mongodb+srv://lyes:root@cluster0.crezr.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {console.log("connexion réussie")})
    .catch((error) => console.log("connexion échouée"));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/products',productRouter);


module.exports =  app;
