// const titleInputValue = document.getElementById("title").value
// const yearInputValue = document.getElementById("year").value
// const directorInputValue = document.getElementById("director").value
// const durationInputValue = document.getElementById("duration").value
// const genreInputValue = document.getElementById("genre").value
// const rateInputValue = document.getElementById("rate").value
// const posterInputValue = document.getElementById("poster").value

// const form = document.getElementById("form")


// form.addEventListener("submit", () => {
//     const moviesValues = {
//         title: titleInputValue,
//         year: yearInputValue,
//         director: directorInputValue,
//         duration: durationInputValue,
//         genre: genreInputValue,
//         rate: rateInputValue,
//         poster: posterInputValue,
//     }
//     axiosPost(moviesValues)
// })

// async function axiosPost(data) {
//     await axiosPost.post("http://localhost:3000/movies" , data)
// }

const movieForm = document.getElementById('movieForm');

movieForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(movieForm);
  const formDataObject = Object.fromEntries(formData.entries());
  console.log('Form data:', formDataObject);

  try {
    const response = await axios.post('http://localhost:3000/movies', formDataObject);
    console.log('Movie added successfully:', response.data);
  } catch (error) {
    console.error('Error adding movie:', error);
  }
});