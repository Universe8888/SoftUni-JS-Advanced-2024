import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import * as userService from '../utils/userService.js';
import { createSubmitHandler } from '../utils/utils.js';

const loginTemplate = (onSubmit) => html`
<section id="login" class="cyberpunk-login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="text" name="email" id="email" placeholder="Email" />
            <input type="password" name="password" id="password" placeholder="Password" />
            <button type="submit" class="login-btn">LOGIN</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`;

export async function loginView(context) {
    context.render(loginTemplate(createSubmitHandler(context, onSubmit)));
}

async function onSubmit(context, data, event) {
    if (data.email === '' || data.password === '') {
        return alert('All fields are required!');
    }

    try {
        await userService.login(data.email, data.password);
        event.target.reset(); // Reset the form only if no errors occurred
        context.page.redirect('/market'); // Redirect to the market page or dashboard
    } catch (error) {
        // Implement error handling logic and user-friendly error messages
        console.error(error);
        // Display error message to the user instead of or in addition to the console error
    }
}
