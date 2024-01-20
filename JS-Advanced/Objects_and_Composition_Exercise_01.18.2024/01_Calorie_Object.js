/**
 * Converts an array of food items and their calorie counts into an object.
 * @param {Array} input - Array containing food items and their calorie counts alternatively.
 * @returns {Object} - An object mapping food items to their calorie counts.
 */

function calorieObject(input) {
    if (!Array.isArray(input) || input.length % 2 !== 0) {
        throw new Error('Invalid input: Must be an array of even length');
    }

    let result = {};
    for (let i = 0; i < input.length; i += 2) {
        let foodItem = input[i];
        let calorieCount = Number(input[i + 1]);
        if (isNaN(calorieCount)) {
            throw new Error(`Invalid calorie count for ${foodItem}`);
        }
        result[foodItem] = calorieCount;
    }
    return result;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log('-----------------');
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));

//100/100