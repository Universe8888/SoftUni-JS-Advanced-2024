/**
 * Constructs a car object based on specified properties.
 * @param {Object} obj - An object containing car specifications.
 * @returns {Object} - A car object with configured properties.
 */

function carFactory(obj) {
    if (!obj || typeof obj !== 'object') {
        throw new Error('Invalid input: obj must be an object');
    }

    function determineEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500 };
        }
    }

    function adjustWheelSize(wheelsize) {
        return wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize;
    }

    let engine = determineEngine(obj.power);
    let carriage = { type: obj.carriage, color: obj.color };
    let wheels = new Array(4).fill(adjustWheelSize(obj.wheelsize));

    return { model: obj.model, engine, carriage, wheels };
}

const obj = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

console.log(carFactory(obj));