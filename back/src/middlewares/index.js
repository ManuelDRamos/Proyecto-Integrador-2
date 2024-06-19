function testMiddleware(req, res, next){
    console.log("Middleware esta funcionando!")
    next()
}





module.exports = {
    testMiddleware
    
}