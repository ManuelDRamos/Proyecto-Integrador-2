function testMiddleware(req, res, next){
    console.log("Middleware esta funcionando!")
    next()
}


function bodyValidation(req, res, next){
    const requiredField = ["title", "year", "director", "duration", "genre", "rate", "poster"]
    const missingField = requiredField.filter((field) => !req.body[field] )
    if(missingField.length > 0){
        return res.status(400).json({
            message: `Faltan los siguientes campos para crear una movie: ${missingField.join(", ")}`
        })
    }else{
        return next()
    }
}

module.exports = {
    testMiddleware,
    bodyValidation
    
}