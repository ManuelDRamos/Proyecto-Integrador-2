const axios = require("axios")

function form(){
    document.querySelector("#submitButon").addEventListener("click", (e) => {
        e.preventDefault()
        const title = document.querySelector("#title").value
        const year = document.querySelector("#year").value
        const director = document.querySelector("#director").value
        const poster = document.querySelector("#poster").value
        const rate = document.querySelector("#rate").value
        const duration = document.querySelector("#duration").value
        const genre = document.querySelector("#genre").value
    
        const moviesObject = { title, year, director, poster, rate, duration, genre}
        axios.post("http://localhost:3000/movies", moviesObject)
            .then((response) => {
                if(response.status === 200) alert("Pelicula creada con exito")
            })

    document.querySelector("#resetButon").addEventListener("click", (e) => {
        e.preventDefault()
        document.querySelector("#formPeliculas").reset()
    })        
    
    })

}

module.exports = {
    form
}