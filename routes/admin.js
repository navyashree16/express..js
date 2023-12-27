const path = require('path');

const express = require('express');

<<<<<<< HEAD
const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
=======
const productsController = require('../controllers/products');

const router = express.Router();

// //admin/add-product => GET
 router.get('/add-product',productsController.getAddProduct);


// // /admin/add-product => POST
 router.post('/add-product',productsController.postAddProduct);
>>>>>>> af7cf7b27d58155b95d99880d6ea1b2ed1039220

module.exports = router;