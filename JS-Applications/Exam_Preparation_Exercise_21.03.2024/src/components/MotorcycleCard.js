// src/components/MotorcycleCard.js

export default function MotorcycleCard(motorcycle, user) {
    const { model, imageUrl, year, mileage, contact, about, _ownerId } = motorcycle;
    const showControls = user && user._id === _ownerId;

    return `
        <div class="motorcycle-card">
            <img src="${imageUrl}" alt="${model}">
            <h3>${model}</h3>
            <div class="motorcycle-info">
                <p>Year: ${year}</p>
                <p>Mileage: ${mileage}</p>
                <p>Contact: ${contact}</p>
                <p>${about}</p>
            </div>
            ${showControls ? `<a href="/details/${motorcycle._id}">More Info</a>` : ''}
            ${showControls ? `<a href="/edit/${motorcycle._id}">Edit</a>` : ''}
            ${showControls ? `<a href="/delete/${motorcycle._id}">Delete</a>` : ''}
        </div>
    `;
}
