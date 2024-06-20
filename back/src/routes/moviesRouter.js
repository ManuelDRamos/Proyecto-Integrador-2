const { Router } = require("express");
const { getAllMovies, createMovieController } = require("../controllers/moviesController");
const { testMiddleware, bodyValidation } = require("../middlewares");

const moviesRouter = Router();

moviesRouter.get("/", testMiddleware, getAllMovies);
moviesRouter.post("/", bodyValidation, createMovieController);

module.exports = {
   moviesRouter
};

