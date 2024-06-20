const { Movie } = require("../models/Movies.js")


async function getAllMovies (){
  try {
    return await Movie.find()
  } catch (error) {
    throw error
  }
    
}


async function createMovieServices(movieObject){
  try {
    const movie = new Movie(movieObject)
    return await movie.save()
  } catch (error) {
    throw error
  }   
}



module.exports = {
  getAllMovies,
  createMovieServices,
  
}










