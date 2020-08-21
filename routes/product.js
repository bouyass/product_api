const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getOneProduct);
router.post('/', productController.addProduct);
router.put('/:id', productController.modifyProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;