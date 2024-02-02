import { assert } from 'chai';
import mathEnforcer from '../04_Math_Enforcer';

describe('mathEnforcer', function() {
    describe('addFive', function() {
        it('should return undefined if the parameter is not a number', function() {
            assert.isUndefined(mathEnforcer.addFive('5'));
        });

        it('should add 5 to the parameter if it is a number', function() {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.closeTo(mathEnforcer.addFive(5.5), 10.5, 0.01);
        });
    });

    describe('subtractTen', function() {
        it('should return undefined if the parameter is not a number', function() {
            assert.isUndefined(mathEnforcer.subtractTen('10'));
        });

        it('should subtract 10 from the parameter if it is a number', function() {
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(-10), -20);
            assert.closeTo(mathEnforcer.subtractTen(10.5), 0.5, 0.01);
        });
    });

    describe('sum', function() {
        it('should return undefined if any of the parameters is not a number', function() {
            assert.isUndefined(mathEnforcer.sum('5', 10));
            assert.isUndefined(mathEnforcer.sum(5, '10'));
            assert.isUndefined(mathEnforcer.sum('5', '10'));
        });

        it('should return the sum of the two parameters if they are numbers', function() {
            assert.equal(mathEnforcer.sum(5, 10), 15);
            assert.equal(mathEnforcer.sum(-5, -10), -15);
            assert.closeTo(mathEnforcer.sum(5.5, 10.5), 16, 0.01);
        });
    });
});