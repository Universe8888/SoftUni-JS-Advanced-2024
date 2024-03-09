document.addEventListener('DOMContentLoaded', () => {
    checkAuthState();
    setupEventListeners();
});

function setupEventListeners() {
    // Example for a login form submission
    document.getElementById('login-form').addEventListener('submit', login);

    // Add other event listeners here
    document.getElementById('register-form').addEventListener('submit', register);
    document.getElementById('add-movie-form').addEventListener('submit', addMovie);
    // Add click event listeners for edit and delete using event delegation
    document.getElementById('movies-list').addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A') {
            const movieElement = event.target.closest('.card');
            const movieId = movieElement.dataset.id;
            if (event.target.matches('.edit-button')) {
                editMovie(movieId);
            } else if (event.target.matches('.delete-button')) {
                deleteMovie(movieId);
            } else if (event.target.matches('.like-button')) {
                handleLike(movieId);
            }
        }
    });
}

function checkAuthState() {
    const userToken = localStorage.getItem('userToken'); // Retrieve the stored token
    const userEmail = localStorage.getItem('userEmail'); // Retrieve stored user email if available

    if (userToken) {
        // User is logged in
        document.querySelectorAll('.user').forEach(elem => elem.style.display = 'block');
        document.querySelectorAll('.guest').forEach(elem => elem.style.display = 'none');

        // Update UI elements that rely on user being logged in
        // For example, update welcome message with the user's email
        const welcomeMsg = document.getElementById('welcome-msg');
        if (welcomeMsg) {
            welcomeMsg.textContent = `Welcome, ${userEmail}`;
        }

        // Load data that requires user to be authenticated
        loadMovies(); // Load movies if this is part of your app's authenticated experience
    } else {
        // User is not logged in
        document.querySelectorAll('.user').forEach(elem => elem.style.display = 'none');
        document.querySelectorAll('.guest').forEach(elem => elem.style.display = 'block');

        // Update or clear UI elements that rely on user being logged in
        // For example, clear the welcome message
        const welcomeMsg = document.getElementById('welcome-msg');
        if (welcomeMsg) {
            welcomeMsg.textContent = ''; // Clear welcome message
        }
    }
}


async function login(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the email and password from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Define the login payload
    const loginPayload = {
        email: email,
        password: password,
    };

    try {
        // Send the login request to the server
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginPayload),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json(); // Parse JSON response

        // Here you can handle the login success scenario:
        // - Save the token to localStorage or cookies
        // - Update the UI to show the logged-in state
        // - Redirect the user or load movies etc.
        localStorage.setItem('userToken', data.accessToken);
        localStorage.setItem('userEmail', data.email); // Store user email or other necessary details
        checkAuthState(); // Update UI based on auth state
        loadMovies(); // Optionally load movies if your app requires this on login
    } catch (error) {
        // Handle any errors that occurred during the login
        console.error('Login failed:', error);
        // Optionally update the UI to show an error message
    }
}


async function register(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the email, password, and repeat password from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    // Optionally, add front-end validation for the passwords and email format.

    // Define the registration payload
    const registerPayload = {
        email: email,
        password: password,
        repeatPassword: repeatPassword, // Your backend needs to validate that password and repeatPassword are the same
    };

    try {
        // Send the registration request to the server
        const response = await fetch('/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerPayload),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json(); // Parse JSON response

        // Here you can handle the registration success scenario:
        // - Save the token to localStorage or cookies
        // - Update the UI to show the logged-in state
        localStorage.setItem('userToken', data.accessToken);
        localStorage.setItem('userEmail', data.email); // Store user email or other necessary details
        checkAuthState(); // Update UI based on auth state
        loadMovies(); // Optionally load movies if your app requires this on login
    } catch (error) {
        // Handle any errors that occurred during the registration
        console.error('Registration failed:', error);
        // Optionally update the UI to show an error message
    }
}


async function loadMovies() {
    try {
        // Send the request to the server for the movies
        const response = await fetch('/data/movies', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Include the Authorization header if your API requires authentication
                // 'Authorization': 'Bearer ' + localStorage.getItem('userToken')
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const movies = await response.json(); // Parse JSON response

        // Select the movies list container
        const moviesList = document.getElementById('movies-list');
        moviesList.innerHTML = ''; // Clear current movies

        // Iterate over each movie and add it to the HTML
        movies.forEach(movie => {
            moviesList.innerHTML += `
                <li class="card mb-4" data-id="${movie._id}">
                    <img class="card-img-top" src="${movie.img}" alt="Movie image" width="400">
                    <div class="card-body">
                        <h4 class="card-title">${movie.title}</h4>
                        <a href="#" class="btn btn-info details-button">Details</a>
                    </div>
                </li>
            `;
        });
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Failed to load movies:', error);
        // Optionally update the UI to show an error message
    }
}


async function addMovie(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the movie title, description, and image URL from the form
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('imageUrl').value;

    // Define the movie payload
    const moviePayload = {
        title: title,
        description: description,
        img: imageUrl, // Ensure this matches what your backend expects
    };

    try {
        // Send the add movie request to the server
        const response = await fetch('/data/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include the Authorization header if your API requires authentication
                'Authorization': 'Bearer ' + localStorage.getItem('userToken')
            },
            body: JSON.stringify(moviePayload),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const movie = await response.json(); // Parse JSON response

        // Optionally, add the new movie to the UI
        const moviesList = document.getElementById('movies-list');
        const movieElement = document.createElement('li');
        movieElement.className = 'card mb-4';
        movieElement.innerHTML = `
            <img class="card-img-top" src="${movie.img}" alt="${movie.title}" width="400"/>
            <div class="card-body">
                <h4 class="card-title">${movie.title}</h4>
                <a href="#" class="btn btn-primary">Details</a>
            </div>`;
        moviesList.appendChild(movieElement);

        // Clear the form for future submissions
        document.getElementById('add-movie-form').reset();
    } catch (error) {
        // Handle any errors that occurred during the process
        console.error('Failed to add movie:', error);
        // Optionally update the UI to show an error message
    }
}


async function editMovie(movieId) {
    // Retrieve the existing movie data from the server
    try {
        const response = await fetch(`/data/movies/${movieId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Include the Authorization header if your API requires it
                'Authorization': 'Bearer ' + localStorage.getItem('userToken')
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const movie = await response.json();

        // Populate the edit form with the existing movie data
        document.getElementById('edit-title').value = movie.title;
        document.getElementById('edit-description').value = movie.description;
        document.getElementById('edit-imageUrl').value = movie.img;

        // Show the edit movie form (you might use a modal or a separate section in your UI)
        document.getElementById('edit-movie').style.display = 'block';

        // Attach the movieId to the submit button for reference
        document.getElementById('edit-movie-form').dataset.movieId = movieId;
    } catch (error) {
        console.error('Failed to fetch movie details:', error);
    }
}

// Make sure to add event listener to your edit form submission that calls a function to actually perform the update

document.getElementById('edit-movie-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve updated movie data from the form
    const title = document.getElementById('edit-title').value;
    const description = document.getElementById('edit-description').value;
    const imageUrl = document.getElementById('edit-imageUrl').value;
    const movieId = event.target.dataset.movieId; // Retrieve the movieId stored earlier

    // Define the movie payload
    const moviePayload = {
        title: title,
        description: description,
        img: imageUrl, // Ensure this matches what your backend expects
    };

    // Send the update movie request to the server
    try {
        const response = await fetch(`/data/movies/${movieId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('userToken')
            },
            body: JSON.stringify(moviePayload),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const updatedMovie = await response.json(); // Parse JSON response

        // Optionally, update the movie in the UI without reloading the entire list
        // You will need logic here to find the existing movie element and update its content

        // Hide the edit movie form once the update is successful
        document.getElementById('edit-movie').style.display = 'none';
    } catch (error) {
        console.error('Failed to update movie:', error);
        // Optionally update the UI to show an error message
    }
});


async function deleteMovie(movieId) {
    // Confirmation before deletion
    if (!confirm('Are you sure you want to delete this movie?')) return;

    try {
        // Send the delete request to the server
        const response = await fetch(`/data/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                // Include the Authorization header if your API requires authentication
                'Authorization': 'Bearer ' + localStorage.getItem('userToken')
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        // Optionally, parse the JSON response if your server sends back data
        // const data = await response.json();

        // Remove the movie from the UI
        const movieElement = document.querySelector(`[data-id="${movieId}"]`);
        if (movieElement) {
            movieElement.remove();
        }

        // Alternatively, you might want to reload the movies to ensure the UI is in sync with the backend
        // loadMovies();
    } catch (error) {
        console.error('Failed to delete movie:', error);
        // Optionally update the UI to show an error message
    }
}


async function handleLike(movieId) {
    // Check if the movie is already liked by the user
    const userToken = localStorage.getItem('userToken'); // Assuming you store token here
    const userId = localStorage.getItem('userId'); // Assuming you store user ID here

    if (!userToken) {
        alert('Please log in to like movies.');
        return;
    }

    const likeButton = document.querySelector(`[data-movie-id="${movieId}"] .like-button`);
    const liked = likeButton.classList.contains('liked'); // Check if the movie is already liked

    try {
        let response;

        if (!liked) {
            // User wants to like the movie
            response = await fetch('/data/likes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                },
                body: JSON.stringify({ movieId: movieId, userId: userId })
            });
        } else {
            // User wants to unlike the movie
            // You need the like ID to make a DELETE request; assuming you store it on the button
            const likeId = likeButton.dataset.likeId;
            response = await fetch(`/data/likes/${likeId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + userToken
                },
            });
        }

        if (!response.ok) {
            throw new Error('Failed to perform the like operation');
        }

        // Optionally, update the like button and count
        const data = await response.json(); // Assuming the server returns updated like data

        if (!liked) {
            likeButton.classList.add('liked');
            likeButton.dataset.likeId = data.id; // Store the new like ID for possible unliking
        } else {
            likeButton.classList.remove('liked');
            delete likeButton.dataset.likeId; // Remove the stored like ID
        }

        // Update like count if you display it
        const likeCountElement = document.querySelector(`[data-movie-id="${movieId}"] .like-count`);
        if (likeCountElement) {
            likeCountElement.textContent = `Likes: ${data.likesCount || 0}`;
        }
    } catch (error) {
        console.error('Failed to handle the like:', error);
        // Optionally update the UI to show an error message
    }
}