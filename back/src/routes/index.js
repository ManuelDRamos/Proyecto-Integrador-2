const { Router } = require("express")
const { moviesRouter } = require("./moviesRouter.js")

const router = Router()

router.get("/", (req, res) => {
    res.status(200).send("todo ok en /")
})



router.use("/movies", moviesRouter)


module.exports = {
    router
}