/**
 * 13. String Builder
 * Write a class for a string builder. The class should have
 * the following functionality:
 * •	constructor(defaultValue) - initializes the instance with a value (string)
 * or an empty string if no value is passed
 * •	append(string) - appends the given string to the instance’s value
 * •	prepend(string) - prepends the given string to the instance’s value
 * •	insertAt(string, index) - inserts the given string at the given index of
 * the instance’s value
 * •	remove(startIndex, length) - removes elements from the instance’s value,
 * starting at the given index (inclusive), the length of the elements is the
 * 3rd parameter
 * •	toString() - returns the value of the instance
 * Input
 * The input will be an array of strings or numbers
 * Output
 * The output should be printed on the console
 * Submit the class definition as is, without wrapping it in any function.
 * Examples
 * Sample Input	                                    Output
 * let str = new StringBuilder('hello');
 * str.append(', there');
 * str.prepend('User, ');
 * str.insertAt('woop', 5);
 * str.remove(6, 3);
 * console.log(str.toString());                        User,w hello, there
 * 
 * @param {Array} input
 * @return {Array}
 */
const StringBuilder = require('./StringBuilder');
const { expect } = require('chai');

describe('Tests for StringBuilder Class', () => {
    let instance;

    const createInstance = (value) => {
        return new StringBuilder(value);
    };

    const expectNotToThrow = (callback) => {
        expect(callback).not.to.throw();
    };

    const expectToThrow = (callback, error, errorMessage) => {
        expect(callback).to.throw(error, errorMessage);
    };

    describe('Constructor', () => {
        it('initializes correctly with a string', () => {
            expectNotToThrow(() => instance = createInstance('abc'));
            expect(instance.toString()).to.equal('abc');
        });

        it('initializes correctly without arguments', () => {
            expectNotToThrow(() => instance = createInstance());
            expect(instance.toString()).to.equal('');
        });

        it('throws for non-string inputs', () => {
            const nonStrings = [123, ['abc'], null];
            nonStrings.forEach(input => {
                expectToThrow(() => createInstance(input), TypeError, 'Argument must be a string');
            });
        });
    });

    describe('append Method', () => {
        beforeEach(() => {
            instance = createInstance('abc');
        });

        it('appends string as intended', () => {
            instance.append('123');
            expect(instance.toString()).to.equal('abc123');
        });

        it('throws for non-string input', () => {
            const nonStrings = [undefined, 123, null];
            nonStrings.forEach(input => {
                expectToThrow(() => instance.append(input), TypeError, 'Argument must be a string');
            });
        });
    });

    describe('prepend Method', () => {
        beforeEach(() => {
            instance = createInstance('abc');
        });

        it('prepends string as intended', () => {
            instance.prepend('123');
            expect(instance.toString()).to.equal('123abc');
        });

        it('throws for non-string input', () => {
            expectToThrow(() => instance.prepend(undefined), TypeError, 'Argument must be a string');
        });
    });

    describe('insertAt Method', () => {
        beforeEach(() => {
            instance = createInstance('abc');
        });

        it('inserts string at correct position', () => {
            instance.insertAt('123', 1);
            expect(instance.toString()).to.equal('a123bc');
            instance = createInstance('abc');
            instance.insertAt('123', -1);
            expect(instance.toString()).to.equal('ab123c');
        });

        it('throws for non-string input', () => {
            expectToThrow(() => instance.insertAt(123, 1), TypeError, 'Argument must be a string');
        });
    });

    describe('remove Method', () => {
        beforeEach(() => {
            instance = createInstance('abc');
        });

        it('removes characters as intended', () => {
            instance.remove(1, 1);
            expect(instance.toString()).to.equal('ac');
        });
    });

    describe('toString Method', () => {
        it('returns correct string representation', () => {
            instance = createInstance();
            const expected = '\n A \n\r B\t123   ';
            expected.split('').forEach(s => {
                instance.append(s);
                instance.prepend(s);
            });

            instance.insertAt('test', 4);
            instance.remove(2, 4);

            expect(instance.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
        });
    });
});