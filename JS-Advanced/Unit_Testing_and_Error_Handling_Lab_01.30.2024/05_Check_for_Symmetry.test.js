const { expect } = require('chai');
const isSymmetric = require('./05_Check_for_Symmetry.mjs');

describe('isSymmetric', function() {
    it('should return true for a symmetric array with odd number of elements', function() {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });

    it('should return true for a symmetric array with even number of elements', function() {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('should return false for a non-symmetric array', function() {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('should return false for an array with different types', function() {
        expect(isSymmetric([1, '1'])).to.be.false;
    });

    it('should return false for any input that isn’t of the correct type', function() {
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric('text')).to.be.false;
        expect(isSymmetric(123)).to.be.false;
    });

    it('should return false for an empty array', function() {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return true for an array with all the same elements', function() {
        expect(isSymmetric([2, 2, 2, 2])).to.be.true;
    });

    it('should return false when there are nested arrays that are not symmetric', function() {
        expect(isSymmetric([1, [2, 3], [3, 2], 1])).to.be.false;
    });

    it('should return true when there are nested arrays that are symmetric', function() {
        expect(isSymmetric([1, [2, 3], [2, 3], 1])).to.be.true;
    });
});
