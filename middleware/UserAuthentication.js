import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const { sign, verify } = jwt;

function createToken(user){
    return sign({
        emailAddress: user.emailAddress,
        userPassword: user.Password
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    })
}

function verifyAToken(token){}