document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const userData = await response.json();
                sessionStorage.setItem('userData', JSON.stringify(userData));  // Use sessionStorage for session persistence
                window.location.href = '/home.html';
            } else {
                const errorData = await response.json();
                errorMessage.textContent = errorData.message || 'Failed to login. Please try again.';
            }
        } catch (error) {
            console.error('Login failed:', error);
            errorMessage.textContent = 'Login error. Please check the console.';
        }
    });

    // Disable all buttons if not logged in
    if (!sessionStorage.getItem('userData')) {
        document.querySelectorAll('button').forEach(button => {
            if (!button.closest('#login-form')) {
                button.disabled = true;
            }
        });
    }
});
