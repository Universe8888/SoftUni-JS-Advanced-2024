/**
 * A function that searches for a given text inside a table and highlights the corresponding row, while hiding all other rows.
 * 
 * @param {HTMLElement} element - DOM element
 * @param {string} selector - selector of the element
 * @returns {undefined} - The function doesn’t return anything – it should modify the DOM directly.
 * 
 */

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById('searchField').value;
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      rows.forEach((row) => {
         if (row.textContent.includes(search)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
      document.getElementById('searchField').value = '';
   }
}