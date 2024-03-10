export function isUserAuthenticated() {
    return localStorage.getItem('userToken') !== null;
}

export function getUserId() {
    return localStorage.getItem('userId');
}
