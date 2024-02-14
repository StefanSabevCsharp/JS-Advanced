import {motorcycleRider} from "./Motorcycle Rider.js";
import { expect } from "chai";


describe("Motorcycle Rider", function () {
    describe("licenseRestriction", function () {
        it("should throw an error if the input is invalid", function () {
            expect(() => motorcycleRider.licenseRestriction(5)).to.throw("Invalid Information!")
        });
    });
    describe("licenseRestriction", function () {
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        });

    });
    describe("motorcycleShowroom tests" , () =>{

        it("happy path", function () {
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 250)).to.equal("There are 2 available motorcycles matching your criteria!")
        });
        it("happy path", function () {
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 600)).to.equal("There are 3 available motorcycles matching your criteria!")
        });
        it("happy path", function () {
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 125)).to.equal("There are 1 available motorcycles matching your criteria!")
        });
        it("should throw an error if the input is invalid", function () {
            expect(() => motorcycleRider.motorcycleShowroom("125", 250)).to.throw("Invalid Information!")
        });
        it("should throw an error if the input is invalid", function () {
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], "250")).to.throw("Invalid Information!")
        });
        it("should throw an error if the input is invalid", function () {
            expect(() => motorcycleRider.motorcycleShowroom([], 250)).to.throw("Invalid Information!")
        });
        it("should throw an error if the input is invalid", function () {
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], 49)).to.throw("Invalid Information!")
        });


    
    });
    describe("otherSpendings" , () => {
       

        it("should throw an error if the input is invalid", function () {
            expect(() => motorcycleRider.otherSpendings("helmet", ["engine oil", "oil filter"], true)).to.throw("Invalid information!")
        });
        it("should throw an error if the input is invalid", function () {
            expect(() => motorcycleRider.otherSpendings(["helmet", "jacked"], "engine oil", true)).to.throw("Invalid information!")
        });
        it("should throw an error if the input is invalid", function () {
            expect(() => motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], 5)).to.throw("Invalid information!")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false)).to.equal("You spend $600.00 for equipment and consumables!")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.otherSpendings(["helmet"], ["engine oil", "oil filter"], false)).to.equal("You spend $270.00 for equipment and consumables!")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.otherSpendings(["jacked"], ["engine oil", "oil filter"], false)).to.equal("You spend $370.00 for equipment and consumables!")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil"], false)).to.equal("You spend $570.00 for equipment and consumables!")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter"], false)).to.equal("You spend $530.00 for equipment and consumables!")
        });
        it("should return the correct message if the input is valid", function () {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false)).to.equal("You spend $600.00 for equipment and consumables!")
        });


    });

});


