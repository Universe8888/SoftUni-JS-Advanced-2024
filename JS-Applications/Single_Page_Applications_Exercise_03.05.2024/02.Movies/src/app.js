import { initNavbar, updateNav } from './views/navView.js';
import { showHome } from './views/homeView.js';
import { setupLogin, showLogin } from './views/loginView.js';
import { setupRegister, showRegister } from './views/registerView.js';
import { setupAddMovie, showAddMovie } from './views/addMovieView.js';
import { setupEditMovie, showEditMovie } from './views/editMovieView.js';
import { setupMovieDetails, showMovieDetails } from './views/movieDetailsView.js';

// Initialization function
function init() {
    const views = {
        'home': showHome,
        'login': showLogin,
        'register': showRegister,
        'addMovie': showAddMovie,
        'editMovie': showEditMovie,
        'details': showMovieDetails,
    };

    initNavbar(); // Initialize navbar
    setupRoutes(); // Setup routes

    // Setup view functions
    setupLogin();
    setupRegister();
    setupAddMovie();
    setupEditMovie();
    setupMovieDetails();

    // Navigate to home page initially
    navigate('home');
}

// Navigation and Routing
function navigate(name) {
    if (views[name]) {
        const view = views[name];
        view(); // Display the view
        updateNav(); // Update the navigation bar
    }
}

function setupRoutes() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewName = link.getAttribute('data-view');
            navigate(viewName);
        });
    });
}

// Start the application
init();