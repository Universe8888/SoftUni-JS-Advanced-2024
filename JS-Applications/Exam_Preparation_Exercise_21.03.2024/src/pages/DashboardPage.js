// src/pages/DashboardPage.js

async function DashboardPage() {
    document.title = "Dashboard";

    const motorcycles = await fetch('/data/motorcycles?sortBy=_createdOn%20desc').then(res => res.json());
    const container = document.createElement('div');
    
    
    const motorcycleElements = motorcycles.map(m => `
        <div class="motorcycle-card">
            <img src="${m.imageUrl}" alt="${m.model}">
            <h2>${m.model}</h2>
            <p>Year: ${m.year}</p>
            <p>Mileage: ${m.mileage}</p>
            <button onclick="location.href='/details/${m._id}'">More Info</button>
        </div>
    `).join('');

    container.innerHTML = `
        <h1>Available Motorcycles</h1>
        <div class="motorcycle-cards-container">
            ${motorcycleElements || '<p>No available motorcycles yet.</p>'}
        </div>
    `;

    return container;
}

export default DashboardPage;
