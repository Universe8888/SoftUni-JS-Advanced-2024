// src/components/NavBar.js
import { html, render } from 'lit-html';
import { getUserData, onLogout } from '../utils/utils.js';

const navTemplate = (user) => html`
    <nav>
        <a id="logo" href="/">
            <img src="./images/logo.png" alt="Cyberpunk Market Logo" />
        </a>
        <a href="/catalog">Market</a>
        ${user
            ? html`
                <div class="user">
                    <a href="/create">Sell Item</a>
                    <a href="/my-items">My Items</a>
                    <a href="javascript:void(0)" @click=${onLogout}>Logout</a>
                </div>`
            : html`
                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`
        }
    </nav>
`;

export function setupNavBar() {
    const header = document.querySelector('#header-element');
    const user = getUserData();
    render(navTemplate(user), header);
}
