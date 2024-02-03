class Rectangle {
    constructor(width, height, color) {
        this._width = width;
        this._height = height;
        this._color = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value < 0) {
            throw new Error('Width must be a positive number.');
        }
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value < 0) {
            throw new Error('Height must be a positive number.');
        }
        this._height = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    calcArea() {
        return this._width * this._height;
    }
}


let rect = new Rectangle(4, 5, 'red');

console.log(rect.width); // 4

console.log(rect.height); // 5

console.log(rect.color); // Red

console.log(rect.calcArea()); // 20