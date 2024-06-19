const { Movie } = require("../models/Movies.js")


const getAllMovies = () => {
    return  Movie.find()
};


const createMovieController = async (movieData) => {
   const movie = new Movie(movieData);
  await movie.save();
};



module.exports = {
  getAllMovies,
  createMovieController,
  
}










