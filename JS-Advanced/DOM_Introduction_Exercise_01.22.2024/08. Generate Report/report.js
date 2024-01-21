/**
 * The function should generate a report from the data in the HTML table and return it as a JSON string.
 * 
 * @param {Array} data - array of objects
 * @param {Array} columns - array of strings
 * @returns {undefined} - The function doesn’t return anything – it should modify the DOM directly.
 */

function generateReport() {
    let checked = Array.from(document.querySelectorAll('input[type=checkbox]'));
    let rows = Array.from(document.querySelectorAll('tbody tr'));

    function createReportObject(row, checkedCheckboxes) {
        let obj = {};
        checkedCheckboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                obj[checkbox.name] = row.children[index].textContent;
            }
        });
        return obj;
    }

    function processRows(rows, checkedCheckboxes) {
        return rows.map(row => createReportObject(row, checkedCheckboxes));
    }

    let result = processRows(rows, checked);
    document.getElementById('output').value = JSON.stringify(result);
}