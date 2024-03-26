// src/utils/api.js

const baseUrl = 'http://localhost:3030'; 

async function request(url, options) {
    try {
        const response = await fetch(baseUrl + url, options);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Something went wrong');
        }
        try {
            return await response.json();
        } catch {
            return response;
        }
    } catch (err) {
        throw err; 
    }
}

export function get(url) {
    return request(url, {
        method: 'GET'
    });
}

export function post(url, data) {
    return request(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export function put(url, data) {
    return request(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export function del(url) {
    return request(url, {
        method: 'DELETE'
    });
}
