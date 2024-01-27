/**
 * @param {string} input
 * @param {string} criteria
 * @returns {void}
 */

function solution() {
    let str = '';
    return {
        append: (s) => str += s,
        removeStart: (n) => str = str.slice(n),
        removeEnd: (n) => str = str.slice(0, -n),
        print: () => console.log(str)
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();