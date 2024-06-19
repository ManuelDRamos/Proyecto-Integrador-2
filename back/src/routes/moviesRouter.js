const { Router } = require("express");
const { getAllMovies, createMovieController } = require("../controllers/moviesController");
const { testMiddleware } = require("../middlewares");

const moviesRouter = Router();

moviesRouter.get("/", testMiddleware, getAllMovies);
moviesRouter.post("/", testMiddleware, createMovieController);

module.exports = {
   moviesRouter
};

