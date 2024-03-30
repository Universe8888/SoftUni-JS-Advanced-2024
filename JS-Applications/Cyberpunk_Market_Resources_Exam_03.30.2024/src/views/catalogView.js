// src/views/catalogView.js
import { html } from 'lit-html';
import { getCatalog } from '../services/marketService.js';

const catalogTemplate = (items) => html`
<section id="catalog">
    ${items.map(item => html`
    <div class="item">
        <img src="${item.imageUrl}" alt="${item.model}">
        <h3>${item.model}</h3>
        <h3>${item.price} €</h3>
        <a href="/details/${item._id}">Details</a>
    </div>
    `)}
</section>
`;

export async function catalogView(context) {
    const items = await getCatalog();
    context.render(catalogTemplate(items));
}
