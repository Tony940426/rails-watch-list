// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
window.bootstrap = bootstrap

// const list = document.querySelector('#results');

// const insertMovies = (data) => {
//   const movies = data.results
//   movies.forEach((movie) => {
//     console.log(movie.original_title)
//     console.log(movie.overview)
//     console.log(movie.poster_path)

//     const movieTag = `
//     <li>
//       <div class = "show-cards">
//         <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="" >
//         <div class = "show-card-info">
//           <p>${movie.original_title}</p>
//           <p>${movie.overview}</p>
//         </div>
//       </div>
//     </li>`;
//     list.insertAdjacentHTML('beforeend', movieTag);
//   });
// }

// const fetchMovies = (movie) => {
//   fetch(`https://api.themoviedb.org/3/search/movie?api_key=e21f347015063e52941c0f886ea87a98&language=en-US&query=${movie}&page=1&include_adult=false`)
//   .then(response =>response.json())
//   .then(insertMovies);
// };

// const form = document.getElementById("search-form")
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   list.innerHTML = '';
//   const input = event.currentTarget.querySelector(".form-control");
//   fetchMovies(input.value)
// });
