/**
 * @param {Array} arr
 * @param {string} sortType
 * @return {Array}
 */

function sortArr(arr, sortType) {
    let asc = (a, b) => a - b;
    let desc = (a, b) => b - a;

    let sort = {
        asc: asc,
        desc: desc
    }

    return arr.sort(sort[sortType]);
}

console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
console.log('----------------');
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));