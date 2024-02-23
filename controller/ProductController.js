import express from 'express';

const productRouter = express.Router();

productRouter.get('/', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: "Products"
    })
})

export {
    productRouter
}