// Import any necessary libraries or modules

// Function to perform logout
async function logout() {
    try {
        // Send GET request to logout endpoint
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: {
                // Add any required headers here
            },
        });

        // Check if logout was successful
        if (response.ok) {
            // Clear any session information stored in browser storage
            // Example: localStorage.removeItem('token');

            // Redirect the user to the Home page
            // Example: window.location.href = '/home';

            // Change the button in navigation
            // Example: document.getElementById('logoutButton').innerText = 'Login';
        } else {
            // Handle logout error
            // Example: console.error('Logout failed');
        }
    } catch (error) {
        // Handle any other errors
        // Example: console.error('An error occurred', error);
    }
}

// Call the logout function when the logout button is clicked
// Example: document.getElementById('logoutButton').addEventListener('click', logout);