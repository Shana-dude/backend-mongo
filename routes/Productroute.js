const express = require('express');
const router = express.Router();
const { getProduct } = require('../controller/productController');


router.get("/product",getProduct);



module.exports = router;