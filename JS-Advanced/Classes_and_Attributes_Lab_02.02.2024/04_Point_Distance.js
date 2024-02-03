/**
 * 4. Point Distance
 * Write a class Point, which represents a point in the 2D plane. It has the following properties:
 * •	x
 * •	y
 * It has the following methods:
 * •	static distance(a, b) - a and b are objects of type Point. This method should return the distance between the two points.
 * The distance between two points is given by the formula: √(x2 - x1)2 + (y2 - y1)2
 * Input
 * The distance method should receive two objects of type Point.
 * Output
 * The distance method should return a number.
 * Example
 * Sample Input	Output
 * let p1 = new Point(5, 5);
 * let p2 = new Point(9, 8);	5
 * @param {number} x
 * @param {number} y
 * @return {number} x
 * @return {number} y
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        return Math.hypot(p1.x - p2.x, p1.y - p2.y);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2)); // 5