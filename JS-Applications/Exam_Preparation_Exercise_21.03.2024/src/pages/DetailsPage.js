// src/pages/DetailsPage.js

async function DetailsPage(id) {
    document.title = "Motorcycle Details"; 

    const motorcycle = await fetch(`/data/motorcycles/${id}`).then(res => res.json());
    const container = document.createElement('div');
    
    container.innerHTML = `
        <div class="motorcycle-details">
            <img src="${motorcycle.imageUrl}" alt="${motorcycle.model}">
            <h2>${motorcycle.model}</h2>
            <p>Year: ${motorcycle.year}</p>
            <p>Mileage: ${motorcycle.mileage}</p>
            <p>Contact: ${motorcycle.contact}</p>
            <p>About: ${motorcycle.about}</p>
            ${motorcycle._ownerId === sessionStorage.getItem('userId') ? 
                `<button onclick="location.href='/edit/${motorcycle._id}'">Edit</button>
                 <button onclick="deleteMotorcycle('${motorcycle._id}')">Delete</button>` : 
                ''}
        </div>
    `;

    return container;
}

export default DetailsPage;
