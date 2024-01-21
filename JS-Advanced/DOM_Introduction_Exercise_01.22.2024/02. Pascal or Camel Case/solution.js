/**
 * Pascal or Camel Case
 * @param {string} text
 * @param {string} convention
 * @returns {string}
 */

function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');
    let output = '';

    if (convention === 'Camel Case') {
        output = text.toLowerCase().split(' ').map((word, index) => {
            if (index !== 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return word;
            }
        }).join('');
    } else if (convention === 'Pascal Case') {
        output = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    } else {
        output = 'Error!';
    }

    result.textContent = output;
  }