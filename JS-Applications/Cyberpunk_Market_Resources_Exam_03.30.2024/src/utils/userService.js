// src/services/userService.js
import * as api from './api.js';
import { setUserData, clearUserData } from '../utils/utils.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

export async function login(email, password) {
    const result = await api.post(endpoints.login, { email, password });
    setUserData(result);
    return result;
}

export async function register(email, password) {
    const result = await api.post(endpoints.register, { email, password });
    setUserData(result);
    return result;
}

export async function logout() {
    const result = await api.get(endpoints.logout);
    clearUserData();
    return result;
}
