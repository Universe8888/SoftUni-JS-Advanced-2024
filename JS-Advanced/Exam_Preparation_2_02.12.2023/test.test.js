const expect = require('chai').expect;
const findNewApartment = require('./findApartment.js');

describe('findNewApartment Object Tests', () => {
  describe('isGoodLocation()', () => {
    it('should validate inputs correctly', () => {
      expect(() => findNewApartment.isGoodLocation(5, true)).to.throw('Invalid input!');
      expect(() => findNewApartment.isGoodLocation('Sofia', 'true')).to.throw('Invalid input!');
    });

    it('should return "This location is not suitable for you." for unsupported cities', () => {
      expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.');
    });

    it('should handle supported cities and public transportation availability', () => {
      const cities = ['Sofia', 'Plovdiv', 'Varna'];
      cities.forEach(city => {
        expect(findNewApartment.isGoodLocation(city, true)).to.equal('You can go on home tour!');
        expect(findNewApartment.isGoodLocation(city, false)).to.equal('There is no public transport in area.');
      });
    });
  });

  describe('isLargeEnough()', () => {
    it('should validate inputs correctly', () => {
      expect(() => findNewApartment.isLargeEnough('5', 100)).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough([100, 150, 200], '100')).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough([], 100)).to.throw('Invalid input!');
    });

    it('should filter apartments by minimalSquareMeters correctly', () => {
      expect(findNewApartment.isLargeEnough([100, 150, 200], 100)).to.equal('100, 150, 200');
      expect(findNewApartment.isLargeEnough([80, 90, 110], 100)).to.equal('110');
      expect(findNewApartment.isLargeEnough([80, 90, 95], 100)).to.equal('');
    });
  });

  describe('isItAffordable()', () => {
    it('should validate inputs correctly', () => {
      expect(() => findNewApartment.isItAffordable('5', 100)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(100, '100')).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(-100, 100)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(100, -100)).to.throw('Invalid input!');
    });

    it('should assess affordability correctly', () => {
      expect(findNewApartment.isItAffordable(100, 50)).to.equal("You don't have enough money for this house!");
      expect(findNewApartment.isItAffordable(100, 100)).to.equal("You can afford this home!");
      expect(findNewApartment.isItAffordable(100, 150)).to.equal("You can afford this home!");
    });
  });
});