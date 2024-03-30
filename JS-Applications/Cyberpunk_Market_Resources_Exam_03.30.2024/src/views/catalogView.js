import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import * as marketService from '../services/marketService.js'; 

const itemTemplate = (item) => html`
<div class="item">
    <img src=${item.imageUrl} alt=${item.item} />
    <h3 class="model">${item.item}</h3>
    <div class="item-info">
        <p class="price">Price: €${item.price}</p>
        <p class="availability">Availability: ${item.availability}</p>
        <p class="type">Type: ${item.type}</p>
    </div>
    <a class="details-btn" href="/details/${item._id}">Uncover More</a>
</div>`;

const catalogTemplate = (items) => html`
<h2>Market</h2>
<section id="dashboard">
    ${items.length > 0
        ? items.map((item) => itemTemplate(item))
        : html`<h3 class="no-items">No Items Yet</h3>`}
</section>
`;

export async function catalogView(context) {
    const items = await marketService.getCatalogItems();
    context.render(catalogTemplate(items));
}
