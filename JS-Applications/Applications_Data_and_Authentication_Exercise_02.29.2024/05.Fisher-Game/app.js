const apiBaseUrl = 'http://localhost:3000';

async function sendApiRequest(path, method = 'GET', data = null, token = null) {
    const options = {
        method,
        headers: token ? { 'X-Authorization': token } : {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${apiBaseUrl}${path}`, options);
    return response.json();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('register').addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if (!email || !password || password !== rePass) {
            console.log('Registration validation failed');
            return; 
        }

        try {
            const data = await sendApiRequest('/users/register', 'POST', { email, password });
            console.log('User registered', data);
        } catch (error) {
            console.error('Registration failed', error);
        }
    });

    document.getElementById('login').addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const data = await sendApiRequest('/users/login', 'POST', { email, password });
            console.log('User logged in', data);
        } catch (error) {
            console.error('Login failed', error);
        }
    });

    document.getElementById('logout').addEventListener('click', async () => {
        try {
            const data = await sendApiRequest('/users/logout', 'GET', null, 'UserToken'); // Replace 'UserToken' with actual token
            console.log('User logged out', data);
        } catch (error) {
            console.error('Logout failed', error);
        }
    });

});