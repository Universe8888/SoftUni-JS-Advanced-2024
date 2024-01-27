/**
 * @param {(...input) => void} input
 * @return {void}
 */

function argumentInfo(...input) {
    let typeCounter = {};

    input.forEach(arg => {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        typeCounter[type] = (typeCounter[type] || 0) + 1;
    });

    Object.entries(typeCounter)
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, count]) => console.log(`${type} = ${count}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });

// Output:
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string: 1
// number: 1
// function: 1