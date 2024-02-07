import {mathEnforcer} from "../4.MathEnforcer.js";
import {assert} from "chai";
import {describe} from "mocha";

// //Your task is to test an object named mathEnforcer, which should have the following functionality: 
// •	addFive(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, add 5 to it, and return the result.
// •	subtractTen(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, subtract 10 from it, and return the result.
// •	sum(num1, num2) - A function that accepts two parameters:
// o	If any of the 2 parameters is NOT a number, the function should return undefined.
// o	If both parameters are numbers, the function should return their sum. 

describe("mathEnforcer", function() {
    it("should return undefined with a non-number parameter", function() {
        assert.equal(mathEnforcer.addFive("pesho"), undefined);
    });
    // Add more tests here and cover all other cases
    it("should return undefined with a non-number parameter", function() {
        assert.equal(mathEnforcer.subtractTen("pesho"), undefined);
    });

    it("should return undefined with a non-number parameter", function() {
        assert.equal(mathEnforcer.sum("pesho", 5), undefined);
    });

    it("should return undefined with a non-number parameter", function() {
        assert.equal(mathEnforcer.sum(5, "pesho"), undefined);
    });

    it("should return the correct result with a whole number parameter", function() {
        assert.equal(mathEnforcer.addFive(5), 10);
    });

    it("should return the correct result with a whole number parameter", function() {
        assert.equal(mathEnforcer.subtractTen(10), 0);
    });

    it("should return the correct result with two whole number parameters", function() {
        assert.equal(mathEnforcer.sum(5, 5), 10);
    });

    it("should return the correct result with two whole number parameters", function() {
        assert.equal(mathEnforcer.sum(-5, -5), -10);
    });

    it("should return the correct result with two whole number parameters", function() {
        assert.equal(mathEnforcer.sum(-5, 5), 0);
    });

    it("should return the correct result with two whole number parameters", function() {
        assert.equal(mathEnforcer.sum(5, -5), 0);
    });

    it("should return the correct result with a floating-point number parameter", function() {
        assert.closeTo(mathEnforcer.addFive(5.5), 10.5, 0.01);
    });

    it("should return the correct result with a floating-point number parameter", function() {
        assert.closeTo(mathEnforcer.subtractTen(10.5), 0.5, 0.01);
    });

    it("should return the correct result with two floating-point number parameters", function() {
        assert.closeTo(mathEnforcer.sum(5.5, 5.5), 11, 0.01);
    });

    it("should return the correct result with two floating-point number parameters", function() {
        assert.closeTo(mathEnforcer.sum(-5.5, -5.5), -11, 0.01);
    });

    it("should return the correct result with two floating-point number parameters", function() {
        assert.closeTo(mathEnforcer.sum(-5.5, 5.5), 0, 0.01);
    });
    
    it("should return the correct result with two floating-point number parameters", function() {
        assert.closeTo(mathEnforcer.sum(5.5, -5.5), 0, 0.01);
    });
    it("should return the correct result with a floating-point number parameter", function() {
        assert.equal(mathEnforcer.addFive(0), 5);
    });
    it("should return the correct result with a floating-point number parameter", function() {
        assert.equal(mathEnforcer.addFive(-0), 5);
    });
    it("should return the correct result with a floating-point number parameter", function() {
        assert.equal(mathEnforcer.addFive(0.0), 5);
    });
    it("should return the correct result with a floating-point number parameter", function() {
        assert.equal(mathEnforcer.addFive(-0.0), 5);
    });
    it("should return the correct result with a floating-point number parameter", function() {
        assert.equal(mathEnforcer.addFive(Infinity), Infinity);
    });
    it("should return the correct result with a floating-point number parameter", function() {
        assert.equal(mathEnforcer.addFive(-Infinity), Infinity);
    });
    it("should return the correct result with a floating-point number parameter", function() {
        assert.isNaN(mathEnforcer.addFive(NaN));
    });
    it("should return the correct result with a floating-point number parameter", function() {
        assert.equal(mathEnforcer.subtractTen(0), -10);
    });
  
    it("should return the correct result with a floating-point number parameter", function() {
        assert.equal(mathEnforcer.subtractTen(-0), -10);
    });
    //is there a missing test?
  


});