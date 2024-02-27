import express from 'express';
import { product } from '../model/index.js';
import bodyParser from 'body-parser';

const productRouter = express.Router();

productRouter.get('/', (req, res)=>{
    try {
        product.fetchProducts(req, res);
    } catch(e) {
        console.log(e);
        res.json({
            status: res.statusCode,
            msg: "Error while trying to get all products"
        })
    }
})
productRouter.get('/:id', (req, res)=>{
    try {
        product.fetchProduct(req, res);
    } catch(e) {
        console.log(e);
        res.json({
            status: res.statusCode,
            msg: "Error while trying to get product by id"
        })
    }
})
productRouter.post('/newProduct', (req, res)=>{
    try {
        product.newProduct(req, res);
    } catch(e) {
        console.log(e);
        res.json({
            status: res.statusCode,
            msg: "Error while trying to add a new product"
        })
    }
})
productRouter.patch('/editProduct', bodyParser.json(), (req, res)=>{
    try {
        product.editProduct(req, res);
    } catch(e) {
        console.log(e);
        res.json({
            status: res.statusCode,
            msg: "Error while trying to edit product"
        })
    }
})
productRouter.delete('/delProduct/:id', (req, res)=>{
    try {
        product.deleteProduct(req, res);
    } catch(e) {
        console.log(e);
        res.json({
            status: res.statusCode,
            msg: "Error while trying to delete product"
        })
    }
})


export {
    productRouter
}