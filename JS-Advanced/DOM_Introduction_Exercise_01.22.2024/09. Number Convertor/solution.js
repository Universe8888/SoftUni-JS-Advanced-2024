/**
 * The function takes a number and converts it to binary or hexadecimal.
 * @param {number} number - The number to be converted.
 * @param {HTMLInputElement} input - The input element that contains the number to be converted.
 * @param {HTMLSelectElement} selectMenuTo - The select element that contains the options for conversion.
 * @param {HTMLButtonElement} button - The button that triggers the conversion.
 * @param {HTMLInputElement} result - The element where the result will be displayed.
 * @returns {void} - The function changes the value of the result element.
 */

function solve() {
    const input = document.getElementById('input');
    const selectMenuTo = document.getElementById('selectMenuTo');
    const button = document.getElementsByTagName('button')[0];
    const result = document.getElementById('result');

    function createOption(value, text) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        return option;
    }

    const binaryOption = createOption('binary', 'Binary');
    const hexadecimalOption = createOption('hexadecimal', 'Hexadecimal');

    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexadecimalOption);

    button.addEventListener('click', () => {
        const number = Number(input.value);
        let resultNumber = '';

        switch (selectMenuTo.value) {
            case 'binary':
                resultNumber = number.toString(2);
                break;
            case 'hexadecimal':
                resultNumber = number.toString(16).toUpperCase();
                break;
            default:
                resultNumber = 'Invalid conversion';
        }

        result.value = resultNumber;
    });
}