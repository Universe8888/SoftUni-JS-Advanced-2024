// src/utils/storage.js

export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return null;
}

export function removeItem(key) {
    localStorage.removeItem(key);
}
