const { Router } = require("express");
const { moviesRouter } = require("./moviesRouter.js");

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("todo ok en /");
});

router.post("/", (req, res) => {
    res.status(201).send("todo ok");
});

router.use("/movies", moviesRouter);

module.exports = {
    router
};