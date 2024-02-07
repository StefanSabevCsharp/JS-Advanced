import {lookupChar} from "../3.charLookup.js";
import {assert} from "chai";
import {describe} from "mocha";

describe("lookupChar", function() {
    it("should return undefined with a non-string first parameter", function() {
        assert.equal(lookupChar(13, 0), undefined);
    });

    it("should return undefined with a non-number second parameter", function() {
        assert.equal(lookupChar("pesho", "gosho"), undefined);
    });

    it("should return undefined with a floating point number second parameter", function() {
        assert.equal(lookupChar("pesho", 3.12), undefined);
    });

    it("should return 'Incorrect index' with an incorrect index value", function() {
        assert.equal(lookupChar("pesho", -1), "Incorrect index");
    });

    it("should return 'Incorrect index' with an incorrect index value", function() {
        assert.equal(lookupChar("pesho", 5), "Incorrect index");
    });

    it("should return the correct character for a correct index", function() {
        assert.equal(lookupChar("pesho", 0), "p");
    });

    it("should return the correct character for a correct index", function() {
        assert.equal(lookupChar("stamat", 3), "m");
    });
});