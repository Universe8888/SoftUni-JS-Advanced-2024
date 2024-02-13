class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
}

reserveABottle(wineName, wineType, price) {
    if (this.space < 1) {
        throw new Error('Not enough space in the cellar.');
    }
    this.space--;
    this.wines.push({ wineName, wineType, price });
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
}

 payWineBottle(wineName, price) {
        let wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }
        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        let wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) {
            throw new Error("The wine you're looking for is not found.");
        }
        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines = this.wines.filter(w => w.wineName !== wineName);
        return `You drank a bottle of ${wineName}.`;
    }    

    cellarRevision(wineType) {
        const emptySlots = this.space - this.wines.length;
        let cellarInfo = '';
    
        if (!wineType) {
            cellarInfo += `You have space for ${emptySlots} bottles more.\n`;
            cellarInfo += `You paid ${this.bill}$ for the wine.\n`;
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            this.wines.forEach(wine => {
                cellarInfo += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Paid' : 'Not Paid'}.\n`;
            });
        } else {
            const winesOfType = this.wines.filter(wine => wine.wineType === wineType);
            if (winesOfType.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
            winesOfType.sort((a, b) => a.wineName.localeCompare(b.wineName));
            winesOfType.forEach(wine => {
                cellarInfo += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Paid' : 'Not Paid'}.\n`;
            });
        }
    
        return cellarInfo.trimEnd();
    }
}

// input 1:

// const selection = new WineSelection(2)

// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough','White', 50));

// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley','Red', 120));

// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

//output

// You reserved a bottle of Sauvignon Blanc Marlborough White wine.

// You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.

// Uncaught Error Error: Not enough space in the cellar.


// input 2:

// const selection = new WineSelection(2)

// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);

// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));

// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

//output

// You bought a Sauvignon Blanc Marlborough for a 120$.

// Uncaught Error Error: Bodegas Godelia Mencía is not in the cellar.

// input 3:

// const selection = new WineSelection(2)

// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);

// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);

// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);

// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));

// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

//output

// You drank a bottle of Sauvignon Blanc Marlborough.

// Uncaught Error Error: Cabernet Sauvignon Napa Valley need to be paid before open the bottle.

// input 4:

const selection = new WineSelection(2)

console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

console.log(selection.cellarRevision('Rose'));

//output

// You reserved a bottle of Bodegas Godelia Mencía Rose wine.

// Bodegas Godelia Mencía > Rose - Not Paid.

// input 5:

// const selection = new WineSelection(5)

// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);

// selection.payWineBottle('Bodegas Godelia Mencía', 144);

// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50); 

// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120); 

// console.log(selection.cellarRevision());

//output

// You have space for 2 bottles more.

// You paid 144$ for the wine.

// Bodegas Godelia Mencía > Rose - Has Paid.

// Cabernet Sauvignon Napa Valley > Red - Not Paid.

// Sauvignon Blanc Marlborough > White - Not Paid.