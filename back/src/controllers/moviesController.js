function moviesController(req, res){
    res.status(200).json({
        message: "Informacion de peliculas en construccion"
    })
}



module.exports = {
    moviesController
}
