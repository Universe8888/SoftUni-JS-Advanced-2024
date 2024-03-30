// src/services/api.js
import { clearUserData, getAccessToken } from '../utils/utils.js';

const host = 'http://localhost:3030'; // Adjust if your API host is different

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    const token = getAccessToken();
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);
        
        if (response.ok !== true) {
            if (response.status === 403) {
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status === 204 ? null : response.json();
    } catch (err) {
        // Handle errors such as network issues
        alert(err.message);
        throw err;
    }
}

export async function get(url) {
    return request('GET', url);
}

export async function post(url, data) {
    return request('POST', url, data);
}

export async function put(url, data) {
    return request('PUT', url, data);
}

export async function del(url) {
    return request('DELETE', url);
}
