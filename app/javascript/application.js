// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
window.bootstrap = bootstrap

const list = document.getElementById('results');
const form = document.getElementById("search-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = event.currentTarget.querySelector(".form-control");
  fetchMovies(input.value)
});

const fetchMovies = (movie) => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=e21f347015063e52941c0f886ea87a98&language=en-US&query=${movie}&page=1&include_adult=false`)
  .then(response =>response.json())
  .then(insertMovies);
};


const insertMovies = (data) => {
  const movies = data.results
  movies.forEach((movie) => {
    const movieTag = `
    <li>
      <div class = "movie-show-cards">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
        <div class = "movie-show-card-info">
          <h4>${movie.original_title}</h4>
          <p>${movie.overview}</p>
        </div>
      </div>
    </li>`;
    list.insertAdjacentHTML('beforeend', movieTag);
  });
}
