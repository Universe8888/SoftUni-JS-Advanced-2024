import { logout as apiLogout } from './userService.js';

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('user'));
}

export function getAccessToken() {
    const user = getUserData();
    return user ? user.accessToken : null;
}

export function clearUserData() {
    sessionStorage.removeItem('user');
}

export function setUserData(data) {
    sessionStorage.setItem('user', JSON.stringify(data));
}

export function createSubmitHandler(context, handler) {
    return function (e) {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));

        handler(context, formData, e);
    };
}

export function parseQueryString(query = '') {
    return Object.fromEntries(query.split('&').map(kvp => {
        const [key, value] = kvp.split('=');
        return [key, value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''];
    }));
}

export async function onLogout(context) {
    try {
        await apiLogout();
        clearUserData();
        if(context.page) {
            context.page.redirect('/');
        }
    } catch (err) {
        console.error('Logout failed:', err);
    }
}
