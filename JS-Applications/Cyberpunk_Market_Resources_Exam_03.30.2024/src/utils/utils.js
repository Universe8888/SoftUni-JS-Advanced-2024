// src/utils/utils.js
export function getUserData() {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
}

export function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem('userData');
}

export function getAccessToken() {
    const user = getUserData();
    return user ? user.accessToken : null;
}
