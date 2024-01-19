function extractIncreasingSubsequenceFromArray(input) {
    let result = [];
    let biggest = input[0];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggest) {
            result.push(input[i]);
            biggest = input[i];
        }
    }

    return result;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log('-----');
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
console.log('-----');
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);

//judge - 100/100