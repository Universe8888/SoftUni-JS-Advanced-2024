import { html } from '../../node_modules/lit-html/lit-html.js';
import * as motorbikesService from '../api/motorbikesService.js';
import { createSubmitHandler } from '../utils.js';

const editTemplate = (bike, onSubmit) => html`
	<section id="edit">
		<h2>Edit Motorcycle</h2>
		<div class="form">
			<h2>Edit Motorcycle</h2>
			<form class="edit-form" @submit=${onSubmit}>
				<input
					type="text"
					name="model"
					id="model"
					placeholder="Model"
					.value=${bike.model}
				/>
				<input
					type="text"
					name="imageUrl"
					id="moto-image"
					placeholder="Moto Image"
					.value=${bike.imageUrl}
				/>

				<input
					type="number"
					name="year"
					id="year"
					placeholder="Year"
					.value=${bike.year}
				/>
				<input
					type="number"
					name="mileage"
					id="mileage"
					placeholder="mileage"
					.value=${bike.mileage}
				/>
				<input
					type="number"
					name="contact"
					id="contact"
					placeholder="contact"
					.value=${bike.contact}
				/>
				<textarea
					id="about"
					name="about"
					placeholder="about"
					rows="10"
					cols="50"
					.value=${bike.about}
				></textarea>
				<button type="submit">Edit Motorcycle</button>
			</form>
		</div>
	</section>
`;

async function onSubmit(context, data, e) {
	const bikeID = context.params.id;
	if (Object.values(data).some((x) => x == '')) {
		return alert('All fields are required');
	}

	await motorbikesService.updateBike(bikeID, {
		model: data.model,
		imageUrl: data.imageUrl,
		year: data.year,
		mileage: data.mileage,
		contact: data.contact,
		about: data.about,
	});

	e.target.reset();
	context.page.redirect(`/details/${bikeID}`);
}

export async function editView(context) {
	const bikeID = context.params.id;
	const bike = await motorbikesService.getBikeById(bikeID);
	context.render(editTemplate(bike, createSubmitHandler(context, onSubmit)));
}
