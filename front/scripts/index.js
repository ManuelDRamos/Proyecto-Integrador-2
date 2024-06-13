const {agregarContenedor} = require("./renderCards.js");
const axios = require("axios")



async  function getData(){
  try {
      const response = await axios.get("http://localhost:3000/movies")
      console.log(response.data.data);
      agregarContenedor(response.data.data)
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
