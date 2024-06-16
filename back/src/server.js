const express = require("express")
const { router } = require("./routes/index.js")
const morgan = require("morgan")
const cors = require("cors")
// const movieRouter = require("./routes/moviesRouter.js")


const app = express()


app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
// app.use("/", movieRouter)

app.use(router)


module.exports = {
    app
}