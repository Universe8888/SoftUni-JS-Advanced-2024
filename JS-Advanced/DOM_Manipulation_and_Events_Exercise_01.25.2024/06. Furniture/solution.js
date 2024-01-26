/**
 * @param {string} furniture
 * @param {number} price
 * @param {number} decFactor
 * @param {string} img
 * @returns {Object}
 */

function solve() {
  let [inputTextarea, outputTextarea] = document.querySelectorAll('textarea');
  let [generateBtn, buyBtn] = document.querySelectorAll('button');
  let tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generateFurniture);
  buyBtn.addEventListener('click', buyFurniture);

  function generateFurniture() {
    if (!inputTextarea.value) return;
    let furnitureItems = JSON.parse(inputTextarea.value);
    let rowsHtml = furnitureItems.map(item => 
      `<tr>
        <td><img src=${item.img}></td>
        <td><p>${item.name}</p></td>
        <td><p>${item.price}</p></td>
        <td><p>${item.decFactor}</p></td>
        <td><input type="checkbox"/></td>
      </tr>`
    ).join('');
    tbody.innerHTML += rowsHtml;
  }

  function buyFurniture() {
    let checkedItems = [...tbody.querySelectorAll('input:checked')].map(input => input.parentNode.parentNode);
    let furnitureName = checkedItems.map(row => row.children[1].textContent);
    let totalPrice = checkedItems.reduce((sum, row) => sum + Number(row.children[2].textContent), 0);
    let averageDecFactor = checkedItems.length > 0 ? 
      checkedItems.reduce((sum, row) => sum + Number(row.children[3].textContent), 0) / checkedItems.length : 
      0;

    outputTextarea.textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
    outputTextarea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputTextarea.textContent += `Average decoration factor: ${averageDecFactor}`;
  }
}


//secound solution

function solve() { 
  let [input, output] = document.querySelectorAll('textarea');
  let [generateBtn, buyBtn] = document.querySelectorAll('button');
  let tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    let data = JSON.parse(input.value);
    for (let item of data) {
      let row = document.createElement('tr');
      let imgCell = document.createElement('td');
      let img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);
      row.appendChild(imgCell);

      let nameCell = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);
      row.appendChild(nameCell);

      let priceCell = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);
      row.appendChild(priceCell);

      let decFactorCell = document.createElement('td');
      let decFactorP = document.createElement('p');
      decFactorP.textContent = item.decFactor;
      decFactorCell.appendChild(decFactorP);
      row.appendChild(decFactorCell);

      let markCell = document.createElement('td');
      let markInput = document.createElement('input');
      markInput.type = 'checkbox';
      markCell.appendChild(markInput);
      row.appendChild(markCell);

      tbody.appendChild(row);
    }
  }

  function buy() {
    let bought = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement);
    let names = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    for (let row of bought) {
      let cells = row.children;
      names.push(cells[1].children[0].textContent);
      totalPrice += Number(cells[2].children[0].textContent);
      totalDecFactor += Number(cells[3].children[0].textContent);
    }
    output.value += `Bought furniture: ${names.join(', ')}\n`;
    output.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.value += `Average decoration factor: ${totalDecFactor / bought.length}`;
  }
}