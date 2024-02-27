import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errorHandling, handleBadRequests } from './middleware/ErrorHandling.js';
import { productRouter } from './controller/ProductController.js';
import { contactRouter } from './controller/ContactController.js';
import { userRouter } from './controller/UserController.js';

config();

const app = express();
const PORT = +process.env.PORT || 5500;

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true
    }),
    cookieParser(),
    cors()
);

app.get('/', (req, res)=>{
    res.status(200).sendFile('/static/index.html');
})

app.use('/product', productRouter); // has to connect to database
app.use('/user', userRouter); // has the ability to add and remove products from database
app.use('/contact', contactRouter); // this should send a message to us if person fills in the form

app.use('*', errorHandling);
app.use('*', handleBadRequests);

app.listen(PORT, ()=>{console.log(`Server running on: http://localhost:${PORT}`)});