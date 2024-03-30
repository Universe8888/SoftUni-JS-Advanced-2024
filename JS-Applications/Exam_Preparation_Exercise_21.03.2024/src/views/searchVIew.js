import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as motorbikesServices from '../api/motorbikesService.js';
import { createSubmitHandler } from '../utils.js';

const bikeTemplate = (bike) => html`
	<div class="motorcycle">
		<img src=${bike.imageUrl} alt="example1" />
		<h3 class="model">${bike.model}</h3>
		<a class="details-btn" href="/details/${bike._id}"> More Info </a>
	</div>
`;

const searchTemplate = (bikes, onSubmit) => html`
	<section id="search">
		<div class="form">
			<h4>Search</h4>
			<form class="search-form" @submit=${onSubmit}>
				<input type="text" name="search" id="search-input" />
				<button class="button-list">Search</button>
			</form>
		</div>
		<h4 id="result-heading">Results:</h4>
		<div class="search-result">
			${typeof bikes === 'object' && bikes.length > 0
				? bikes.map((x) => bikeTemplate(x))
				: nothing}
			${typeof bikes === 'object' && bikes.length === 0
				? html`<h2 class="no-avaliable">No result.</h2>`
				: nothing}
		</div>
	</section>
`;

async function onSubmit(context, e) {
	e.preventDefault();
	const formData = new FormData(e.target);
	const query = formData.get('search');
	if (!query) {
		return alert('Search input is required!');
	}

	const bikes = await motorbikesServices.searchBikes(query);
	context.render(searchTemplate(bikes, (e) => onSubmit(context, e)));
}

export async function searchView(context) {
	context.render(searchTemplate([], (e) => onSubmit(context, e)));
}
