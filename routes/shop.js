const path = require('path');

const express = require('express');

<<<<<<< HEAD
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
=======
const productController = require('../controllers/products');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
>>>>>>> af7cf7b27d58155b95d99880d6ea1b2ed1039220
