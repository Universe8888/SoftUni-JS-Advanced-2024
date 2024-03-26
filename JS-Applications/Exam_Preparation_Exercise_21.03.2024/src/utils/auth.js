// src/utils/auth.js

export function saveSession(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
}

export function clearSession() {
    localStorage.removeItem('userData');
}

export function getSession() {
    const userDataJson = localStorage.getItem('userData');
    if (userDataJson) {
        return JSON.parse(userDataJson);
    }
    return null;
}
