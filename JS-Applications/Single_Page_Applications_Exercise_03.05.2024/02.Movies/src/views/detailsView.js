import * as movieService from '../services/movieService.js';
import { showHome } from './homeView.js';

let currentMovieId = null;

// Function to show movie details
async function showDetails(movieId) {
    currentMovieId = movieId; // Store current movie ID to use in other functions
    const movieDetailsSection = document.getElementById('movie-example');
    
    // Hide all sections
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => section.style.display = 'none');

    try {
        const movie = await movieService.getMovieById(movieId);
        // Populate movie details
        movieDetailsSection.querySelector('h1').textContent = `Movie title: ${movie.title}`;
        movieDetailsSection.querySelector('.img-thumbnail').src = movie.img;
        movieDetailsSection.querySelector('.my-3').textContent = movie.description;
        
        // Show edit and delete buttons only if the user is the owner of the movie
        const userId = sessionStorage.getItem('userId');
        if (userId === movie._ownerId) {
            movieDetailsSection.querySelector('.btn-danger').style.display = 'inline-block';
            movieDetailsSection.querySelector('.btn-warning').style.display = 'inline-block';
        } else {
            movieDetailsSection.querySelector('.btn-danger').style.display = 'none';
            movieDetailsSection.querySelector('.btn-warning').style.display = 'none';
        }

        // Show the details section
        movieDetailsSection.style.display = 'block';
    } catch (error) {
        alert('Failed to load movie details: ' + error.message);
        showHome(); // Redirect to home if there's an error fetching movie details
    }
}

// Bind events to edit and delete buttons
function setupMovieDetails() {
    const movieDetailsSection = document.getElementById('movie-example');
    movieDetailsSection.querySelector('.btn-danger').addEventListener('click', onDelete);
    movieDetailsSection.querySelector('.btn-warning').addEventListener('click', onEdit);
}

async function onDelete() {
    const confirmed = confirm('Are you sure you want to delete this movie?');
    if (confirmed) {
        try {
            await movieService.deleteMovie(currentMovieId);
            showHome(); // Redirect to home page after deletion
        } catch (error) {
            alert('Failed to delete movie: ' + error.message);
        }
    }
}

function onEdit() {
    // Redirect to edit movie view, functionality to be implemented in editMovieView.js
    // This could be something like: showEditMovie(currentMovieId);
    console.log('Edit functionality not yet implemented.'); // Placeholder
}

export { showDetails, setupMovieDetails };