// src/components/NavBar.js

import { html, render } from 'https://unpkg.com/lit-html/lit-html.js';
import { getUserData } from '../utils/utils.js';
import { logout as userLogout } from '../utils/userService.js';

const navTemplate = (user) => html`
  <nav>
    <a id="logo" href="/">
      <img src="./images/logo.png" alt="Cyberpunk Dark Market Logo" />
    </a>
    <a href="/catalog">Market</a>
    ${user
      ? html`
        <div class="user">
          <a href="/create">Add Item</a>
          <a href="" @click=${logoutHandler}>Logout</a> <!-- Added click handler for logout -->
        </div>`
      : html`
        <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
  </nav>
`;

function logoutHandler(event) {
  event.preventDefault();
  userLogout();
}

export function setupNavbar() {
  const user = getUserData();
  const headerElement = document.querySelector('#header-element'); // Corrected the selector
  render(navTemplate(user), headerElement); // Render inside the header element
}

// Ensure that the navbar is set up after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
});
