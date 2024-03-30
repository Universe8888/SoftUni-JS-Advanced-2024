// src/views/detailsView.js

import { html, nothing } from 'https://unpkg.com/lit-html/lit-html.js';
import { getUserData } from '../utils/utils.js';
import * as marketService from '../services/marketService.js';

// This template is for the item details
const detailsTemplate = (item, isOwner, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${item.imageUrl}" alt="${item.item}" />
      <div id="info-wrapper">
        <p id="details-title">${item.item}</p>
        <p class="price">Price: €${item.price}</p>
        <p class="availability">Availability: ${item.availability}</p>
        <p class="type">Type: ${item.type}</p>
        <p id="item-description">${item.description}</p>
        ${isOwner ? ownerControlsTemplate(item, onDelete) : nothing}
      </div>
    </div>
  </section>
`;

// These are the action buttons shown if the user is the owner of the item
const ownerControlsTemplate = (item, onDelete) => html`
  <div id="action-buttons">
    <a href="/edit/${item._id}" id="edit-btn">Edit</a>
    <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
  </div>
`;

export async function detailsView(context) {
  const itemId = context.params.id;
  const item = await marketService.getItemById(itemId);
  const userData = getUserData();
  const isOwner = userData && userData._id === item._ownerId;
  
  context.render(detailsTemplate(item, isOwner, onDelete.bind(null, context, itemId)));
}

// Delete function which is called on delete button click
async function onDelete(context, itemId) {
  const confirmed = confirm('Are you sure you want to delete this item?');
  if (confirmed) {
    await marketService.deleteItem(itemId);
    context.page.redirect('/market');
  }
}
