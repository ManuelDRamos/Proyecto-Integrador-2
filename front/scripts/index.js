const {agregarContenedor} = require("./renderCards.js");
const { form } = require("./form.js")
const axios = require("axios")

const contenedorTarjetas = document.querySelector("#tarjetas");

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

if(contenedorTarjetas){
  getData()
}else{
  form()
}




// axios.get(getMovies)
//     .then((data) => {
//       agregarContenedor(data.data)
//   })
//     .catch((error) => {
//       console.log(error)
//       fail()
// })
