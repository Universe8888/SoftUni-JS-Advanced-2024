// src/middlewares/renderMiddleware.js

import { html, render } from 'https://unpkg.com/lit-html/lit-html.js';
import { getUserData } from '../utils/utils.js';

const mainElement = document.getElementById('main-element');
const headerElement = document.getElementById('header-element');

function renderNavigation(user) {
    return html`
        <nav>
            ${user
                ? html`
                    <a href="/market">Market</a>
                    <a href="/create">Sell</a>
                    <a href="/logout" @click=${logout}>Logout</a>
                  `
                : html`
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                  `}
        </nav>
    `;
}

function contextRender(content) {
    const user = getUserData();
    render(renderNavigation(user), headerElement);
    render(content, mainElement);
}

export function addRender(context, next) {
    context.render = contextRender;
    next();
}

function logout(event) {
    event.preventDefault();
    userService.logout();
    contextRender(null); 
}
