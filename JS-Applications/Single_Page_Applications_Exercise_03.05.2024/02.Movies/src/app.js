document.addEventListener('DOMContentLoaded', () => {
    checkAuthState();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('login-form').addEventListener('submit', login);
    document.getElementById('register-form').addEventListener('submit', register);
    document.getElementById('add-movie-form').addEventListener('submit', addMovie);
    document.getElementById('movies-list').addEventListener('click', handleMovieInteraction);
    document.getElementById('edit-movie-form').addEventListener('submit', updateMovie);
}

function checkAuthState() {
    const userToken = localStorage.getItem('userToken');
    const userEmail = localStorage.getItem('userEmail');

    if (userToken) {
        document.querySelectorAll('.user').forEach(elem => elem.style.display = 'block');
        document.querySelectorAll('.guest').forEach(elem => elem.style.display = 'none');
        const welcomeMsg = document.getElementById('welcome-msg');
        if (welcomeMsg) welcomeMsg.textContent = `Welcome, ${userEmail}`;
        loadMovies();
    } else {
        document.querySelectorAll('.user').forEach(elem => elem.style.display = 'none');
        document.querySelectorAll('.guest').forEach(elem => elem.style.display = 'block');
        const welcomeMsg = document.getElementById('welcome-msg');
        if (welcomeMsg) welcomeMsg.textContent = '';
    }
}

async function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        localStorage.setItem('userToken', data.accessToken);
        localStorage.setItem('userEmail', email);
        checkAuthState();
    } catch (error) {
        console.error('Login failed:', error);
    }
}

async function register(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    if (password !== repeatPassword || password.length < 6) {
        // Implement error handling, such as displaying a message to the user
        console.error('Password must be at least 6 characters and match the repeat password');
        return;
    }

    try {
        const response = await fetch('/users/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        localStorage.setItem('userToken', data.accessToken);
        localStorage.setItem('userEmail', email);
        checkAuthState();
    } catch (error) {
        console.error('Registration failed:', error);
    }
}


async function loadMovies() {
    try {
        const response = await fetch('/data/movies', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const movies = await response.json();
        const moviesList = document.getElementById('movies-list');
        moviesList.innerHTML = '';
        movies.forEach(movie => {
            const isAuthor = movie._ownerId === localStorage.getItem('userId'); // Assuming userID is saved during login
            moviesList.innerHTML += `
                <li class="card mb-4" data-id="${movie._id}">
                    <img class="card-img-top" src="${movie.img}" alt="Movie image">
                    <div class="card-body">
                        <h4 class="card-title">${movie.title}</h4>
                        <a href="#" class="btn btn-info details-button">Details</a>
                        ${isAuthor ? `<a href="#" class="btn btn-warning edit-button">Edit</a>` : ''}
                        ${isAuthor ? `<a href="#" class="btn btn-danger delete-button">Delete</a>` : ''}
                    </div>
                </li>`;
        });
    } catch (error) {
        console.error('Failed to load movies:', error);
    }
}


async function addMovie(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const img = document.getElementById('imageUrl').value;
    if (!title || !description || !img) {
        console.error('All fields must be filled');
        return;
    }

    try {
        const response = await fetch('/data/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            },
            body: JSON.stringify({title, description, img})
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        loadMovies(); // Reload movies to show the new addition
    } catch (error) {
        console.error('Failed to add movie:', error);
    }
}

function handleMovieInteraction(event) {
    event.preventDefault();
    if (event.target.className.includes('details-button')) {
        const movieId = event.target.closest('.card').dataset.id;
        showMovieDetails(movieId);
    } else if (event.target.className.includes('edit-button')) {
        const movieId = event.target.closest('.card').dataset.id;
        editMovie(movieId);
    } else if (event.target.className.includes('delete-button')) {
        const movieId = event.target.closest('.card').dataset.id;
        deleteMovie(movieId);
    } else if (event.target.className.includes('like-button')) {
        const movieId = event.target.closest('.card').dataset.id;
        handleLike(movieId);
    }
}

async function updateMovie(event) {
    event.preventDefault();
    const movieId = event.target.dataset.movieId;
    const title = document.getElementById('edit-title').value;
    const description = document.getElementById('edit-description').value;
    const img = document.getElementById('edit-imageUrl').value;
    try {
        const response = await fetch(`/data/movies/${movieId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            },
            body: JSON.stringify({title, description, img})
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        loadMovies();
    } catch (error) {
        console.error('Failed to update movie:', error);
    }
}

async function deleteMovie(movieId) {
    if (!confirm('Are you sure you want to delete this movie?')) return;
    try {
        const response = await fetch(`/data/movies/${movieId}`, {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${localStorage.getItem('userToken')}`}
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        loadMovies();
    } catch (error) {
        console.error('Failed to delete movie:', error);
    }
}

async function handleLike(movieId) {
    try {
        const userToken = localStorage.getItem('userToken');
        if (!userToken) {
            alert('Please log in to like movies.');
            return;
        }
        const response = await fetch(`/data/likes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({movieId})
        });
        if (!response.ok) throw new Error('Failed to like the movie');
        // Update UI or like count here...
    } catch (error) {
        console.error('Failed to handle the like:', error);
    }
}

async function editMovie(movieId) {
    try {
        const response = await fetch(`/data/movies/${movieId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`
            },
        });

        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const movie = await response.json();
        document.getElementById('edit-title').value = movie.title;
        document.getElementById('edit-description').value = movie.description;
        document.getElementById('edit-imageUrl').value = movie.img;

        // Show the edit movie form or modal here
        document.getElementById('edit-movie').style.display = 'block';
        document.getElementById('edit-movie-form').dataset.movieId = movieId;
    } catch (error) {
        console.error('Failed to fetch movie details:', error);
    }
}