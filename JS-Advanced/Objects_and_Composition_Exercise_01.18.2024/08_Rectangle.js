/**
 * Creates a rectangle object with specified dimensions and color.
 * @param {number} width - Width of the rectangle.
 * @param {number} height - Height of the rectangle.
 * @param {string} color - Color of the rectangle.
 * @returns {Object} - Rectangle object with properties width, height, color, and a method calcArea.
 */

function rectangle(width, height, color) {
    return {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.height;
        }
    };
}


const rect = rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());