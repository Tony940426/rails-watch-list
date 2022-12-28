// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
window.bootstrap = bootstrap

console.log("Connected!")

const fetchMovies = (movie) => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=e21f347015063e52941c0f886ea87a98&language=en-US&query=${movie}&page=1&include_adult=false`)
  .then(response =>response.json())
  .then(data => {
    const movie = data.results[0]
    console.log(movie.original_title)
    console.log(movie.overview)
    console.log(movie.vote_average)
    console.log(movie.poster_path)
  });
}

const form = document.getElementById("search-form")
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector(".form-control");
  console.log(input.value)
  fetchMovies(input.value)
});
