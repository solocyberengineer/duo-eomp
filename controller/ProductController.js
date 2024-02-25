import express from 'express';
import { product } from '../model/index.js';

const productRouter = express.Router();

productRouter.get('/', (req, res)=>{
    try {
        product.fetchProducts(req, res);
    } catch(e) {
        console.log(e);
        res.json({
            status: res.statusCode,
            msg: "Error"
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
            msg: "Error"
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
            msg: "Error"
        })
    }
})
productRouter.patch('/editProduct', (req, res)=>{
    try {
        product.editProduct(req, res);
    } catch(e) {
        console.log(e);
        res.json({
            status: res.statusCode,
            msg: "Error"
        })
    }
})
productRouter.delete('/delProduct', (req, res)=>{
    try {
        product.delProduct(req, res);
    } catch(e) {
        console.log(e);
        res.json({
            status: res.statusCode,
            msg: "Error"
        })
    }
})


export {
    productRouter
}