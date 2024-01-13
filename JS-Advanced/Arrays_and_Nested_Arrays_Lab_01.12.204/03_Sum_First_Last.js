function sumFirstAndLast(input) {
    let result = Number(input[0]) + Number(input[input.length - 1]);
    console.log(result);
}

sumFirstAndLast(['20', '30', '40']);
console.log('-----');
sumFirstAndLast(['5', '10']);