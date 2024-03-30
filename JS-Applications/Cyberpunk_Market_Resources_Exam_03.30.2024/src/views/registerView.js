import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import * as userService from '../utils/userService.js'; 
import { createSubmitHandler } from '../utils/utils.js';

const registerTemplate = (onSubmit) => html`
<section id="register" class="cyberpunk-register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onSubmit}>
            <input type="text" name="email" id="register-email" placeholder="Email" />
            <input type="password" name="password" id="register-password" placeholder="Password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="Repeat Password" />
            <button type="submit" class="register-btn">REGISTER</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`;

export async function registerView(context) {
    context.render(registerTemplate(createSubmitHandler(context, onSubmit)));
}

async function onSubmit(context, data, event) {
    console.log(data);
    if (data.email === '' || data.password === '' || data['re-password'] === '') {
        return alert('All fields are required!');
    }

    if (data.password !== data['re-password']) {
        return alert('Passwords do not match');
    }

    try {
        await userService.register(data.email, data.password);
        event.target.reset(); // Reset the form only if no errors occurred
        context.page.redirect('/market'); // Redirect to the market page or dashboard
    } catch (error) {
        // Implement error handling logic and user-friendly error messages
        console.error(error);
        // Display error message to the user instead of or in addition to the console error
    }
}
