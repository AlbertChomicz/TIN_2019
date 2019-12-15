const express = require('express')
const port = 3000
const bodyParser = require("body-parser")


express({ security: { csrf: false } });
const app = express()
// parsuje dane typu application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parsuje dane typu application/json
app.use(bodyParser.json())


app.use(express.static('public'));


const ProductService = require('.\\api\\ProductService');
app.use('/api/products', ProductService.route);


app.listen(port)