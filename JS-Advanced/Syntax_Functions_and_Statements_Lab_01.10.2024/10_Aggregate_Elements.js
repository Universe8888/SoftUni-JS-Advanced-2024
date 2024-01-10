function aggregateElements(inputArray) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
        inverseSum += 1 / inputArray[i];
        concat += inputArray[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

aggregateElements([1, 2, 3]);
