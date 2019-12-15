
const express = require('express');
const router = express.Router();
const Product = require('./../model/produkt');
const Posilek = require('./../model/posilek');
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
     //console.log(req)
    const tempPath = req.file.path;
    const nazwa_pliku = req.body.nazwa;
    //console.log(nazwa_pliku)
    
    if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
        const targetPath = path.join(__dirname, `../public/img/${nazwa_pliku}.jpg`);
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

router.get('/posilek_list', (req, res, next) => {
  const posilki = Posilek.list();
  res.json(posilki);
});


router.get('/posilek_list/:PosilekId', (req, res, next) => {
  const ProductsId = req.params.PosilekId;
  const posilek = Posilek.posilek_details(ProductsId);
  res.json(posilek);
});

router.delete('/posilek_list/:PosilekId', (req, res, next) => {
  console.log(req.params.PosilekId);
  const ProductsId = req.params.PosilekId;
  const posilek = Posilek.posilek_delete(ProductsId);
  res.json(posilek);
});


router.get('/:ProductsId', (req, res, next) => {
    const ProductsId = req.params.ProductsId;
    const produkt = Product.product_details(ProductsId);
    res.json(produkt);
});




router.post('/product_edit', (req, res, next) => {
  console.log(req)
  const newProduct = req.body;
  const editedProduct = Product.product_edit(newProduct);
  res.status(201).json(editedProduct);
});

router.delete('/:product_delete', (req, res, next) => {
  console.log(req)
  const deleteProduct = req.params.product_delete;
  const deletedProduct = Product.product_delete(deleteProduct);
  res.status(201).json(deletedProduct);
});


router.post('/posilek_edit', (req, res, next) => {
  console.log(req)
  const newPosilek = req.body;
  console.log(newPosilek);
  const editedPosilek = Posilek.posilek_edit(newPosilek);
  res.status(201).json(editedPosilek);
});




router.post('/', (req, res, next) => {
  console.log(req)
     const newProduct = req.body;
     const createdProduct = Product.add(newProduct);
     res.status(201).json(createdProduct);
});

router.post('/posilek_add', (req, res, next) => {
  console.log("jestemtutututu");
  //console.log(req);
     const newPosilek = req.body;
     const createdPosilek = Posilek.add(newPosilek);
     res.status(201).json(createdPosilek);
});



module.exports.route = router;