function printEveryNthElementFromAnArray(arr, N) {
    let result = [];
    for (let i = 0; i < arr.length; i += N) {
        result.push(arr[i]);
    }
    return result;
}

printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
console.log('-----');
printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2);
console.log('-----');
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5', '6'], 6);

// 100/100 in Judge