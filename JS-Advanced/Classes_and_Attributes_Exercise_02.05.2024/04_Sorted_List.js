/**
 * 4.	Sorted List
 * Create a class that maintains a sorted list of numbers. It should support adding, removing and getting the elements at a given index, it should also maintain the size of the list.
 * Input
 * The class will receive no input.
 * Output
 * The class should have the following functionality:
 * •	add(elemenent) - adds a new element to the collection
 * •	remove(index) - removes the element at position index
 * •	get(index) - returns the value of the element at position index
 * •	size - number of elements stored in the collection
 * The correct order of the elements must be kept at all times, regardless of which operation is called. Removing and retrieving elements shouldn't work if the provided index points outside the length of the collection (either throw an error or do nothing).
 * Submit the class definition as is, without wrapping it in any function.
 * Examples
 * Sample Input	                                    Output
 * let list = new List();
 * list.add(5);
 * list.add(6);
 * list.add(7);
 * console.log(list.get(1));                          6
 * list.remove(1);
 * console.log(list.get(1));                          7
 * 
 * @param {Array} input
 * @return {Array}
 */
class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size++;
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));
list.remove(1); 
console.log(list.get(1)); 

// 6
// 7