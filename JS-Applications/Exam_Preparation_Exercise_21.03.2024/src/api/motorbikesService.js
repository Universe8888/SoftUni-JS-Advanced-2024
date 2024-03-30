import * as api from '../api/api.js';
import { getUserData } from '../utils.js';

const user = getUserData();

const endpoints = {
	dashboard: '/data/motorcycles?sortBy=_createdOn%20desc',
	create: '/data/motorcycles',
	getSearchMotorcycles: function () {
		if (user) {
			return `/data/motorcycles?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`;
		}
		return `/data/motorcycles?where=_ownerId%3D%22%22&sortBy=_createdOn%20desc`;
	},
	searchBikes: (query) => `/data/motorcycles?where=model%20LIKE%20%22${query}%22`,
	getById: '/data/motorcycles/',
	deleteById: '/data/motorcycles/',
	update: '/data/motorcycles/',
};

export async function getDashboardBikes() {
	return api.get(endpoints.dashboard);
}

export async function updateBike(id, data) {
	return api.put(endpoints.update + id, data);
}

export async function deleteById(id) {
	return api.del(endpoints.deleteById + id);
}

export async function getBikeById(id) {
	return api.get(endpoints.getById + id);
}

export async function create(data) {
	return api.post(endpoints.create, data);
}

export async function searchBikes(query) {
	return api.get(endpoints.searchBikes(query));
}
