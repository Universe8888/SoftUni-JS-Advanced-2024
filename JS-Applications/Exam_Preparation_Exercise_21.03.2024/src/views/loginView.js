import { createSubmitHandler } from '../utils.js';
import * as userService from '../api/userService.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

const loginTemplate = (onSubmit) => html` <section id="login">
	<div class="form">
		<h2>Login</h2>
		<form class="login-form" @submit=${onSubmit}>
			<input type="text" name="email" id="email" placeholder="email" />
			<input
				type="password"
				name="password"
				id="password"
				placeholder="password"
			/>
			<button type="submit">login</button>
			<p class="message">
				Not registered? <a href="/register">Create an account</a>
			</p>
		</form>
	</div>
</section>`;

export async function loginView(context) {
	context.render(loginTemplate(createSubmitHandler(context, onSubmit)));
}

async function onSubmit(context, data, e) {
	if (data.email === '' || data.password === '') {
		return alert('All fields are required!');
	}
	await userService.login(data.email, data.password);
	e.target.reset();
	context.page.redirect('/');
}
