function sortingNums(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    while (arr.length) {
        result.push(arr.shift());
        result.push(arr.pop());
    }
    return result;
}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log('-----');
sortingNums([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);

//judge - 100/100