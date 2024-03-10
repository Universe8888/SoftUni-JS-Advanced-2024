// This object will store the status of the current user session
const session = {
    isAuthenticated: false,
    user: null,
};

// Utility functions for showing and hiding views
function showView(viewName) {
    const sections = document.querySelectorAll('.view');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    const targetView = document.getElementById(viewName);
    if (targetView) {
        targetView.style.display = 'block'; // Show the targeted view only
    }
}

// Function to update navigation based on user session
function updateNav() {
    if (session.isAuthenticated) {
        document.getElementById('nav-login').style.display = 'none';
        document.getElementById('nav-register').style.display = 'none';
        document.getElementById('nav-logout').style.display = 'block';
        document.getElementById('nav-create').style.display = 'block';
        document.getElementById('nav-dashboard').style.display = 'block';
    } else {
        document.getElementById('nav-login').style.display = 'block';
        document.getElementById('nav-register').style.display = 'block';
        document.getElementById('nav-logout').style.display = 'none';
        document.getElementById('nav-create').style.display = 'none';
        document.getElementById('nav-dashboard').style.display = 'none';
    }
}

// Event listeners for navigation links
document.getElementById('nav-dashboard').addEventListener('click', () => {
    showView('dashboard-view');
});
document.getElementById('nav-create').addEventListener('click', () => {
    showView('create-view');
});
document.getElementById('nav-login').addEventListener('click', () => {
    showView('login-view');
});
document.getElementById('nav-register').addEventListener('click', () => {
    showView('register-view');
});
document.getElementById('nav-logout').addEventListener('click', () => {
    // Handle logout
    session.isAuthenticated = false;
    session.user = null;
    updateNav(); // Update navigation
    showView('home-view'); // Redirect to home
    // Further actions to clear session from server should be implemented here
});

// Initial actions
document.addEventListener('DOMContentLoaded', () => {
    // Initially, show the home view and update navigation
    showView('home-view');
    updateNav();
});

// Additional functionalities for forms submission, handling login, register,
// and idea creation will be added here.