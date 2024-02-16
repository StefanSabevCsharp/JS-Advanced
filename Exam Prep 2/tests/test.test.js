
import { expect } from "chai";
import { findNewApartment } from "../findApartment.js";

describe("findNewApartment", function () {
    it("isGoodLocation should throw Error", function () {
        expect(() => findNewApartment.isGoodLocation(1, true)).to.throw("Invalid input!");
        expect(() => findNewApartment.isGoodLocation("Sofia", "true")).to.throw("Invalid input!");
        expect( () => findNewApartment.isGoodLocation("Sofia", true)).to.not.throw();
        expect( () => findNewApartment.isGoodLocation("Varna", true)).to.not.throw();
        expect( () => findNewApartment.isGoodLocation("Plovdiv", true)).to.not.throw();
        // expect( () => findNewApartment.isGoodLocation("as", true)).to.not.throw("This location is not suitable for you.");
        expect(findNewApartment.isGoodLocation("Varna",false)).to.equal("There is no public transport in area.");
        

    });
    //isgoodlocation should return correct result
    it("isGoodLocation should return correct result", function () {
        expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.");
    });
    it("isLargeEnough should throw Error", function () {
        expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw("Invalid input!");
        expect(() => findNewApartment.isLargeEnough([1, 2, 3], "1")).to.throw("Invalid input!");
        expect( () => findNewApartment.isLargeEnough([1, 2, 3], 1)).to.not.throw();
    });
  
    it("isGoodLocation should return correct result", function () {
        expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.");
        expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!");
        expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.");
    });
    it("isLargeEnough should return correct result", function () {
        expect(findNewApartment.isLargeEnough([1, 2, 3], 1)).to.equal("1, 2, 3");
        expect(findNewApartment.isLargeEnough([1, 2, 3], 2)).to.equal("2, 3");
        expect(findNewApartment.isLargeEnough([1, 2, 3], 3)).to.equal("3");
    });
    it("isItAffordable should throw Error", function () {
        expect(() => findNewApartment.isItAffordable(1, "1")).to.throw("Invalid input!");
        expect(() => findNewApartment.isItAffordable(1, 1)).to.not.throw();
    });
    it("isItAffordable should return correct result", function () {
        expect(findNewApartment.isItAffordable(1, 1)).to.equal("You can afford this home!");
        expect(findNewApartment.isItAffordable(1, 0)).to.equal("You don't have enough money for this house!");
    });
    

});