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
function handleUnauthorizedRequests(req, res, next){}

export {
    errorHandling,
    handleBadRequests,
    handleUnauthorizedRequests
}