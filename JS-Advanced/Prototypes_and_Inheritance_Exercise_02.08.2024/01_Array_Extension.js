/**
 * Array Extension
 * Extend the build-in Array object with additional functionality. Implement the following functionality:
 * •	last() - returns the last element of the array
 * •	skip(n) - returns a new array which includes all original elements, except the first n elements; n is a Number parameter
 * •	take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter
 * •	sum() - returns a sum of all array elements
 * •	average() - returns the average of all array elements
 * Input / Output
 * All function that you need to implement are attached to the Array prototype. No need to submit anything else.
 * 
 * Examples
 * let arr = [1, 2, 3, 4, 5];
 * console.log(arr.last()); // 5
 * console.log(arr.skip(2)); // [3, 4, 5]
 * console.log(arr.take(2)); // [1, 2]
 * console.log(arr.sum()); // 15
 * console.log(arr.average()); // 3
 */
(function() {
  Array.prototype.last = function() {
    return this[this.length - 1];
  };

  Array.prototype.skip = function(n) {
    return this.slice(n);
  };

  Array.prototype.take = function(n) {
    return this.slice(0, n);
  };

  Array.prototype.sum = function() {
    return this.reduce((acc, curr) => acc + curr, 0);
  };

  Array.prototype.average = function() {
    if (this.length === 0) {
      return 0;
    }
    return this.sum() / this.length;
  };
})();

//second solution

(function() {
  Array.prototype.last = function() {
    return this[this.length - 1];
  };

  Array.prototype.skip = function(n) {
    let result = [];
    for (let i = n; i < this.length; i++) {
      result.push(this[i]);
    }
    return result;
  };

  Array.prototype.take = function(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(this[i]);
    }
    return result;
  };

  Array.prototype.sum = function() {
    return this.reduce((acc, curr) => acc + curr, 0);
  };

  Array.prototype.average = function() {
    return this.sum() / this.length;
  };
})();