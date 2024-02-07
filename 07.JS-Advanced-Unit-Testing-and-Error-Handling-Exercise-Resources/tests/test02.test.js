import{isOddOrEven} from "../2.EvenOrOdd.js";
import { expect } from "chai";
import { describe } from "mocha";

describe("isOddOrEven", function() {
    it("should return undefined with a number parameter", function() {
        expect(isOddOrEven(13)).to.equal(undefined);
    });

    it("should return undefined with an object parameter", function() {
        expect(isOddOrEven({name: "Pesho"})).to.equal(undefined);
    });

    it("should return even with an even length string", function() {
        expect(isOddOrEven("roar")).to.equal("even");
    });

    it("should return odd with an odd length string", function() {
        expect(isOddOrEven("Peter")).to.equal("odd");
    });

    it("should return correct values with multiple consecutive checks", function() {
        expect(isOddOrEven("cat")).to.equal("odd");
        expect(isOddOrEven("alabala")).to.equal("odd");
        expect(isOddOrEven("is it even")).to.equal("even");
    });
    
});
