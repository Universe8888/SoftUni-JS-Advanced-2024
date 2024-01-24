function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');

    function deleteRow(row) {
        row.parentNode.removeChild(row);
    }

    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let deleted = false;
    for (let row of rows) {
        if (row.children[1].textContent == input.value) {
            deleteRow(row);
            deleted = true;
        }
    }
    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
    input.value = '';
}