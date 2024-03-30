import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../utils.js';

const root = document.querySelector('#main-element');
const header = document.querySelector(`#header-element`);

const navigationView = (user) => html`
	<a id="logo" href="/">
		<img id="logo-img" src="./images/logo.png" alt="" />
	</a>

	<nav>
		<div>
			<a href="/catalog">Motorcycles</a>
			<a href="/search">Search</a>
		</div>

		${user
			? html`
					<!-- Logged-in users -->
					<div class="user">
						<a href="/create">Add Motorcycle</a>
						<a href="/logout">Logout</a>
					</div>
			  `
			: html`
					<!-- Guest users -->
					<div class="guest">
						<a href="/login">Login</a>
						<a href="/register">Register</a>
					</div>
			  `}
	</nav>
`;

function contextRender(content) {
	const user = getUserData();
	render(navigationView(user), header);
	render(content, root);
}

export function addRender(context, next) {
	context.render = contextRender;
	next();
}
