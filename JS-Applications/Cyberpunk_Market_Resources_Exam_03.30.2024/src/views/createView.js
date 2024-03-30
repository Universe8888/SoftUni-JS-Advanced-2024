import { html } from 'https://unpkg.com/lit-html/lit-html.js';
import * as marketService from '../services/marketService.js';
import { createSubmitHandler } from '../utils/utils.js'; 

const createTemplate = (onSubmit) => html`
<section id="create" class="cyberpunk-create">
    <div class="form">
        <h2>Add Item</h2>
        <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="item" id="item" placeholder="Item" />
            <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
            <input type="text" name="price" id="price" placeholder="Price in Euro" />
            <input type="text" name="availability" id="availability" placeholder="Availability Information" />
            <input type="text" name="type" id="type" placeholder="Item Type" />
            <textarea id="description" name="description" placeholder="More About The Item" rows="10" cols="50"></textarea>
            <button type="submit" class="add-btn">ADD</button>
        </form>
    </div>
</section>
`;

export async function createView(context) {
    context.render(createTemplate(createSubmitHandler(context, onSubmit)));
}

async function onSubmit(context, data, event) {
    if (Object.values(data).some(x => x === '')) {
        return alert('All fields are required!');
    }

    try {
        await marketService.create(data);
        event.target.reset(); // Reset the form only if no errors occurred
        context.page.redirect('/market'); // Redirect to the market page or dashboard
    } catch (error) {
        // Implement error handling logic and user-friendly error messages
        console.error(error);
        // Display error message to the user instead of or in addition to the console error
    }
}
