const chai = require('chai');
const expect = chai.expect;

describe("MotorcycleRider Object Tests", function() {
  
  describe("licenseRestriction method", function() {
    it("should return correct information for category AM", function() {
      const result = motorcycleRider.licenseRestriction("AM");
      expect(result).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
    });

    it("should return correct information for category A1", function() {
      const result = motorcycleRider.licenseRestriction("A1");
      expect(result).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
    });

    it("should return correct information for category A2", function() {
      const result = motorcycleRider.licenseRestriction("A2");
      expect(result).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
    });

    it("should return correct information for category A", function() {
      const result = motorcycleRider.licenseRestriction("A");
      expect(result).to.equal('No motorcycle restrictions, and the minimum age is 24.');
    });

    it("should throw an error for invalid category", function() {
      expect(() => motorcycleRider.licenseRestriction("B")).to.throw("Invalid Information!");
    });
  });

  describe("motorcycleShowroom method", function() {
    it("should return correct available motorcycles count", function() {
      const result = motorcycleRider.motorcycleShowroom(["125", "250", "600"], 250);
      expect(result).to.equal('There are 2 available motorcycles matching your criteria!');
    });

    it("should throw an error for invalid parameters", function() {
      expect(() => motorcycleRider.motorcycleShowroom("not an array", 250)).to.throw("Invalid Information!");
      expect(() => motorcycleRider.motorcycleShowroom(["125", "250"], "not a number")).to.throw("Invalid Information!");
      expect(() => motorcycleRider.motorcycleShowroom([], 250)).to.throw("Invalid Information!");
      expect(() => motorcycleRider.motorcycleShowroom(["125", "250"], 45)).to.throw("Invalid Information!");
    });
  });

  describe("otherSpendings method", function() {
    it("should calculate total price without discount correctly", function() {
      const result = motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false);
      expect(result).to.equal('You spend $600.00 for equipment and consumables!');
    });

    it("should calculate total price with discount correctly", function() {
      const result = motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true);
      expect(result).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
    });

    it("should throw an error for invalid parameters", function() {
      expect(() => motorcycleRider.otherSpendings("not an array", ["engine oil", "oil filter"], true)).to.throw("Invalid Information!");
      expect(() => motorcycleRider.otherSpendings(["helmet", "jacked"], "not an array", true)).to.throw("Invalid Information!");
      expect(() => motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], "not a boolean")).to.throw("Invalid Information!");
    });
  });

});