import { html } from '../../node_modules/lit-html/lit-html.js';
import * as motorbikesService from '../api/motorbikesService.js';
import { createSubmitHandler } from '../utils.js';

const createTemplate = (onSubmit) => html`
	<section id="create">
		<h2>Add Motorcycle</h2>
		<div class="form">
			<h2>Add Motorcycle</h2>
			<form class="create-form" @submit=${onSubmit}>
				<input
					type="text"
					name="model"
					id="model"
					placeholder="Model"
				/>
				<input
					type="text"
					name="imageUrl"
					id="moto-image"
					placeholder="Moto Image"
				/>
				<input type="number" name="year" id="year" placeholder="Year" />
				<input
					type="number"
					name="mileage"
					id="mileage"
					placeholder="mileage"
				/>
				<input
					type="text"
					name="contact"
					id="contact"
					placeholder="contact"
				/>
				<textarea
					id="about"
					name="about"
					placeholder="about"
					rows="10"
					cols="50"
				></textarea>
				<button type="submit">Add Motorcycle</button>
			</form>
		</div>
	</section>
`;

export async function createView(context) {
	context.render(createTemplate(createSubmitHandler(context, onSubmit)));
}

async function onSubmit(context, data, e) {
	if (Object.values(data).some((x) => x == '')) {
		return alert('All fields are required!');
	}

	await motorbikesService.create({
		model: data.model,
		imageUrl: data.imageUrl,
		year: data.year,
		mileage: data.mileage,
		contact: data.contact,
		about: data.about,
	});

	e.target.reset();
	context.page.redirect('/catalog');
}
