import * as movieService from '../services/movieService.js';
import { updateNav } from './navView.js';

// Function to show home page and list movies
async function showHome() {
    const authToken = sessionStorage.getItem('authToken');
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = ''; // Clear current movies

    // Try to load movies from the backend and display them
    try {
        const movies = await movieService.getAllMovies();
        movies.forEach(movie => {
            const movieElement = createMovieCard(movie);
            moviesList.appendChild(movieElement);
        });
    } catch (error) {
        alert('Failed to load movies: ' + error.message);
    }

    // Check if the user is logged in and display the add movie button if they are
    const addMovieButton = document.getElementById('add-movie-button');
    if (authToken) {
        addMovieButton.style.display = 'block';
    } else {
        addMovieButton.style.display = 'none';
    }

    // Make sure the navigation is updated in case this affects active links
    updateNav();

    // Make the home page section visible
    const homeSection = document.getElementById('home-page');
    homeSection.style.display = 'block';
}

// Function to create a movie card element
function createMovieCard(movie) {
    const liElement = document.createElement('li');
    liElement.className = 'card mb-4';
    liElement.innerHTML = `
        <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
            <a href="#" class="btn btn-info">Details</a>
        </div>
    `;
    // You can add event listeners to the buttons here (e.g., for the details button)
    return liElement;
}

// We export the function to make it available to other modules
export { showHome };
