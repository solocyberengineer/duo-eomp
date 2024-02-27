import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const { sign, verify } = jwt;

function createToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    })
}

function verifyAToken(token){
    // const token = req.headers['authorization'] // what is the correct way to set a auth token

    if( token ){
        if( verify(token, process.env.SECRET_KEY) ) {
            return true;
        } else {
            return({
                status: 403,
                msg: "Please provide credentials"
            });
        }
    } else {
        return({
            status: 302,
            msg: "Please login."
        })
    }
}

export {
    createToken,
    verifyAToken
}