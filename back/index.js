const { app } = require("./src/server.js")


const PORT  = 3000


app.listen(PORT, () => {
    console.log(`El servidor esta activo en el puerto ${PORT}`)
})