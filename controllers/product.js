const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then((products) => {
            if(products.length > 0){
                return res.status(200).json({products});
            }else{
                return res.status(200).json({message:'la liste de produits est vide'});
            }
        })
        .catch((error) => res.status(404).json({error}));
};

exports.getOneProduct = (req, res, next) => {
    Product.findOne({_id:req.params.id})
        .then((product) => {
            if(product !== undefined){
                return res.status(200).json({product});
            }else{
                return res.status(200).json({message:"le produit with "+req.params.id + " n'eciste pas."});
            }
        })
        .catch((error) => res.status(404).json({error}));
};

exports.addProduct = (req, res, next) => {
    const product = new Product({
        ...req.body
    });

    product.save()
        .then(() => res.status(200).json({ product }))
        .catch((error) => res.status(400).json({error}));
};

exports.modifyProduct = (req, res, next) => {
       Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
           .then(() => res.status(200).json({message:'Modified!'}))
           .catch((error) => res.status(500).json({error}));
};

exports.deleteProduct = (req ,res, next) => {
    Product.deleteOne({_id:req.params.id})
        .then(() => res.status(200).json({message:'Deleted!'}))
        .catch((error) => res.status(500).json({error}));
}