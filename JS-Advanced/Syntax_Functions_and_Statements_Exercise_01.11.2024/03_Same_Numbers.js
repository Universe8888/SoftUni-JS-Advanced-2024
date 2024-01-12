function checkNumber(number) {
    let numberAsString = number.toString();
    let sum = 0;
    let isSame = true;

    for (let i = 0 ; i < numberAsString.length; i++) {
        let currentDigit = Number(numberAsString[i]);
        let nextDigit = Number(numberAsString[i + 1]);

        if (numberAsString[i] !== numberAsString[i + 1] && numberAsString[i + 1] !== undefined) {
            isSame = false;
        }

        sum += currentDigit;
}

    console.log(isSame);
    console.log(sum);
}

checkNumber(2222222);