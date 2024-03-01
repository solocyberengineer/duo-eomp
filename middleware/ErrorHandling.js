import jwt from 'jsonwebtoken';

const { TokenExpiredError } = jwt;

function errorHandling(err, req, res, next){
    if( err || res.statusCode >= 400 ){
        res.status( 400 || 500).send({
            status: 400 || 500,
            msg: "Bad Request" || "Internal Server Error"
        })
    } else {
        next();
    }
}
function handleBadRequests(req, res, next){
    res.status(400).send({
        status: 400,
        msg: "this method or page does not work."
    })
}
function handleConnectionError(err, req, res){
    if( err ){
        if( err.errno == -3008 ){
            res.status(503).send({
                status: 503,
                msg: "Service in unavailable"
            })
        } else if( err.errno == 1062 ){
            res.status(403).send({
                status: 403,
                msg: "Already exists"
            })
        } else {
            res.status(503).send({
                status: 503,
                msg: "Service in unavailable"
            })
        }
    } else {
        res.status(503).send({
            status: 503,
            msg: "Service in unavailable"
        })
    }
}

function handleTokenError(err, req, res){
    switch( true ){
        case err instanceof TokenExpiredError:
            res.status(302).send({
                status: 302,
                msg: "User session expired"
            })
            break;
        default:
            res.status(500).send({
                status: 500,
                msg: "Internal Server Error"
            })
            break;
    }
}

export {
    errorHandling,
    handleBadRequests,
    handleConnectionError,
    handleTokenError
}