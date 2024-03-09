import * as movieService from '../services/movieService.js';
import { showHome } from './homeView.js';

let currentId = null; // Store the current movie's ID being edited

// Setup the edit movie section and form
function setupEditMovie() {
    const editForm = document.getElementById('edit-movie-form');
    editForm.addEventListener('submit', onEditSubmit);
}

// Function to pre-fill the form with movie's data for editing
async function showEditMovie(id) {
    // Hide all sections
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => section.style.display = 'none');

    // Show only the edit movie section
    const editSection = document.getElementById('edit-movie');
    editSection.style.display = 'block';

    // Fetch the movie details and fill the form
    try {
        const movieData = await movieService.getMovieById(id);
        editSection.querySelector('[name="title"]').value = movieData.title;
        editSection.querySelector('[name="description"]').value = movieData.description;
        editSection.querySelector('[name="img"]').value = movieData.img;
        currentId = id; // Store current movie ID to use when submitting the form
    } catch (error) {
        alert('Failed to load movie data for editing: ' + error.message);
    }
}

// Function to handle edit form submission
async function onEditSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const movieData = {
        title: formData.get('title').trim(),
        description: formData.get('description').trim(),
        img: formData.get('img').trim()
    };

    try {
        await movieService.updateMovie(currentId, movieData);
        // Successfully updated
        showHome(); // Show the home page with the updated list of movies
    } catch (error) {
        alert('Failed to update movie: ' + error.message);
    }
}

export { setupEditMovie, showEditMovie };