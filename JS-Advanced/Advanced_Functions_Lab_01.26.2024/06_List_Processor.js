/**
 * @param {string[]} input
 * @returns {void}
 */

function solve(input) {
    let list = [];
    let commands = {
        add: (str) => list.push(str),
        remove: (str) => list = list.filter(el => el !== str),
        print: () => console.log(list.join(',')),
    };

    input.forEach(element => {
        let [command, str] = element.split(' ');
        commands[command](str);
    });
}

const input = ['add hello', 'add again', 'removeStart 3', 'removeEnd 4', 'print'];