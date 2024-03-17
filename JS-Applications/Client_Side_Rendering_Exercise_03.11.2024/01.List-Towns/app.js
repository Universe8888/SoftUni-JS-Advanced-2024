const inputField = document.getElementById('towns');
const loadButton = document.getElementById('btnLoadTowns');

loadButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the value from the input field
    const input = inputField.value;

    // Split the input by comma and whitespace to create an array of towns
    const towns = input.split(', ');

    // Get the root element where the list will be rendered
    const rootElement = document.getElementById('root');

    // Clear the root element in case it has previous content
    rootElement.innerHTML = '';

    // Create a list element
    const listElement = document.createElement('ul');

    // Loop through the towns array and create list items for each town
    towns.forEach((town) => {
        const listItem = document.createElement('li');
        listItem.textContent = town;
        listElement.appendChild(listItem);
    });

    // Append the list element to the root element
    rootElement.appendChild(listElement);
});
