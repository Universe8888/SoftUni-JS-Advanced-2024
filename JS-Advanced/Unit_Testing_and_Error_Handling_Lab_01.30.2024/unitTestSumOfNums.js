import { expect } from 'chai';
import sum from './4_Sum_of_Numbers.js'; 

describe('sum()', function () {
    it('should return the sum of positive numbers', function () {
        expect(sum([1, 2, 3, 4])).to.equal(10);
    });

    it('should return the sum of negative numbers', function () {
        expect(sum([-1, -2, -3, -4])).to.equal(-10);
    });

    it('should return the sum of positive and negative numbers', function () {
        expect(sum([-1, 2, -3, 4])).to.equal(2);
    });

    it('should return 0 for an array of zeros', function () {
        expect(sum([0, 0, 0, 0])).to.equal(0);
    });

    it('should return 0 for an empty array', function () {
        expect(sum([])).to.equal(0);
    });

    it('should correctly sum an array with non-numeric values', function () {
        expect(sum(['1', '2', '3', 4, true])).to.equal(10); 
    });
});
