// src/services/marketService.js

import * as api from './api.js';
import { getUserData } from '../utils/utils.js';

const endpoints = {
    catalog: '/data/market?sortBy=_createdOn%20desc',
    create: '/data/market',
    details: (id) => `/data/market/${id}`,
    delete: (id) => `/data/market/${id}`,
    update: (id) => `/data/market/${id}`,
    myItems: (userId) => `/data/market?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
};

export async function getCatalogItems() {
    return api.get(endpoints.catalog);
}

export async function getItemById(id) {
    return api.get(endpoints.details(id));
}

export async function createItem(data) {
    return api.post(endpoints.create, data);
}

export async function updateItem(id, data) {
    return api.put(endpoints.update(id), data);
}

export async function deleteItem(id) {
    return api.del(endpoints.delete(id));
}

export async function getMyItems() {
    const userId = getUserData()?._id;
    return userId ? api.get(endpoints.myItems(userId)) : null;
}
