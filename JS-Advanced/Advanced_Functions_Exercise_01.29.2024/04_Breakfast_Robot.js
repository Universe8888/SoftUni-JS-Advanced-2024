/**
 * @param {string} input
 * @return {function}
 */

function solution() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function (input) {
        let [command, item, quantity] = input.split(' ');
        quantity = Number(quantity);
        let message = '';

        switch (command) {
            case 'restock':
                stock[item] += quantity;
                message = 'Success';
                break;
            case 'prepare':
                let recipe = recipes[item];
                for (let ingredient in recipe) {
                    if (stock[ingredient] < recipe[ingredient] * quantity) {
                        message = `Error: not enough ${ingredient} in stock`;
                        return message;
                    }
                }
                for (let ingredient in recipe) {
                    stock[ingredient] -= recipe[ingredient] * quantity;
                }
                message = 'Success';
                break;
            case 'report':
                message = `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
                break;
        }

        return message;
    }
}

let manager = solution();

console.log(manager("restock flavour 50")); // Success
console.log('-------------------');
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log('-------------------');
console.log(manager("report")); // protein=0 carbohydrate=0 fat=0 flavour=50