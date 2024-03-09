import * as authService from '../services/authService.js';
import { updateNav } from './navView.js';
import { showHome } from './homeView.js';

// Setup the login section and form
function setupLogin() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', onLoginSubmit);
}

// Function to handle login form submission
async function onLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    // Validation could be added here (e.g., check if fields are empty)

    try {
        await authService.login(email, password);
        // Successfully logged in
        updateNav(); // Update the navbar to reflect the login
        showHome(); // Show the home page now that the user is logged in
        event.target.reset(); // Reset form fields after successful login
    } catch (error) {
        alert('Login failed: ' + error.message);
        // Optionally, you could update the page to show an error message
    }
}

// Function to show login form
function showLogin() {
    // Hide all sections
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => section.style.display = 'none');

    // Show only the login section
    const loginSection = document.getElementById('form-login');
    loginSection.style.display = 'block';
}

export { setupLogin, showLogin };