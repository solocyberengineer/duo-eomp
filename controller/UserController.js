import express from 'express';
import { user } from '../model/index.js';
import bodyParser from 'body-parser';

const userRouter = express.Router();

userRouter.get('/', (req, res)=>{
    try {
        user.fetchUsers(req, res);
    } catch(e) {
        res.json({
            status: 500,
            msg: "Error while trying to fetch users"
        })
    }
})
userRouter.get('/:id', (req, res)=>{
    try {
        user.fetchUser(req, res);
    } catch(e) {
        res.json({
            status: 500,
            msg: "Error while trying to fetch user"
        })
    }
})
userRouter.post('/signup', bodyParser.json(), (req, res)=>{
    try {
        user.signup(req, res);
    } catch(e) {
        res.json({
            status: 500,
            msg: "Error while trying to signup"
        })
    }
})
userRouter.patch('/updateuser', bodyParser.json(), (req, res)=>{
    try {
        user.updateUser(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "An Error Occured"
        })
    }
})
userRouter.delete('/deleteuser/:id', (req, res)=>{
    try {
        user.deleteUser(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "An Error Occured while trying to delete account"
        })
    }
})
userRouter.post('/login', bodyParser.json(), (req, res, next)=>{
    try {
        user.login(req, res, next);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "An Error Occurred while trying to login"
        })
    }
})

export {
    userRouter
}