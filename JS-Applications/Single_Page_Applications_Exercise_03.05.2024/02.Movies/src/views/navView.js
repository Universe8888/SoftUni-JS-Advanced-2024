// Function to update the navigation bar
function updateNav() {
    const userLinks = document.querySelectorAll('.user');
    const guestLinks = document.querySelectorAll('.guest');
    const welcomeMsg = document.getElementById('welcome-msg');

    // Check if the user is logged in by checking the authToken in sessionStorage
    const authToken = sessionStorage.getItem('authToken');

    if (authToken) {
        // User is logged in
        userLinks.forEach(link => link.style.display = 'block');
        guestLinks.forEach(link => link.style.display = 'none');

        // Optionally, set the welcome message with the user's email
        const userEmail = sessionStorage.getItem('email');
        welcomeMsg.textContent = `Welcome, ${userEmail}`;
    } else {
        // User is not logged in
        userLinks.forEach(link => link.style.display = 'none');
        guestLinks.forEach(link => link.style.display = 'block');
    }
}

// Initial setup function for navigation (e.g., attach event listeners)
function initNavbar() {
    const logoutButton = document.querySelector('.nav-item.user a[href="#logout"]');
    logoutButton.addEventListener('click', onLogout);

    // More setup can go here (e.g., attach more event listeners if necessary)
}

// Logout event handler
async function onLogout(event) {
    event.preventDefault();
    try {
        // Clear the user's session storage (or call authService.logout() if you implement API call for logout)
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');

        // Update the navigation bar to reflect the logout
        updateNav();

        // Optionally, redirect the user to the home page or login page
        // showHome() or showLogin();
        alert('You have been successfully logged out.');
    } catch (error) {
        console.error('Logout failed:', error.message);
    }
}

export { updateNav, initNavbar };