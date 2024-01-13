function sortNegativeToPossitive(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

sortNegativeToPossitive([7, -2, 8, 9]);
console.log('-----');
sortNegativeToPossitive([3, -2, 0, -1]);