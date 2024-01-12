function cookingByNumbers(number, operation1, operation2, operation3, operation4, operation5) {
    let num = Number(number);
    let operations = [operation1, operation2, operation3, operation4, operation5];

    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];

        switch (operation) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num -= num * 0.2;
                console.log(num);
                break;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');