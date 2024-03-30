// src/services/userService.js

import { clearUserData, setUserData } from './utils.js';
import * as api from '../services/api.js';

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

export async function register(email, password, rePassword) {
    const result = await api.post(endpoints.register, { email, password, rePassword });
    setUserData(result);
    return result;
}

export async function logout() {
    await api.get('/users/logout');
    localStorage.removeItem('user');
    window.location = '/';
  }