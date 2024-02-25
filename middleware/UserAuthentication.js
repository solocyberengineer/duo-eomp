import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const { sign, verify } = jwt;

function createToken(user){
    console.log( user )
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
    console.log(token)
}

export {
    createToken,
    verifyAToken
}