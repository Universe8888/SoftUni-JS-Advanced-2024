/**
 * 5. Length Limit
 * Write a class that has the following functionality:
 * •	The class should have a property innerString which holds the string value
 * •	The class should have a property innerLength which holds the length of the innerString
 * •	The class should have the following functionality:
 * o	increase(length) – increases the innerLength of the innerString with the given length
 * o	decrease(length) – decreases the innerLength of the innerString with the given length
 * o	toString() – if the innerLength is less than the length of the innerString, the output should be the first n length characters of the innerString followed by an ellipsis (...)
 * o	If the innerLength is 0, the output should be an ellipsis
 * o	If the innerLength is greater than or equal to the length of the innerString, the whole innerString should be returned
 * Input
 * The input will be an array of strings
 * Output
 * The output should be a string
 * Submit the class definition as is, without wrapping it in any function.
 * Examples
 * Sample Input	                                    Output
 * let test = new Stringer("Test", 5);
 * console.log(test.toString());                      Test
 * test.decrease(3);
 * console.log(test.toString());                      Te...
 * test.decrease(5);
 * console.log(test.toString());                      ...
 * test.increase(4);
 * console.log(test.toString());                      Test
 * 
 * @param {Array} input
 * @return {Array}
 */
class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = Math.max(0, this.innerLength - length);
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
        }
        return this.innerString;
    }

}


let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test