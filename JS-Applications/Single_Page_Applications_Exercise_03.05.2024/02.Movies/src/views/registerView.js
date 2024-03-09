import * as authService from '../services/authService.js';
import { updateNav } from './navView.js';
import { showHome } from './homeView.js';

// Setup the registration section and form
function setupRegister() {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', onRegisterSubmit);
}

// Function to handle registration form submission
async function onRegisterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeatPassword').trim();

    // Basic validation (could be expanded)
    if (password !== repeatPassword) {
        alert('Passwords do not match.');
        return;
    }

    try {
        await authService.register(email, password);
        // Successfully registered
        updateNav(); // Update the navbar to reflect the user's login state
        showHome(); // Show the home page now that the user is registered and logged in
        event.target.reset(); // Reset form fields after successful registration
    } catch (error) {
        alert('Registration failed: ' + error.message);
        // Optionally, update the page to show an error message
    }
}

// Function to show registration form
function showRegister() {
    // Hide all sections
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => section.style.display = 'none');

    // Show only the registration section
    const registerSection = document.getElementById('form-sign-up');
    registerSection.style.display = 'block';
}

export { setupRegister, showRegister };