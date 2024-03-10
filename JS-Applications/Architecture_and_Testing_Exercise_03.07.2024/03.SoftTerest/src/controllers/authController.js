// Utility function to handle API requests
async function makeRequest(url, method, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };
    
    // Check if we have a token and append it to the headers
    const token = localStorage.getItem('userToken');
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        method: method,
        headers: headers,
        body: body ? JSON.stringify(body) : null
    });

    // Check if the response is okay and return the result
    if (response.ok) {
        return response.json(); // This is the body of the response
    } else {
        const error = await response.text();
        throw new Error(error);
    }
}

// Registration functionality
async function registerUser(email, password) {
    const result = await makeRequest('http://localhost:3000/users/register', 'POST', {
        email,
        password
    });

    // Assuming the server responds with a token when the user is successfully registered
    localStorage.setItem('userToken', result.token);
    session.isAuthenticated = true;
    session.user = email; // In a real application, it might be better to store the entire user object
    updateNav();
    showView('dashboard-view'); // Redirect user to dashboard after successful registration
}

// Login functionality
async function loginUser(email, password) {
    const result = await makeRequest('http://localhost:3000/users/login', 'POST', {
        email,
        password
    });

    // Store token and update session
    localStorage.setItem('userToken', result.token);
    session.isAuthenticated = true;
    session.user = email;
    updateNav();
    showView('dashboard-view');
}

// Logout functionality
async function logoutUser() {
    await makeRequest('http://localhost:3000/users/logout', 'GET');
    localStorage.removeItem('userToken'); // Remove token from storage
    session.isAuthenticated = false;
    session.user = null;
    updateNav();
    showView('home-view'); // Redirect to home page
}

// Add these functions to the global window object so they can be accessed from HTML forms
window.authController = {
    registerUser,
    loginUser,
    logoutUser
};