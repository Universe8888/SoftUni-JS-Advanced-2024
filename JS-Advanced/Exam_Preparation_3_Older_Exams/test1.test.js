const expect = require('chai').expect;
const onlineStore = require('./onlineStore');

describe('onlineStore', function () {
  describe('isProductAvailable', function () {
    it('should return a message if the product is out of stock', function () {
      expect(onlineStore.isProductAvailable('Laptop', 0)).to.equal('Sorry Laptop is currently out of stock.');
    });

    it('should return a message if the product is available', function () {
      expect(onlineStore.isProductAvailable('Laptop', 5)).to.equal('Great! Laptop is available for purchase.');
    });

    it('should throw an error for invalid input types', function () {
      expect(() => onlineStore.isProductAvailable(123, '5')).to.throw('Invalid input.');
    });
  });

  describe('canAffordProduct', function () {
    it('should return a message if the user cannot afford the product', function () {
      expect(onlineStore.canAffordProduct(500, 300)).to.equal("You don't have sufficient funds to buy this product.");
    });

    it('should return a success message and remaining balance if the user can afford the product', function () {
      expect(onlineStore.canAffordProduct(150, 300)).to.include('Product purchased. Your remaining balance is $');
    });

    it('should throw an error for invalid input types', function () {
      expect(() => onlineStore.canAffordProduct('300', true)).to.throw('Invalid input.');
    });
  });

  describe('getRecommendedProducts', function () {
    it('should return recommended products based on category', function () {
      const products = [{name: 'DSLR Camera', category: 'Photography'}, {name: 'Tripod', category: 'Photography'}];
      expect(onlineStore.getRecommendedProducts(products, 'Photography')).to.include('Recommended products in the Photography category:');
    });

    it('should return a message if there are no recommended products in the specified category', function () {
      const products = [{name: 'DSLR Camera', category: 'Photography'}, {name: 'Tripod', category: 'Photography'}];
      expect(onlineStore.getRecommendedProducts(products, 'Gaming')).to.equal('Sorry we currently have no recommended products in the Gaming category.');
    });

    it('should throw an error for invalid input types', function () {
      expect(() => onlineStore.getRecommendedProducts('products', 'Photography')).to.throw('Invalid input.');
    });
  });
});

//100/100