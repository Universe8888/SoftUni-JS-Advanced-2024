// src/services/marketService.js
import * as api from './api.js';
import { getUserData } from '../utils/utils.js';

const endpoints = {
    catalog: '/data/catalog', // Adjust if your endpoint is different
    create: '/data/catalog',
    itemDetails: (id) => `/data/catalog/${id}`,
    itemEdit: (id) => `/data/catalog/${id}`,
    itemDelete: (id) => `/data/catalog/${id}`,
    myItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`
};

export async function getCatalog() {
    return api.get(endpoints.catalog);
}

export async function createItem(data) {
    return api.post(endpoints.create, data);
}

export async function getItemById(id) {
    return api.get(endpoints.itemDetails(id));
}

export async function updateItem(id, data) {
    return api.put(endpoints.itemEdit(id), data);
}

export async function deleteItem(id) {
    return api.del(endpoints.itemDelete(id));
}

export async function getMyItems() {
    const user = getUserData();
    return api.get(endpoints.myItems(user._id));
}
