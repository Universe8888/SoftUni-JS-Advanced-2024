import { html } from '../../node_modules/lit-html/lit-html.js';
import * as motorbikesServices from '../api/motorbikesService.js';

const itemTemplate = (bike) => html` <div class="motorcycle">
	<img src=${bike.imageUrl} alt="example1" />
	<h3 class="model">${bike.model}</h3>
	<p class="year">Year: ${bike.year}</p>
	<p class="mileage">Mileage: ${bike.mileage} km.</p>
	<p class="contact">Contact Number: ${bike.contact}</p>
	<a class="details-btn" href="/details/${bike._id}">More Info</a>
</div>`;

const catalogTemplate = (bikes) => html`
	<h2>Available Motorcycles</h2>
	<section id="dashboard">
		${bikes.length > 0
			? bikes.map((bike) => itemTemplate(bike))
			: html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
	</section>
`;

export async function catalogView(context) {
	const bikes = await motorbikesServices.getDashboardBikes();
	context.render(catalogTemplate(bikes));
}
