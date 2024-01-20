/**
 * Generates a catalogue of products, sorted by the first letter of each product and then by product name.
 * @param {Array} input - An array of strings containing products and their prices.
 * @returns {string} - A string containing the lowest price for each product in each town.
 */

function storeCatalogue(input) {
    if (!Array.isArray(input)) {
        throw new Error('Invalid input: Must be an array');
    }

    let result = {};
    for (let line of input) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        if (isNaN(price)) {
            throw new Error(`Invalid price for ${product}`);
        }
        let firstLetter = product[0];
        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }
        result[firstLetter].push({ product, price });
    }

    let output = [];
    let sortedLetters = Object.keys(result).sort();
    for (let letter of sortedLetters) {
        output.push(letter);
        let sortedProducts = result[letter].sort((a, b) => a.product.localeCompare(b.product));
        for (let { product, price } of sortedProducts) {
            output.push(`  ${product}: ${price}`);
        }
    }

    return output.join('\n');
}

console.log(storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']));
console.log('-----------------');
console.log(storeCatalogue(['Banana : 2', 'Rubic\'s Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']));
