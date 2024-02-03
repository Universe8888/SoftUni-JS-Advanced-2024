/**
 * 8. Juice Flavors
 * You will be given different juices, as strings. You will also receive quantity as a number.
 * If you receive a juice, you already have, you must sum the current quantity of that juice with the
 * given one. When a juice reaches 1000 quantity, it produces a bottle. You must store all produced
 * bottles and you must print them at the end.
 * Note: 1000 quantity of juice is one bottle. If you would have, for example, 1050 quantity of juice,
 * you will also have 1 bottle and 50 quantity of juice.
 * Input
 * The input comes as array of strings. Each element holds data about a juice and quantity in the
 * following format:
 * “{juiceName} => {juiceQuantity}”
 * Output
 * The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles.
 * Check the second example bellow - even though we receive the Kiwi juice first, we don’t form a
 * bottle of Kiwi juice until the 4th line, at which point we have already create Pear and Watermelon
 * juice bottles, thus the Kiwi bottles appear last in the output.
 * @param {Array} input
 * @return {Array}
 */
function juiceFlavors(input) {
    let juices = {};
    let bottles = {};

    for (let line of input) {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = 0;
        }

        juices[juice] += quantity;

        if (juices[juice] >= 1000) {
            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = 0;
            }
            let newBottles = Math.floor(juices[juice] / 1000);
            bottles[juice] += newBottles;
            juices[juice] -= 1000 * newBottles;
        }
    }

    for (let key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}


juiceFlavors(['Orange => 2000',

'Peach => 1432',

'Banana => 450',

'Peach => 600',

'Strawberry => 549']);

// Orange => 2
// Peach => 2

juiceFlavors(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);

// Pear => 8
// Watermelon => 10
// Kiwi => 4