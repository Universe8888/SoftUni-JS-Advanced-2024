// src/pages/HomePage.js

function HomePage() {

    document.title = "Home Page";

    const container = document.createElement('div');
    container.innerHTML = `
        <h1>Welcome to Samurai Moto Market, Your Premier Destination for Japanese Motorcycles.</h1>
        <!-- Rest of your homepage content -->
    `;

    return container;
}

export default HomePage;
