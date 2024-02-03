/**
 * 07. Hex
 * Write a class that represents a Hexadecimal number. It has the following properties:
 * •	value - number, the value of the hexadecimal number
 * It should have the following functionality:
 * •	toString() - returns the value as a string
 * •	valueOf() - returns the value as a number
 * •	plus(number) - add a number or Hex object and return a new Hex object
 * •	minus(number) - subtract a number or Hex object and return a new Hex object
 * There should also be a parse class method that can parse Hexadecimal numbers and return new Hex objects.
 * The input will be a single number representing a hexadecimal number.
 * The output should be an object from the Hex class.
 * Examples
 * Sample Input	                                    Output
 * let FF = new Hex(255);
 * console.log(FF.toString());                         0XFF
 * let a = new Hex(10);
 * let b = new Hex(5);
 * console.log(a.plus(b).toString());                  0XF
 * console.log(a.plus(b).toString() === '0xF');        true
 * console.log(Hex.parse('AAA'));                      2730
 * 
 * @param {Array} input
 * @return {Array}
 */
class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        if (number instanceof Hex) {
            number = number.valueOf();
        }
        return new Hex(this.value + number);
    }

    minus(number) {
        if (number instanceof Hex) {
            number = number.valueOf();
        }
        return new Hex(this.value - number);
    }

    static parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString()); // 0XFF

let a = new Hex(10);
let b = new Hex(5);

console.log(a.plus(b).toString()); // 0XF
console.log(a.plus(b).toString() === '0xF'); // true

console.log(Hex.parse('AAA')); // 2730