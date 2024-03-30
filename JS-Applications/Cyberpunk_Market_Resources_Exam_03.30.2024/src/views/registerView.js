// src/views/registerView.js
import { html } from 'lit-html';
import { register } from '../services/userService.js';
import { createSubmitHandler } from '../utils/utils.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
    <form @submit=${onSubmit}>
        <input type="text" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <input type="password" name="repeatPass" placeholder="Repeat Password">
        <input type="submit" value="Register">
    </form>
</section>
`;

function onSubmit(context, data) {
    if (data.email === '' || data.password === '' || data.repeatPass === '') {
        return alert('All fields are required!');
    }
    if (data.password !== data.repeatPass) {
        return alert('Passwords don\'t match.');
    }
    // Additional validation as needed

    register(data.email, data.password).then((userData) => {
        // Handle registration success
        context.page.redirect('/market');
    }).catch(error => {
        // Handle registration error
        alert('An error occurred or email is already in use.');
    });
}

export function registerView(context) {
    context.render(registerTemplate(createSubmitHandler(context, onSubmit)));
}
