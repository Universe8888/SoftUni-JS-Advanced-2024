async function registerUser() {
    // Retrieve email and password from user input
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const email = emailInput.value;
    const password = passwordInput.value;

    // Make a POST request to the registration endpoint
    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        // Handle the response from the server
        if (response.ok) {
            // Registration successful, store user data in session or local storage
            // TODO: Implement storing user data
            sessionStorage.setItem('email', email);

            // Redirect to the home page
            window.location.href = '/home'; // Replace with the actual home page URL
        } else {
            // Registration failed, display error message
            const errorData = await response.json();
            const errorMessage = errorData.message;
            const errorElement = document.getElementById('errorElement');
            errorElement.textContent = errorMessage;
            // TODO: Allow the user to try registering again
        }
    } catch (error) {
        console.error('An error occurred during registration:', error);
        // TODO: Display error message to the user and allow them to try registering again
    }
}

registerUser();