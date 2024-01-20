/**
 * Creates a sorted list with methods to add, remove, and get elements.
 * @returns {Object} - An object representing the sorted list with operations.
 */

function createSortedList() {
    let list = [];
    let size = 0;

    function add(element) {
        list.push(element);
        list.sort((a, b) => a - b);
        size = list.length;
    }

    function remove(index) {
        if (index >= 0 && index < list.length) {
            list.splice(index, 1);
            size = list.length;
        }
    }

    function get(index) {
        if (index >= 0 && index < list.length) {
            return list[index];
        }
    }

    return {
        add,
        remove,
        get,
        get size() {
            return size;
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); 
console.log(list.get(1));
list.remove(1); 
console.log(list.get(1));
