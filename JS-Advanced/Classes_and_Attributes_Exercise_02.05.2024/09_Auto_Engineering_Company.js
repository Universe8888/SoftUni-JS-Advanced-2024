/**
 * 9. Auto-Engineering Company
 * Write a function that receives array of strings in the following format:
 * "{carBrand} | {carModel} | {producedCars}"
 * and returns a JSON representation of the data as objects with the following properties:
 * @param {Array} input
 * @return {Array}
 */
function autoEngineeringCompany(input) {
    const cars = input.reduce((acc, line) => {
        let [brand, model, produced] = line.split(' | ');
        produced = Number(produced);
        
        if (!acc[brand]) {
            acc[brand] = {};
        }
        if (!acc[brand][model]) {
            acc[brand][model] = 0;
        }
        acc[brand][model] += produced;
        
        return acc;
    }, {});

    return Object.entries(cars).map(([brand, models]) => {
        const modelDetails = Object.entries(models)
            .map(([model, count]) => `###${model} -> ${count}`)
            .join('\n');
        return `${brand}\n${modelDetails}`;
    }).join('\n');
}

console.log(autoEngineeringCompany([
    'VW | Golf-4 | 10000000',
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]));