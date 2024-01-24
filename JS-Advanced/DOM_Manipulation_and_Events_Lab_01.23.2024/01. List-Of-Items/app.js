function addItem() {
    let input = document.getElementById('newItemText');
    let li = document.createElement('li');
    li.textContent = input.value;
    let ul = document.getElementById('items');
    ul.appendChild(li);
    input.value = '';
}