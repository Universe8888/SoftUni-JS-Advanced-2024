/**
 * 2. Online Shop
 *  You have to create a class OnlineShop, which will have a warehouse space, products and sales. The class should have the following methods:
 * •	loadingStore(product, quantity, spaceRequired) - a method that will receive a product, quantity and space required for the product. If there is enough space in the warehouse, the product should be added to the warehouse and the warehouse space should be decreased. If there is not enough space, throw an error with the message "Not enough space in the warehouse."
 * •	quantityCheck(product, minimalQuantity) - a method that will receive a product and a minimal quantity. If the product is not in the warehouse, throw an error with the message "There is no {product} in the warehouse.". If the quantity is less than or equal to the product quantity, return "You have enough from product {product}.". If the quantity is more than the product quantity, add the difference to the product quantity and return "You added {difference} more from the {product} products."
 * •	sellProduct(product) - a method that will receive a product. If the product is not in the warehouse, throw an error with the message "There is no {product} in the warehouse.". If the product is in the warehouse, decrease the product quantity and add the product to the sales. Return "The {product} has been successfully sold."
 * •	revision() - a method that will return a message with the sales count and the products in the warehouse. If there are no sales, throw an error with the message "There are no sales today!". The message should be in the following format:
 * "You sold {salesCount} products today!
 * Products in the warehouse:
 * {product1}-{quantity1} more left
 * {product2}-{quantity2} more left
 * …"
 * The products should be sorted by quantity in descending order.
 * Input
 * The input will be an array of strings. Each string will be a command that should be executed.
 * Output
 * The output will be the return value of the methods.
 */
class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.warehouseSpace -= spaceRequired;
        this.products.push({ product, quantity });
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        const productObj = this.products.find(p => p.product === product);

        if (!productObj) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= productObj.quantity) {
            return `You have enough from product ${product}.`;
        }

        const difference = minimalQuantity - productObj.quantity;
        productObj.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`;
    }

    sellProduct(product) {
        const productObj = this.products.find(p => p.product === product);

        if (!productObj) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        productObj.quantity--;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }

        const salesCount = this.sales.length;
        let result = `You sold ${salesCount} products today!\nProducts in the warehouse:\n`;

        this.products.forEach(p => {
            result += `${p.product}-${p.quantity} more left\n`;
        });

        return result.trim();
    }
}

//Test1

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.loadingStore('TV', 40, 500));

/** 
 * Output:
 The headphones has been successfully delivered in the warehouse.
 The laptop has been successfully delivered in the warehouse.
 Uncaught Error Error: Not enough space in the warehouse.
*/


//Test2

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200))
// console.log(myOnlineShop.loadingStore('laptop', 5, 200)); 
// console.log(myOnlineShop.quantityCheck('headphones', 10)); 
// console.log(myOnlineShop.quantityCheck('laptop', 10)); 
// console.log(myOnlineShop.quantityCheck('TV', 40,));

/**
 * Output:
The headphones has been successfully delivered in the warehouse.
The laptop has been successfully delivered in the warehouse.
You have enough from product headphones.
You added 5 more from the laptop products.
Uncaught Error Error: There is no TV in the warehouse.
*/

//Test3

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

/**
 * Output:
The headphones has been successfully delivered in the warehouse.
The laptop has been successfully delivered in the warehouse.
You have enough from product headphones.
You added 5 more from the laptop products.
The headphones has been successfully sold.
The laptop has been successfully sold.
Uncaught Error Error: There is no keyboard in the warehouse.
*/

//Test4

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.revision());

/**
 * Output:
The headphones has been successfully delivered in the warehouse.
The laptop has been successfully delivered in the warehouse.
You have enough from product headphones.
You added 5 more from the laptop products.
The headphones has been successfully sold.
The laptop has been successfully sold.
You sold 2 products today!
Products in the warehouse:
headphones-9 more left
laptop-9 more left
*/