// Using Mocha and Chai write JS Unit Tests to test a variable named planYourTrip, which represents an object. You may use the following code as a template:
// describe("Tests …", function() {
//     describe("TODO …", function() {
//         it("TODO …", function() {
//             
//         });
//      });
//  
// });

// The object that should have the following functionality:				
// •	choosingDestination (destination, season, year) - A function that accepts three parameters: string, string, and number.
// 	If the year is different than 2024, throw an error: "Invalid Year!"
// 	If the value of the string destination is different from "Ski Resort", throw an error: 
// "This destination is not what you are looking for."
// 	To be picked, the destination must meet the following requirement:
// 	If the season is Winter, return the string: 
// "Great choice! The ${season} is the perfect time to visit the ${destination}."
// 	Otherwise, if the above condition in not met, return the following message:
// "Consider visiting during the Winter for the best experience at the ${destination}."
// 	There is no need for validation for the input, you will always be given two strings, and number.
// •	exploreOptions (activities, activityIndex) - A function that accepts an array and number. The activities array will store the different activities (["Skiing ", "Snowboarding ", "Winter Hiking "…]).
// 	You must remove an element (activity) from the array that is located on the index specified as a parameter.
// 	Finally, return the changed array of activities as a string, joined by a comma and a space.
// 	There is a need for validation for the input, an array and index may not always be valid. In case of submitted invalid parameters, throw an error "Invalid Information!":
// 	If passed activities parameter is not an array.
// 	If the activityIndex is not a number and is outside the limits of the array.
// 	If the activityIndex is not a integer number.
// •	estimateExpenses (distanceInKilometers, fuelCostPerLiter) - A function that accepts two parameters: number, number.
// 	You need to calculate the cost of the travel.
// 	The result must be formatted to the second digit after the decimal point.
//	If the total cost is less or equal to $500. return the following message: 
// "The trip is budget-friendly, estimated cost is $${totalCost}."
// 	Else, return the following message:  
// "The estimated cost for the trip is $${totalCost}, plan accordingly."
// 	You need to validate the input, if the distanceInKilometers   and fuelCostPerLiter are not numbers, or are negative numbers or zero, throw an error: "Invalid Information!".



import { expect } from 'chai';
import planYourTrip from './planYourTrip.js';

describe("planYourTrip", function() {
    describe("choosingDestination", function() {
        const validYear = 2024;
        const skiResort = "Ski Resort";
        const winter = "Winter";
        const summer = "Summer";

        it("throws an error for an invalid year", function() {
            expect(() => planYourTrip.choosingDestination(skiResort, winter, undefined)).to.throw("Invalid Year!");
        });

        it("throws an error for an invalid destination", function() {
            expect(() => planYourTrip.choosingDestination(undefined, winter, validYear)).to.throw("This destination is not what you are looking for.");
        });

        it("confirms a great choice for winter at a ski resort", function() {
            expect(planYourTrip.choosingDestination(skiResort, winter, validYear)).to.equal(`Great choice! The ${winter} is the perfect time to visit the ${skiResort}.`);
        });

        it("suggests visiting during winter for a non-winter season", function() {
            expect(planYourTrip.choosingDestination(skiResort, undefined, validYear)).to.equal(`Consider visiting during the Winter for the best experience at the ${skiResort}.`);
        });
    });

    describe("exploreOptions", function() {
        const activities = ["Skiing", "Snowboarding", "Winter Hiking"];

        it("throws an error for invalid activities", function() {
            expect(() => planYourTrip.exploreOptions(undefined, 1)).to.throw("Invalid Information!");
        });

        it("throws an error for an invalid index", function() {
            expect(() => planYourTrip.exploreOptions(activities, undefined)).to.throw("Invalid Information!");
        });

        it("removes an activity from the list", function() {
            expect(planYourTrip.exploreOptions(activities, 1)).to.equal("Skiing, Winter Hiking");
        });
    });

    describe("estimateExpenses", function() {
        it("throws an error for invalid distance", function() {
            expect(() => planYourTrip.estimateExpenses(undefined, 4)).to.throw("Invalid Information!");
        });

        it("throws an error for invalid fuel cost", function() {
            expect(() => planYourTrip.estimateExpenses(100, undefined)).to.throw("Invalid Information!");
        });

        it("returns a budget-friendly message for low-cost trips", function() {
            expect(planYourTrip.estimateExpenses(100, 4)).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
        });

        it("returns a planning message for high-cost trips", function() {
            expect(planYourTrip.estimateExpenses(1000, 4)).to.equal("The estimated cost for the trip is $4000.00, plan accordingly.");
        });
    });
});


// 100 / 100