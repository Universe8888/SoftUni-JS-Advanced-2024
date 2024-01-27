function add(addend) {
    let sum = addend;

    function calc(nextAddend) {
        sum += nextAddend;
        return calc;
    }

    calc.toString = () => sum;
    return calc;
}

console.log(add(1)(6)(-3).toString());
console.log('-------------------');
console.log(add(1).toString());