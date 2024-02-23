import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: "Users Page"
    })
})

export {
    userRouter
}