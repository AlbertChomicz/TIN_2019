
const express = require('express');
const router = express.Router();
const Product = require('./../model/produkt');
const multer = require("multer");
var path  = require("path");
var fs = require("fs")

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "../public/img"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});


router.post("/photoupload", upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
      console.log(req)
    const tempPath = req.file.path;
    
    
    if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
        const targetPath = path.join(__dirname, `../uploads/${req.file.originalname}`);
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/plain")
          .end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
  }
);

router.get('/', (req, res, next) => {
    const Products = Product.list();
    res.json(Products);
});

router.get('/:ProductsId', (req, res, next) => {
    const ProductsId = req.params.ProductsId;
    const produkt = Product.product_details(ProductsId);
    res.json(produkt);
});

router.post('/', (req, res, next) => {
    
     const newProduct = req.body;
     const createdProduct = Product.add(newProduct);
     res.status(201).json(createdProduct);
});




module.exports.route = router;