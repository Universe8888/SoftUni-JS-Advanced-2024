import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import * as marketService from '../services/marketService.js';
import { createSubmitHandler } from '../utils/utils.js'; 

const editTemplate = (item, onSubmit) => html`
<section id="edit">
    <h2>Edit Item</h2>
    <div class="form">
        <h2>Edit Item</h2>
        <form class="edit-form" @submit=${onSubmit}>
            <input
                type="text"
                name="item"
                id="item"
                placeholder="Item Name"
                .value=${item.item}
            />
            <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Item Image URL"
                .value=${item.imageUrl}
            />
            <input
                type="text"
                name="price"
                id="price"
                placeholder="Price (Euro)"
                .value=${item.price}
            />
            <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability"
                .value=${item.availability}
            />
            <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
                .value=${item.type}
            />
            <textarea
                id="description"
                name="description"
                placeholder="More about the item"
                rows="10"
                cols="50"
            >${item.description}</textarea>
            <button type="submit">Update Item</button>
        </form>
    </div>
</section>
`;

async function onSubmit(context, data, event) {
    const itemId = context.params.id;
    if (Object.values(data).some((x) => x === '')) {
        return alert('All fields are required');
    }

    await marketService.updateItem(itemId, {
        ...data 
    });

    event.target.reset();
    context.page.redirect(`/details/${itemId}`);
}

export async function editView(context) {
    const itemId = context.params.id;
    const item = await marketService.getItemById(itemId);
    context.render(editTemplate(item, createSubmitHandler(context, onSubmit)));
}
