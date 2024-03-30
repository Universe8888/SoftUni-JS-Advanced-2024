import { html } from 'https://unpkg.com/lit-html/lit-html.js';

const homeTemplate = () => html`
<section id="home" class="cyberpunk-home">
    <!-- Assuming "home.png" is the filename of the home page image -->
    <article class="home-content">
        <img src="./images/home.png" alt="Cyberpunk Dark Market" class="home-banner" />
        <h1>We know who you are, we will contact you!</h1>
    </article>
    <nav class="home-nav">
        <a href="/market" class="nav-link">Market</a>
        <a href="/login" class="nav-link">Login</a>
        <a href="/register" class="nav-link">Register</a>
    </nav>
</section>
`;

export async function homeView(context) {
    context.render(homeTemplate());
}
