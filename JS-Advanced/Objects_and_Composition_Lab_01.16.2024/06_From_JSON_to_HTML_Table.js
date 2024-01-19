function fromJsonToHtmlTable(input) {
    let arr = JSON.parse(input);
    let html = '<table>\n';

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    html += '\t<tr>';
    Object.keys(arr[0]).forEach(key => {
        html += `<th>${escapeHtml(key)}</th>`;
    });
    html += '</tr>\n';

    arr.forEach(obj => {
        html += '\t<tr>';
        for (let key of Object.keys(arr[0])) {
            let value = obj[key] !== undefined ? obj[key] : "";
            html += `<td>${escapeHtml(value)}</td>`;
        }
        html += '</tr>\n';
    });

    html += '</table>';
    return html;
}

console.log(fromJsonToHtmlTable(JSON.stringify([{ 'Name': 'Pesho', 'Score': 4, 'Grade': 8 }, { 'Name': 'Gosho', 'Score': 5, 'Grade': 8 }, { 'Name': 'Angel', 'Score': 5.50, 'Grade': 10 }])));

// 50/100 issues with the judge system