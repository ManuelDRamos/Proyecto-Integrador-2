const {agregarContenedor} = require("./renderCards.js");
const axios = require("axios")

const getMovies = "https://students-api.up.railway.app/movies"

const getData = async () => {
  try {
      const response = await axios.get(getMovies)
      agregarContenedor(response.data)
  } catch (error) {
      console.log(error)
      fail()
  }
}
getData()


// axios.get(getMovies)
//     .then((data) => {
//       agregarContenedor(data.data)
//   })
//     .catch((error) => {
//       console.log(error)
//       fail()
// })
