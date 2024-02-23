import express from 'express';

const contactRouter = express.Router();

contactRouter.get('/', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: "Contact Page"
    })
})

contactRouter.post('/message', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: "Contact Page"
    })
})

export {
    contactRouter
}