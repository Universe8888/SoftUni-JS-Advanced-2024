function setupRegister() {
    const registerForm = document.getElementById('register-form');
    if (!registerForm) return; // Safety check if the registration form doesn't exist in the current view

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const email = registerForm.querySelector('#email').value;
        const password = registerForm.querySelector('#password').value;
        const repeatPassword = registerForm.querySelector('#inputRepeatPassword').value;

        if (!email || !password || !repeatPassword) {
            alert('All fields are required.');
            return;
        }

        if (password !== repeatPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            await window.authController.registerUser(email, password);
            showView('dashboard-view'); // Redirect user to dashboard after successful registration
        } catch (error) {
            alert('Failed to register: ' + error.message); // Show error to the user
        }
    });
}

// Call setupRegister when the script loads
setupRegister();