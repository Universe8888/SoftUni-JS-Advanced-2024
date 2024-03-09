const baseUrl = 'http://localhost:3000';

// Function to register a new user
async function register(email, password) {
    try {
        const response = await fetch(`${baseUrl}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Store the user's authentication data (e.g., token) in session or local storage
            sessionStorage.setItem('authToken', data.accessToken);
            sessionStorage.setItem('userId', data._id);
            sessionStorage.setItem('email', data.email);
            return data; // Contains user data and token
        } else {
            // If there's an error, convert it into an Error object and throw it
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (err) {
        throw err; // Pass the error up to the caller
    }
}

// Function to log in a user
async function login(email, password) {
    try {
        const response = await fetch(`${baseUrl}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Store the user's authentication data in session or local storage
            sessionStorage.setItem('authToken', data.accessToken);
            sessionStorage.setItem('userId', data._id);
            sessionStorage.setItem('email', data.email);
            return data; // Contains user data and token
        } else {
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (err) {
        throw err; // Pass the error up to the caller
    }
}

// Function to log out a user
async function logout() {
    try {
        const response = await fetch(`${baseUrl}/users/logout`, {
            method: 'GET', // Your API might require a different method, e.g., POST
            headers: {
                'X-Authorization': sessionStorage.getItem('authToken')
            }
        });

        if (response.ok) {
            // Clear user's authentication data from session or local storage
            sessionStorage.removeItem('authToken');
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('email');
        } else {
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (err) {
        throw err; // Pass the error up to the caller
    }
}

export { register, login, logout };