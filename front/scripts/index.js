const {agregarContenedor} = require("./renderCards.js");

// Función para obtener los datos de la API y agregar las tarjetas
const obtenerDatosYAgregarTarjetas = () => {
  $.get("https://students-api.up.railway.app/movies", (data) => {
    agregarContenedor(data);
  }).fail((error) => {
    alert("Error al obtener los datos: ", error);
  });
};

// Agregar las tarjetas al cargar la página
document.addEventListener("DOMContentLoaded", (elemento) => {
  elemento.preventDefault();
  obtenerDatosYAgregarTarjetas();
});

