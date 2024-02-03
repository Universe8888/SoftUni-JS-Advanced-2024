/**
 * @param {number} radius
 * @param {number} diameter
 * @param {number} area
 * @return {number} radius
 * @return {number} diameter
 * @return {number} area
 */

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value < 0) {
            throw new Error('Radius must be non-negative');
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }

    set area(value) {
        this.radius = Math.sqrt(value / Math.PI);
    }
}

let c = new Circle(2);

console.log(`Radius: ${c.radius}`); // Radius: 2
console.log(`Diameter: ${c.diameter}`); // Diameter: 4
console.log(`Area: ${c.area}`); // Area: ~12.57

c.diameter = 1.6;

console.log(`Radius: ${c.radius}`); // Radius: 0.8
console.log(`Diameter: ${c.diameter}`); // Diameter: 1.6
console.log(`Area: ${c.area}`); // Area: ~2.01