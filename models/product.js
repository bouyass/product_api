const mongoose = require('mongoose');


const product = mongoose.Schema({
    name: {type:String, unique:true},
    description: {type:String},
    price: {type:Number},
    inStock: {type:Boolean}
});

module.exports = mongoose.model('product',product);