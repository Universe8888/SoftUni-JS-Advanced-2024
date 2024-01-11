function greatestCommonDivisor(a, b) {
    let divisor = 0;
    let maxDivisor = 0;

    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i == 0 && b % i == 0) {
            divisor = i;
        }
        if (divisor > maxDivisor) {
            maxDivisor = divisor;
        }
    }

    console.log(maxDivisor);

}

greatestCommonDivisor(2154, 458);