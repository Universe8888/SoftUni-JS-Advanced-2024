import { logout } from './api/userService.js';

export function getUserData() {
	return JSON.parse(localStorage.getItem('user'));
}

export function getAccessToken() {
	const user = getUserData();
	if (user) {
		return user.accessToken;
	} else {
		return null;
	}
}

export function clearUserData() {
	localStorage.removeItem('user');
}

export function setUserData(data) {
	localStorage.setItem('user', JSON.stringify(data));
}

export function createSubmitHandler(context, handler) {
	return function (e) {
		e.preventDefault();
		const formData = Object.fromEntries(new FormData(e.target));

		handler(context, formData, e);
	};
}

export function parseQueryString(query = '') {
	return Object.fromEntries(query.split('&').map((kvp) => kvp.split('=')));
}

export function onLogout(context) {
	logout();
	context.page.redirect('/');
}
