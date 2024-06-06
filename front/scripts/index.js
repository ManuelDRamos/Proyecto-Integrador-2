const contenedorTarjetas = document.getElementById("tarjetas");

// Función para agregar las tarjetas al contenedor
const agregarContenedor = (data) => {
  const elementosHtml = data.map((pelicula) => elementos(pelicula));
  elementosHtml.forEach((pelicula) => {
    contenedorTarjetas.appendChild(pelicula);
  });
};

// Función para crear los elementos HTML de cada película
const elementos = (movie) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.innerHTML = movie.title;

  const poster = document.createElement("img");
  poster.classList.add("card-image");
  poster.src = movie.poster;

  const year = document.createElement("p");
  year.classList.add("card-text");
  year.innerHTML = movie.year;

  const button = document.createElement("button");
  button.textContent = "Ver ahora";
  button.classList.add("card-button");

  card.appendChild(poster);
  card.appendChild(title);
  card.appendChild(year);
  card.appendChild(button);

  return card;
};

// Función para obtener los datos de la API y agregar las tarjetas
const obtenerDatosYAgregarTarjetas = () => {
  $.get("https://students-api.up.railway.app/movies", (data) => {
    agregarContenedor(data);
  }).fail((error) => {
    console.error("Error al obtener los datos: ", error);
  });
};

// Agregar las tarjetas al cargar la página
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  obtenerDatosYAgregarTarjetas();
});

