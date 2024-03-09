const baseUrl = 'http://localhost:3000/data/movies';

async function getAllMovies() {
    try {
        const response = await fetch(`${baseUrl}`);
        if (response.ok) {
            const movies = await response.json();
            return movies; // Returns a list of movies
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        throw error; // Pass the error up to the caller
    }
}

// Function to add a new movie
async function addMovie(movieData) {
    try {
        const response = await fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken'),
            },
            body: JSON.stringify(movieData),
        });

        if (response.ok) {
            const movie = await response.json();
            return movie; // Return the new movie data
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        throw error; // Pass the error up to the caller
    }
}

// Function to update an existing movie
async function updateMovie(id, movieData) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken'),
            },
            body: JSON.stringify(movieData),
        });

        if (response.ok) {
            const movie = await response.json();
            return movie; // Return the updated movie data
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        throw error; // Pass the error up to the caller
    }
}

// Function to delete an existing movie
async function deleteMovie(id) {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'X-Authorization': sessionStorage.getItem('authToken'),
            },
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }
    } catch (error) {
        throw error; // Pass the error up to the caller
    }
}

export { getAllMovies, addMovie, updateMovie, deleteMovie };