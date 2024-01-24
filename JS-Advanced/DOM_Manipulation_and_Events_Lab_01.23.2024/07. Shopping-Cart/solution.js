/**
 * The program must calculate the total price of the products that are selected.
 * 
 * @param {HTMLButtonElement[]} buttons
 * @param {HTMLTextAreaElement} textArea
 * @param {HTMLButtonElement} checkoutButton
 * @param {string[]} products
 * @param {number} totalPrice
 * @param {Set<string>} uniqueProducts
 * @param {string} name
 * @param {number} price
 * @returns {void}
 * 
 */

function solve() {
   let products = [];
   let totalPrice = 0;
   let textArea = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');
   let addButtons = Array.from(document.querySelectorAll('.add-product'));
   addButtons.forEach(btn => btn.addEventListener('click', addProduct));

   function addProduct(e) {
      let product = e.target.parentNode.parentNode;
      let name = product.querySelector('.product-title').textContent;
      let price = Number(product.querySelector('.product-line-price').textContent);
      products.push(name);
      totalPrice += price;
      textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   }

   checkoutButton.addEventListener('click', checkout);

   function checkout() {
      let uniqueProducts = new Set(products);
      textArea.value += `You bought ${[...uniqueProducts].join(', ')} for ${totalPrice.toFixed(2)}.`;
      addButtons.forEach(btn => btn.removeEventListener('click', addProduct));
      checkoutButton.removeEventListener('click', checkout);
   }
}