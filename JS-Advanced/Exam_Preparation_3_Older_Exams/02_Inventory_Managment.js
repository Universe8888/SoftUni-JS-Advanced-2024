class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) throw new Error("Quantity must be greater than zero.");
        if (this.items.length >= this.capacity) throw new Error("The inventory is already full.");

        const itemIndex = this.items.findIndex(item => item.name === itemName);
        if (itemIndex > -1) {
            this.items[itemIndex].quantity += quantity;
        } else {
            this.items.push({ name: itemName, quantity });
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) throw new Error("Quantity must be greater than zero.");
        const itemIndex = this.items.findIndex(item => item.name === itemName);
        if (itemIndex === -1) throw new Error(`The item ${itemName} is not available in the inventory.`);
        if (this.items[itemIndex].quantity < quantity) throw new Error(`Not enough ${itemName}(s) in stock.`);

        this.items[itemIndex].quantity -= quantity;
        if (this.items[itemIndex].quantity === 0) {
            this.outOfStock.push(this.items[itemIndex].name);
            this.items.splice(itemIndex, 1);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) throw new Error("Quantity must be greater than zero.");
        const itemIndex = this.items.findIndex(item => item.name === itemName);
        if (itemIndex > -1) {
            this.items[itemIndex].quantity += quantity;
        } else {
            this.items.push({ name: itemName, quantity });
        }

        const outOfStockIndex = this.outOfStock.indexOf(itemName);
        if (outOfStockIndex > -1) {
            this.outOfStock.splice(outOfStockIndex, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let summary = "Current Inventory:\n";
        this.items.forEach(item => {
            summary += `${item.name}: ${item.quantity}\n`;
        });
        if (this.outOfStock.length) {
            summary += `Out of Stock: ${this.outOfStock.join(", ")}`;
        }
        return summary.trim();
    }
}

const manager = new InventoryManager(2);
console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Level", 3));