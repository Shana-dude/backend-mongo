const express = require('express');
const router = express.Router();
const { getProduct, postProduct, deleteProduct } = require('../controller/productController');


router.get("/product",getProduct);
router.post("/postproduct",postProduct);
router.delete("/deleteproduct/:id",deleteProduct);


module.exports = router;