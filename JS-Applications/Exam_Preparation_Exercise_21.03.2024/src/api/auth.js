// Define the base API URL
const BASE_URL = 'http://localhost:3030';

// Function to register a new user
export async function register(email, password) {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  return data;
}

// Function to log in a user
export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  return data;
}

// Function to log out a user
export async function logout(token) {
  const response = await fetch(`${BASE_URL}/users/logout`, {
    method: 'GET',
    headers: { 'X-Authorization': token }
  });

  return response.ok; // true if the logout was successful
}
