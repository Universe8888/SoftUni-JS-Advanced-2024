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


// 2nd solution

function fromJSONToHTMLTable(input){
		
    let arr = JSON.parse(input);
    let outputArr = ["<table>"];
    console.log("<table>")
    header=Object.keys(arr[0])
    //console.log(header)
    outputArr.push(makeKeyRow(header));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    console.log("</table>")
    function makeKeyRow(header) { 
        let rowStr="   <tr>"
        for (let i=0;i<header.length;i++){
            rowStr+="<th>"
            rowStr+=header[i]
            rowStr+="</th>"
        }
        rowStr+="</tr>"
        outputArr.push(rowStr)
        console.log(rowStr)

    }
    
    function makeValueRow(obj) {
        let rowStr="   <tr>"
        for (let i=0;i<header.length;i++){
            rowStr+="<td>"
            rowStr+=escapeHtml(obj[header[i]])
            rowStr+="</td>"
        }
        rowStr+="</tr>"
        outputArr.push(rowStr)
        console.log(rowStr)
    };
    
    function escapeHtml(value) {        
         let entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            ' ': '&nbsp;',
        };
        return value.toString().replace(/[&<> "]/g, (value) => entityMap[value]);};
    
    //console.log(outputArr.join("\n"));
    //return outputArr.join('\n')

}


fromJSONToHTMLTable(['[{"Name":"Stama>t","Price":5.5},{"Name":"Rumen","Price":6}]']);

// 100/100 from Facebook group