// src/components/NavBar.js

export default function NavBar(user) {
    const guestLinks = `
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/search">Search</a>
    `;

    const userLinks = `
        <a href="/motorcycles">Motorcycles</a>
        <a href="/add">Add Motorcycle</a>
        <a href="/search">Search</a>
        <a href="/logout" id="logoutBtn">Logout</a>
    `;

    const logo = '<a href="/" class="logo">Samurider</a>';

    const navBarHTML = `
        <nav>
            ${logo}
            ${user ? userLinks : guestLinks}
        </nav>
    `;

    document.getElementById('navBar').innerHTML = navBarHTML;

}