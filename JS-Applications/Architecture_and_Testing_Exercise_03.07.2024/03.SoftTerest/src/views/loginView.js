function setupLogin() {
    const loginForm = document.getElementById('login-form');
    if (!loginForm) return; // Safety check if the login form doesn't exist in the current view

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const email = loginForm.querySelector('#inputEmail').value;
        const password = loginForm.querySelector('#inputPassword').value;

        if (email && password) {
            try {
                await window.authController.loginUser(email, password);
                showView('dashboard-view'); // Redirect user to dashboard after successful login
            } catch (error) {
                alert('Failed to login: ' + error.message); // Show error to the user
            }
        } else {
            alert('Email and password are required');
        }
    });
}

// Call setupLogin when the script loads
setupLogin();