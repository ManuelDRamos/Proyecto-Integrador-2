const { getMoviesService } = require("../services/moviesServices.js")

function moviesController(req, res){

    const respuesta = getMoviesService()

    res.status(200).json({
        message: "Data Movies",
        data: respuesta
    })
}



module.exports = {
    moviesController
}
