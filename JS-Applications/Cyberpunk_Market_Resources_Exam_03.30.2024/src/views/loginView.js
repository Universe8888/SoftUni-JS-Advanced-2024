// src/views/loginView.js
import { html } from 'lit-html';
import { login } from '../services/userService.js';
import { createSubmitHandler } from '../utils/utils.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <form @submit=${onSubmit}>
        <input type="text" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <input type="submit" value="Login">
    </form>
</section>
`;

function onSubmit(context, data) {
    if (data.email === '' || data.password === '') {
        return alert('All fields are required!');
    }
    // Additional validation as needed

    login(data.email, data.password).then((userData) => {
        // Handle login success
        context.page.redirect('/market');
    }).catch(error => {
        // Handle login error
        alert('Invalid credentials or an error occurred.');
    });
}

export function loginView(context) {
    context.render(loginTemplate(createSubmitHandler(context, onSubmit)));
}
