/**
 * 11. View-Model
 * Write a class Textbox that holds an array of elements. The class should have a method value that returns the value of the elements as a string. It should also have the following functionality:
 * •	get elements() - returns the elements as an array
 * •	set value(value) - sets the value of all elements
 * •	onInput(event) - sets the value of all elements
 * The input will be an array of strings or elements.
 * The output should be an object from the class.
 * Submit the class definition as is, without wrapping it in any function.
 * Examples
 * Sample Input
 * let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
 * let inputs = document.getElementsByClassName('.textbox');
 * inputs.addEventListener('click',function(){console.log(textbox.value);});
 * 
 * @param {Array} input
 * @return {Array}
 */
class Textbox {
    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
        this._value = this._elements[0].value;
        this.onInput();
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for (let el of this._elements) {
            el.value = value;
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }

    onInput() {
        for (let el of this._elements) {
            el.addEventListener('input', (event) => {
                this.value = el.value;
            });
        }
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');
inputs.addEventListener('click',function(){console.log(textbox.value);});