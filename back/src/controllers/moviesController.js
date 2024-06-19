const movieService = require("../services/moviesServices.js");

async function getAllMovies(req, res) {
  try {
    const movies = await movieService.getAllMovies();
    res.json({
      message:"Movies Data",
      data: movies});
  } catch (error) {
    console.error("Error al obtener las películas:", error.message);
    res.status(500).json({ error: error.message });
  }
}

const createMovieController = async(req, res) => {
      try {
        const movieData = req.body
        const movie = await createMovieController[{movieData}]
        res.status(201).json({
          message:"todo esta bien",
          data: movie
        })
      } catch (error) {
        res.status(400).json({
          message: "No se pudo crear la pelicula"
        })
      }
}




module.exports = {
  getAllMovies,
  createMovieController,
}