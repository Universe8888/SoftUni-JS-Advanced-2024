import * as movieService from '../services/movieService.js';
import { showHome } from './homeView.js';

// Setup the add movie section and form
function setupAddMovie() {
    const addMovieForm = document.getElementById('add-movie-form');
    addMovieForm.addEventListener('submit', onAddMovieSubmit);
}

// Function to handle add movie form submission
async function onAddMovieSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('img').trim();

    // Basic validation could be added here (e.g., check if fields are empty)

    try {
        const authToken = sessionStorage.getItem('authToken');
        if (!authToken) {
            alert('You must be logged in to add a movie.');
            return;
        }

        // Constructing movie object from form data
        const movieData = {
            title,
            description,
            img
        };

        await movieService.addMovie(movieData);
        // Successfully added movie
        showHome(); // Redirect to home page to display all movies, including the newly added one
        event.target.reset(); // Reset form fields after successful submission
    } catch (error) {
        alert('Failed to add movie: ' + error.message);
        // Optionally, you could update the page to show an error message
    }
}

// Function to show add movie form
function showAddMovie() {
    // Check user authentication
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
        alert('You must be logged in to add a movie.');
        return;
    }

    // Hide all sections
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => section.style.display = 'none');

    // Show only the add movie section
    const addMovieSection = document.getElementById('add-movie');
    addMovieSection.style.display = 'block';
}

export { setupAddMovie, showAddMovie };