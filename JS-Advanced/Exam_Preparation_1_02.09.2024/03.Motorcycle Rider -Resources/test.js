let expect = require('chai').expect;
let motorcycleRider = require('./Motorcycle Rider');


describe('Motorcycle Rider', () => {
    it('licenseRestriction', () => {
        expect( motorcycleRider.licenseRestriction('AM') ).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        expect( motorcycleRider.licenseRestriction('A1') ).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        expect( motorcycleRider.licenseRestriction('A2') ).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        expect( motorcycleRider.licenseRestriction('A') ).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        expect(() => { motorcycleRider.licenseRestriction('Z') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.licenseRestriction(5) }).to.throw('Invalid Information!');  
    });

    it('motorcycleShowroom', () => {
        expect(() => { motorcycleRider.motorcycleShowroom('300', 350) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['300', '500'], 'fifty') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['300', '500'], '5') }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom([], 600) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['300'], -1) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.motorcycleShowroom(['300'], 49) }).to.throw('Invalid Information!');
        expect( motorcycleRider.motorcycleShowroom(['50'], 50)).to.equal('There are 1 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([300,250,400,550,"five", -6], 600)).to.equal('There are 4 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([300,40,20,50,"five", -6], 600)).to.equal('There are 2 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom(['300','250','400','550','fifty','-1000',], 600)).to.equal('There are 4 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([0], 600)).to.equal('There are 0 available motorcycles matching your criteria!');
    });

    it('otherSpendings', () => {
        expect(() => { motorcycleRider.otherSpendings(['helmet','jacked'],'oil filter', true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings('helmet',['oil filter'], true) }).to.throw('Invalid Information!');
        expect(() => { motorcycleRider.otherSpendings(['helmet','jacked'],'oil filter', true) }).to.throw('Invalid Information!');
        expect(motorcycleRider.otherSpendings(['helmet','jacked'],[], true)).to.equal('You spend $450.00 for equipment and consumables with 10% discount!'); 
        expect(motorcycleRider.otherSpendings(['helmet','jacked'],[], false)).to.equal('You spend $500.00 for equipment and consumables!'); 
        expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'], true)).to.equal('You spend $243.00 for equipment and consumables with 10% discount!'); 
        expect(motorcycleRider.otherSpendings([],['engine oil','oil filter'], false)).to.equal('You spend $100.00 for equipment and consumables!'); 
        expect(motorcycleRider.otherSpendings([],['engine oil','oil filter'], true)).to.equal('You spend $90.00 for equipment and consumables with 10% discount!'); 
  
    });

   
});
