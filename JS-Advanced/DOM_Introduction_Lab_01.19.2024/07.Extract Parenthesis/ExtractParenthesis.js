/**
 * Extracts and concatenates substrings enclosed in parentheses from the text content of a DOM element.
 * @param {string} content - The ID of the DOM element.
 * @returns {string} - Concatenated substrings found within parentheses.
 */

function extract(content) {
    let text = document.getElementById(content).textContent;
    let result = [];
    let start = text.indexOf('(');
    let end = text.indexOf(')', start);

    while (start !== -1 && end !== -1) {
        result.push(text.substring(start + 1, end));
        start = text.indexOf('(', end);
        end = text.indexOf(')', start);
    }

    console.log(result.join('; '));
    return result.join('; ');
}